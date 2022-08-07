import React, { useState } from "react";
import axios from "axios";

export default function CreateUser() {
  const [username, setUserName] = useState("");

  function onChangeUsername(e) {
    setUserName(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    const user = {
      username: username,
    };

    // console.log(user);
    axios
      .post("http://localhost:5000/users/add", user)
      .then((res) => console.log(res.data));

    setUserName("");
  }

  return (
    <div>
      <h3>Create New User</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Username: </label>
          <input
            type="text"
            required
            className="form-control"
            value={username}
            onChange={onChangeUsername}
          />
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Create User"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}
