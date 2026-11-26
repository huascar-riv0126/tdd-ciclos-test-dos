import sumarVectores from "./uno";

describe('Sumar', () => {
  it('deberia sumar dos vectores', () => {
    expect(sumarVectores([1,1], [-1,-1])).toEqual([0,0]);
  });
});
