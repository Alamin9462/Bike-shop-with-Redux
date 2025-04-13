import { FieldValues, SubmitHandler } from 'react-hook-form';
import BSFrom from '../../../components/form/BSForm';
import BSInput from '../../../components/form/BSInput';
import { Button, Col, Flex } from 'antd';
import { zodResolver } from '@hookform/resolvers/zod';
import { bikeSchema } from '../../../schemas/bikeSchema';

const AddNewBike = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  return (
    <Flex justify="center">
      <Col span={6}>
        <BSFrom onSubmit={onSubmit} resolver={zodResolver(bikeSchema)}>
          <BSInput type="text" name="name" label="Name"></BSInput>
          <BSInput type="text" name="brand" label="Brand"></BSInput>
          <BSInput type="text" name="price" label="Price"></BSInput>
          <BSInput type="text" name="stock" label="Stock"></BSInput>
          <Button htmlType="submit">Submit</Button>
        </BSFrom>
      </Col>
    </Flex>
  );
};

export default AddNewBike;
