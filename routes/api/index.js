//req controller
const apiPaths = {};

apiPaths.sum = (req, res) => {
  let sum = 1 + 2;
  let response = {
    sum: sum
  }
  return res.send(response);
};

apiPaths.sub = (req, res) => {
  let sum = 1 - 2;
  let response = {
    sum: sum
  }
  return res.send(response);
};

module.exports = apiPaths;