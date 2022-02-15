import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsLoading } from "../../../redux/action-creators/GeneralActionCreators";
import { createPost } from "../../../redux/action-creators/PostActionCreators";
import { postInitialState } from "../../../redux/initial-states";
import { State } from "../../../redux/reducers";
import Logo from "../../Icons/Logo";

const PostForm = () => {
    const [title, setTitle] = useState(postInitialState.data.title);
    const [content, setContent] = useState(postInitialState.data.content);
    const [post_image, setPostImage] = useState<FileList | File | null>(
        postInitialState.data.post_image
    );
    const [tag, setTag] = useState(postInitialState.data.tag);

    const isLoading = useSelector(
        (state: State) => state.generalReducer.isLoading
    );
    const message = useSelector((state: State) => state.generalReducer.message);

    const dispatch = useDispatch();

    const handleSubmit = async (
        event: React.SyntheticEvent<HTMLFormElement>
    ) => {
        event.preventDefault();

        await dispatch(setIsLoading(true));
        await dispatch(
            createPost({
                data: {
                    title,
                    content,
                    post_image: "dfa871d6-6087-4513-97ad-5d4188445821.jpeg",
                    tag,
                },
            })
        );
    };

    return (
        <>
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
                                    Create Post
                                </p>
                                <form
                                    className="mx-1 mx-md-1"
                                    onSubmit={handleSubmit}
                                >
                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                        <div className="form-outline flex-fill mb-0">
                                            <label
                                                className="form-label"
                                                htmlFor="postTitle"
                                            >
                                                Post Title
                                            </label>
                                            <input
                                                type="text"
                                                id="postTitle"
                                                className="form-control"
                                                placeholder="Some Post"
                                                required={true}
                                                onChange={(event) => {
                                                    setTitle(
                                                        event.target.value
                                                    );
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                        <div className="form-outline flex-fill mb-0">
                                            <label
                                                className="form-label"
                                                htmlFor="postContent"
                                            >
                                                Content
                                            </label>
                                            <textarea
                                                id="postContent"
                                                className="form-control"
                                                placeholder="Some post content"
                                                required={true}
                                                onChange={(event) => {
                                                    setContent(
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
                                                htmlFor="avatar"
                                            >
                                                Image
                                            </label>
                                            <input
                                                type="file"
                                                id="avatar"
                                                className="form-control"
                                                required={true}
                                                onChange={(event) => {
                                                    setPostImage(
                                                        event.target.files![0]
                                                    );
                                                    console.log(
                                                        "Author Avatar: ",
                                                        post_image
                                                    );
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                        <div className="form-outline flex-fill mb-0">
                                            <label
                                                className="form-label"
                                                htmlFor="postTag"
                                            >
                                                Tag
                                            </label>
                                            <input
                                                type="text"
                                                id="postTag"
                                                className="form-control"
                                                placeholder="React JS"
                                                required={true}
                                                onChange={(event) => {
                                                    setTag(event.target.value);
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                        <input
                                            type="submit"
                                            className="btn btn-primary btn-lg"
                                            value="Create"
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
        </>
    );
};

export default PostForm;
