"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var s = require("./project.module.scss");
var Project = function (props) {
    var name = props.name, description = props.description, isCompleted = props.isCompleted;
    console.log(isCompleted);
    return (React.createElement("div", { className: s.projects__item },
        React.createElement("div", { className: s.project__container },
            React.createElement("div", { className: s.project__image },
                React.createElement("img", { src: "https://ollmlb.org/wp-content/uploads/goodness.jpg", alt: "Image not found!" })),
            React.createElement("div", { className: s.project__name },
                React.createElement("h2", null, name)),
            React.createElement("div", { className: s.project__status },
                React.createElement("h2", null,
                    !isCompleted && "Активний проект",
                    isCompleted && "Завершений проект")),
            React.createElement("div", { className: s.project__btn },
                React.createElement("button", null, "Read More")))));
};
exports.default = Project;
//# sourceMappingURL=Project.js.map