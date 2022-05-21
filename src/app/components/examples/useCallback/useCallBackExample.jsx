import React, { useState, useRef, useEffect, useCallback } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const UseCallBackExample = () => {
    const [data, setData] = useState({});
    const withoutCallback = useRef(0);
    const withCallback = useRef(0);

    const handleChange = ({ target }) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };

    // Without
    const validateWithout = (data) => {
        console.log(data);
    };
    useEffect(() => {
        withoutCallback.current++;
    }, [validateWithout]);

    // With
    const validateWith = useCallback((data) => {
        console.log(data);
    }, []);

    useEffect(() => {
        withCallback.current++;
    }, [validateWith]);

    useEffect(() => {
      validateWithout(data);
      validateWith(data);
  }, [data]);

    return (
        <CardWrapper>
            <SmallTitle>withoutCallback</SmallTitle>
            <p>Render Result {withoutCallback.current}</p>
            <p>Render Result {withCallback.current}</p>
            <label htmlFor="email" className="form-label">
                email
                <input
                    type="email"
                    className="form-control  mb-2"
                    id="email"
                    value={data.email || ""}
                    name="email"
                    onChange={handleChange}
                />
                {/* <button className="btn btn-primary me-3" onClick={handleClick}>
                    Фокус
                </button>
                <button className="btn btn-primary" onClick={handleClickWith}>
                    Изменить ширину
                </button> */}
            </label>
        </CardWrapper>
    );
};

export default UseCallBackExample;
