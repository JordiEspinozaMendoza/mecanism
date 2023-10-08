// // Establecer tolerancia (evaluación de las soluciones)
// const tolerancia = 1e-5;

// // Número de iteraciones iniciales y permitidas
// let iteracion = 1;
// const iteracionesmaximas = 10;

// while (Math.abs(f1()) > tolerancia || Math.abs(f2()) > tolerancia) {
//   iteracion++;

//   // Evaluar parciales
//   const df1theta3eval = df1theta3();
//   const df1theta4eval = df1theta4();
//   const df2theta3eval = df2theta3();
//   const df2theta4eval = df2theta4();

//   // Serie de Taylor
//   let deltatheta3, deltatheta4;
//   const eq1 =
//     df1theta3eval * deltatheta3 + df1theta4eval * deltatheta4 === -f1();
//   const eq2 =
//     df2theta3eval * deltatheta3 + df2theta4eval * deltatheta4 === -f2();

//   // Solución del sistema de ecuaciones lineales de 2x2
//   const sol = solve([eq1, eq2], [deltatheta3, deltatheta4]);
//   deltatheta3encontrada = vpa(sol.deltatheta3);
//   deltatheta4encontrada = vpa(sol.deltatheta4);

//   // Cálculo de los nuevos valores de ángulos
//   theta3 += deltatheta3encontrada;
//   theta4 += deltatheta4encontrada;

//   // Calcula nuevamente f1 y f2
//   const f1eval = f1();
//   const f2eval = f2();

//   if (iteracion > iteracionesmaximas) {
//     console.log(
//       "La solución no converge en la cantidad de iteraciones seleccionada",
//       iteracionesmaximas
//     );
//     break;
//   }
// }

// if (iteracion < iteracionesmaximas) {
//   console.log(
//     "Los valores de la solución en grados son: theta3= " +
//       ((theta3 * 180) / Math.PI).toFixed(3) +
//       ", theta4= " +
//       ((theta4 * 180) / Math.PI).toFixed(5)
//   );
//   console.log("Número de iteraciones: " + iteracion);
// }

const onSubmitForm = async (e) => {
  e.preventDefault();

  const r1 = document.getElementById("r1").value;
  const r2 = document.getElementById("r2").value;
  const r3 = document.getElementById("r3").value;
  const r4 = document.getElementById("r4").value;
  const theta2 = document.getElementById("theta2").value;
  const theta3 = document.getElementById("theta3").value;
  const theta4 = document.getElementById("theta4").value;

  const data = {
    r1,
    r2,
    r3,
    r4,
    theta2,
    theta3,
    theta4,
  };

  await fetch("/api/calculate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");

  form.addEventListener("submit", onSubmitForm);
});
