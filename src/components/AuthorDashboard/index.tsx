import React from "react";

const AuthorDashboard = () => {
    return (
        <div className="col-md-6">
            <h5>Welcome Username!</h5>
            <div className="row mb-4">
                <div className="col-md-4 m-4 border text-center p-5">
                    <h1>5</h1>
                    <h5>Total Posts</h5>
                </div>
                <div className="col-md-4 m-4 border text-center p-5">
                    <h1>5</h1>
                    <h5>Total Liked</h5>
                </div>
            </div>

            <h4 className="bg-light p-2">Popular Posts</h4>

            <table className="table table-responsive">
                <thead>
                    <tr>
                        <th>S.NO</th>
                        <th>Title</th>
                        <th>Total Likes</th>
                        <th>Created On</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Amazing Kids wear</td>
                        <td>A5</td>
                        <td>22/02/2022</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default AuthorDashboard;
