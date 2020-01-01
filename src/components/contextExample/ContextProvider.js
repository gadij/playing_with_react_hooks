import React from 'react';

import ParentComponentWithHooks from './withHooks/ParentComponent'
import ParentComponentNoHooks from './noHooks/ParentComponent'

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

export default function ContextProvider() {
    return (
        <UserContext.Provider value={"gadi"}>
            <ChannelContext.Provider value="HBO">
                <div className='examples-container'>
                    <ParentComponentWithHooks />
                    <ParentComponentNoHooks />
                </div>
            </ChannelContext.Provider>
        </UserContext.Provider>
    );
} 