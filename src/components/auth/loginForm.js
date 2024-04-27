import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Login } from "../../axios";

const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await Login(formData);

      localStorage.setItem("accessToken", response?.data?.accessToken);
      navigate("/");
    } catch (error) {
      //toast message
      return error;
    }
  };
  return (
    <section className="p-3 p-md-4 p-xl-5">
      <div className="container">
        <div className="card border-light-subtle shadow-sm">
          <div className="row g-0">
            <div className="col-12 col-md-6 text-bg-dark">
              <div className="d-flex align-items-center justify-content-center h-100">
                <div className="col-10 col-xl-8 py-3">
                  <div className="align-items-center justify-content-center d-flex">
                    <img
                      className="img-fluid rounded mb-4"
                      loading="lazy"
                      src="https://media.istockphoto.com/id/1178677764/vector/paper-cut-art-of-open-book-with-learning-education-and-explore-concept.jpg?s=612x612&w=0&k=20&c=BMX01C-gIgp1fnulRUnFzixxmJPplsVmNbP2ChhDORo="
                      width="%100"
                      height="%100"
                      alt=" Logo"
                    />
                  </div>
                  <hr className="border-dark-subtle mb-3" />
                  <h2 className="h3 mb-3">
                    BookBuddy: Your Ultimate Reading Companion.
                  </h2>
                  <p className="lead m-0">
                    BookBuddy is your ultimate reading companion. Discover new
                    books, track your progress, connect with other book lovers,
                    and get personalized recommendations. Join us today and
                    elevate your reading experience
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="card-body p-3 p-md-4 p-xl-5">
                <div className="row">
                  <div className="col-12">
                    <div className="mb-5">
                      <h3>Register</h3>
                    </div>
                  </div>
                </div>
                <form action="#!">
                  <div className="row gy-3 gy-md-4 overflow-hidden">
                    <div className="col-12">
                      <label for="email" className="form-label">
                        Email <span className="text-danger">*</span>
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="name@example.com"
                        required
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-12">
                      <label for="password" className="form-label">
                        Password <span className="text-danger">*</span>
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        id="password"
                        required
                        value={formData.password}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-12">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          name="remember_me"
                          id="remember_me"
                        />
                        <label
                          className="form-check-label text-secondary"
                          for="remember_me"
                        >
                          Keep me logged in
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="d-grid">
                        <button
                          className="btn bsb-btn-xl btn-dark"
                          type="submit"
                          onClick={handleSubmit}
                        >
                          Login
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                <div className="row">
                  <div className="col-12">
                    <hr className="mt-5 mb-4 border-secondary-subtle" />
                    <div className="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-end">
                      <Link
                        className="link-secondary text-decoration-none"
                        to={"/register"}
                      >
                        Create new account
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default LoginForm;
