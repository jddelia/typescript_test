import React from 'react';
import { useState } from 'react';

const ControlSection = (props: any) => {
    let [toggleState, setToggle] = useState("off");

    function handleToggle() {
        if (toggleState === "off") {
            setToggle("on");
        } else {
            setToggle("off");
        }

        props.onClick();
    }

    return (
        <div className={"content " + props.theme}>
            <div className={props.boxTheme}></div>
            <div className={"btn " + toggleState}>
                <div className="inner-btn" onClick={handleToggle}></div>
            </div>
        </div>
    );
}

export default ControlSection;