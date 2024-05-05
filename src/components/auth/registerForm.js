import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Register } from "../../axios";
import toast, { Toaster } from "react-hot-toast";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    address: "",
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
      await Register(formData);
      toast.success("Registration Successful", {
        duration: 100,
      });
      setTimeout(() => {
        navigate("/login");
      }, 100);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="container p-xl-3">
      <Toaster />
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
            <div className="card-body p-2 p-md-3 p-xl-4">
              <div className="row">
                <div className="col-12">
                  <div className="mb-3">
                    <h3>Register</h3>
                  </div>
                </div>
              </div>
              <form action="#!">
                <div className="row gx-2 gy-2 overflow-hidden">
                  <div className="col-md-6">
                    <label htmlFor="name" className="form-label">
                      Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="surname" className="form-label">
                      Surname <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="surname"
                      id="surname"
                      required
                      value={formData.surname}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-12">
                    <label htmlFor="email" className="form-label">
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
                    <label htmlFor="password" className="form-label">
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
                    <label htmlFor="retypePassword" className="form-label">
                      Retype Password <span className="text-danger">*</span>
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      name="retypePassword"
                      id="retypePassword"
                      required
                    />
                  </div>

                  <div className="col-12">
                    <label htmlFor="address" className="form-label">
                      Address <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="address"
                      id="address"
                      required
                      value={formData.address}
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
                        htmlFor="remember_me"
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
                        Register
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              <div className="row">
                <div className="col-12">
                  <hr className="mt-4 mb-3 border-secondary-subtle" />
                  <div className="d-flex gap-2 flex-column flex-md-row justify-content-md-end">
                    <Link
                      to="/login"
                      className="link-secondary text-decoration-none"
                    >
                      Already have an account? Login
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
