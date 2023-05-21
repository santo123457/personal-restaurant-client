import Header from "../Header/Header";
import { FaFacebookSquare, FaGithub, FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthContext/AuthProvider";
import { useContext, useState } from "react";
// import { toast } from "react-hot-toast";

const Register = () => {
  const [error, setError] = useState("");
  const [accepted, setAccepted] = useState(false);
  const { createUser, updateUserProfile, verifyEmail } =
    useContext(AuthContext);

  const { googleLoginProvider } = useContext(AuthContext);
  const handleGoogleLogin = () => {
    googleLoginProvider()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;
    // this will send email and password to firebase with context hook;
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        form.reset();
        handleUpdateUserProfile(name, photoURL);
        // handleEmailVerification();
        // toast.success("please verify your email address");
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  // adding extra information into firebase
  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    updateUserProfile(profile)
      .then(() => {})
      .catch((error) => console.error(error));
  };

  // terms and policy are checked or not;
  const handleAccepted = (event) => {
    setAccepted(event.target.checked);
  };

  return (
    <div>
      <Header></Header>
      <section className="myform-area">
        <div className="w-11/12 flex justify-center">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="form-area login-form">
                <div className="form-content">
                  <h2 className="text-3xl mb-5">Register Now</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nulla non aperiam cum quas quod reprehenderit.
                  </p>
                  <ul className="flex">
                    <li onClick={handleGoogleLogin}>
                      <a href="#" className="google ">
                        <FcGoogle className="me-2 mt-1"></FcGoogle>Google
                      </a>
                    </li>
                    <li>
                      <a href="#" className="facebook">
                        <FaFacebookSquare className="me-2 mt-1">
                          {" "}
                        </FaFacebookSquare>{" "}
                        facebook
                      </a>
                    </li>
                    <li>
                      <a href="#" className="twitter">
                        <FaTwitter className="me-2 mt-1"></FaTwitter> twitter
                      </a>
                    </li>

                    <li>
                      <a href="#" className="github">
                        <FaGithub className="me-2 mt-1"></FaGithub> Github
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="form-input">
                  <h2 className="text-3xl">Register Form</h2>
                  <form onSubmit={handleRegister}>
                    <div className="form-group">
                      <input type="text" id="" name="name" required />
                      <label>User Name</label>
                    </div>
                    <div className="form-group">
                      <input type="email" id="" name="email" required />
                      <label>Email</label>
                    </div>
                    <div className="form-group">
                      <input type="text" id="" name="photoURL" required />
                      <label>photo Url</label>
                    </div>
                    <div className="form-group">
                      <input type="password" id="" name="password" required />
                      <label>password</label>
                    </div>

                    <div className=" flex justify-normal">
                      <label className="cursor-pointer label ">
                        <input
                          type="checkbox"
                          className="checkbox checkbox-primary "
                          onClick={handleAccepted}
                        />
                        <span className="label-text ms-2">
                          Accept <Link to="/terms" className="text-blue-700">terms and conditions</Link>
                        </span>
                      </label>
                    </div>

                    <div>
                      <p className="text-red-700 mb-3">{error}</p>
                    </div>

                    <div className="myform-button mb-3">
                      <button className="btn myform-btn normal-case" disabled={!accepted}>
                        LogIn
                      </button>
                    </div>
                  </form>
                  <small className="ps-5 ">
                    Already have an Account,
                    <Link to="/login" className="text-purple-800 ">
                      Log in
                    </Link>
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
