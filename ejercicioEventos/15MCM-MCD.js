Math.mcd = function (a, b) {
  if (a % b == 0) {
    //console.log(b);
    return b;
  } else {
    return Math.mcd(b, a % b);
  }
};

Math.mcm = function (a, b) {
  return (a * b) / Math.mcd(a, b);
};
