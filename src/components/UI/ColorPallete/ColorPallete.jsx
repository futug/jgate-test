import React, { useState } from "react";
import styles from "./ColorPallete.module.scss";

const colors = ["#EE4444", "#3C81F6", "#000"];

const ColorPallete = () => {
    const [colorIndex, setColorIndex] = useState(0);

    const handleClick = (index) => {
        setColorIndex(index);
    };

    console.log(colorIndex);

    return (
        <div className={styles.colorPallete}>
            {colors.map((color, index) => (
                <div
                    onClick={() => handleClick(index)}
                    key={index}
                    className={`${styles.palleteItem} ${index === colorIndex ? styles.palleteItemActive : ""}`}
                    style={{ backgroundColor: color }}
                ></div>
            ))}
        </div>
    );
};

export default ColorPallete;
