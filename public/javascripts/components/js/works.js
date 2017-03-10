"use strict";

var Works = React.createClass({
  displayName: "Works",

  render: function render() {
    var images = [];

    this.props.works.map(function (elem, index) {
      images.push(React.createElement(
        "div",
        { key: index, className: "col-md-4 col-sm-6 col-xs-12 grid-item" },
        React.createElement(
          "div",
          { className: "portfolio hover-style" },
          React.createElement(
            "div",
            { className: "portfolio-img" },
            React.createElement("img", { src: elem.image, alt: "" }),
            React.createElement(
              "div",
              { className: "portfolio-view" },
              React.createElement(
                "a",
                { className: "img-poppu", href: elem.image },
                React.createElement("span", { className: "plus" })
              )
            ),
            React.createElement(
              "div",
              { className: "portfolio-title title-style-1" },
              React.createElement(
                "h3",
                null,
                React.createElement(
                  "a",
                  { href: "#" },
                  elem.name
                )
              ),
              React.createElement(
                "span",
                null,
                elem.description
              )
            )
          )
        )
      ));
    });

    return React.createElement(
      "div",
      { className: "row" },
      React.createElement(
        "div",
        { className: "grid" },
        images
      )
    );
  }
});