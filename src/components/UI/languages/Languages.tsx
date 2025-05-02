import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useTranslation } from "react-i18next";

import { useAppDispatch, useAppSelector } from "../../../store";
import { setActiveLanguage, setLangs } from "../../../store/appReducer";

import { countries } from "../../../constants/countries";
import { LanguageProp } from "../../../types/types";

import styles from "./Languages.module.css";

export const Languages = () => {
  const activeLanguage = useAppSelector((state) => state.app.activeLanguage);
  const openLangs = useAppSelector((state) => state.app.openLangs);

  const { i18n } = useTranslation();
  const dispatch = useAppDispatch();
  const sideBarControls = useAnimation();
  const activeControls = useAnimation();
  const menuControls = useAnimation();

  const handleLanguage = (language: LanguageProp) => {
    void i18n.changeLanguage(language.lang);

    dispatch(setActiveLanguage({
      activeLanguage: language
    }));

    dispatch(setLangs({
      openLangs: false
    }));
  };

  useEffect(() => {
    if (openLangs) {
      sideBarControls.start({
        x: 0,
        y: 40,
        background: "rgba(255, 255, 255, 0.1)",
        transition: {
          ease: "backInOut",
          duration: 1
        }
      });

      activeControls.start({
        y: 40,
        transition: {
          delay: .5,
          duration: .5,
          ease: "easeInOut"
        }
      });

      menuControls.start({
        y: 40,
        opacity: 1,
        transition: {
          delay: .7,
          duration: .3,
          ease: "easeInOut"
        }
      });
    } else {
      sideBarControls.start({
        x: 20,
        y: 0,
        background: "rgba(255, 255, 255, 0)",
        transition: {
          ease: "backInOut",
          duration: 1
        }
      });

      activeControls.start({
        y: 0,
        transition: {
          delay: .5,
          duration: .5,
          ease: "easeInOut"
        }
      });

      menuControls.start({
        y: 0,
        opacity: 0,
        transition: {
          delay: .7,
          duration: .3,
          ease: "easeInOut"
        }
      });
    }
  }, [openLangs]);

  return (
    <>
      <motion.div animate={sideBarControls} className={styles.container}>
        <motion.div animate={activeControls} className={styles.activeLang}>
          <div
            onClick={() => {
              dispatch(setLangs({
                openLangs: true
              }));
            }}
            className={styles.lang} 
          >
            <img src={activeLanguage.flag} alt={activeLanguage.lang} />
          </div>
        </motion.div>
        <motion.div animate={menuControls} className={styles.delimiter} />
        <motion.div animate={menuControls} className={styles.menuContent}>
          <div 
            className={styles.innerLinksWrapper}
            style={{
              pointerEvents: openLangs ? "auto" : "none",
            }}
          >
            {countries.map((item) => {
              return (
                <div
                  className={styles.langItem}
                  onClick={() => handleLanguage(item)}
                  key={item.langFull}
                >
                  <span>{item.langFull}</span>
                  <img src={item.flag} alt={item.lang} className={styles.flag} />
                </div>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
      {openLangs && <div
        onClick={() => {
          dispatch(setLangs({
            openLangs: false
          }));
        }}
        className={styles.bg}
      />}
    </>
  );
};

