const getArgs = (args) => {
  const res = {};
  const rest = args.slice(2);

  rest.forEach((value, i, array) => {
    if (value[0] == '-') {
      if (i == array.length - 1) {
        res[value.substring(1)] = true;
      } else if (array[i + 1][0] != '-') {
        res[value.substring(1)] = array[i + 1];
      } else {
        res[value.substring(1)] = true;
      }
    }

  });

  return res;
};

export {
  getArgs
};
