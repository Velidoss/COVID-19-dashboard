import React, { useContext, useEffect } from 'react';
import style from './Vaccine.module.scss';
import VaccineContext from '../../store/VaccineContext/VaccineContext';

function Vaccine() {
  const { state, getVaccineStatistics } = useContext(VaccineContext);
  const { data, phases } = state.vaccineStats;

  useEffect(() => {
    getVaccineStatistics();
  }, []);
  console.log(data, phases);
  return (
    <div className={style.vaccine}>
      <table>
        <thead>
          <tr>
            <th colSpan="6">Vaccines</th>
          </tr>
          <tr>
            <th>Vaccine name</th>
            <th>Vaccine type</th>
            <th>Developers</th>
            <th>Phase</th>
            <th>Institutions</th>
          </tr>
        </thead>
        <tbody>
          {
            data !== undefined
              ? data.map((vaccine) => (
                <tr>
                  <td>
                    {vaccine.candidate}
                  </td>
                  <td>
                    {vaccine.mechanism}
                  </td>
                  <td>
                    {vaccine.sponsors}
                  </td>
                  <td>
                    {vaccine.trialPhase}
                  </td>
                  <td>
                    {vaccine.institutions}
                  </td>
                </tr>
              ))
              : null
          }
        </tbody>
      </table>
    </div>
  );
}

export default Vaccine;
