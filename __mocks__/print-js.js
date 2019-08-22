let printJs = jest.genMockFromModule('print-js');
printJs = jest.fn();

// printJs = jest.fn()

module.exports = printJs;
