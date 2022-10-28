import * as sigkey from '../index';

test('Get key from int', () => {
  expect(sigkey.get(1)).toBe('000001');
});

test('Get key from int with length 10', () => {
  expect(sigkey.get(1, 10)).toBe('0000000001');
});

test('Get key from string', () => {
  expect(sigkey.get(10)).toBe('000010');
});

test('Get key from string with length 10', () => {
  expect(sigkey.get(10)).toBe('000010');
});

test('Parse key', () => {
  expect(sigkey.parse('123456')).toBe(123456);
});

test('Increment key', () => {
  expect(sigkey.inc('000099')).toBe('000100');
});

test('Increment key with length 10', () => {
  expect(sigkey.inc('0000000099')).toBe('0000000100');
});

test('Decrement key', () => {
  expect(sigkey.dec('000100')).toBe('000099');
});

test('Decrement key with length 10', () => {
  expect(sigkey.dec('0000000100')).toBe('0000000099');
});
