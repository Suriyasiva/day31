import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Teacher() {
  const [data, setData] = useState([]);
  let fetchData = async () => {
    try {
      const data = await axios.get(
        "https://61f0e50b072f86001749eedf.mockapi.io/postdata"
      );
      console.log(data, "data");
      setData([...data.data]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  let deleteStudent = async (id) => {
    try {
      await axios.delete(
        `https://61f0e50b072f86001749eedf.mockapi.io/postdata/${id}`
      );
      fetchData();
      alert("data deleted");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="d-flex justify-content-end mt-5">
              <Link to="/create" className="student-create">
                Create
              </Link>
            </div>
            <div className="mt-5">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Roll NO</th>
                    <th scope="col">Student Name</th>
                    <th scope="col">Standard</th>
                    <th scope="col">Section</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((student) => {
                    return (
                      <tr>
                        <th scope="row">{student.id}</th>
                        <td>{student.name}</td>
                        <td>{student.standard}</td>
                        <td>{student.section}</td>
                        <td>
                          <Link
                            to={`/edit/${student.id}`}
                            className="btn btn-warning btn-sm m-1"
                          >
                            Edit
                          </Link>
                          <button
                            onClick={() => {
                              deleteStudent(student.id);
                            }}
                            className="btn btn-danger btn-sm m-1"
                          >
                            Delete
                          </button>
                        </td>
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

export default Teacher;
