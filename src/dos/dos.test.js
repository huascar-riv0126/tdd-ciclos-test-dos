import restarVectores from "./dos";

describe('Restar', () => {
  it('deberia restar dos vectores', () => {
    expect(restarVectores([1,1], [-1,-1])).toEqual([2,2]);
  });
});
