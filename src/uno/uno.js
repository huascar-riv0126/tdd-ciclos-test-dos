function sumarVectores(vecA, vecB) {
    let vecC = []
    for (let index = 0; index < vecA.length; index++) {
        vecC[index] = vecA[index] + vecB[index];
    }
    return vecC;
}

export default sumarVectores;
