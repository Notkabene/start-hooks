import React, { useRef } from "react";
import CollapseWrapper from "../common/collapse";
const UseRefExercise = () => {
    const textRef = useRef("0");
    const handleClickWidth = () => {
        textRef.current.style.width = "150px";
        textRef.current.style.height = "80px";
        textRef.current.children[0].innerHTML = "Текст";
    };
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содержимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <div
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded mb-2"
                ref={textRef}
                style={{
                    height: 40,
                    width: 60,
                    color: "white"
                }}
            >
                <small>Блок</small>
            </div>
            <button className="btn btn-dark" onClick={handleClickWidth}>
                Изменить ширину и текст
            </button>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
