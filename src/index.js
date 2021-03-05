import Fakerator from "fakerator";
import helper from "./utils/helper";

const fakerator = Fakerator();
const age = helper.getRandomArbitrary(1, 60);

document.querySelector("#person").textContent = `${fakerator.names.name()} is ${age} years old.`;
