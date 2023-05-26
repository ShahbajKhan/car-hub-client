import Footer from "../../components/Shared/Footer";
import Navbar from "../../components/Shared/Navbar";
import UpdateProductForm from "./UpdateProductForm";

function UpdateProduct() {
  return (
    <div>
      <div className="max-w-6xl mx-auto">
        {/* Navbar starts */}
        <Navbar></Navbar>
        {/* Navbar ends */}
        {/* Page Heading */}
        <div className="text-center my-10">
          <p className="text-orange-500 font-bold">Update Vehicles</p>
          <h2 className="text-2xl font-bold">
            You can update any information of the vehicle here.
          </h2>
        </div>
        {/* Page Heading ends */}
        {/* Form goes here */}
        <UpdateProductForm></UpdateProductForm>

      </div>
      <Footer></Footer>
    </div>
  );
}
export default UpdateProduct;
