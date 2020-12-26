import React from 'react';
import style from './Header.module.scss';
import Search from './Search/Search';
import Menu from './Menu/Menu';

const Header = () => (
  <header className={style.title}>
    <span className={style.titleText}>Covid dashboard</span>
    <Search />
    <Menu />
  </header>
);

export default Header;
