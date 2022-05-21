import React, { useRef } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
const ProgrammableActionsExample = () => {
    const inputRef = useRef();
    const handleClick = () => {
        console.log(inputRef.current);
        inputRef.current.focus();
    };
    const handleClickWith = () => {
        console.log(inputRef.current);
        inputRef.current.style.width = "100px";
    };
    return (
        <CardWrapper>
            <SmallTitle className="card-title">
                Программируемые действия и свойства
            </SmallTitle>
            <label htmlFor="email" className="form-label">
                email
                <input
                    ref={inputRef}
                    type="email"
                    className="form-control  mb-2"
                    id="email"
                />
                <button className="btn btn-primary me-3" onClick={handleClick}>
                    Фокус
                </button>
                <button className="btn btn-primary" onClick={handleClickWith}>
                    Изменить ширину
                </button>
            </label>
        </CardWrapper>
    );
};

export default ProgrammableActionsExample;
