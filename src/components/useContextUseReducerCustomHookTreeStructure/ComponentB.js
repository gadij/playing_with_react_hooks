import React from "react";
import { ComponentD } from './index';

export default function ComponentB() {
    return (
        <div>
            <h2>
                ComponentB
            </h2>
            <div>
                <ComponentD />
            </div>
        </div>
    );
}
