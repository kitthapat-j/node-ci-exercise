// test/index.test.js
import { add, runCommand } from '../index.js';
import { assert } from 'chai';

describe('add()', () => {
  it('should return the sum of two numbers', () => {
    const result = add(2, 3);
    assert.equal(result, 5);
  });

  it('should throw a TypeError if inputs are not numbers', () => {
    assert.throws(() => add('a', 2), TypeError, 'Inputs must be numbers');
  });
});

describe('runCommand()', () => {
  it('should run a command without errors', (done) => {
    // This is a basic test and may not catch the vulnerability itself
    runCommand('hello world');
    setTimeout(() => {
      done();
    }, 100);
  });
});