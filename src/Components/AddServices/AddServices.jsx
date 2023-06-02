import React from "react";

const AddServices = () => {
  //     const { title, price, _id } = useLoaderData();
  //   const { user } = useContext(AuthContext);

  const handleAddService = (event) => {
    event.preventDefault();
    const form = event.target;
    const serviceName = form.serviceName.value;
    const imgUrl = form.imgUrl.value;
    const details = form.details.value;

    const service = {
      serviceName,
      imgUrl,
      details,
    };

    fetch("https://personal-restaurant-server.vercel.app/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("Order placed Successfully");
          form.reset();
        }
      })
      .catch((err) => console.error(err));
  };
  return (
    <div>
      <form onSubmit={handleAddService}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-4/5 mx-auto">
          <input
            type="text"
            name="serviceName"
            placeholder="Service Name"
            className="input input-bordered w-full "
          />
          <input
            type="text"
            name="imgUrl"
            placeholder="your service imgUrl"
            className="input input-bordered w-full "
          />
        </div>
        <div className="w-4/5 mx-auto">
          <textarea
            placeholder="details"
            name="details"
            className="textarea textarea-bordered textarea-lg my-5 w-full"
          ></textarea>
          <input
            type="submit"
            value="Add Now"
            className="btn btn-orange w-full"
          />
        </div>
      </form>
    </div>
  );
};

export default AddServices;
