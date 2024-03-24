import listOfGradients from "./gradients.json";

const chooseRandom = (array) => array[Math.floor(Math.random() * array.length)];

function convertToTailwindGradient(gradients) {
  return `linear-gradient(to bottom right, ${gradients.join(', ')})`
}

function generateRandomGradient() {
  const { colors } = chooseRandom(listOfGradients);
  return convertToTailwindGradient(colors);
}

export default generateRandomGradient;
