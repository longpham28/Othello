import TickChecker from './TickChecker';
class Ticker {
  constructor(surface) {
    this.tickChecker = new TickChecker(surface);
    this.surface = surface;
  }
  tickAble(c) {
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if (this.tickChecker.check_available(i, j, c)) return true;
      }
    }
    return false;
  }
  tick(x, y, c) {
    if (!this.tickChecker.check_available(x, y, c)) return false;
    if (this.tickChecker.check_up_left(x, y, c)) this.tick_up_left(x, y, c);
    if (this.tickChecker.check_up_middle(x, y, c)) this.tick_up_middle(x, y, c);
    if (this.tickChecker.check_up_right(x, y, c)) this.tick_up_right(x, y, c);
    if (this.tickChecker.check_left(x, y, c)) this.tick_left(x, y, c);
    if (this.tickChecker.check_right(x, y, c)) this.tick_right(x, y, c);
    if (this.tickChecker.check_down_left(x, y, c)) this.tick_down_left(x, y, c);
    if (this.tickChecker.check_down_middle(x, y, c))
      this.tick_down_middle(x, y, c);
    if (this.tickChecker.check_down_right(x, y, c))
      this.tick_down_right(x, y, c);
    this.surface[x][y] = c;
    return true;
  }
  tick_up_left(x, y, c) {
    x--;
    y--;
    while (this.surface[x][y] !== c) {
      this.surface[x][y] = c;
      x--;
      y--;
    }
  }
  tick_up_middle(x, y, c) {
    x--;
    while (this.surface[x][y] !== c) {
      this.surface[x][y] = c;
      x--;
    }
  }
  tick_up_right(x, y, c) {
    x--;
    y++;
    while (this.surface[x][y] !== c) {
      this.surface[x][y] = c;
      x--;
      y++;
    }
  }
  tick_left(x, y, c) {
    y--;
    while (this.surface[x][y] !== c) {
      this.surface[x][y] = c;
      y--;
    }
  }
  tick_right(x, y, c) {
    y++;
    while (this.surface[x][y] !== c) {
      this.surface[x][y] = c;
      y++;
    }
  }
  tick_down_left(x, y, c) {
    x++;
    y--;
    while (this.surface[x][y] !== c) {
      this.surface[x][y] = c;
      x++;
      y--;
    }
  }
  tick_down_middle(x, y, c) {
    x++;
    while (this.surface[x][y] !== c) {
      this.surface[x][y] = c;
      x++;
    }
  }
  tick_down_right(x, y, c) {
    x++;
    y++;
    while (this.surface[x][y] !== c) {
      this.surface[x][y] = c;
      x++;
      y++;
    }
  }
}
export default Ticker;
