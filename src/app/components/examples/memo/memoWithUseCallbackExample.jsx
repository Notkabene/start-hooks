import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";

const LogOutButton = ({ onLogOut }) => {
    useEffect(() => {
        console.log("render button");
    });
    return (
        <button className="btn btn-primary m-2" onClick={onLogOut}>
            LogOut
        </button>
    );
};
function areEqual(prevProps, nextProps) {
    if (prevProps.onLogOut !== nextProps.onLogOut) {
        return false;
    }
    return true;
}
const MemoizedLogOutButton = React.memo(LogOutButton, areEqual);

const MemoWithUseCallbackExample = (props) => {
    const [state, setState] = useState(false);
    const handleLogout = useCallback(() => {
        localStorage.removeItem("auth");
    }, [props]);

    return (
        <>
            <button
                className="btn btn-primary"
                onClick={() => setState(!state)}
            >
                Initiale Render
            </button>
            <MemoizedLogOutButton onLogOut={handleLogout} />
        </>
    );
};

LogOutButton.propTypes = {
    onLogOut: PropTypes.func
};
export default MemoWithUseCallbackExample;
