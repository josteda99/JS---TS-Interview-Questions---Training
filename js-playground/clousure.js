//easy shit but right now unusefull (?)
//Clousure:
// function autocallable that has functions inside
// to get access to that definitions and funciont I have to return it
// the scope is important
// var - let - const will be important, it will depend of the scope
// let and const (👁️ warning: the restricted access)
// var ( it doesnt matters)

const state = (() => {
  let light = "green";

  function changeRed() {
    return (light = "red");
  }

  function changeYellow() {
    return (light = "yellow");
  }

  function changeGreen() {
    return (light = "green");
  }

  function getValue() {
    return light;
  }

  return {
    changeRed,
    changeYellow,
    changeGreen,
    getValue,
  };
})();

console.log(state.getValue());
console.log(state.changeRed());
console.log(state.getValue());
console.log(state.changeYellow());
console.log(test);
