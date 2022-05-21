import React from "react";
import CardWrapper from "../common/Card";

const withFunctions = (SimplElement) => (props) => {
    const isAuth = () => {
        const getItem = localStorage.getItem("user") === "auth";
        return getItem;
    };

    const onLogin = () => {
        localStorage.setItem("user", "auth");
    };
    const onLogout = () => {
        localStorage.removeItem("user");
    };
    return (
        <CardWrapper>
            <SimplElement
                isAuth={isAuth}
                onLogin={onLogin}
                onLogout={onLogout}
            />
        </CardWrapper>
    );
};

export default withFunctions;
