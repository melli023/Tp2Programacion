//Parte 1
let registros = [
    { patente: "AB123CD", velocidad: 120, tipo: "auto", km: 150 },
    { patente: "XY987ZW", velocidad: 95, tipo: "camion", km: 300 },
    { patente: "MN456GH", velocidad: 135, tipo: "auto", km: 80 },
    { patente: "QR789JK", velocidad: 88, tipo: "moto", km: 45 },
    { patente: "ST012LM", velocidad: 125, tipo: "auto", km: 200 }
];

let reporteMultas = registros.map(registro => {

    let monto;

    if (registro.velocidad <= 110) {
        monto = 0;
    } else if (registro.velocidad <= 130) {
        monto = 5000;
    } else {
        monto = 10000;
    }

    return {
        patente: registro.patente,
        monto: monto
    };

});

console.log(reporteMultas);

//Parte 2
let infractores = registros.filter(registro => {
    return registro.velocidad > 110;
});

console.log(infractores);

let patentesInfractores = infractores.map(registro => {
    return registro.patente;
});

console.log("Cantidad de infractores:", infractores.length);
console.log("Patentes:", patentesInfractores);

//Parte 3

let totalKm = registros.reduce((acumulador, registro) => {
    return acumulador + registro.km;
}, 0);

console.log("Total de kilómetros:", totalKm);

let recaudacion = reporteMultas.reduce((acumulador, multa) => {
    return acumulador + multa.monto;
}, 0);

console.log("Recaudación total:", recaudacion);

console.log(`La flota recorrió ${totalKm} km y generó $${recaudacion} en multas.`);