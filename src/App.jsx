import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import ContactUs from "./pages/ContactUs/ContactUs";
import AddReview from "./pages/AddReview/AddReview";
import AddProduct from "./pages/AddProduct/AddProduct";
import ManageProducts from "./pages/ManageProducts/ManageProducts";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
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
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
