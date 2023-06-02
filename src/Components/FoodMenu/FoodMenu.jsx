import React from "react";
import "react-photo-view/dist/react-photo-view.css";
import FoodItem from "./FoodItem";
import { foodMenuData } from "../../Data/FoodItemData";

const FoodMenu = () => {


  return (
    <section>
      <div className="text-center mt-10">
        <h2 className="text-2xl font-mono text-purple-800 text-center font-semibold">
          Corporate Applications
        </h2>
        <h1 className="text-5xl my-5">Food Menu</h1>
        <p className="text-lg text-gray-500 font-semibold">
          Assertively myocardinate robust e-tailers for extensible human
          capital.
         
          dpropriately benchmark networks.
        </p>
      </div>
    

      <div className="grid col-start-3 grid-cols-2 gap-5 mx-auto my-10 w-10/12">
       
{
  foodMenuData.map((item)=><FoodItem key={item._id} item={item}></FoodItem>)
}
        
      </div>
    </section>
  );
};

export default FoodMenu;
