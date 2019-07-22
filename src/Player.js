import TickChecker from './TickChecker';
class Player {
  constructor(char) {
    this.char = char;
    this.score = 2;
    this.active = false;
    this.type = 'Human';
  }
  setScore(s) {
    this.score = s;
  }
  setActive() {
    this.active = true;
  }
  setUnactive() {
    this.active = false;
  }
}
export default Player;

export class ComputerPlayer extends Player {
  constructor(props) {
    super(props);
    this.priorityBoard = [
      [1, 2, 2, 2, 2, 2, 2, 1],
      [2, 4, 4, 4, 4, 4, 4, 2],
      [2, 4, 3, 3, 3, 3, 4, 2],
      [2, 4, 3, 0, 0, 3, 4, 2],
      [2, 4, 3, 0, 0, 3, 4, 2],
      [2, 4, 3, 3, 3, 3, 4, 2],
      [2, 4, 4, 4, 4, 4, 4, 2],
      [1, 2, 2, 2, 2, 2, 2, 1]
    ];
    this.type = 'Computer';
  }
  updatePriorityBoard(surface) {
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if (surface[i][j] != '') {
          this.priorityBoard[i][j] = 0;
        }
      }
    }
  }
  getInput(surface) {
    this.updatePriorityBoard(surface);
    const tickChecker = new TickChecker(surface);
    if (!tickChecker.tickAble(this.char)) return [-1, -1];
    return this.getBestPosition(surface, 1);
  }
  getBestPosition(surface, pri) {
    const tickChecker = new TickChecker(surface);
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if (!tickChecker.check_available(i, j, this.char)) continue;
        if (this.priorityBoard[i][j] === pri) return [i, j];
      }
    }
    return this.getBestPosition(surface, pri + 1);
  }
}
