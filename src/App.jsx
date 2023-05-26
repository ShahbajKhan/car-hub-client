import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import ContactUs from "./pages/ContactUs/ContactUs";
import AddReview from "./pages/AddReview/AddReview";
import AddProduct from "./pages/AddProduct/AddProduct";
import ManageProducts from "./pages/ManageProducts/ManageProducts";
import VehicleDetails from "./pages/ProductDetails/VehicleDetails";
import UpdateProduct from "./pages/UpdateProduct/UpdateProduct";
import PostTeam from "./pages/PostTeam/PostTeam";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      loader: function () {
        return fetch(`http://localhost:3000/all-vehicles`);
      },
    },
    {
      path: "/contact-us",
      element: <ContactUs />,
    },
    {
      path: "/manage-products",
      element: <ManageProducts />,
      loader: function () {
        return fetch(`http://localhost:3000/all-vehicles`);
      },
    },
    {
      path: "/add-product",
      element: <AddProduct />,
    },
    
    {
      path: "/add-review",
      element: <AddReview />,
    },
    {
      path: "/vehicle/:id",
      element: <VehicleDetails></VehicleDetails>,
      loader: function({params}){
        
        return fetch(`http://localhost:3000/vehicle/${params.id}`)
      }
    },
    {
      path: "/update-vehicle/:id",
      element: <UpdateProduct></UpdateProduct>,
      loader: function({params}){
        return fetch(`http://localhost:3000/vehicle/${params.id}`);
      }
    },

    {
      path: "/add-teammate",
      element: <PostTeam />,
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
