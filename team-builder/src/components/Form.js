import React from "react";
import { useState } from "react";

function Form({ addTeammate }) {
  const [teammate, setTeammate] = useState({
    name: "",
    email: "",
    team: "",
    role2: "",
    hired: false
  });
  const handleChange = event => {
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    console.log(value);
    setTeammate({ ...teammate, [event.target.name]: value });
    console.log(teammate);
  };
  const submitThis = event => {
    event.preventDefault();
    addTeammate(teammate);
    setTeammate({ name: "", email: "", team: "", role2: "", hired: false });
  };
  return (
    <form onSubmit={submitThis}>
      <label htmlFor="name">Name</label>
      <input
        name="name"
        type="text"
        onChange={handleChange}
        value={teammate.name}
      />
      <label htmlFor="email">Email</label>
      <input
        name="email"
        type="text"
        onChange={handleChange}
        value={teammate.email}
      />
      <label htmlFor="team">Current Team</label>
      <input
        name="team"
        type="text"
        onChange={handleChange}
        value={teammate.team}
      />
      <label htmlFor="role2">Current Role</label>
      <select name="role2" onChange={handleChange}>
        <option default>Select Role</option>
        <option value="Front-End">Front-End</option>
        <option value="Back-End">Back-End</option>
        <option value="Full-Stack">Full Stack</option>
      </select>

      <label htmlFor="hired">Employed</label>
      <input
        type="checkbox"
        name="hired"
        checked={teammate.hired}
        onChange={handleChange}
      />

      <button type="submit">Create</button>
    </form>
  );
}
export default Form;
