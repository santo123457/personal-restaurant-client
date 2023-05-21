import React, { useContext, useState } from "react";
import "./LogIn.css";
import Header from "../Header/Header";
import { FaFacebookSquare, FaGithub, FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthContext/AuthProvider";
import { toast } from "react-hot-toast";
const LogIn = () => {
  const { googleLoginProvider,logIn,setLoading } = useContext(AuthContext);
  const [error, setError] = useState("");

  // to redirect to another page after authentication;
  const navigate = useNavigate();
  const  location  = useLocation();
  const from = location.state?.from?.pathname || "/";

  // email, pass logIn

  const handleLogIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    logIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError("");
        if (user.emailVerified) {
            navigate( from, {replace : true});
        }
        else{
            toast.error('Please Verify Your Email First.')
        }
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      })
      .finally(()=>{
        setLoading(false);
      })
  };

    // google LogIn

  const handleGoogleLogin = () => {
    googleLoginProvider()
      .then((result) => {
        const user = result.user;
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <Header></Header>
      <section className="myform-area">
        <div className="w-11/12 flex justify-center">
          <div className="">
            <div className="">
              <div className="form-area login-form">
                <div className="form-content">
                  <h2 className="text-3xl mb-5">Login</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nulla non aperiam cum quas quod reprehenderit.
                  </p>
                  <ul className="lg:flex grid grid-cols-1">
                    <li>
                      <button
                        onClick={handleGoogleLogin}
                        className="google me-2"
                      >
                        <FcGoogle className="me-2 mt-1"></FcGoogle>Google
                      </button>
                    </li>
                    <li>
                      <button className="facebook me-2">
                        <FaFacebookSquare className="me-2 mt-1">
                          {" "}
                        </FaFacebookSquare>{" "}
                        facebook
                      </button>
                    </li>

                    <li>
                      <button className="twitter me-2">
                        <FaTwitter className="me-2 mt-1"></FaTwitter> twitter
                      </button>
                    </li>

                    <li>
                      <button className="github">
                        <FaGithub className="me-2 mt-1"></FaGithub> Github
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="form-input">
                  <h2 className="text-3xl">Login Form</h2>


                  <form onSubmit={handleLogIn}>
                    <div className="form-group">
                      <input type="email"  name="email" required />
                      <label>Email</label>
                    </div>
                    <div className="form-group">
                      <input type="password"  name="password" required />
                      <label>password</label>
                    </div>
                    <div>
                      <p className="text-red-700 mb-3">{error}</p>
                    </div>
                    <div className="myform-button mb-3">
                      <button className="myform-btn " type="submit">Login</button>
                    </div>
                  </form>
                  <small className="ps-5 ">
                    Don't have an Account,
                    <Link className="text-purple-800" to="/register">
                      Register Now
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

export default LogIn;
