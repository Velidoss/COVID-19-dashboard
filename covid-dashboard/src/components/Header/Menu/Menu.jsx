import React, { useState, useRef, useContext } from 'react';
import style from './Menu.module.scss';
import useClickOutside from '../../../customHooks/useClickOutside';
import menuImg from '../../../assets/svg/bars-solid.svg';
import GlobalContext from '../../../store/GlobalContext';
import SelectQuantities from './SelectQuantities/SelectQuantities';
import SelectTimePeriod from './SelectTimePeriod/SelectTimePeriod';

const Menu = () => {
  const {
    state,
    setContentConfig,
  } = useContext(GlobalContext);
  const [open, toggleOpen] = useState(false);
  const menuRef = useRef();
  useClickOutside(menuRef, () => toggleOpen(false));
  console.log(state);
  return (
    <div className={style.menu} ref={menuRef}>
      <button className={style.menu__btn} onClick={() => toggleOpen(!open)} type="button">
        <img className={style.menu__btn_img} src={menuImg} alt="menu" />
      </button>
      {
        open
          ? (
            <div className={style.menu__items}>
              <SelectQuantities
                selected={state.contentConfig.quantities}
                setContentConfig={setContentConfig}
              />
              <SelectTimePeriod
                selected={state.contentConfig.timePeriod}
                setContentConfig={setContentConfig}
              />
              <div className={style.menu__items_item}>3</div>
              <div className={style.menu__items_item}>4</div>
              <div className={style.menu__items_item}>5</div>
            </div>
          )
          : null
      }
    </div>
  );
};

export default Menu;
