import React from "react";

const Spinner = () => {
    return (
        <div className="row vh-100 align-items-center">
            <div className="col text-center">
                <div className="spinner-border text-light" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
    );
};

export default Spinner;
