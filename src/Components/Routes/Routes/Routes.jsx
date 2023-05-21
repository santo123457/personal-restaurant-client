import { createBrowserRouter } from "react-router-dom";
import MainPage from "../../../Layout/MainPage";
import Home from "../../Home/Home";
import LogIn from "../../LogIn/LogIn";
import Register from "../../Register/Register";
import Services from "../../Services/Services";
import BookNow from "../../BookNow/BookNow";
import AddServices from "../../AddServices/AddServices";
import ReviewUs from "../../ReviewUs/ReviewUs";
import AllReviews from "../../AllReviews/AllReviews";
import ReviewNow from "../../ReviewNow/ReviewNow";

export const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainPage></MainPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: ()=>{
            return fetch('http://localhost:5000/services')
          }
        },
        {
          path : "/services",
          element : <Services></Services>,
          loader: ()=>{
            return fetch('http://localhost:5000/services')
          }
        },
        {
          path : "/add-services",
          element : <AddServices></AddServices>
        },
        {
          path : "/review-us",
          element : <ReviewUs></ReviewUs>
        },
        {
          path : "/review",
          element : <ReviewNow></ReviewNow>
        },
        {
          path : "/all-reviews",
          element : <AllReviews></AllReviews>
        },
        {
          path : "/book-now",
          element : <BookNow></BookNow>
        },
        {
          path : "/add-services",
          element : <AddServices></AddServices>
        },
       
      ],
    },
    {
      path: "/login",
      element: <LogIn></LogIn>,
    },
    {
      path: "/register",
      element: <Register></Register>,
    },
  ]);