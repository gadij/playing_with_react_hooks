import React, { useState, useCallback } from "react";
import Title from "./Title";
import Button from "./Button";
import Count from "./Count";

export default function ParentComponent() {
    const [age, setAge] = useState(32);
    const [salary, setSalary] = useState(30000);

    const incrementSalary = useCallback(() => {
        setSalary(salary + 1000);
    }, [salary]);

    const incrementAge = useCallback(() => {
        setAge(age + 1);
    }, [age]);

    return (
        <div>
            <Title />
            <Count text="Age" count={age} />
            <Button handleClick={incrementAge}>Increment Age</Button>
            <Count text="Salary" count={salary} />
            <Button handleClick={incrementSalary}>Increment Salary</Button>
        </div>
    );
}
