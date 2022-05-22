import axios from "axios";
import { useFormik } from "formik";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
function Edit() {
  const params = useParams();
  let navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      standard: "",
      section: "",
    },
    onSubmit: async (values) => {
      try {
        await axios.put(
          `https://61f0e50b072f86001749eedf.mockapi.io/postdata/${params.id}`,
          values
        );
        alert("data stored");
        navigate(-1);
      } catch (error) {
        console.log(error, "qwert edit");
      }
    },
  });
  const editdata = async () => {
    const fetchdata = await axios.put(
      `https://61f0e50b072f86001749eedf.mockapi.io/postdata/${params.id}`
    );
    // delete fetchdata.data.id;
    formik.setValues(fetchdata.data);
  };
  useEffect(() => {
    editdata();
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="d-flex justify-content-center">
            <h4 className="mt-5">Edit Student</h4>
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

export default Edit;
