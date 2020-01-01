import React from "react";
import ReactDOM from "react-dom";

import "./styles.scss";
// import ClassCounter from "./components/Counters/ClassCounter";
// import HookCounter from "./components/Counters/HookCounter";
// import ClassMouse from "./components/MouseHover/ClassMouse";
// import HookMouse from "./components/MouseHover/HookMouse";
// import MouseContainer from "./components/MouseHover/MouseContainer";
// import IntervalCounter from "./components/Interval/IntervalCounter";
// import IntervalHookCounter from "./components/Interval/IntervalHookCounter";
// import HookCounterTwo from "./components/Counters/HookCounterTwo";
// import HookCounterWithObject from "./components/Counters/HookCounterWithObject";
// import HookWithArray from "./components/Counters/HookCounterWithArray";
// import DataFetchingUser from "./components/DataFetching/DataFetchingUser";
// import {
//   DataFetchingPosts,
//   DataFetchingPost
// } from "./components/DataFetching/DataFetchingIPosts";
// import ComponentA from "./components/Context/componentA";
// import ComponentOne from "./components/ContextHook/ComponentOne";
// import CounterOne from "./components/useReducer/CounterOne";
// import CounterTwo from "./components/useReducer/ComplexState";
// import CounterThree from "./components/useReducer/MultipleReducers";
// import CounterContainer from "./components/CounterContainer";
// import DataFetchingTwo from "./components/FetchDataWithReducer/DataFetchingTwo";
// import ParentComponent from "./components/UseCallback/ParentComponent";
// import Counter from "./components/useMemo/Counter";
// import FocusInput from "./components/useRef/FocusInput";
// import ClassTimer from "./components/useRef/ClassTimer";
// import HookTimer from "./components/useRef/HookTimer";
// import DocTitleOne from "./components/CustomHooks/DocTitleOne";
// import DocTitleTwo from "./components/CustomHooks/DocTitleTwo";
// import CounterOne from "./components/CustomHooks/CounterOne";
// import CounterTwo from "./components/CustomHooks/CounterTwo";
// import UseForm from "./components/UseInput/UseForm";
// import ThemeComponent from "./components/useContextWithTheme/ThemeComponent";
// import StaleExample from "./components/StaleExample/Stale";
// import DataFetchingWithReducer from "./components/ExampleFetchingData/DataFetchingWithReducer";

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
      <br />
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
      <br />
      {/* <ThemeComponent /> */}
      {/* <StaleExample /> */}
      {/* <DataFetchingWithReducer /> */}
      hello
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
