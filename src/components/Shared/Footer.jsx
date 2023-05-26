import { IoLocationSharp } from "react-icons/io5";
import { BsBagPlus, BsFacebook } from "react-icons/bs";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className=" bg-blue-600">
      <footer className="max-w-6xl mx-auto footer grid-cols-1 md:grid-cols-3 p-10  text-white">
        <div className="h-full flex items-center">
          <div className="flex items-center gap-1">
            {/* icon here */}
            <IoLocationSharp size={25}></IoLocationSharp>
            <p>IIUC, Kumira, Chattogram</p>
          </div>
        </div>
        <div>
          <span className="footer-title">Company</span>

          <Link to={`/contact-us`}>
            <span className="flex items-center gap-1">
              <IoLocationSharp size={15}></IoLocationSharp> Contact
            </span>
          </Link>
          <Link to={`/manage-products`}>
            <span className="flex items-center gap-1">
              <IoLocationSharp size={15}></IoLocationSharp> Manage Products
            </span>
          </Link>
          <Link to={`/add-product`}>
            <span className="flex items-center gap-1">
              <BsBagPlus size={15}></BsBagPlus> Add Product
            </span>
          </Link>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <p>
            Welcome to our car-hub rental service, where convenience and
            reliability meet the open road. With a diverse fleet of vehicles and
            exceptional customer service, we are your go-to destination for
            hassle-free transportation solutions.
          </p>
          <div className="flex justify-between">
            <BsFacebook size={15}></BsFacebook>
            <IoLocationSharp size={15}></IoLocationSharp>
            <IoLocationSharp size={15}></IoLocationSharp>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
