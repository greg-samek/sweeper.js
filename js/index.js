"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
Main Class. Controls game rules, win/loss, board creation.
*/

var Sweeper = function Sweeper() {
  _classCallCheck(this, Sweeper);

  this.difficulty = difficulty;
};

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
  function Board() {
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
