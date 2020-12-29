import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.scss';
import Menu from './Menu/Menu';
import gitIcon from '../../assets/svg/github-square-brands.svg';
import schoolImg from '../../assets/img/rs_school_js.svg';
import contentConstants from '../../constants/contentConstants';

const { projectTitle } = contentConstants.titles;
const { author, school } = contentConstants.credentials;

const Header = () => (
  <header className={style.title}>
    <NavLink to="/" className={style.titleText}>{projectTitle}</NavLink>
    <div className={style.title__credits}>
      <a className={style.title__credits_author} href={author}><img src={gitIcon} alt="git" /></a>
      <a className={style.title__credits_school} href={school}><img src={schoolImg} alt="rs-school" /></a>
    </div>
    <Menu />
  </header>
);

export default Header;
