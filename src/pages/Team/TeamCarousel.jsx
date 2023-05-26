import { useLoaderData } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
function TeamCarousel() {
  const team = useLoaderData();
  console.log(team);
  return (
    <div>
      <Carousel autoPlay>
        {team?.map((singlePerson) => (
          <div
            key={singlePerson?._id}
            className="hero min-h-screen bg-base-200"
          >
            <div className="hero-content flex-col lg:flex-row">
              <img
                src="https://i.ibb.co/qsQLbXX/image.png"
                className="max-w-sm rounded-lg shadow-2xl"
              />
              <div>
                <h1 className="text-5xl font-bold">{singlePerson?.fullName}</h1>
                <p className="tex-sm font-bold">Role: {singlePerson?.position}</p>
                <p className="py-6">
                  {singlePerson?.message}
                </p>
                <button className="btn btn-primary">{singlePerson?.email}</button>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
export default TeamCarousel;
