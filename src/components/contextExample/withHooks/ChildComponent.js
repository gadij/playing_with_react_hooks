import React, { useContext } from "react";
import { UserContext, ChannelContext } from "../ContextProvider";

export default function ChildComponent() {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);
  return (
    <div>
        <h2>Hello from child component - using hooks</h2>
      <div>
        User = {user}, Channel = {channel}
      </div>
    </div>
  );
}