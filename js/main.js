/*
Main Class. Controls game rules, win/loss, board creation.
*/

class Sweeper {
  constructor(){
    this.difficulty = difficulty;
  }


}



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
  constructor() {
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

