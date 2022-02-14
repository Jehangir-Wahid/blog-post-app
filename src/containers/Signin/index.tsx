import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Logo from "../../components/Icons/Logo";
import { signIn } from "../../redux/action-creators/AuthActionCreators";
import { setIsLoading } from "../../redux/action-creators/GeneralActionCreators";
import { authorInitialState } from "../../redux/initial-states";
import { State } from "../../redux/reducers";

const Signin = () => {
    const [username, setUsername] = useState(authorInitialState.data.username);
    const [password, setPassword] = useState(authorInitialState.data.password);

    const isLoading = useSelector(
        (state: State) => state.generalReducer.isLoading
    );

    const message = useSelector((state: State) => state.generalReducer.message);

    const dispatch = useDispatch();

    const handleSubmit = async (
        event: React.SyntheticEvent<HTMLFormElement>
    ) => {
        event.preventDefault();
        await dispatch(setIsLoading(true));
        await dispatch(
            signIn({
                data: {
                    username,
                    password,
                },
            })
        );
    };

    return (
        <>
            <section className="vh-100 bg-dark">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-6 col-xl-5">
                            <div
                                className="card text-black"
                                style={{ borderRadius: "25px" }}
                            >
                                <div className="card-body p-md-2">
                                    <div className="row justify-content-center">
                                        <div className="col-md-12 col-lg-12 col-xl-12 order-2 order-lg-1">
                                            <Logo />
                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                                                Sign in
                                            </p>
                                            <form
                                                className="mx-1 mx-md-1"
                                                onSubmit={handleSubmit}
                                            >
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <label
                                                            className="form-label"
                                                            htmlFor="username"
                                                        >
                                                            Username
                                                        </label>
                                                        <input
                                                            type="email"
                                                            id="username"
                                                            className="form-control"
                                                            placeholder="name@example.com"
                                                            required={true}
                                                            onChange={(
                                                                event
                                                            ) => {
                                                                setUsername(
                                                                    event.target
                                                                        .value
                                                                );
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <label
                                                            className="form-label"
                                                            htmlFor="password"
                                                        >
                                                            Password
                                                        </label>
                                                        <input
                                                            type="password"
                                                            id="password"
                                                            className="form-control"
                                                            placeholder="Password"
                                                            required={true}
                                                            onChange={(
                                                                event
                                                            ) => {
                                                                setPassword(
                                                                    event.target
                                                                        .value
                                                                );
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-center mb-5">
                                                    <div>
                                                        Don't have an account?
                                                        <NavLink
                                                            className="text-decoration-none"
                                                            to="/signup"
                                                        >
                                                            &nbsp;Sign up&nbsp;
                                                        </NavLink>
                                                        here.
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <input
                                                        type="submit"
                                                        className="btn btn-primary btn-lg"
                                                        value="Sign in"
                                                    />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Signin;
