import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DashboardNav from "../../../components/DashboardNav";
import Posts from "../../../components/PostComponents/Posts";
import { setIsLoading } from "../../../redux/action-creators/GeneralActionCreators";
import { likedPosts } from "../../../redux/action-creators/PostActionCreators";
import { State } from "../../../redux/reducers";
import { PostsType } from "../../../redux/types";

const LikedPosts = () => {
    const authorId = localStorage.getItem("authorId");
    const posts: PostsType = useSelector((state: State) => state.postsReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            if (posts.data.length <= 1) dispatch(setIsLoading(true));

            await dispatch(likedPosts(authorId));
        })();
    }, []);

    return (
        <>
            <h1 className="mt-4 mb-4">Dashboard</h1>

            <div className="row">
                {/* <!-- left menu area --> */}
                <DashboardNav />
                <Posts data={posts.data} />
                <div className="col-md-3"></div>
            </div>
        </>
    );
};

export default LikedPosts;
