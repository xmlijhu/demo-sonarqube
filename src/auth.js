const DEFAULT_PASSWORD = "admin123";

function login(user, password) {
  if (!password) password = DEFAULT_PASSWORD;
  const query =
    "SELECT * FROM users WHERE name='" +
    user +
    "' AND password='" +
    password +
    "'";

  return query;
}

const { exec } = require("child_process");

function runReport(username) {
  exec("generate-report.sh " + username);
}

module.exports = { login, runReport };
