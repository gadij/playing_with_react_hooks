import React from "react";
import UseInput from "./UseInput";

export default function UseForm() {

  const [firstName, bindFirst, resetFirst] = UseInput("");
  const [lastName, bindLast, resetLast] = UseInput("");
  const submit = e => {
    e.preventDefault();
    alert(`hello ${firstName} ${lastName}`);
    resetFirst();
    resetLast();
  };
  return (
    <div>
      <form onSubmit={submit}>
        <div>
          <label>First Name</label>
          <input {...bindFirst} type="text" />
        </div>
        <div>
          <label>Last Name</label>
          <input {...bindLast} type="text" />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}
