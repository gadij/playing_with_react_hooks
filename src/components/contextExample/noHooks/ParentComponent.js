import React from "react";
import ChildComponent from "./ChildComponent";

export default function ParentComponent() {
  return (
    <div>
        <h2>Hello from parent component - <strong>no</strong> hooks</h2>
        <ChildComponent />
    </div>
  );
}
