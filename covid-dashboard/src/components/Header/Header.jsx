import React from 'react';
import style from './Header.module.scss';
import Search from './Search/Search';

const Header = () => (
  <header className={style.title}>
    <span className={style.titleText}>Covid dashboard</span>
    <Search />
  </header>
);

export default Header;
