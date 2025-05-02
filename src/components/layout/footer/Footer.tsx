import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import styles from "./Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const { t } = useTranslation("common");

  return (
    <div className={styles.footerContainer}>
      <div className={styles.links}>
        <Link className={styles.link} to="/">{t("header.main")}</Link>
        <Link className={styles.link} to="/pretty-cats">{t("header.pretty")}</Link>
        <Link className={styles.link} to="/about-us">{t("header.about_us")}</Link>
      </div>
      <p>&copy; {currentYear} {t("footer.reserved")}</p>
    </div>
  );
};

export default Footer;
