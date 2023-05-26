function AboutUs() {
  const style = {
    border: "none",
    height: "1px",

    color: "#333",
    backgroundColor: "#333",
  };
  return (
    <div className="hero min-h-max ">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="https://i.ibb.co/88wHRvC/about-Image.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <p className="text-lg font-semibold">About Company</p>
          <h1 className="text-xl font-bold">
            You start the engine <br />
            and your journey <br />
            begins{" "}
          </h1>
          <p className="py-6">
          At car-hub, we are passionate about providing exceptional car rental experiences tailored to your needs. With years of industry expertise, our dedicated team is committed to delivering top-notch service, ensuring your journey is smooth and memorable.
          </p>
          <hr style={style} />
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className=" flex flex-col gap-y-3">
              <h1>Car Types</h1>
              <div className="flex">
                <img
                  src="https://i.ibb.co/88wHRvC/about-Image.jpg"
                  alt=""
                  width="40"
                />
                <h1 className="text-3xl">15</h1>
              </div>
            </div>
            <div className=" flex flex-col gap-y-3">
              <h1>Rental Outlets</h1>
              <div className="flex">
                <img
                  src="https://i.ibb.co/88wHRvC/about-Image.jpg"
                  alt=""
                  width="40"
                />
                <h1 className="text-3xl">15</h1>
              </div>
            </div>
            <div className=" flex flex-col gap-y-3">
              <h1>Repair Shops</h1>
              <div className="flex">
                <img
                  src="https://i.ibb.co/88wHRvC/about-Image.jpg"
                  alt=""
                  width="50"
                />
                <h1 className="text-3xl">15</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutUs;
