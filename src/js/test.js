import healthValue from './app.js'

import {sortHeroes} from './app.js'

test('значение уровня жизни игрового персонажа - healthy', () => {

	const input = {name: 'Маг', health: 90};
	const expected = "healthy";
	const received = healthValue(input);

	expect(received).toBe(expected);
});

test('значение уровня жизни игрового персонажа - wounded', () => {

	const input = {name: 'Маг', health: 50};
	const expected = "wounded";
	const received = healthValue(input);

	expect(received).toBe(expected);
});

test('значение уровня жизни игрового персонажа - critical', () => {

	const input = {name: 'Маг', health: 14};
	const expected = "critical";
	const received = healthValue(input);

	expect(received).toBe(expected);
});

test('сортировка персонажей по уровню жизни - уровень первого больше', () => {

	const input = [
	  {name: 'маг', health: 100},
	  {name: 'лучник', health: 80},
	];
	const expected = [
	  {name: 'маг', health: 100},
	  {name: 'лучник', health: 80},
	];
	const received = sortHeroes(input);

	expect(received).toEqual(expected);
});

test('сортировка персонажей по уровню жизни - уровень второго больше', () => {

	const input = [
	  {name: 'мечник', health: 10},
	  {name: 'маг', health: 100},
	];
	const expected = [
	  {name: 'маг', health: 100},
	  {name: 'мечник', health: 10},
	];
	const received = sortHeroes(input);

	expect(received).toEqual(expected);
});

test('сортировка персонажей по уровню жизни - персонажи с одинаковым уровнем', () => {

	const input = [
	  {name: 'мечник', health: 100},
	  {name: 'маг', health: 100},
	];
	const expected = [
	  {name: 'мечник', health: 100},
	  {name: 'маг', health: 100},
	];
	const received = sortHeroes(input);

	expect(received).toEqual(expected);
});