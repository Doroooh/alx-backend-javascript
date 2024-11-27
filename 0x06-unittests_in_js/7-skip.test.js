const { expect } = require('chai');

describe('Comparing numbers', () => {
  it('should confirm that 1 equals 1', () => {
    expect(1).to.equal(1);
  });

  it('should confirm that 2 is equal to 2', () => {
    expect(2).to.equal(2);
  });

  xit('should check that 1 equals 3', () => {
    expect(1).to.equal(3);
  });

  it('should assert that 3 is equal to 3', () => {
    expect(3).to.equal(3);
  });

  it('should verify that 4 is equal to 4', () => {
    expect(4).to.equal(4);
  });

  it('should check that 5 equals 5', () => {
    expect(5).to.equal(5);
  });

  it('should confirm that 6 equals 6', () => {
    expect(6).to.equal(6);
  });

  it('should assert that 7 equals 7', () => {
    expect(7).to.equal(7);
  });
});
