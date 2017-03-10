"use strict";

var Menu = React.createClass({
  displayName: "Menu",

  changetab: function changetab(e) {
    var text = e.target.innerHTML;
    this.props.changetab(text);
  },
  render: function render() {
    var pages = [];
    var self = this;

    this.props.pages.map(function (elem, index) {
      pages.push(React.createElement(
        "button",
        { key: index, onClick: self.changetab },
        elem.title
      ));
    });
    return React.createElement(
      "div",
      { className: "portfolio-menu text-center mb-50" },
      React.createElement(
        "button",
        { onClick: self.changetab, className: "active" },
        "work"
      ),
      pages,
      React.createElement(
        "button",
        { onClick: self.changetab },
        "contact"
      )
    );
  }
});