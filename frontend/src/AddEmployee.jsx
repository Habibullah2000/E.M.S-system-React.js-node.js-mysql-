import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    salary: "",
    image: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formdata = new FormData();
    formdata.append("name", data.name);
    formdata.append("email", data.email);
    formdata.append("password", data.password);

    formdata.append("address", data.address);
    formdata.append("salary", data.salary);
    formdata.append("image", data.image);
    axios
      .post("http://localhost:8081/create/", formdata)
      .then((res) => {
        navigate("/employee");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex flex-column align-items-center pt-4">
      <h2>Add Employee</h2>
      <form className="row g-3 w-50" onSubmit={handleSubmit}>
        <div className="col-12">
          <label htmlFor="inputName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            placeholder="Input Name"
            onChange={(e) => setData({ ...data, name: e.target.value })}
            autoComplete="off"
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputEmail4" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="inputEmail4"
            placeholder="Input Email"
            onChange={(e) => setData({ ...data, email: e.target.value })}
            autoComplete="off"
          />
        </div>

        <div className="col-12">
          <label htmlFor="inputPassword4" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="inputPassword4"
            placeholder="Input Password"
            onChange={(e) => setData({ ...data, password: e.target.value })}
            autoComplete="off"
          />
        </div>

        <div className="col-12">
          <label htmlFor="inputAddress4" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="Kh.Ab.Ansari St "
            onChange={(e) => setData({ ...data, address: e.target.value })}
            autoComplete="off"
          />
        </div>

        <div className="col-12">
          <label htmlFor="inputSalary" className="form-label">
            Salary
          </label>
          <input
            type="text"
            className="form-control"
            id="inputSalary"
            placeholder="Input Salary"
            onChange={(e) => setData({ ...data, salary: e.target.value })}
            autoComplete="off"
          />
        </div>

        <div className="col-12 mb-3">
          <label htmlFor="inputGroupFile01" className="form-label">
            Selec Image
          </label>
          <input
            type="file"
            className="form-control"
            id="inputGroupFile01"
            onChange={(e) => setData({ ...data, image: e.target.files[0] })}
            autoComplete="off"
          />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Creat
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEmployee;
