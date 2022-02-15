import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import Posts from "../../components/PostComponents/Posts";
import { getAuthor } from "../../redux/action-creators/AuthorActionCreators";
import { setIsLoading } from "../../redux/action-creators/GeneralActionCreators";
import { getAuthorPosts } from "../../redux/action-creators/PostActionCreators";
import { State } from "../../redux/reducers";
import { AuthorType, PostsType } from "../../redux/types";

const AuthorPosts = () => {
    const { authorId } = useParams();
    const posts: PostsType = useSelector((state: State) => state.postsReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            if (posts.data.length <= 1) dispatch(setIsLoading(true));

            await dispatch(getAuthorPosts(authorId));
        })();
    }, []);

    return (
        <>
            <Posts data={posts.data} />
        </>
    );
};

export default AuthorPosts;
