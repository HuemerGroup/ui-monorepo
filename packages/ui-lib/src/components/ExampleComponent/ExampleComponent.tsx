import React from "react";
import "./ExampleComponent.scss";
import reactLogo from "./assets/react-logo.svg";

export interface IExampleComponentProps {
    text: string
}

export const ExampleComponent: React.FunctionComponent<IExampleComponentProps> = (props) => {
    return (
        <>
            <img src={reactLogo} alt={"react logo"}/>
            <h1>ExampleComponent imported from {props.text}</h1>
        </>
    );
}