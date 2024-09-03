import React from "react";
function childComponent(props){
    return(
        <button onClick={props.handleClick}>
            Click Me
        </button>
    );
}
export default App;
