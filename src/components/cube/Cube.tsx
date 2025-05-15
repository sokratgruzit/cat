import { useTranslation } from "react-i18next";

import styles from "./Cube.module.css";

export const Cube = () => {
    const { t } = useTranslation("common");

    return (
        <div className={styles.container}>
            <div className={styles.cubeContainer}>
                <p className={styles.label}>LOADING...</p>
                <div className={styles.cubeWrap}>
                    <div className={styles.cube}>
                        <div className={`${styles.face} ${styles.front}`}></div>
                        <div className={`${styles.face} ${styles.back}`}></div>
                        <div className={`${styles.face} ${styles.left}`}></div>
                        <div className={`${styles.face} ${styles.right}`}></div>
                        <div className={`${styles.face} ${styles.top}`}></div>
                        <div className={`${styles.face} ${styles.bottom}`}></div>
                    </div>
                </div>
                <div className={styles.progressBar}></div>
            </div>
        </div>
    )
};