import { useLoaderData, useNavigate } from "react-router-dom";

function UpdateProductForm() {
  const vehicle = useLoaderData();

  const navigate = useNavigate();

  function handleUpdateVehicle(event) {
    event.preventDefault();
    // Capture form values
    const make = event.target.make.value;
    const model = event.target.model.value;
    const image = event.target.image.value;
    const rent = event.target.rent.value;
    const description = event.target.description.value;
    // Create a new object with the form values
    const updatedVehicle = {
      make: make,
      model: model,
      image: image,
      rent: rent,
      description: description,
    };
    // Now make a PUT request to the server form Updating this vehicle object.
    console.log(updatedVehicle);
    fetch(`http://localhost:3000/update-by-id/${vehicle?._id}`,{
        method:"PUT",
        headers:{
            "Content-type": "application/json"
        },
        body: JSON.stringify(updatedVehicle)
    })
    .then(res=> res.json())
    .then(data => {
        if(data.modifiedCount == 1){
            navigate(`/manage-products`)
        }
    })

  }
  return (
    <form
      onSubmit={handleUpdateVehicle}
      className="my-10 flex flex-col gap-y-5"
    >
      <input
        type="text"
        placeholder="Car Company/make"
        defaultValue={vehicle?.make}
        name="make"
        className="input w-full input-bordered"
      />
      <input
        type="text"
        placeholder="Car model"
        name="model"
        defaultValue={vehicle?.model}
        className="input w-full input-bordered"
      />
      <input
        type="text"
        placeholder="Car image"
        name="image"
        defaultValue={vehicle?.image}
        className="input w-full input-bordered"
      />
      <input
        type="text"
        placeholder="Car rent($ per hour)"
        name="rent"
        defaultValue={vehicle?.rent}
        className="input w-full input-bordered"
      />
      <textarea
        className="textarea textarea-bordered w-full"
        name="description"
        defaultValue={vehicle?.description}
        placeholder="Vehicle Description"
      ></textarea>
      <div className="flex justify-center">
        <input type="submit" className="btn btn-primary" />
      </div>
    </form>
  );
}

export default UpdateProductForm;
