import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Author from "../../components/AuthorComponents/Author";
import NoRecods from "../../components/LayoutComponents/NoRecords";
import { getAllAuthors } from "../../redux/action-creators/AuthorActionCreators";
import { setIsLoading } from "../../redux/action-creators/GeneralActionCreators";
import { State } from "../../redux/reducers";
import { AuthorsType } from "../../redux/types";

const Authors = () => {
    const authors: AuthorsType = useSelector(
        (state: State) => state.authorsReducer
    );
    const dispatch = useDispatch();

    useEffect(() => {
        if (!authors) {
            dispatch(setIsLoading(true));
        }

        dispatch(getAllAuthors());
    }, []);

    return (
        <>
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <h4 className="bg-light p-3">Author</h4>

                    {authors.data.length > 1 ? (
                        authors.data.map((author, index) => (
                            <Author key={index} data={author} />
                        ))
                    ) : (
                        <NoRecods />
                    )}
                </div>
                <div className="col-md-3"></div>
            </div>
        </>
    );
};

export default Authors;
