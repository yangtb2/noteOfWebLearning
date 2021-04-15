"use strict";
class Animation {
  constructor(el, timeout_ms, increment) {
    this.el = el;
    this.defaultHeight = this.height;
    this.timeout_ms = timeout_ms || 10;
    this.increment = increment || 1;
  }
  get height() {
    return window.getComputedStyle(this.el).height.slice(0, -2) * 1;
  }
  set height(value) {
    this.el.style.height = (value < 0 ? 0 : value) + "px";
  }
  set increment(value) {
    if (typeof value == "number") {
      this.increment_px = value;
    } else if (typeof value == "string" && /\d+%$/.test(value)) {
      this.increment_px = (this.defaultHeight / 100.0) * value.slice(0, -1);
    } else {
      throw Error("increment格式不正确");
    }
  }
  hidden(callback) {
    let am = setInterval(() => {
      this.height = this.height - this.increment_px;
      if (this.height <= 0) {
        clearInterval(am);
        callback && callback();
      }
    }, this.timeout_ms);
  }
  show() {
    let am = setInterval(() => {
      if (this.height >= this.defaultHeight) {
        clearInterval(am);
        return;
      }
      this.height = this.height + this.increment_px;
    }, this.timeout_ms);
  }
}

class Slider {
  constructor(el, link, section, timeout = 10, increment = "1%") {
    this.el = document.querySelector(el);
    this.links = this.el.querySelectorAll(link);
    this.panels = [...this.el.querySelectorAll(section)].map(
      (item) => new Panel(item, timeout, increment)
    );
    this.bind();
  }
  bind() {
    this.links.forEach((element, index) => {
      element.addEventListener("click", () => this.action(index));
    });
  }
  action(index) {
    Panel.hiddenAll(Panel.filter(this.panels, index), () =>
      this.panels[index].show()
    );
  }
  init(index, timeout, increment) {
    if (Panel.count > 0) return;
    Panel.filter(this.panels, index).forEach((item) => (item.height = 0));
    timeout && this.setTime(timeout);
    increment && this.setIncrement(increment);
  }
  setIncrement(value) {
    this.panels.forEach((item) => (item.increment = value));
  }
  setTime(value) {
    this.panels.forEach((item) => (item.timeout_ms = value));
  }
}

class Panel extends Animation {
  constructor(el, timeout_ms, increment) {
    super(...arguments);
  }
  static count = 0;
  static hiddenAll(els, callback) {
    if (Panel.count > 0) {
      return;
    }
    els.forEach((el) => {
      Panel.count++;
      el.hidden(() => Panel.count--);
    });
    callback && callback();
  }
  static filter(els, i) {
    return els.filter((item, index) => index != i);
  }
}
