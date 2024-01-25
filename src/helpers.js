export const stringToColor = (string) => {
  let hash = 0;
  let i;
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }
  let color = '#';
  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  return color;
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
      fontSize: '11px'
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}
