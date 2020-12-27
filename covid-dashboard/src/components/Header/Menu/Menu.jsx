import React, {
  useContext, useRef, useState, useEffect,
} from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import style from './Menu.module.scss';
import GlobalContext from '../../../store/GlobalContext';
import SelectQuantities from './SelectQuantities/SelectQuantities';
import contentConstants from '../../../constants/contentConstants';
import Search from '../Search/Search';
import menuIcon from '../../../assets/svg/bars-solid.svg';
import useClickOutside from '../../../customHooks/useClickOutside';

const Menu = () => {
  const {
    state,
    setContentConfig,
  } = useContext(GlobalContext);
  const { locations } = contentConstants;

  const [nextLocation, setnextLocation] = useState(locations.main);
  const [openMenu, toggleOpenMenu] = useState(false);
  const location = useLocation();
  const menuRef = useRef();
  useClickOutside(menuRef, () => toggleOpenMenu(!openMenu));

  useEffect(() => {
    if (location.pathname === '/') {
      setnextLocation(locations.vaccine);
    } else {
      setnextLocation(locations.main);
    }
  }, [location.pathname]);

  return (
    <div className={style.menu}>
      <div className={style.menu__items}>
        <Search />
        <SelectQuantities
          selected={state.contentConfig.quantities}
          setContentConfig={setContentConfig}
        />
        {
          nextLocation
            ? (
              <NavLink
                className={style.menu__items_link}
                to={nextLocation.to}
              >
                {nextLocation.name}
              </NavLink>
            )
            : null
        }
      </div>
      {
        openMenu
          ? (
            <div ref={menuRef} className={style.menu__collapse}>
              <Search />
              <SelectQuantities
                selected={state.contentConfig.quantities}
                setContentConfig={setContentConfig}
              />
              {
                nextLocation
                  ? (
                    <NavLink
                      className={style.menu__collapse_link}
                      to={nextLocation.to}
                    >
                      {nextLocation.name}
                    </NavLink>
                  )
                  : null
              }
            </div>
          )
          : null
      }
      <div className={style.menu__open}>
        <button onClick={() => toggleOpenMenu(!openMenu)} type="button" className={style.menu__open_button}>
          <img className={style.menu__open_button_img} src={menuIcon} alt="openMenu" />
        </button>
      </div>
    </div>
  );
};

export default Menu;
