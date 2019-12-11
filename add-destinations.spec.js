const addDestinations = require('./add-destinations');

describe('add destinations', () => {
  it('should be Function', () => {
    expect(addDestinations).toBeInstanceOf(Function)
  });
  it('should be Function well', () => {
    const data = {
      iban: "an Iban",
      bank_identifier_type: 'Sort Code',
      bank_identifier: 'a bank identifier'
    }
    const result = addDestinations(data);
    expect(result).toStrictEqual([{"sortCode": "a bank identifier", "type": "fasterPayments"}, {"iban": "an Iban", "type": "SEPA"}]);
  });
  it('should be Function well II', () => {
    const data = {
      iban: "an Iban",
    }
    const result = addDestinations(data);
    expect(result).toBe([{iban: "an Iban", type: "SEPA"}]);
  });

});