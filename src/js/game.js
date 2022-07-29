class Game {
  start() {
    console.log('game started');
  }
}

class GameSavingData {
}

function readGameSaving() {
}

function writeGameSaving() {
}

import Character from './domain.js'

export default Character

export {readGameSaving, writeGameSaving, Game, GameSavingData}