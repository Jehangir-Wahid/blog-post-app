import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Posts from "../../components/Posts";
import { setIsLoading } from "../../redux/action-creators/GeneralActionCreators";
import { getAuthorPosts } from "../../redux/action-creators/PostActionCreators";
import { State } from "../../redux/reducers";
import { PostsType } from "../../redux/types";

const AuthorPosts = () => {
    const { authorId } = useParams();
    const posts: PostsType = useSelector((state: State) => state.postsReducer);
    const dispatch = useDispatch();

    console.log(posts);
    useEffect(() => {
        (async () => {
            if (posts.data.length <= 1) dispatch(setIsLoading(true));

            await dispatch(getAuthorPosts(authorId));
        })();
    }, []);

    return (
        <>
            <h1 className="mt-4 mb-4">Author Posts</h1>

            <div className="row">
                <div className="col-md-3">
                    <div className="card">
                        <div className="card-body">
                            <img
                                src="images/img.png"
                                className="img-thumbnail"
                                alt=""
                            />
                        </div>
                        <div className="border p-2">Username</div>
                        <div className="border p-2">Total Posts: 5</div>
                    </div>
                </div>

                <Posts data={posts.data} />

                <div className="col-md-3"></div>
            </div>
        </>
    );
};

export default AuthorPosts;
