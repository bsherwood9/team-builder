import React from "react";

function Teammate({ members }) {
  return (
    <div>
      {members.map(person => (
        <div>
          <h2>{person.name}</h2>
          <p>{person.email}</p>
          <p>{person.team}</p>
          <p>{person.role2}</p>
          <p>{person.hired}</p>
        </div>
      ))}
    </div>
  );
}
export default Teammate;
