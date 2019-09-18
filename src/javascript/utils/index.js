export const groupBy = key => array =>
  array.reduce((objectsByKeyValue, obj) => {
    const value = obj[key];
    objectsByKeyValue[value] = obj
    return objectsByKeyValue;
  }, {});

export const groupById = groupBy("id");