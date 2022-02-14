import React from "react";
import Logo from "../Icons/Logo";

export default () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg p-3 navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <Logo />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a
                                    className="nav-link active"
                                    href="authors.html"
                                >
                                    Authors
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="posts.html">
                                    Posts
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="resiter.html">
                                    Register
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="login.html">
                                    Login
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};
