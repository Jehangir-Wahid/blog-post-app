import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import DashboardNav from "../../components/DashboardNav";
import { getAuthor } from "../../redux/action-creators/AuthorActionCreators";
import { setIsLoading } from "../../redux/action-creators/GeneralActionCreators";
import { State } from "../../redux/reducers";
import { AuthorType } from "../../redux/types";
const Dashboard = () => {
    const authorId = localStorage.getItem("authorId");
    const author: AuthorType["data"] = useSelector(
        (state: State) => state.authorReducer.data
    );
    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            await dispatch(setIsLoading(true));
            await dispatch(getAuthor(authorId));
        })();
    }, []);

    return (
        <>
            <h1 className="mt-4 mb-4">Dashboard</h1>

            <div className="row">
                <DashboardNav />
                <div className="col-md-6">
                    <h5>Welcome {author.name}</h5>
                    <div className="row mb-4">
                        <div className="col-md-4 m-4 border text-center p-5">
                            <h1>{author.total_posts}</h1>
                            <h5>Total Posts</h5>
                        </div>
                        <div className="col-md-4 m-4 border text-center p-5">
                            <h1>{author.total_likes}</h1>
                            <h5>Total Liked</h5>
                        </div>
                    </div>

                    <h4 className="bg-light p-2">Popular Post</h4>

                    <table className="table table-responsive">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Likes</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <NavLink
                                        className="text-decoration-none"
                                        to={`/post-details/${author.popular_post_id}`}
                                    >
                                        {author.popular_post_name}
                                    </NavLink>
                                </td>
                                <td>{author.popular_post_likes}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col-md-3"></div>
            </div>
        </>
    );
};

export default Dashboard;
