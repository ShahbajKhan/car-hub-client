import { useEffect, useState } from "react";

function Teammates() {
  const [teammamtes, setTeammates] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/all-teammates`)
      .then((res) => res.json())
      .then((data) => setTeammates(data));
  }, []);
  return (
    <div className="my-10">
      <div className="text-center mt-10">
        <p className="text-orange-500 font-bold">Meet Our Team</p>
        <h2 className="text-2xl font-bold">Read what our team says.</h2>
      </div>
      {/* Heading ends */}
      {/* Show all the team mates */}
      <div className="grid grid-cols-1 gap-5">
        {teammamtes.map((teammate) => (
          <div key={teammate?._id} className="card lg:card-side bg-base-100 shadow-xl">
            <figure className="md:w-1/2">
              <img
                src={teammate.photo}
              />
            </figure>
            <div className="card-body md:w-1/2">
              <h2 className="card-title font-bold">{teammate?.fullName}</h2>
              <p className="text-sm">{teammate?.position}</p>
              <p>{teammate?.message}</p>
              
              <div className="card-actions justify-end">
                <button className="btn btn-outline btn-sm">{teammate?.email}</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Teammates;
