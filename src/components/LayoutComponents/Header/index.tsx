import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { signOut } from "../../../redux/action-creators/AuthActionCreators";
import Logo from "../../Icons/Logo";

export default () => {
    const token = localStorage.getItem("token");
    const authorName = localStorage.getItem("name");
    const author_avatar = localStorage.getItem("author_avatar");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const navigationMenu = [
        { text: "Posts", url: "", display: "block" },
        { text: "Authors", url: "authors", display: "block" },
    ];

    const registrationMenu = [
        { text: "Sign in", url: "signin", display: token ? "none" : "block" },
        { text: "Sign up", url: "signup", display: token ? "none" : "block" },
    ];

    const handleClick = async () => {
        await dispatch(signOut());
        navigate("/");
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg p-3 navbar-light bg-light mb-5">
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
                            {navigationMenu.map((item, index) => {
                                return (
                                    <li key={index} className={`nav-item`}>
                                        <NavLink
                                            className={({ isActive }) => {
                                                const linkClasses = `nav-link`;
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
                    <div className="navbar-text">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {registrationMenu.map((item, index) => {
                                return (
                                    <li
                                        key={index}
                                        className={`nav-item d-${item.display}`}
                                    >
                                        <NavLink
                                            className={({ isActive }) => {
                                                const linkClasses = `nav-link`;
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
                    {token && (
                        <div className="navbar-text">
                            <NavLink
                                to="/dashboard"
                                className="d-flex align-items-center link-dark text-decoration-none"
                            >
                                <img
                                    src={`${author_avatar}`}
                                    alt=""
                                    width="32"
                                    height="32"
                                    className="rounded-circle me-2"
                                />
                                <strong>Dashboard</strong>
                            </NavLink>
                        </div>
                    )}
                </div>
            </nav>
        </>
    );
};
