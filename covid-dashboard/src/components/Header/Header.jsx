import React from 'react';
import style from './Header.module.scss';
import Search from './Search/Search';
import Menu from './Menu/Menu';
import gitIcon from '../../assets/svg/github-square-brands.svg';
import schoolImg from '../../assets/img/rs_school_js.svg';

const Header = () => (
  <header className={style.title}>
    <span className={style.titleText}>Covid dashboard</span>
    <div className={style.title__credits}>
      <a className={style.title__credits_author} href="https://github.com/Velidoss"><img src={gitIcon} alt="git" /></a>
      <a className={style.title__credits_school} href="https://rs.school/js/"><img src={schoolImg} alt="rs-school" /></a>
    </div>
    <Search />
    <Menu />
  </header>
);

export default Header;
