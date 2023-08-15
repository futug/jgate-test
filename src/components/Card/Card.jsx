import React from "react";
import ColorPallete from "../UI/ColorPallete/ColorPallete";
import PrimaryButton from "../UI/PrimaryButton/PrimaryButton";
import SecondaryButton from "../UI/SecondaryButton/SecondaryButton";
import styles from "./Card.module.scss";

const Card = (props) => {
    return (
        <div className={styles.cardItem}>
            <div className={styles.cardItemImgWrapper}>
                <img className={styles.cardItemImg} src={props.imgBase} alt="product" />
            </div>
            <h3 className={styles.cardItemPrice}>$ {props.price}</h3>
            <p className={styles.cardItemTitle}>{props.title}</p>
            <p className={styles.cardItemDesc}>{props.desc}</p>
            <p className={styles.cardItemColor}>Choose your color</p>
            <div className={styles.cardItemColorIcons}>
                <ColorPallete />
            </div>
            <div className={styles.cardItemCartButton}>
                <PrimaryButton onClick={() => console.log("Added to cart")}>Add to cart</PrimaryButton>
            </div>
            <div className={styles.cardItemBuyButton}>
                <SecondaryButton onClick={() => console.log("You are trying to by it!")}>Buy now</SecondaryButton>
            </div>
            <a className={styles.cardItemReadMoreLink} href="#">
                Read reviews
            </a>
        </div>
    );
};

export default Card;
