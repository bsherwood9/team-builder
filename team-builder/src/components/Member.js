import React from "react";

function Member({ members, setMemberToEdit, editMember }) {
  console.log("members", members);
  return (
    <div>
      {members.map(person => (
        <div>
          <h2>{person.name}</h2>
          <p>{person.email}</p>
          <p>{person.team}</p>
          <p>{person.role2}</p>
          <p>{person.hired}</p>
          <button onClick={() => editMember(person)}>Edit</button>
        </div>
      ))}
    </div>
  );
}
export default Member;
