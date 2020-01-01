import React from "react";
import { UserContext, ChannelContext } from "../ContextProvider";
export default function ChildComponent() {
  return (
    <div>
      <h2>Hello from child component - <strong>no</strong> hooks</h2>
      <UserContext.Consumer>
        {user => {
          return (
            <ChannelContext.Consumer>
              {channel => {
                return (
                  <div>
                      User = {user}, Channel = {channel}
                  </div>
                );
              }}
            </ChannelContext.Consumer>
          );
        }}
      </UserContext.Consumer>
    </div>
  );
}
