import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Member from "./components/Member";
import Form from "./components/Form";

function App() {
  const [memberToEdit, setMemberToEdit] = useState({
    name: "",
    email: "email",
    team: "",
    role2: "",
    hired: ""
  });
  //What is this here?
  const [members, setMembers] = useState([]);
  const addNewMember = person => {
    const newMember = {
      name: person.name,
      email: person.email,
      team: person.team,
      role2: person.role2,
      hired: person.hired
    };
    const newMemberList = [...members, newMember]; //This is a new array that adds each new member.
    setMembers(newMemberList);
  };
  const editMember = obj => {
    let memberList = [...members, memberToEdit];
    setMembers(memberList);
    setMemberToEdit({
      name: obj.name,
      email: obj.email,
      team: obj.team,
      role2: obj.role2,
      hired: obj.hired
    });
  };
  return (
    <div>
      <Form
        addNewMember={addNewMember}
        memberToEdit={memberToEdit}
        setMemberEdit={setMemberToEdit}
      />
      <Member
        members={members}
        editMember={editMember}
        setMembers={setMembers}
      />
    </div>
  );
}

export default App;
