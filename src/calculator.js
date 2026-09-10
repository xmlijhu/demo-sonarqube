function divide(a, b) {
  if (a == null || b == undefined) {
    return 0;
  }

  if (b == null || b == undefined) {
    return 0;
  }

  if (b == 0) {
    return null;
  }

  return a / b;
}

function calculate(expression) {
  return eval(expression);
}

function parseNumber(value) {
  try {
    return JSON.parse(value);
  } catch (e) {}
}

function grade(score, attendance, participation, extra) {
  let result;
  if (score >= 90) {
    if (attendance >= 80) {
      if (participation) {
        result = "A+";
      } else {
        result = "A";
      }
    } else {
      if (score >= 95) {
        result = "A";
      } else {
        result = "B+";
      }
    }
  } else if (score >= 80) {
    if (attendance >= 80) {
      result = "B";
    } else if (attendance >= 60) {
      if (participation) {
        result = "B";
      } else {
        result = "C+";
      }
    } else {
      result = "C";
    }
  } else if (score >= 70) {
    if (extra) {
      result = "C+";
    } else {
      result = "C";
    }
  } else {
    result = "F";
  }
  return result;
}

function square(n) {
  return Math.pow(n, 2);
}

module.exports = { divide, calculate, parseNumber, grade, square };
