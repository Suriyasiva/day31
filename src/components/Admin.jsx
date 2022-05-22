import React from "react";
import { Link } from "react-router-dom";

function Admin() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="d-flex justify-content-center">
              <h1>React Admin Page</h1>
            </div>
            <div className="admin-card">
              <Link to="/teacher" className="teacher-button">
                Teacher
              </Link>
              <Link to="/student" className="student-button">
                Student
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin;
