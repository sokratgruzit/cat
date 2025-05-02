import { useTranslation } from "react-i18next";

import { Cards } from "../../types/types";

import { Card } from "../UI/card/Card";

import styles from "./Home.module.css";

export const Home = () => {
    const { t } = useTranslation("common");

    const cardsData: Cards = [
        {
            src: "/img/description-selected.webp",
            title: t("main.item_title0"),
            text: t("main.item_text0")
        },
        {
            src: "/img/description-easy.webp",
            title: t("main.item_title1"),
            text: t("main.item_text1")
        },
        {
            src: "/img/description-share.webp",
            title: t("main.item_title2"),
            text: t("main.item_text2")
        },
        {
            src: "/img/description-editor.webp",
            title: t("main.item_title3"),
            text: t("main.item_text3")
        },
        {
            src: "/img/description-similar.webp",
            title: t("main.item_title4"),
            text: t("main.item_text4")
        },
        {
            src: "/img/description-platforms.webp",
            title: t("main.item_title5"),
            text: t("main.item_text5")
        },
    ];

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{t("main.title")}</h1>
            <div className={styles.items}>
                {cardsData.map((item, i) => <Card key={i} src={item.src} title={item.title} text={item.text} />)}
            </div>
        </div>
    )
};