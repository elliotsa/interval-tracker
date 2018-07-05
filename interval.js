export const interval = {
  intervals: [],
  make(fn, delay, ...rest) {
    const newInterval = setInterval.apply(window, [fn, delay, ...rest]);
    this.intervals.push(newInterval);
    return newInterval;
  },
  clear(id) {
    return clearInterval(id);
  },
  clearAll() {
    this.intervals.forEach(interval => clearInterval(interval));
    this.intervals = [];
  }
};
