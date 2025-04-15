import { Table, TableColumnsType, TableProps } from 'antd';
import { useGetAllBikesQuery } from '../../../redux/features/admin/bike.api';
import { TBike } from '../../../types/bike.type';

export type TTableData = Pick<
  TBike,
  'name' | 'brand' | 'price' | 'model' | 'stock'
>;

const AllBikes = () => {
  const {
    data: bikeData,
    isLoading,
    isFetching,
  } = useGetAllBikesQuery(undefined);

  console.log({ isLoading, isFetching });

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

  const columns: TableColumnsType<TTableData> = [
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

  const onChange: TableProps<TTableData>['onChange'] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  return (
    <Table<TTableData>
      loading={isFetching}
      columns={columns}
      dataSource={tableData}
      onChange={onChange}
      showSorterTooltip={{ target: 'sorter-icon' }}
    />
  );
};

export default AllBikes;
