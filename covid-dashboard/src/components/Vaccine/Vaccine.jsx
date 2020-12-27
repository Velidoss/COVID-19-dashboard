import React, { useContext, useEffect, useState } from 'react';
import style from './Vaccine.module.scss';
import VaccineContext from '../../store/VaccineContext/VaccineContext';
import VaccineTr from './VaccineTr/VaccineTr';
import DescriptionModal from './VaccineTr/DescriptionModal';

function Vaccine() {
  const { state, getVaccineStatistics } = useContext(VaccineContext);
  const { data } = state.vaccineStats;
  const [description, toggleDescription] = useState(null);
  useEffect(() => {
    getVaccineStatistics();
  }, []);

  return (
    <div className={style.vaccine}>
      <div className={style.vaccine__heading}>
        Vaccines statistics
      </div>
      {
        description
          ? <DescriptionModal description={description} closeModal={() => toggleDescription('')} />
          : null
      }
      <div className={style.tcontainer}>
        <table className={style.table}>
          <thead className={style.table__head}>
            <tr className={style.table__head_row}>
              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <th className={style.table__head_row_col} />
              <th className={style.table__head_row_col}>Vaccine name</th>
              <th className={style.table__head_row_col}>Vaccine type</th>
              <th className={style.table__head_row_col}>Developers</th>
              <th className={style.table__head_row_col}>Phase</th>
              <th className={style.table__head_row_col}>Institutions</th>
            </tr>
          </thead>
          <tbody className={style.table__body}>
            {
              data !== undefined
                ? data.map((vaccine, i) => (
                  <VaccineTr
                    // eslint-disable-next-line react/no-array-index-key
                    key={i}
                    institutions={vaccine.institutions}
                    sponsors={vaccine.sponsors}
                    candidate={vaccine.candidate}
                    mechanism={vaccine.mechanism}
                    trialPhase={vaccine.trialPhase}
                    toggleDescription={() => toggleDescription(vaccine.details)}
                  />
                ))
                : null
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Vaccine;
