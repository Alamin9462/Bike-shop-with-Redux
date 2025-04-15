

const ViewAllProductTable = () => {
    return (
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Product</th>
        <th>Status</th>
        <th>Category</th>
        <th>Price</th>
        <th>Stock</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Hart Hagerty</div>
            </div>
          </div>
        </td>
        <td>
          Zemlak, Daniel and Leannon
        </td>
        <td>Purple</td>
        <th>
        <td>1500</td>
        </th>
        <th>
        <td>15</td>
        </th>
        <th>
          <td className="btn btn-ghost btn-xs">...</td>
        </th>
      </tr>
    </tbody>
    {/* foot */}
  </table>
</div>
    );
};

export default ViewAllProductTable;