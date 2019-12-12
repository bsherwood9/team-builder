import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import MemberList from "./components/Member";
import Form from "./components/Form";

function App() {
  const [memberToEdit, setMemberToEdit] = useState({});
  const [members, setMembers] = useState([]);
  const [editState, setEditState] = useState(false);

  const addNewMember = person => {
    const newMember = {
      name: person.name,
      email: person.email,
      team: person.team,
      role2: person.role2
    };
    const newMemberList = [...members, newMember]; //This is a new array that adds each new member.
    setMembers(newMemberList);
  };

  const editMember = obj => {
    setMemberToEdit({
      name: obj.name,
      email: obj.email,
      team: obj.team,
      role2: obj.role2
    });
    console.log("editmember function", memberToEdit);
  };

  return (
    <div>
      <Form
        addNewMember={addNewMember}
        memberToEdit={memberToEdit}
        setMemberToEdit={setMemberToEdit}
        members={members}
        setMembers={setMembers}
        editState={editState}
        setEditState={setEditState}
      />
      <MemberList
        members={members}
        editMember={editMember}
        setMembers={setMembers}
        setEditState={setEditState}
      />
    </div>
  );
}

export default App;
