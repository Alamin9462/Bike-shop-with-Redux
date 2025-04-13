import { FieldValues, SubmitHandler } from 'react-hook-form';
import BSFrom from '../../../components/form/BSForm';
import BSInput from '../../../components/form/BSInput';
import { Button } from 'antd';

const AddNewBike = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  return (
    <BSFrom onSubmit={onSubmit}>
      <BSInput type="text" name="name"></BSInput>
      <Button htmlType="submit">Submit</Button>
    </BSFrom>
  );
};

export default AddNewBike;
