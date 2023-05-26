import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

function ManageProductsTable() {
  // const [vehicles, setVehicles] = useState([])
  // useEffect(() => {
  //   fetch(`http://localhost:3000/all-vehicles`)
  //     .then((res) => res.json())
  //     .then((data) => setVehicles(data));
  // }, []);
  // [honda, toyota, tesla]
  // [honda, toyota]
  // get all the fetched data from loader
  const data = useLoaderData();
  const [vehicles, setVehicles] = useState(data);
  // Function for handling the deletion of a single vehicle
  function handleDeleteVehicle(vehicleId) {
    fetch(`http://localhost:3000/delete-by-id/${vehicleId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const otherVehicle = vehicles?.filter(
            (vehicle) => vehicle._id != vehicleId
          );
          setVehicles(otherVehicle);
        }
      });
  }
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
                <button
                  className="btn btn-warning"
                  onClick={() => handleDeleteVehicle(vehicle._id)}
                >
                  X
                </button>
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
