import React from "react";
import { NavLink } from "react-router-dom";
import PostForm from "../../components/PostForm";
import DashboardRoutes from "./DashboardRoutes";

const Dashboard = () => {
    const authorId = "";
    const leftNavigationMenu = [
        { text: "Dashboard", url: "dashboard", class: "active" },
        {
            text: "Created Posts",
            url: `dashboard/created-created-posts/${authorId}`,
            class: "",
        },
        {
            text: "Liked Posts",
            url: `dashboard/liked-posts/${authorId}`,
            class: "",
        },
        { text: "Create New Post", url: "dashboard/create-post", class: "" },
    ];
    return (
        <>
            <h1 className="mt-4 mb-4">Dashboard</h1>

            <div className="row">
                {/* <!-- left menu area --> */}
                <div className="col-md-3">
                    <div
                        className="d-flex flex-column flex-shrink-0 p-3 bg-light"
                        style={{ width: "280px" }}
                    >
                        <ul
                            className="nav nav-pills flex-column mb-auto"
                            id="leftNav"
                        >
                            {leftNavigationMenu.map((item, index) => {
                                return (
                                    <li key={index} className="nav-item">
                                        <NavLink
                                            className={({ isActive }) => {
                                                const linkClasses = `nav-link link-dark`;
                                                const activeClasses = `${linkClasses} active`;
                                                const inActiveClasses = `${linkClasses}`;
                                                return isActive
                                                    ? activeClasses
                                                    : inActiveClasses;
                                            }}
                                            to={`/${item.url}`}
                                        >
                                            {item.text}
                                        </NavLink>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
                {/* <!-- main content area, post --> */}

                <DashboardRoutes />

                {/* <!-- right content area --> */}
                <div className="col-md-3"></div>
            </div>
        </>
    );
};

export default Dashboard;
