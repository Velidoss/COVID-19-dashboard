const createChartData = ({
  diagramStats, statType, countryName, fillColor,
}) => ({
  labels: diagramStats[statType] ? Object.keys(diagramStats[statType]) : [],
  datasets: [
    {
      label: `Number of ${statType}${countryName ? ` in ${countryName}` : ''}`,
      data: diagramStats[statType] ? Object.values(diagramStats[statType]) : [],
      fill: true,
      backgroundColor: fillColor.backgroundColor,
      borderColor: fillColor.borderColor,
    },
  ],
});

export default createChartData;
