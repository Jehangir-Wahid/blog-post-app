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
import {
    setIsLoading,
    setMessage,
} from "../../../redux/action-creators/GeneralActionCreators";
import { authorInitialState } from "../../../redux/initial-states";
import { State } from "../../../redux/reducers";
import { MessageType } from "../../../redux/types";

const UpdatePassword = () => {
    const [currentPassword, setCurrentPassword] = useState(
        authorInitialState.data.password
    );
    const [newPassword, setNewPassword] = useState(
        authorInitialState.data.password
    );
    const [confirm_password, setConfirmPassword] = useState(
        authorInitialState.data.password
    );

    const isLoading = useSelector(
        (state: State) => state.generalReducer.isLoading
    );
    const message: MessageType = useSelector(
        (state: State) => state.generalReducer.message
    );

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handleSubmit = async (
        event: React.SyntheticEvent<HTMLFormElement>
    ) => {
        event.preventDefault();
        if (confirm_password != newPassword) {
            dispatch(
                setMessage({
                    text: "Confirm password missmatch",
                    level: "danger",
                })
            );
        } else {
            await dispatch(updatePassword({ currentPassword, newPassword }));

            await dispatch(signOut());
        }
    };

    return (
        <>
            <div className="row">
                {/* <!-- left menu area --> */}
                <DashboardNav />
                <div className="col-lg-6 col-xl-5">
                    <h4 className="bg-light p-3">Change Password</h4>

                    <div
                        className="card border-0 text-black"
                        style={{ borderRadius: "25px" }}
                    >
                        <div className="card-body p-md-2">
                            <div className="row justify-content-center">
                                <div className="col-md-12 col-lg-12 col-xl-12 order-2 order-lg-1">
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
                                                    Current Password
                                                </label>
                                                <input
                                                    type="password"
                                                    id="currentPassword"
                                                    className="form-control"
                                                    placeholder="Password"
                                                    required={true}
                                                    onChange={(event) => {
                                                        setCurrentPassword(
                                                            event.target.value
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
                                                    New Password
                                                </label>
                                                <input
                                                    type="password"
                                                    id="newPassword"
                                                    className="form-control"
                                                    placeholder="Password"
                                                    required={true}
                                                    onChange={(event) => {
                                                        setNewPassword(
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
                                        <div className="d-flex mx-4 mb-3 mb-lg-4">
                                            <input
                                                type="submit"
                                                className="btn btn-primary"
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
