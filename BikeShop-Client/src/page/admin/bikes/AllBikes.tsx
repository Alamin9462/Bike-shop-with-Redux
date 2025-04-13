import { useGetAllBikesQuery } from '../../../redux/features/admin/bike.api';

const AllBikes = () => {
  const { data } = useGetAllBikesQuery(undefined);

  console.log(data);

  return (
    <div>
      <h1>This is AllBikes component</h1>
    </div>
  );
};

export default AllBikes;
