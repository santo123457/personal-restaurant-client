import React from 'react';

const BookNow = () => {
//     const { title, price, _id } = useLoaderData();
//   const { user } = useContext(AuthContext);

  const handlePlaceOrder = (event) => {
    event.preventDefault();
    // const form = event.target;
    // const name = `${form.firstName.value} ${form.lastName.value}`;
    // const email = user?.email || "unregistered";
    // const phone = form.phone.value;
    // const massage = form.massage.value;

    // const order = {
    //   service: _id,
    //   serviceName: title,
    //   price,
    //   customer: name,
    //   email,
    //   phone,
    //   massage,
    // };

    // fetch("http://localhost:5000/orders", {
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
            <form onSubmit={handlePlaceOrder}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-4/5 mx-auto">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="input input-bordered w-full "
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="input input-bordered w-full "
          />
          <input
            type="number"
            name="phone"
            placeholder="Your Phone"
            className="input input-bordered w-full "
          />
          <input
            type="email"
            name="email"
            placeholder="your Email"
            // defaultValue={user?.email}
            readOnly
            className="input input-bordered w-full "
          />
        </div>
        <div className="w-4/5 mx-auto">
          <textarea
            placeholder="Your Massage"
            name="massage"
            className="textarea textarea-bordered textarea-lg my-5 w-full"
          ></textarea>
          <input
            type="submit"
            value="Book Now"
            className="btn btn-orange w-full"
          />
        </div>
      </form>
        </div>
    );
};

export default BookNow;