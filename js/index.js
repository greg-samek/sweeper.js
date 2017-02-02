'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     Compile using babel-cli: babel main.js --out-file index.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     */

var _mustache = require('mustache');

var _mustache2 = _interopRequireDefault(_mustache);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
Controls win/loss, holds main data regarding game.
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
  }

  _createClass(Sweeper, [{
    key: 'NumberOfBombs',
    value: function NumberOfBombs(rows, columns, difficulty) {
      var boardSize = rows * columns;
      var bombPercentile = difficulty * 10;
      return Math.min(boardSize * bombPercentile);
    }
  }]);

  return Sweeper;
}();

/*
Class that controls the creation of boards and the location of
bombs.

We send messages to board like... did the user just step on a bomb?
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
    this.size = rows * columns;
    this.NumberOfBombs = NumberOfBombs;
  }

  /*
    @param {number} NumberOfBombs
    @param {number} rows
    @param {number} columns
    @return {array} boardLocationArray
  */

  _createClass(Board, [{
    key: 'initLocationArray',
    value: function initLocationArray() {
      var size = this.size;
      var boardLocationArray = new Array(size);

      var count = 0;

      while (count < size) {
        var location = Math.random(size);
        var value = boardLocationArray[location];

        if (!value === 'B') {
          boardLocationArray[location] = 'B';
          count++;
        }
      }
    }
  }]);

  return Board;
}();

/*
Pure function that renders boards using mustache templates.
*/


function render() {}

/*
Responds to all dom event. Bound to dom in main function runner.
*/

/*
The main runner function. Source of global state. Dependency injector.
*/

(function () {
  var example = new Sweeper(5, 5, 5);
  var exampleBoard = new Board(example.rows, example.columns, example.NumberOfBombs);
  exampleBoard.board = exampleBoard.initLocationArray();
  console.log(exampleBoard.boardLocationArray);
})();
