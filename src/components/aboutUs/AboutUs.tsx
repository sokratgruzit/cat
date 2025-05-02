import { useTranslation } from "react-i18next";

import styles from "./AboutUs.module.css";

export const AboutUs = () => {
    const { t } = useTranslation("common");

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{t("about.title")}</h1>
            <span className={styles.text}>{t("about.text")}</span>
        </div>
    )
};