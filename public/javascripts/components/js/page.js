"use strict";

var Page = React.createClass({
  displayName: "Page",

  render: function render() {
    return React.createElement(
      "section",
      { className: "portfolio-details page-section" },
      React.createElement(
        "div",
        { className: "container" },
        React.createElement(
          "div",
          { className: "row pt-10" },
          React.createElement(
            "div",
            { className: "col-md-8 col-md-offset-2" },
            React.createElement(
              "div",
              { className: "project-desc  body-section" },
              this.props.page.body
            ),
            React.createElement(
              "div",
              { className: "post-share" },
              React.createElement(
                "ul",
                null,
                React.createElement(
                  "li",
                  null,
                  "Share: "
                ),
                React.createElement(
                  "li",
                  null,
                  React.createElement(
                    "a",
                    { href: "#" },
                    React.createElement("i", { className: "fa fa-facebook" })
                  )
                ),
                React.createElement(
                  "li",
                  null,
                  React.createElement(
                    "a",
                    { href: "#" },
                    React.createElement("i", { className: "fa fa-twitter" })
                  )
                ),
                React.createElement(
                  "li",
                  null,
                  React.createElement(
                    "a",
                    { href: "#" },
                    React.createElement("i", { className: "fa fa-instagram" })
                  )
                )
              )
            )
          )
        )
      )
    );
  }
});