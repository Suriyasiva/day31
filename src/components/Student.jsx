import React from "react";

function Student() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="student-Table">
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
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
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
