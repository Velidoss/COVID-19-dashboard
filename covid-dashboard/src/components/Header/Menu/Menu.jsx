import React, { useContext, useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import style from './Menu.module.scss';
import GlobalContext from '../../../store/GlobalContext';
import SelectQuantities from './SelectQuantities/SelectQuantities';
import contentConstants from '../../../constants/contentConstants';

const Menu = () => {
  const {
    state,
    setContentConfig,
  } = useContext(GlobalContext);
  const { locations } = contentConstants;

  const [nextLocation, setnextLocation] = useState(locations.main);
  const location = useLocation();

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
    </div>
  );
};

export default Menu;
