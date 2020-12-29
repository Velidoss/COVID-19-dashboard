const contentConstants = {
  contentConfigTypes: {
    quantities: 'quantities',
  },
  statTypes: {
    cases: 'cases',
    deaths: 'deaths',
    recovered: 'recovered',
  },
  quantities: {
    whole: 'whole',
    per100: 'per100',
    lastDay: 'lastDay',
  },
  styles: {
    stretchedBlock: {
      position: 'absolute',
      top: '0',
      left: '0',
      zIndex: '20',
      width: '100%',
      height: 'calc(100vh - 9vh - 30px)',
    },
  },
  locations: {
    main: {
      to: '/',
      name: 'Main',
    },
    vaccine: {
      to: '/vaccine',
      name: 'Vaccine',
    },
  },
  credentials: {
    author: 'https://github.com/Velidoss',
    school: 'https://rs.school/js/',
  },
  titles: {
    projectTitle: 'Covid dashboard',
    statsTypeTitle: 'Stats type: ',
    showQuantitiesTitle: 'Show quantities: ',
  },
};

export default contentConstants;
