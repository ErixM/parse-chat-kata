import { expect, test } from 'bun:test';
import { parseChat } from './index';
import { testCases } from './testCases';

/**
 * I have not found a way to test the outputs as arrays,
 * so for the moment I'm transforming them to strings with JSON.stringify.
 * Jest is a bit overkill for these simple tests and I didn't want to add
 * unneccessary packages
 */

// Step 1
test('1 sentence', () => {
  const test = testCases.test1;
  const { chat, output } = test;

  expect(JSON.stringify(parseChat(chat))).toBe(JSON.stringify(output));
});

// Step 2
test('2 sentences', () => {
  const test = testCases.test2;
  const { chat, output } = test;

  expect(JSON.stringify(parseChat(chat))).toBe(JSON.stringify(output));
});

// Step 3
test('Two customer mentions as start', () => {
  const test = testCases.test3;
  const { chat, output } = test;

  expect(JSON.stringify(parseChat(chat))).toBe(JSON.stringify(output));
});

// Step 4
test('Date splitting', () => {
  const test = testCases.test4;
  const { chat, output } = test;

  expect(JSON.stringify(parseChat(chat))).toBe(JSON.stringify(output));
});

// Step 5
test('Ignore extra dates', () => {
  const test = testCases.test5;
  const { chat, output } = test;

  expect(JSON.stringify(parseChat(chat))).toBe(JSON.stringify(output));
});

// Step 6
test('Full name', () => {
  const test = testCases.test6;
  const { chat, output } = test;

  expect(JSON.stringify(parseChat(chat))).toBe(JSON.stringify(output));
});

// Step 7
test('[Extra] missing colon after the names', () => {
  const test = testCases.test7;
  const { chat, output } = test;

  expect(JSON.stringify(parseChat(chat))).toBe(JSON.stringify(output));
});
