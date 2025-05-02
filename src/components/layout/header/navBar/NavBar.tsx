import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { useAppDispatch, useAppSelector } from "../../../../store";
import { setBurger } from "../../../../store/appReducer";

import styles from "./NavBar.module.css";

const NavBar: React.FC = () => {
  const openBurger = useAppSelector((state) => state.app.openBurger);

  const { t } = useTranslation("common");
  const dispatch = useAppDispatch();

  const updateMenu = () => {
    dispatch(setBurger({
      openBurger: !openBurger
    }));
  };

  return (
    <div className={styles.mainNavBar}>
      <div
        className={`${styles.burgerMenu} ${styles[openBurger ? "clicked" : "unclicked"]}`}
        onClick={updateMenu}
      >
        <div className={styles.burgerClass}></div>
        <div className={styles.burgerClass}></div>
        <div className={styles.burgerClass}></div>
      </div>

      <div className={`${styles.menu} ${styles[openBurger ? "visible" : "hidden"]}`}>
        <Link onClick={updateMenu} to={"/"} className={styles.headerLink}>
          {t("header.main")}
        </Link>
        <Link onClick={updateMenu} to={"/pretty-cats"} className={styles.headerLink}>
          {t("header.pretty")}
        </Link>
        <Link onClick={updateMenu} to={"/about-us"} className={styles.headerLink}>
          {t("header.about_us")}
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
