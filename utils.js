const math = require("mathjs");

function f1({ r1, r2, r3, r4, theta2, theta3, theta4 }) {
  return (
    r1 + r4 * Math.cos(theta4) - r2 * Math.cos(theta2) - r3 * Math.cos(theta3)
  );
}

function f2({ r2, r3, r4, theta2, theta3, theta4 }) {
  return r4 * Math.sin(theta4) - r2 * Math.sin(theta2) - r3 * Math.sin(theta3);
}

function df1theta3({ f1, theta3 }) {
  const expression = "r1 + r4 * cos(θ4) - r3 * cos(θ3)";

  // Define the variable for which you want to calculate the derivative
  const variable = "θ3";

  // Calculate the derivative
  const derivative = math.derivative(expression, variable);

  console.log(
    `The derivative of ${expression} with respect to ${variable} is:`
  );
  console.log(derivative.toString());
}

function df1theta4({ f1, theta4 }) {
  return math.derivative(f1, theta4);
}

function df2theta3({ f2, theta3 }) {
  return math.derivative(f2, theta3);
}

function df2theta4({ f2, theta4 }) {
  return math.derivative(f2, theta4);
}

const calculate = ({ r1, r2, r3, r4, theta2, theta3, theta4 }) => {
  const tolerance = 1e-5;
  const maxIterations = 10;
  let iteration = 0;

  let f1Value = f1({ r1, r2, r3, r4, theta2, theta3, theta4 });
  let f2Value = f2({ r1, r2, r3, r4, theta2, theta3, theta4 });

  const df1theta3eval = df1theta3({ f1, theta3 });
  //   const df1theta4eval = df1theta4({ f1, theta4 });
  //   const df2theta3eval = df2theta3({ f2, theta3 });
  //   const df2theta4eval = df2theta4({ f2, theta4 });

  //   const A = math.matrix([
  //     [df1theta3eval, df1theta4eval],
  //     [df2theta3eval, df2theta4eval],
  //   ]);

  //   const B = math.matrix([[-f1Value], [-f2Value]]);

  //   const X = math.lusolve(A, B);

  //   console.log(X[0][0], X[1][0]);

  //   while (Math.abs(f1Value) > tolerance || Math.abs(f2Value) > tolerance) {
  //     iteration++;

  //   }

  return {
    f1Value,
    f2Value,
    df1theta3eval,
    // df1theta4eval,
    // df2theta3eval,
    // df2theta4eval,
  };
};

module.exports = {
  calculate,
};
