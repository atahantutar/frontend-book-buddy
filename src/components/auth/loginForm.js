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
      Login(formData);
      navigate("/");
    } catch (error) {
      //toast message
      return error;
    }
  };
  return (
    <section class="p-3 p-md-4 p-xl-5">
      <div class="container">
        <div class="card border-light-subtle shadow-sm">
          <div class="row g-0">
            <div class="col-12 col-md-6 text-bg-primary">
              <div class="d-flex align-items-center justify-content-center h-100">
                <div class="col-10 col-xl-8 py-3">
                  <img
                    class="img-fluid rounded mb-4"
                    loading="lazy"
                    src="./assets/img/bsb-logo-light.svg"
                    width="245"
                    height="80"
                    alt="BootstrapBrain Logo"
                  />
                  <hr class="border-primary-subtle mb-4" />
                  <h2 class="h1 mb-4">
                    We make digital products that drive you to stand out.
                  </h2>
                  <p class="lead m-0">
                    We write words, take photos, make videos, and interact with
                    artificial intelligence.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="card-body p-3 p-md-4 p-xl-5">
                <div class="row">
                  <div class="col-12">
                    <div class="mb-5">
                      <h3>Register</h3>
                    </div>
                  </div>
                </div>
                <form action="#!">
                  <div class="row gy-3 gy-md-4 overflow-hidden">
                    <div class="col-12">
                      <label for="email" class="form-label">
                        Email <span class="text-danger">*</span>
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        name="email"
                        id="email"
                        placeholder="name@example.com"
                        required
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div class="col-12">
                      <label for="password" class="form-label">
                        Password <span class="text-danger">*</span>
                      </label>
                      <input
                        type="password"
                        class="form-control"
                        name="password"
                        id="password"
                        required
                        value={formData.password}
                        onChange={handleChange}
                      />
                    </div>

                    <div class="col-12">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          name="remember_me"
                          id="remember_me"
                        />
                        <label
                          class="form-check-label text-secondary"
                          for="remember_me"
                        >
                          Keep me logged in
                        </label>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="d-grid">
                        <button
                          class="btn bsb-btn-xl btn-primary"
                          type="submit"
                          onClick={handleSubmit}
                        ></button>
                      </div>
                    </div>
                  </div>
                </form>
                <div class="row">
                  <div class="col-12">
                    <hr class="mt-5 mb-4 border-secondary-subtle" />
                    <div class="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-end">
                      <Link className="link-secondary text-decoration-none">
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
