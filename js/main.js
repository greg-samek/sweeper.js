/*
Compile using babel-cli: babel main.js --out-file index.js
*/

 import Mustache from 'mustache';

/*
Controls win/loss, holds main data regarding game.
*/

class Sweeper {
  /*
  @param {number} difficulty -- 1..5.
  @todo: error checking and reporting.
  */
  constructor(difficulty, rows, columns){
    this.difficulty = difficulty;
    this.rows = rows;
    this.columns = columns;
    this.NumberOfBombs = this.NumberOfBombs(this.rows, this.columns, this.difficulty);
  }

  NumberOfBombs(rows, columns, difficulty) {
    const boardSize = rows * columns;
    const bombPercentile = difficulty * 10;
    return Math.min(boardSize * bombPercentile);
  }

}


/*
Class that controls the creation of boards and the location of
bombs.

We send messages to board like... did the user just step on a bomb?
*/

class Board {

  /*
  @constructor
  @param {number} rows
  @param {number} columns
  @param {number} NumberOfBombs
  */

  constructor(rows, columns, NumberOfBombs) {
    this.rows = rows;
    this.columns = columns;
    this.size = rows * columns;
    this.NumberOfBombs = NumberOfBombs;
  }

  /*
    @param {number} NumberOfBombs
    @param {number} rows
    @param {number} columns
    @return {array} boardLocationArray
  */

  initLocationArray() {
    const size = this.size;
    const NumberOfBombs = this.NumberOfBombs;
    let boardLocationArray = new Array(size);
    let count = 0;

    while ( count < NumberOfBombs ) {
      const location = Math.floor(Math.random() * size);
      const value = boardLocationArray[location];
      console.log(value);

      if (!value === 'B') {
        boardLocationArray[location] = 'B';
        count++;
      }

    }

    return boardLocationArray;

  }

}


/*
Pure function that renders boards using mustache templates.
*/
function render() {

}


/*
Responds to all dom event. Bound to dom in main function runner.
*/

/*
The main runner function. Source of global state. Dependency injector.
*/

(() => {
  const example = new Sweeper(5, 5, 5);
  let exampleBoard = new Board(example.rows, example.columns, example.NumberOfBombs);
  exampleBoard.boardLocationArray = exampleBoard.initLocationArray();
  console.log(exampleBoard.boardLocationArray);
})()


