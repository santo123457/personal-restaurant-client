import React from "react";

const ReviewUs = () => {
  //     const { title, price, _id } = useLoaderData();
  //   const { user } = useContext(AuthContext);

  const handleReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    // const email = user?.email || "unregistered";
    const email = form.email.value;
    const rateStar = form.rating.value;
    const massage = form.massage.value;
    console.log(name, email, massage, rateStar);
    // const order = {
    //   service: _id,
    //   serviceName: title,
    //   price,
    //   customer: name,
    //   email,
    //   phone,
    //   massage,
    // };

    // fetch("https://personal-restaurant-server.vercel.app/orders", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //     authorization: `Bearer ${localStorage.getItem("genius-token")}`,
    //   },
    //   body: JSON.stringify(order),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if (data.acknowledged) {
    //         alert('Order placed Successfully')
    //         form.reset();

    //     }
    //   })
    //   .catch((err) => console.error(err));
  };
  return (
    <div>
      <form onSubmit={handleReview}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-4/5 mx-auto">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="input input-bordered w-full "
          />
          <input
            type="email"
            name="email"
            placeholder="your Email"
            // defaultValue={user?.email}
            className="input input-bordered w-full "
          />
        </div>
        <div className="w-4/5 mx-auto">
          <textarea
            placeholder="Your Massage"
            name="massage"
            className="textarea textarea-bordered textarea-lg my-5 w-full"
          ></textarea>

          {/* Rating star option start */}
          <div className=" mb-5">
            <label htmlFor=" rating-2" className="block mb-2 ">
              Rate Us:
            </label>
            <div className="rating space-x-1">
              <input
                type="radio"
                name="rating"
                className="mask mask-star-2 bg-orange-400"
                value="1"
              />
              <input
                type="radio"
                name="rating"
                className="mask mask-star-2 bg-orange-400"
                value="2"
              />
              <input
                type="radio"
                name="rating"
                className="mask mask-star-2 bg-orange-400"
                value="3"
              />
              <input
                type="radio"
                name="rating"
                className="mask mask-star-2 bg-orange-400"
                value="4"
              />
              <input
                type="radio"
                name="rating"
                className="mask mask-star-2 bg-orange-400"
                value="5"
              />
            </div>
          </div>

          {/* Rating star option finished */}
          <input
            type="submit"
            value="Review"
            className="btn btn-orange w-full"
          />
        </div>
      </form>
    </div>
  );
};

export default ReviewUs;
