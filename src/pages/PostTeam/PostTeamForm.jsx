import { useNavigate } from "react-router-dom";

function PostTeamForm() {
const navigate = useNavigate();

  function handlePostTeammate(event) {
    event.preventDefault();
    const fullName = event.target.fullName.value;
    const position = event.target.position.value;
    const email = event.target.email.value;
    const photo = event.target.photo.value;
    const message = event.target.message.value;
    const teammate = {
      fullName,
      position,
      email,
      photo,
      message,
    };
    fetch(`http://localhost:3000/add-teammate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(teammate),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.insertedId){
            navigate(`/`)
        }
      });
  }
  return (
    <form onSubmit={handlePostTeammate} className="my-10 flex flex-col gap-y-5">
      <input
        type="text"
        placeholder="Teammate Name"
        name="fullName"
        className="input w-full input-bordered"
      />
      <input
        type="text"
        placeholder="Teammate Position"
        name="position"
        className="input w-full input-bordered"
      />
      <input
        type="text"
        placeholder="Teammate Email"
        name="email"
        className="input w-full input-bordered"
      />
      <input
        type="text"
        placeholder="Teammate image url"
        name="photo"
        className="input w-full input-bordered"
      />

      <textarea
        className="textarea textarea-bordered w-full"
        placeholder="About Teammate"
        name="message"
      ></textarea>
      <div className="flex justify-center">
        <input type="submit" className="btn btn-primary" />
      </div>
    </form>
  );
}

export default PostTeamForm;
