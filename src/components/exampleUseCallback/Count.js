import React from "react";

function Count(props) {
    console.log(`Rendering ${props.text}`);
    return (
        <h2>
            {props.text}: {props.count}
        </h2>
    );
}

export default React.memo(Count);
