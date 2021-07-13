const moment = require("moment");

// Middle ware
const logger = (req, res, next) => {
  console.log(
    `${req.protocol}://${req.get("host")}${req.originUrl}: ${moment().format()}`
  );
  next();
};

module.exports = logger;
