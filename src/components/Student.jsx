import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Student() {
  let navigate = useNavigate();
  const [data, setData] = useState([]);
  let fetchData = async () => {
    try {
      const data = await axios.get(
        "https://61f0e50b072f86001749eedf.mockapi.io/postdata"
      );
      setData([...data.data]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="d-flex justify-content-end">
            <button
              className="btn btn-danger mt-5"
              onClick={() => {
                navigate("/");
              }}
            >
              Back
            </button>
          </div>
          <div className="col-sm-12">
            <div className="student-Table">
              <div className="d-flex justify-content-center m-3">
                <h4 className="">Students</h4>
              </div>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Roll NO</th>
                    <th scope="col">Student Name</th>
                    <th scope="col">Standard</th>
                    <th scope="col">Section</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((std) => {
                    return (
                      <tr>
                        <th scope="row">{std.id}</th>
                        <td>{std.name}</td>
                        <td>{std.standard}</td>
                        <td>{std.section}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Student;
