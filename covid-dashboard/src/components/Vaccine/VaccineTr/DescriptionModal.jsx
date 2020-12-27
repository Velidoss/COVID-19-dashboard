import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import style from '../Vaccine.module.scss';
import closeIcon from '../../../assets/svg/times-solid.svg';
import useClickOutside from '../../../customHooks/useClickOutside';

const DescriptionModal = ({ description, closeModal }) => {
  const modalRef = useRef();
  useClickOutside(modalRef, closeModal);

  return (
    <div ref={modalRef} className={style.modal}>
      <div className={style.modal__details}>
        {description}
      </div>
      <button className={style.modal__button} onClick={closeModal} type="button">
        <img src={closeIcon} alt="close" />
      </button>
    </div>
  );
};

DescriptionModal.propTypes = {
  description: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default DescriptionModal;
