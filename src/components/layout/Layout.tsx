import React from "react";
import { Outlet } from "react-router-dom";

import Header from "./header/Header";
import Footer from "./footer/Footer";

import styles from "./Layout.module.css";

export const Layout: React.FC = () => {
  return (
    <div className={styles.layout}>
      <main className={styles.content}>
        <Header />
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>  
    </div>
  );
};

