import React from "react";

function MemberList({ members, setEditState, editMember }) {
  return (
    <div>
      {members.map(person => (
        <div>
          <h2>{person.name}</h2>
          <p>{person.email}</p>
          <p>{person.team}</p>
          <p>{person.role2}</p>
          <button
            onClick={() => {
              editMember(person);
              setEditState(true);
            }}
          >
            Edit
          </button>
        </div>
      ))}
    </div>
  );
}
export default MemberList;
