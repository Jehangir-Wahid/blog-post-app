import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Logo from "../../components/Icons/Logo";
import { signUp } from "../../redux/action-creators/AuthActionCreators";
import {
    setIsLoading,
    setMessage,
} from "../../redux/action-creators/GeneralActionCreators";
import { authorInitialState } from "../../redux/initial-states";
import { State } from "../../redux/reducers";

const Signup = () => {
    const [username, setUsername] = useState(authorInitialState.data.username);
    const [name, setName] = useState(authorInitialState.data.name);
    const [author_avatar, setAuthorAvatar] = useState<FileList | File | null>(
        authorInitialState.data.author_avatar
    );
    const [password, setPassword] = useState(authorInitialState.data.password);
    const [repeat_password, setRepeatPassword] = useState(
        authorInitialState.data.password
    );
    const isLoading = useSelector(
        (state: State) => state.generalReducer.isLoading
    );

    const message = useSelector((state: State) => state.generalReducer.message);

    const dispatch = useDispatch();

    const handleSubmit = async (
        event: React.SyntheticEvent<HTMLFormElement>
    ) => {
        event.preventDefault();
        if (repeat_password != password) {
            dispatch(
                setMessage({ text: "Repeat password mismatch", level: "error" })
            );
            return false;
        }
        await dispatch(setIsLoading(true));
        await dispatch(
            signUp({
                data: {
                    username,
                    name,
                    author_avatar: "dfa871d6-6087-4513-97ad-5d4188445821.jpeg",
                    password,
                },
            })
        );
    };

    return (
        <>
            <div>
                <div>
                    {message && (
                        <div>
                            <div style={{ color: "white" }}>{message.text}</div>
                            <div style={{ color: "white" }}>
                                {message.level}
                            </div>
                        </div>
                    )}
                </div>
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
                                                    Sign up
                                                </p>
                                                <form
                                                    className="mx-1 mx-md-1"
                                                    onSubmit={handleSubmit}
                                                >
                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                        <div className="form-outline flex-fill mb-0">
                                                            <label
                                                                className="form-label"
                                                                htmlFor="fullName"
                                                            >
                                                                Your Name
                                                            </label>
                                                            <input
                                                                type="text"
                                                                id="fullName"
                                                                className="form-control"
                                                                placeholder="Full Name"
                                                                required={true}
                                                                onChange={(
                                                                    event
                                                                ) => {
                                                                    setName(
                                                                        event
                                                                            .target
                                                                            .value
                                                                    );
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
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
                                                                        event
                                                                            .target
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
                                                                htmlFor="avatar"
                                                            >
                                                                Avatar
                                                            </label>
                                                            <input
                                                                type="file"
                                                                id="avatar"
                                                                className="form-control"
                                                                required={true}
                                                                onChange={(
                                                                    event
                                                                ) => {
                                                                    setAuthorAvatar(
                                                                        event
                                                                            .target
                                                                            .files![0]
                                                                    );
                                                                    console.log(
                                                                        "Author Avatar: ",
                                                                        author_avatar
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
                                                                        event
                                                                            .target
                                                                            .value
                                                                    );
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                        <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                                        <div className="form-outline flex-fill mb-0">
                                                            <label
                                                                className="form-label"
                                                                htmlFor="repeatPassword"
                                                            >
                                                                Repeat your
                                                                password
                                                            </label>
                                                            <input
                                                                type="password"
                                                                id="repeatPassword"
                                                                className="form-control"
                                                                placeholder="Password"
                                                                required={true}
                                                                onChange={(
                                                                    event
                                                                ) => {
                                                                    setRepeatPassword(
                                                                        event
                                                                            .target
                                                                            .value
                                                                    );
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="d-flex justify-content-center mb-5">
                                                        <div>
                                                            Already have an
                                                            account?
                                                            <NavLink
                                                                className="text-decoration-none"
                                                                to="/signin"
                                                            >
                                                                &nbsp;Sign
                                                                in&nbsp;
                                                            </NavLink>
                                                            here.
                                                        </div>
                                                    </div>
                                                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                        <input
                                                            type="submit"
                                                            className="btn btn-primary btn-lg"
                                                            value="Register"
                                                        />
                                                        {isLoading ? (
                                                            <div
                                                                className="spinner-border text-warning"
                                                                role="status"
                                                            >
                                                                <span className="visually-hidden">
                                                                    Loading...
                                                                </span>
                                                            </div>
                                                        ) : null}
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
            </div>
        </>
    );
};

export default Signup;
