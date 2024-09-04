export const stringToColor = (string) => {
  // Remove common word and trim spaces
  let str = string.replace('competencies', '').trim();
  str = str.replace("l", "Q");
  str = str.replace("z", "4");
  str = str.replace("o", "g");
  str = str.replace("j", "6");
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 7) - hash);
  }
  let colour = '#';
  for (let i = 0; i < 3; i++) {
    let value = (hash >> (i * 8)) & 0xFF;
    colour += ('00' + value.toString(16)).substr(-2);
  }
  return colour;
}


export const calculateTotalCriteria = (scores) => {
  const total = {};
  Object.keys(scores).forEach((criteriaId) => {
    total[criteriaId] = (Object.values(scores[criteriaId])
      .reduce((a, b) => a + b, 0)
    );
  })
  total.sum = Object.values(total).reduce((a, b) => a + b, 0);
  return total;
};

export const calculateTotalDataTypes = (scores) => {
  const total = {};
  Object.values(scores).forEach((criteriaScore) => {
    Object.keys(criteriaScore).forEach((dataTypeId) => {
      if (!total[dataTypeId]) {
        total[dataTypeId] = criteriaScore[dataTypeId];
      } else {
        total[dataTypeId] += criteriaScore[dataTypeId];
      }
    })
  })
  total.sum = Object.values(total).reduce((a, b) => a + b, 0);
  return total;
};

export const stringAvatar = (user) => {
  const name = `${user.firstName} ${user.lastName}`
  return {
    sx: {
      bgcolor: stringToColor(name),
      width: 24,
      height: 24,
      fontSize: '11px',
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}
