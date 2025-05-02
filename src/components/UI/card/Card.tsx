import { CardProps } from "../../../types/types";

import styles from "./Card.module.css";

export const Card = ({ src, title, text }: CardProps) => {
    return (
        <div className={styles.card}>
            <img src={src} alt={title} />
            <div className={styles.content}>
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
        </div>
    )
};