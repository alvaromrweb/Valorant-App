import { isValidNameTag, hasRankDivisionChanged } from "../../src/helpers";

// isValidNameTag tests
test('Wizen#0000 is a valid nametag', () => {
  expect(isValidNameTag('Wizen#0000')).toBe(true);
});

test('empty string is not a valid nametag', () => {
  expect(isValidNameTag('')).toBe(false);
});

test('a#123 is not a valid nametag', () => {
  expect(isValidNameTag('a#123')).toBe(false);
});

test('뽀로로주스손가락맛#뽀로로주스 is a valid nametag', () => {
  expect(isValidNameTag('뽀로로주스손가락맛#뽀로로주스')).toBe(true);
});

// hasRankDivisionChanged tests
test('Rank downgrade', () => {
  const mmr = {
    mmr_change_to_last_game: -20,
    ranking_in_tier: 80
  }
  expect(hasRankDivisionChanged(mmr)).toBe(true);
});

test('Rank upgrade', () => {
  const mmr = {
    mmr_change_to_last_game: 25,
    ranking_in_tier: 10
  }
  expect(hasRankDivisionChanged(mmr)).toBe(true);
});

test('Rank stay', () => {
  const mmr = {
    mmr_change_to_last_game: -25,
    ranking_in_tier: 0
  }
  expect(hasRankDivisionChanged(mmr)).toBe(false);
});