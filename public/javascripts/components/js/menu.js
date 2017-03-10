"use strict";

var Menu = React.createClass({
  displayName: "Menu",

  render: function render() {
    var pages = [];
    this.props.pages.map(function (elem, index) {
      pages.push(React.createElement(
        "button",
        null,
        elem.title
      ));
    });
    return React.createElement(
      "div",
      { className: "portfolio-menu text-center mb-50" },
      React.createElement(
        "button",
        { className: "active" },
        "WORK"
      ),
      pages,
      React.createElement(
        "button",
        null,
        "CONTACT"
      )
    );
  }
});