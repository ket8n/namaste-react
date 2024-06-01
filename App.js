import React from "react"
import ReactDOM from "react-dom"

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "h1" }, "hi i am h1 tag"),
    React.createElement("h2", { id: "h2" }, "hi i am h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "h1" }, "hi i am h1 tag"),
    React.createElement("h2", { id: "h2" }, "hi i am h2 tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
