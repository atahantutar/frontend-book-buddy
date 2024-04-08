import React, { useState } from "react";
import { Link } from "react-router-dom";

const Auth = () => {
  const [signIn, setSignIn] = useState(true);
  const [authData, setAuthData] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    retypePassword: "",
    address: "",
  });

  const onChangeFunc = (event) => {
    setAuthData({ ...authData, [event.target.name]: event.target.value });
  };

  console.log("authData", authData);

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
                      <h3>{signIn ? "Sign In" : "Sign Up"}</h3>
                    </div>
                  </div>
                </div>
                <form action="#!">
                  <div class="row gy-3 gy-md-4 overflow-hidden">
                    {!signIn ? (
                      <div class="col-12">
                        <label for="name" class="form-label">
                          Name <span class="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          name="name"
                          id="name"
                          required
                          value={authData.name}
                          onChange={onChangeFunc}
                        />
                      </div>
                    ) : null}
                    {!signIn ? (
                      <div class="col-12">
                        <label for="name" class="form-label">
                          Surname <span class="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          name="surname"
                          id="surname"
                          required
                          value={authData.surname}
                          onChange={onChangeFunc}
                        />
                      </div>
                    ) : null}
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
                        value={authData.email}
                        onChange={onChangeFunc}
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
                        value={authData.password}
                        onChange={onChangeFunc}
                      />
                    </div>

                    <div class="col-12">
                      <label for="password" class="form-label">
                        Retype Password <span class="text-danger">*</span>
                      </label>
                      <input
                        type="password"
                        class="form-control"
                        name="retypePassword"
                        id="retypePassword"
                        value={authData.retypePassword}
                        onChange={onChangeFunc}
                        required
                      />
                    </div>

                    {!signIn ? (
                      <div class="col-12">
                        <label for="name" class="form-label">
                          Address <span class="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          name="address"
                          id="address"
                          value={authData.address}
                          onChange={onChangeFunc}
                        />
                      </div>
                    ) : null}
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
                        >
                          {signIn ? "Log in now" : "Sign Up"}
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                <div class="row">
                  <div class="col-12">
                    <hr class="mt-5 mb-4 border-secondary-subtle" />
                    <div class="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-end">
                      {signIn ? (
                        <Link
                          onClick={() => {
                            setSignIn(false);
                            setAuthData({
                              name: "",
                              surname: "",
                              email: "",
                              password: "",
                              retypePassword: "",
                              address: "",
                            });
                          }}
                          class="link-secondary text-decoration-none"
                        >
                          Create new account
                        </Link>
                      ) : (
                        <Link
                          onClick={() => {
                            setAuthData({
                              name: "",
                              surname: "",
                              email: "",
                              password: "",
                              retypePassword: "",
                              address: "",
                            });
                            setSignIn(true);
                          }}
                          class="link-secondary text-decoration-none"
                        >
                          Log in now
                        </Link>
                      )}
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

export default Auth;
