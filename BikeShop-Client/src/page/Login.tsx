import { Button, Row } from 'antd';
import { FieldValues } from 'react-hook-form';
import { useLoginMutation } from '../redux/features/auth/authApi';
import { useAppDispatch } from '../redux/hooks';
import { setUser, TUser } from '../redux/features/auth/authSlice';
import { verifyToken } from '../utils/verifyToken';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import BSFrom from '../components/form/BSForm';
import BSInput from '../components/form/BSInput';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  // const { register, handleSubmit } = useForm({
  //   defaultValues: {
  //     email: 'user2@gmail.com',
  //     password: 'user2@123',
  //   },
  // });

  const defaultValues = {
    email: 'user2@gmail.com',
    password: 'user2@123',
  };

  const [login] = useLoginMutation();

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    const toastId = toast.loading('Logging in');

    try {
      const userInfo = {
        email: data.email,
        password: data.password,
      };
      const res = await login(userInfo).unwrap(); // send data to useLoginMutation
      const user = verifyToken(res.data.tokenGenarate) as TUser;
      dispatch(setUser({ user: user, token: res.data.tokenGenarate }));
      toast.success('Logged in', { id: toastId, duration: 2000 });
      navigate(`/${user.role}/dashboard`);
    } catch (error) {
      toast.error('Something went wrong', { id: toastId, duration: 2000 });
    }
  };

  return (
    <Row justify="center" align="middle" style={{ height: '100vh' }}>
      <BSFrom onSubmit={onSubmit} defaultValues={defaultValues}>
        <BSInput type="text" name="email" label="Email: " />
        <BSInput type="text" name="password" label="Password: " />
        <Button htmlType="submit">Login</Button>
      </BSFrom>
    </Row>
  );
};

export default Login;
