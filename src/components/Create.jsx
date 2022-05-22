import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
function Create() {
  let navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      standard: "",
      section: "",
    },
    onSubmit: async (values) => {
      try {
        axios.post(
          "https://61f0e50b072f86001749eedf.mockapi.io/postdata",
          values
        );
        navigate("/teacher");
        alert("data stored");
      } catch (error) {
        console.log(error, "errrrrrrrrrrr");
      }
    },
  });
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="d-flex justify-content-center">
            <h4 className="mt-5">Create Student</h4>
          </div>
          <div className="col-sm-12 mt-5">
            <form onSubmit={formik.handleSubmit}>
              <div className="row">
                <div className="col-sm-6">
                  <div className="name-container">
                    <label className="form-label">Student Name</label>
                    <input
                      className="form-control"
                      type="text"
                      name="name"
                      onChange={formik.handleChange}
                      value={formik.values.name}
                    ></input>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="standard-container">
                    <label className="form-label">Standard</label>
                    <input
                      className="form-control"
                      type="text"
                      name="standard"
                      onChange={formik.handleChange}
                      value={formik.values.standard}
                    ></input>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="section-container">
                    <label className="form-label">Section</label>
                    <input
                      className="form-control"
                      type="text"
                      name="section"
                      onChange={formik.handleChange}
                      value={formik.values.section}
                    ></input>
                  </div>
                </div>
                <div className="col-sm-6 create-back-submit d-flex justify-content-center">
                  <button
                    type="button"
                    onClick={() => {
                      navigate(-1);
                    }}
                    className="btn btn-danger m-1"
                  >
                    Back
                  </button>
                  <button type="submit" className="btn btn-primary m-1">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Create;
