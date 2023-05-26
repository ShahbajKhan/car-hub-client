import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

function ManageProductsTable() {
  // const [vehicles, setVehicles] = useState([])
  // useEffect(() => {
  //   fetch(`http://localhost:3000/all-vehicles`)
  //     .then((res) => res.json())
  //     .then((data) => setVehicles(data));
  // }, []);
  const vehicles = useLoaderData();
  console.log(vehicles);
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Make</th>
            <th>Model</th>
            <th>rent $</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {vehicles?.map((vehicle) => (
            <tr key={vehicle._id}>
              <td>{vehicle.make}</td>
              <td>{vehicle.model}</td>
              <td>{vehicle.rent}</td>
              <td>
                <Link to={`/vehicle/${vehicle?._id}`}>
                  <button className="btn btn-success">D</button>
                </Link>
                <button className="btn btn-warning">X</button>
                <Link to={`/update-vehicle/${vehicle?._id}`}>
                  <button className="btn btn-outline">U</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default ManageProductsTable;
