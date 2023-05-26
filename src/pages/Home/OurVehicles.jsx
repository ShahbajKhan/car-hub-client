import { useLoaderData } from "react-router-dom";
import SingleVehicleCard from "./SingleVehicleCard";

function OurVehicles() {
  // get all the vehicles using useLoaderData() hook of react-router-dom
  const vehicles = useLoaderData();

  return (
    <div className="my-10">
      {/* Our vehicles heading */}
      <div className="text-center mb-8">
        <p className="font-bold">Vehicle Models</p>
        <h1 className="text-3xl font-bold">
          Our <span className="text-orange-500">Vehicles</span>
        </h1>
      </div>
      {/* cards of all the available vehicles */}
      {/* Map the fetched array */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {vehicles?.map((vehicle) => (
          <SingleVehicleCard key={vehicle._id} vehicle={vehicle}></SingleVehicleCard>
        ))}
      </div>
    </div>
  );
}

export default OurVehicles;
