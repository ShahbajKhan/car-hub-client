function HomeBanner() {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col md:flex-row-reverse">
        <img
          src="https://i.ibb.co/Zg6BhNS/banner-car.png"
          className="md:w-1/2"
        />
        <div className="md:w-1/2">
          <p className="text-sm font-bold">Plan your trip now</p>
          <h1 className="text-5xl font-semibold">
            Save <span className="text-orange-500">Big</span> With Our Car Rental
          </h1>
          <p className="py-6">
          Welcome to our car-hub rental service, where convenience and reliability meet the open road. With a diverse fleet of vehicles and exceptional customer service, we are your go-to destination for hassle-free transportation solutions.
          </p>
          <button className="btn btn-warning">Book Now</button>
        </div>
      </div>
    </div>
  );
}
export default HomeBanner;
