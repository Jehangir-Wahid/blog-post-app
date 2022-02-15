import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signOut } from "../../redux/action-creators/AuthActionCreators";

const DashboardNav = () => {
    const authorId = localStorage.getItem("authorId");
    const leftNavigationMenu = [
        { text: "Dashboard", url: "dashboard", class: "" },
        {
            text: "Created Posts",
            url: `dashboard/created-posts/${authorId}`,
        },
        {
            text: "Liked Posts",
            url: `dashboard/liked-posts/${authorId}`,
            class: "",
        },
        { text: "Create New Post", url: "dashboard/create-post", class: "" },
        {
            text: "Change Password",
            url: "dashboard/update-password",
            class: "",
        },
    ];
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = async () => {
        await dispatch(signOut());
        navigate("/");
    };

    return (
        <div className="col-md-3">
            <div
                className="d-flex flex-column flex-shrink-0 p-3 bg-light"
                style={{ width: "280px" }}
            >
                <ul className="nav nav-pills flex-column mb-auto" id="leftNav">
                    {leftNavigationMenu.map((item, index) => {
                        return (
                            <li key={index} className="nav-item">
                                <a
                                    href={`/${item.url}`}
                                    role="link"
                                    className={`nav-link link-dark ${item.class}`}
                                    onClick={(event) => {
                                        const selector = "#leftNav";
                                        const elems = Array.from(
                                            document.querySelectorAll(selector)
                                        );

                                        const target = event.currentTarget;

                                        if (
                                            !target ||
                                            !target.matches(selector)
                                        ) {
                                            return;
                                        }

                                        elems.forEach((elem) =>
                                            elem.classList.remove("active")
                                        );
                                        event.currentTarget.classList.add(
                                            "active"
                                        );
                                    }}
                                >
                                    {item.text}
                                </a>
                            </li>
                        );
                    })}
                    <li>
                        <div
                            role="button"
                            className="nav-link link-dark"
                            onClick={handleClick}
                        >
                            Sign out
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default DashboardNav;
