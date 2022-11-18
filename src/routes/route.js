module.exports = function (expressApp) {
  expressApp.use("/api/user", require("./user_route"));
};
