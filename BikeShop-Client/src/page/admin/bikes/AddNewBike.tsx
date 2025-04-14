import { FieldValues, SubmitHandler } from 'react-hook-form';
import BSFrom from '../../../components/form/BSForm';
import BSInput from '../../../components/form/BSInput';
import { Button, Col, Flex } from 'antd';
import { zodResolver } from '@hookform/resolvers/zod';
import { bikeSchema } from '../../../schemas/bikeSchema';
import { useAddBikeMutation } from '../../../redux/features/admin/bike.api';
import { toast } from 'sonner';
import { TResponse } from '../../../types/global';

const AddNewBike = () => {
  const [addBike] = useAddBikeMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading('Creating...');

    const bikeData = {
      name: data.name,
      brand: data.brand,
      price: data.price,
      model: data.model,
      stock: data.stock,
    };

    try {
      const res = (await addBike(bikeData)) as TResponse;
      if (res.error) {
        toast.error(res.error.data.message, { id: toastId });
        console.log(res);
      } else {
        toast.success('Bike added', { id: toastId });
      }
    } catch (error) {
      toast.error('Something went wrong', { id: toastId });
    }
  };

  return (
    <Flex justify="center">
      <Col span={6}>
        <BSFrom onSubmit={onSubmit} resolver={zodResolver(bikeSchema)}>
          {/*resolver={zodResolver(bikeSchema)} */}
          <BSInput type="text" name="name" label="Name"></BSInput>
          <BSInput type="text" name="brand" label="Brand"></BSInput>
          <BSInput type="number" name="price" label="Price"></BSInput>
          <BSInput type="text" name="model" label="Model"></BSInput>
          <BSInput type="number" name="stock" label="Stock"></BSInput>
          <Button htmlType="submit">Submit</Button>
        </BSFrom>
      </Col>
    </Flex>
  );
};

export default AddNewBike;
