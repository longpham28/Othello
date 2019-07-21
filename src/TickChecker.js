class TickChecker {
  constructor(surface) {
    this.surface = surface;
  }
  check_available(x, y, c) {
    const surface = this.surface;
    if (surface[x][y] !== '') return false;
    if (
      this.check_up_left(x, y, c) ||
      this.check_up_middle(x, y, c) ||
      this.check_up_right(x, y, c) ||
      this.check_left(x, y, c) ||
      this.check_right(x, y, c) ||
      this.check_down_left(x, y, c) ||
      this.check_down_middle(x, y, c) ||
      this.check_down_right(x, y, c)
    ) {
      return true;
    }
    return false;
  }
  check_up_left(x, y, c) {
    const surface = this.surface;
    if (x < 2 || y < 2) return false;
    if (surface[x - 1][y - 1] === '' || surface[x - 1][y - 1] === c)
      return false;
    let i = x - 2;
    let j = y - 2;
    while (i >= 0 && j >= 0) {
      if (surface[i][j] === '') return false;
      if (surface[i][j] === c) return true;
      i--;
      j--;
    }
    return false;
  }
  check_up_middle(x, y, c) {
    const surface = this.surface;
    if (x < 2) return false;
    if (surface[x - 1][y] === '' || surface[x - 1][y] === c) return false;
    let i = x - 2;
    let j = y;
    while (i >= 0) {
      if (surface[i][j] === '') return false;
      if (surface[i][j] === c) return true;
      i--;
    }
    return false;
  }
  check_up_right(x, y, c) {
    const surface = this.surface;
    if (x < 2 || y > surface[x].length - 3) return false;
    if (surface[x - 1][y + 1] === '' || surface[x - 1][y + 1] === c)
      return false;
    let i = x - 2;
    let j = y + 2;
    while (i >= 0 && j < surface[i].length) {
      if (surface[i][j] === '') return false;
      if (surface[i][j] === c) return true;
      i--;
      j++;
    }
    return false;
  }
  check_left(x, y, c) {
    const surface = this.surface;
    if (y < 2) return false;
    if (surface[x][y - 1] === '' || surface[x][y - 1] === c) return false;
    let i = x;
    let j = y - 2;
    while (j >= 0) {
      if (surface[i][j] === '') return false;
      if (surface[i][j] === c) return true;
      j--;
    }
    return false;
  }
  check_right(x, y, c) {
    const surface = this.surface;
    if (y > surface[x].length - 3) return false;
    if (surface[x][y + 1] === '' || surface[x][y + 1] === c) return false;
    let i = x;
    let j = y + 2;
    while (j < surface[i].length) {
      if (surface[i][j] === '') return false;
      if (surface[i][j] === c) return true;
      j++;
    }
    return false;
  }
  check_down_left(x, y, c) {
    const surface = this.surface;
    if (x > surface.length - 3 || y < 2) return false;
    if (surface[x + 1][y - 1] === '' || surface[x + 1][y - 1] === c)
      return false;
    let i = x + 2;
    let j = y - 2;
    while (i < surface.length && j >= 0) {
      if (surface[i][j] === '') return false;
      if (surface[i][j] === c) return true;
      i++;
      j--;
    }
    return false;
  }
  check_down_middle(x, y, c) {
    const surface = this.surface;
    if (x > surface.length - 3) return false;
    if (surface[x + 1][y] === '' || surface[x + 1][y] === c) return false;
    let i = x + 2;
    let j = y;
    while (i < surface.length) {
      if (surface[i][j] === '') return false;
      if (surface[i][j] === c) return true;
      i++;
    }
    return false;
  }
  check_down_right(x, y, c) {
    const surface = this.surface;
    if (x > surface.length - 3 || y > surface[x].length - 3) return false;
    if (surface[x + 1][y + 1] === '' || surface[x + 1][y + 1] === c)
      return false;
    let i = x + 2;
    let j = y + 2;
    while (i < surface.length && j < surface[i].length) {
      if (surface[i][j] === '') return false;
      if (surface[i][j] === c) return true;
      i++;
      j++;
    }
    return false;
  }
}
export default TickChecker;
