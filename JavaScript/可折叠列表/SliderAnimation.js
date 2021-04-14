"use strict";
    class Animation {
      constructor(el) {
        this.el = el;
        this.defaultHeight = this.height;
      }
      get height() {
        return window.getComputedStyle(this.el).height.slice(0, -2) * 1;
      }
      set height(value) {
        this.el.style.height = value + "px";
      }
      hidden(callback) {
        let am = setInterval(() => {
          this.height = this.height - 1;
          if (this.height <= 0) {
            clearInterval(am);
            callback && callback();
            // console.log(Panel.count);
          }
        }, 10);
      }
      show() {
        let am = setInterval(() => {
          if (this.height >= this.defaultHeight) {
            clearInterval(am);
            return;
          }
          this.height = this.height + 1;
        }, 10);
      }
    }

    class Slider {
      constructor(el, link, section) {
        this.el = document.querySelector(el);
        this.links = this.el.querySelectorAll(link);
        this.links.forEach((element, index) => {
          element.addEventListener("click", () => this.action(index));
        });
        this.panels = [...this.el.querySelectorAll(section)].map(
          (item) => new Panel(item)
        );
      }
      action(index) {
        Panel.hiddenAll(Panel.filter(this.panels, index), () =>
          this.panels[index].show()
        );
      }
    }

    class Panel extends Animation {
      constructor(el) {
        super(el);
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