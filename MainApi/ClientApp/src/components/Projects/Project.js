"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var s = require("./project.module.scss");
var Project = function (props) {
    var name = props.name, description = props.description, status = props.status;
    return (React.createElement("div", { className: s.projects__item },
        React.createElement("div", { className: s.project__container },
            React.createElement("div", { className: s.project__image },
                React.createElement("img", { src: "https://cdn.pixabay.com/photo/2015/03/30/20/33/heart-700141__480.jpg", alt: "Image not found!" })),
            React.createElement("div", { className: s.project__name },
                React.createElement("h2", null, name)),
            React.createElement("div", { className: s.project__status },
                React.createElement("h2", null,
                    "Status: ",
                    status)),
            React.createElement("div", { className: s.project__btn },
                React.createElement("button", null, "Read More")))));
};
exports.default = Project;
//# sourceMappingURL=Project.js.map