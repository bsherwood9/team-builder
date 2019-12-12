import React from "react";
import { useState, useEffect } from "react";

function Form({ addNewMember, memberToEdit, setMemberToEdit }) {
  const [member, setMember] = useState({
    name: "",
    email: "",
    team: "",
    role2: "",
    hired: false
  });
  const handleChange = event => {
    // const value =
    //   event.target.type === "checkbox"
    //     ? event.target.checked
    //     : event.target.value;
    // console.log(value);
    setMember({ ...member, [event.target.name]: event.target.value });
    console.log(member);
  };

  const submitThisForm = event => {
    event.preventDefault();
    addNewMember(member);
    setMember({ name: "", email: "", team: "", role2: "", hired: false });
  };

  useEffect(() => {
    setMember(memberToEdit);
  }, [memberToEdit]);

  //This is our form
  return (
    <form onSubmit={submitThisForm}>
      <label htmlFor="name">Name</label>
      <input
        name="name"
        type="text"
        onChange={handleChange}
        value={member.name}
      />
      <label htmlFor="email">Email</label>
      <input
        name="email"
        type="text"
        onChange={handleChange}
        value={member.email}
      />
      <label htmlFor="team">Current Team</label>
      <input
        name="team"
        type="text"
        onChange={handleChange}
        value={member.team}
      />
      <label htmlFor="role2">Current Role</label>
      <select name="role2" onChange={handleChange}>
        <option default>Select Role</option>
        <option value="Front-End">Front-End</option>
        <option value="Back-End">Back-End</option>
        <option value="Full-Stack">Full Stack</option>
      </select>

      {/* <label htmlFor="hired">Employed</label>
      <input
        type="checkbox"
        name="hired"
        checked={teammate.hired}
        onChange={handleChange}
      /> */}

      <button type="submit">Create</button>
    </form>
  );
}
export default Form;
