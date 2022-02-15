import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import DashboardNav from "../../../components/DashboardNav";
import Logo from "../../../components/Icons/Logo";
import {
    signIn,
    signOut,
    updatePassword,
} from "../../../redux/action-creators/AuthActionCreators";
import { setIsLoading } from "../../../redux/action-creators/GeneralActionCreators";
import { authorInitialState } from "../../../redux/initial-states";
import { State } from "../../../redux/reducers";

const UpdatePassword = () => {
    const [password, setPassword] = useState(authorInitialState.data.password);
    const [confirm_password, setConfirmPassword] = useState(
        authorInitialState.data.password
    );

    const isLoading = useSelector(
        (state: State) => state.generalReducer.isLoading
    );

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handleSubmit = async (
        event: React.SyntheticEvent<HTMLFormElement>
    ) => {
        event.preventDefault();
        if (confirm_password != password) {
            await dispatch(setIsLoading(true));
            await dispatch(updatePassword(password));

            await dispatch(signOut());
            navigate("/signin");
        }
    };

    return (
        <>
            <h1 className="mt-4 mb-4">Dashboard</h1>

            <div className="row">
                {/* <!-- left menu area --> */}
                <DashboardNav />
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
                                        Change Password
                                    </p>
                                    <form
                                        className="mx-1 mx-md-1"
                                        onSubmit={handleSubmit}
                                    >
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
                                                    onChange={(event) => {
                                                        setPassword(
                                                            event.target.value
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
                                                    htmlFor="confirmPassword"
                                                >
                                                    Confirm password
                                                </label>
                                                <input
                                                    type="password"
                                                    id="confirmPassword"
                                                    className="form-control"
                                                    placeholder="Password"
                                                    required={true}
                                                    onChange={(event) => {
                                                        setConfirmPassword(
                                                            event.target.value
                                                        );
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                            <input
                                                type="submit"
                                                className="btn btn-primary btn-lg"
                                                value="Sign in"
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
                <div className="col-md-3"></div>
            </div>
        </>
    );
};

export default UpdatePassword;
