"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
Main Class. Controls game rules, win/loss, board creation.

Compile using babel-cli: babel main.js --out-file index.js
*/

var Sweeper = function () {
  /*
  @param {number} difficulty -- 1..5.
  @todo: error checking and reporting.
  */
  function Sweeper(difficulty, rows, columns) {
    _classCallCheck(this, Sweeper);

    this.difficulty = difficulty;
    this.rows = rows;
    this.columns = columns;
    this.NumberOfBombs = this.NumberOfBombs(this.rows, this.columns, this.difficulty);
    this.gameBoard = null;
  }

  _createClass(Sweeper, [{
    key: "NumberOfBombs",
    value: function NumberOfBombs(rows, columns, difficulty) {
      var boardSize = rows * columns;
      var bombPercentile = difficulty * 10;
      return Math.min(boardSize * bombPercentile);
    }
  }]);

  return Sweeper;
}();

var example = new Sweeper(5, 5, 5);

/*
Class that colors the creation of boards and the location of
bombs.

We send messages to bomb like... did the user just step on a bomb?

*/

var Board = function () {
  /*
  @constructor
  @param {number} rows
  @param {number} columns
  @param {number} NumberOfBombs
  */
  function Board(rows, columns, NumberOfBombs) {
    _classCallCheck(this, Board);

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


  _createClass(Board, [{
    key: "_initLocationArray",
    value: function _initLocationArray() {}
  }]);

  return Board;
}();
