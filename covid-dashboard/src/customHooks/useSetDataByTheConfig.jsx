import { useState, useEffect } from 'react';
import contentConstants from '../constants/contentConstants';

const useSetDataByTheConfig = ({
  selectedCountryInfo, countries, contentConfig, state,
}) => {
  const {
    country,
    countryInfo,
    casesPerOneMillion,
    deathsPerOneMillion,
    recoveredPerOneMillion,
    todayCases,
    todayDeaths,
    todayRecovered,
    deaths,
    cases,
    recovered,
  } = selectedCountryInfo;
  const { whole, per100, lastDay } = contentConstants.quantities;
  const [data, setData] = useState({
    countryName: country || '',
    countryFlag: countryInfo ? countryInfo.flag : '',
    countries,
  });

  useEffect(() => {
    switch (contentConfig.quantities) {
      case per100:
        setData({
          ...data,
          globalCases: casesPerOneMillion,
          losses: deathsPerOneMillion,
          recovered: recoveredPerOneMillion,
          countries,
          countryName: country || '',
          countryFlag: countryInfo ? countryInfo.flag : '',
        });
        break;
      case lastDay:
        setData({
          ...data,
          globalCases: todayCases,
          losses: todayDeaths,
          recovered: todayRecovered,
          countries,
          countryName: country || '',
          countryFlag: countryInfo ? countryInfo.flag : '',
        });
        break;
      case whole: {
        setData({
          ...data,
          globalCases: cases,
          losses: deaths,
          recovered,
          countries,
          countryName: country || '',
          countryFlag: countryInfo ? countryInfo.flag : '',
        });
        break;
      }
      default: {
        setData({ ...data });
        break;
      }
    }
  }, [contentConfig.quantities, state]);

  return data;
};

export default useSetDataByTheConfig;
