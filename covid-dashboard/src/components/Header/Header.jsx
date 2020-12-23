import React from 'react';
import style from './Header.module.scss';
import Search from './Search/Search';
import Menu from './Menu/Menu';

const Header = () => (
  <header className={style.title}>
    <span className={style.titleText}>Covid dashboard</span>
    <p>Приложение еще не готово до конца.</p>
    <p>Буду признателен если проверите 27.12</p>
    <Search />
    <Menu />
  </header>
);

export default Header;
