/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetOrdersQuery } from "../redux/features/orderAndPayment/OrderApi";
import { toast } from "sonner";

const ViewAllOrdersTable = () => {
  const { data, isLoading, isError } = useGetOrdersQuery(undefined);
  const orders = data?.data || [];

  const handleDelete = (id: string) => {
    if (window.confirm("Are you sure you want to delete this order?")) {
      // 🟥 Placeholder delete logic (replace with real mutation if available)
      console.log("Delete order:", id);
      toast.success("Order deleted (dummy logic)");
    }
  };

  if (isLoading) return <div className="text-center py-10">Loading...</div>;
  if (isError)
    return <div className="text-center text-red-500">Failed to load orders.</div>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">All Orders</h2>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Status</th>
              <th>Transaction</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order: any, index: number) => (
              <tr key={order._id || index}>
                
                <td>
                  {order.products?.map((p: any, i: number) => (
                    <div key={i}>{p?.name || "Product Name"}</div>
                  ))}
                </td>

                {/* 🧮 Quantity */}
                <td>{order.quantity}</td>

                {/* 💰 Total Price */}
                <td>${order.totalPrice}</td>

                {/* 🔁 Status */}
                <td>
                  <span
                    className={`badge ${
                      order.productStatus === "processing"
                        ? "bg-yellow-500 text-white"
                        : order.productStatus === "shipped"
                        ? "bg-blue-500 text-white"
                        : order.productStatus === "delivered"
                        ? "bg-green-500 text-white"
                        : "bg-gray-500 text-white"
                    }`}
                  >
                    {order.productStatus}
                  </span>
                </td>

                {/* 💳 Transaction */}
                <td>
                  <span
                    className={`badge ${
                      order.transaction?.transactionStatus === "Paid"
                        ? "bg-green-500 text-white"
                        : "bg-red-500 text-white"
                    }`}
                  >
                    {order.transaction?.transactionStatus || "N/A"}
                  </span>
                </td>

                {/* ⚙️ Action */}
                <td>
                  <div className="dropdown dropdown-end">
                    <button tabIndex={0} className="btn btn-ghost btn-xs">
                      ⋯
                    </button>
                    <ul
                      tabIndex={0}
                      className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-32"
                    >
                      <li>
                        <button onClick={() => alert("Edit not implemented")}>
                          Edit
                        </button>
                      </li>
                      <li>
                        <button
                          className="text-red-500"
                          onClick={() => handleDelete(order._id)}
                        >
                          Delete
                        </button>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewAllOrdersTable;
