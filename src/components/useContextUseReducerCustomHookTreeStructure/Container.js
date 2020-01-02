
import React, { useReducer, useState, createContext } from 'react'
import reducer, { initialState } from './reducer'
import useCustomDocTitle from '../customHookExamples/Counter/UseUpdateTitle'
import { ComponentA, ComponentB, ComponentC } from "./index";

export const CountContext = createContext();

export default function Container() {
    const [count, dispatch] = useReducer(reducer, initialState);
    const [text, setText] = useState('')
    useCustomDocTitle(text)
    return (
        <div>
            <div>Count - {count}</div>
            <input value={text} onChange={(e) => setText(e.target.value)} />
            <CountContext.Provider
                value={{ countState: count, countDispatch: dispatch }}
            >
                <ComponentA />
                <ComponentB />
                <ComponentC />
            </CountContext.Provider>
        </div>
    );
}