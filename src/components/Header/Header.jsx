import React from "react";
import bemCssModules from "bem-css-modules";

import { default as HeaderStyles } from "./Header.module.scss";

const style = bemCssModules(HeaderStyles);

const Header = () => {
  return (
    <div className={style()}>
      <h1 className={style("title")}>To do app</h1>
      <h2 className={style("title--small")}>Stronka z taskami</h2>
    </div>
  );
};

export default Header;
