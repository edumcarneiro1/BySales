"use strict";

var Contact = React.createClass({
    displayName: "Contact",

    render: function render() {
        return React.createElement(
            "section",
            { className: "contact-area contact-section" },
            React.createElement(
                "div",
                { className: "container" },
                React.createElement(
                    "div",
                    { className: "row" },
                    React.createElement(
                        "div",
                        { className: "col-md-12" },
                        React.createElement(
                            "div",
                            { className: "conract-area-bottom" },
                            React.createElement(
                                "h3",
                                { className: "main-contact" },
                                "Get In Tauch"
                            ),
                            React.createElement(
                                "form",
                                { id: "contact-form", action: "#", method: "post" },
                                React.createElement(
                                    "div",
                                    { className: "row" },
                                    React.createElement(
                                        "div",
                                        { className: "col-md-6" },
                                        React.createElement(
                                            "div",
                                            { className: "main-input" },
                                            React.createElement("input", { name: "name", placeholder: "Name*", type: "text" })
                                        )
                                    ),
                                    React.createElement(
                                        "div",
                                        { className: "col-md-6" },
                                        React.createElement(
                                            "div",
                                            { className: "main-input mrg-eml mrg-contact" },
                                            React.createElement("input", { name: "email", placeholder: "Email*", type: "email" })
                                        )
                                    ),
                                    React.createElement(
                                        "div",
                                        { className: "col-md-12" },
                                        React.createElement(
                                            "div",
                                            { className: "main-input mt-20 mb-20" },
                                            React.createElement("input", { name: "subject", placeholder: "Subject*", type: "text" })
                                        )
                                    ),
                                    React.createElement(
                                        "div",
                                        { className: "col-md-12" },
                                        React.createElement(
                                            "div",
                                            { className: "text-leave2" },
                                            React.createElement("textarea", { name: "message", placeholder: "Type Your Massage......." }),
                                            React.createElement(
                                                "button",
                                                { className: "submit", type: "submit" },
                                                "Send Massage"
                                            )
                                        )
                                    )
                                )
                            ),
                            React.createElement("p", { className: "form-messege" })
                        )
                    )
                )
            )
        );
    }
});