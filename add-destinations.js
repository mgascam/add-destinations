function addDestination(data) {
  return function(type) {
    switch (type) {
      case 'fasterPayments':
        if (data.bank_identifier_type === 'Sort Code') {
          return {
            type: 'fasterPayments',
            sortCode: data.bank_identifier
          }
        }
        case 'SEPA':
        if (data.iban) {
          return {
            type: 'SEPA',
            iban: data.iban
          }
        }
    }
  }
}

module.exports = function(transferData) {
  return ['fasterPayments', 'SEPA'].map(addDestination(transferData));
}