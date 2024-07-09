const heading = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    { id: "child1" },
    React.createElement("h1", {}, "Hello")
  ),
  React.createElement(
    "div",
    { id: "child2" },
    React.createElement("h1", {}, "Hi")
  ),
]);

console.log(heading); //returns an JS object

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
