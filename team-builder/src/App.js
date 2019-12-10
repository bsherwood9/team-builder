import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Teammate from "./components/Teammate";
import Form from "./components/Form";

function App() {
  const [members, setMembers] = useState([
    {
      name: "",
      email: "",
      team: "",
      role2: "",
      hired: false
    }
  ]);
  const addTeammate = person => {
    const newTeammate = {
      name: person.name,
      email: person.email,
      team: person.team,
      role2: person.role2,
      hired: person.hired
    };
    const newTeammateList = [...members, newTeammate];
    setMembers(newTeammateList);
  };
  return (
    <div>
      <Form addTeammate={addTeammate} />
      <Teammate members={members} />
    </div>
  );
}

export default App;
