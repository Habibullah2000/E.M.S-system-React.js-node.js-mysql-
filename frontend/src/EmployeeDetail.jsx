import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EmployeeDetail = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8081/get/" + id)
      .then((res) => setEmployee(res.data.Result[0]))
      .catch((err) => console.log(err));
  });

  return (
    <div className="d-flex justify-content-center flex-column align-items-center mt-3 ">
      <img
        src={`http://localhost:8081/images/` + employee.image}
        alt=""
        className="empImg"
      />
      <div className="d-flex align-items-center flex-column mt-5">
        <h3>Name: {employee.name}</h3>
        <h3>Email: {employee.email}</h3>
        <h3>Salary: {employee.salary}</h3>
      </div>

      <div>
        <button className="btn btn-primary me-2">Edit</button>
        <button className="btn btn-danger">Logout</button>
      </div>
    </div>
  );
};

export default EmployeeDetail;
