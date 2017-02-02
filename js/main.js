/*
Main Class. Controls game rules, win/loss, board creation.

Compile using babel-cli: babel main.js --out-file index.js
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
    this.gameBoard = null;
  }

  NumberOfBombs(rows, columns, difficulty) {
    const boardSize = rows * columns;
    const bombPercentile = difficulty * 10;
    return Math.min(boardSize * bombPercentile);
  }

}

const example = new Sweeper(5, 5, 5);


/*
Class that colors the creation of boards and the location of
bombs.

We send messages to bomb like... did the user just step on a bomb?

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
    this.NumberOfBombs = NumberOfBombs;
    this.boardLocationArray = _initLocationArray(rows, columns, NumberOfBombs);
  }

  /*
    @param {number} NumberOfBombs
    @param {number} rows
    @param {number} columns
    @return {array} boardLocationArray
  */
  _initLocationArray() {



  }




}

