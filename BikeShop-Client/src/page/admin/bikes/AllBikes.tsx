import { Table, TableColumnsType, TableProps } from 'antd';
import { useGetAllBikesQuery } from '../../../redux/features/admin/bike.api';

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const AllBikes = () => {
  const { data: bikeData } = useGetAllBikesQuery(undefined);

  const tableData = bikeData?.data?.map(
    ({ _id, name, brand, price, model, stock }) => ({
      _id,
      name,
      brand,
      price,
      model,
      stock,
    })
  );

  const columns: TableColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      showSorterTooltip: { target: 'full-header' },
      filters: [
        {
          text: 'Joe',
          value: 'Joe',
        },
        {
          text: 'Jim',
          value: 'Jim',
        },
        {
          text: 'Submenu',
          value: 'Submenu',
          children: [
            {
              text: 'Green',
              value: 'Green',
            },
            {
              text: 'Black',
              value: 'Black',
            },
          ],
        },
      ],
    },
    {
      title: 'Brand',
      dataIndex: 'brand',
    },
    {
      title: 'Price',
      dataIndex: 'price',
    },
    {
      title: 'Model',
      dataIndex: 'model',
    },
    {
      title: 'Stock',
      dataIndex: 'stock',
    },
  ];

  const onChange: TableProps<DataType>['onChange'] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  return (
    <Table<DataType>
      columns={columns}
      dataSource={tableData}
      onChange={onChange}
      showSorterTooltip={{ target: 'sorter-icon' }}
    />
  );
};

export default AllBikes;
