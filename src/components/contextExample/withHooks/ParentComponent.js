import ChildComponent from './ChildComponent'

import React from "react";

export default function ParentComponent() {
  return (
    <div>
        <h2>Hello from parent component - using hooks</h2>
        <ChildComponent/>
    </div>
  );
}