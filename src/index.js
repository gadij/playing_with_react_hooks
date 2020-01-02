import React from "react";
import ReactDOM from "react-dom";

import "./style.scss";
// eslint-disable-next-line
import ContextExample from './components/contextExample/ContextProvider';
// eslint-disable-next-line
import CounterContainerCountByFive from "./components/usingPrevValueInUseState/CounterContainerCountByFive";
// eslint-disable-next-line
import CounterTitleContainer from './components/counterAndUpdateTitle/CounterTitleContainer'
// eslint-disable-next-line
import SetIntervalContainer from "./components/setInterval/SetIntervalContainer";
// eslint-disable-next-line
import IsEvenCountContainer from "./components/usingMemo/isEvenCount/IsEvenCountContainer";
// eslint-disable-next-line
import TimerContainer from "./components/timerWithRef/TimerContainer";
// eslint-disable-next-line
import AutoFocusUseRef from './components/autoFocusWithRef/AutoFocusUseRef'
// eslint-disable-next-line
import CustomHooksContainer from './components/customHookExamples/CustomHooksContainer'
// eslint-disable-next-line
import MouseMovementContainer from './components/trackMouseMovement/MouseMovementContainer'
// eslint-disable-next-line
import ThemeContext from './components/contextExample/theme/ThemeContext'

export const userContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
    return (
        <div className="App">
            {/* <ClassCounter /> */}
            {/* <HookCounter /> */}
            {/* <HookCounterTwo /> */}
            {/* <HookCounterWithObject /> */}
            {/* <HookWithArray /> */}
            {/* <ClassMouse/> */}
            {/* <HookMouse /> */}
            {/* <MouseContainer /> */}
            {/* <IntervalCounter /> */}
            {/* <IntervalHookCounter /> */}
            {/* <DataFetchingUser /> */}
            {/* <DataFetchingPost /> */}
            {/* <DataFetchingPosts /> */}
            {/* <userContext.Provider value={"gadi"}>
        <ChannelContext.Provider value="HBO">
          <ComponentA />
          <ComponentOne />
        </ChannelContext.Provider>
      </userContext.Provider> */}
            {/* <CounterOne /> */}
            {/* <CounterTwo /> */}
            {/* <CounterThree /> */}
            {/* <CounterContainer /> */}
            {/* <DataFetchingOne /> */}
            {/* <DataFetchingTwo/> */}
            {/* <ParentComponent /> */}
            {/* <Counter/> */}
            {/* <FocusInput/> */}
            {/* <HookTimer/> */}
            {/* <DocTitleOne />
      <DocTitleTwo /> */}
            {/* <CounterOne />
      <CounterTwo /> */}
            {/* < UseForm /> */}
            {/* <ThemeComponent /> */}
            {/* <StaleExample /> */}
            {/* <DataFetchingWithReducer /> */}



            {/* <ContextExample/> */}
            {/* <CounterContainerCountByFive /> */}
            {/* <CounterTitleContainer /> */}
            {/* <SetIntervalContainer /> */}
            {/* <IsEvenCountContainer /> */}
            {/* <TimerContainer /> */}
            {/* <AutoFocusUseRef /> */}
            {/* <CustomHooksContainer /> */}
            {/* <MouseMovementContainer /> */}
            <ThemeContext />
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
