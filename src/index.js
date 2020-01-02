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
import CustomHooksContainer from './components/customHookExamples/Counter/CustomHooksContainer'
// eslint-disable-next-line
import MouseMovementContainer from './components/trackMouseMovement/MouseMovementContainer'
// eslint-disable-next-line
import ThemeContext from './components/contextExample/theme/ThemeContext'
// eslint-disable-next-line
import DisplayDataContainer from './components/fetchingDataAsync/DisplayDataContainer'
// eslint-disable-next-line
import PostFetchingContainer from './components/exampleUseReducer/useReducer/PostFetchingContainer'
// eslint-disable-next-line
import Form from './components/customHookExamples/Form/UseForm';
// eslint-disable-next-line
import CallbackComponent from './components/exampleUseCallback/Parent'
// eslint-disable-next-line
import ActionVsDispatchContainer from './components/exampleUseReducer/complexReducer/ActionVsDispatchContainer'
// eslint-disable-next-line
import UseReducerAndCustomHookContainer from './components/customHookUseReducer/UseReducerAndCustomHookContainer'
// eslint-disable-next-line
import Container from './components/useContextUseReducerCustomHookTreeStructure/Container'
export const userContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
    return (
        <div className="App">



            {/* <ContextExample/> */}
            {/* <CounterContainerCountByFive /> */}
            {/* <CounterTitleContainer /> */}
            {/* <SetIntervalContainer /> */}
            {/* <IsEvenCountContainer /> */}
            {/* <TimerContainer /> */}
            {/* <AutoFocusUseRef /> */}
            {/* <CustomHooksContainer /> */}
            {/* <MouseMovementContainer /> */}
            {/* <ThemeContext /> */}
            {/* <DisplayDataContainer /> */}
            {/* <PostFetchingContainer /> */}
            {/* <Form /> */}
            {/* <CallbackComponent /> */}
            {/* <ActionVsDispatchContainer /> */}
            {/* <UseReducerAndCustomHookContainer /> */}
            <Container />
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
