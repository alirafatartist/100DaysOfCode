const Thinkful_LogicDrills_Traffic_light = (str) => {
  if (str == "green") {
    return "yellow";
  } else if (str == "yellow") {
    return "red";
  } else {
    return "green";
  }
};

console.log(Thinkful_LogicDrills_Traffic_light("yellow")); //red

// Way2
const Thinkful_LogicDrills_Traffic_light2 = (str) => {
  const lights = ["green", "yellow", "red"];
  return lights.indexOf(str) == 2 ? lights[0] : lights[lights.indexOf(str) + 1];
};

console.log(Thinkful_LogicDrills_Traffic_light2("red")); //green

// Way3
const Thinkful_LogicDrills_Traffic_light3 = (str) => {
  return str === "green" ? "yellow" : str === "yellow" ? "red" : "green";
};

console.log(Thinkful_LogicDrills_Traffic_light3("green")); //yellow
