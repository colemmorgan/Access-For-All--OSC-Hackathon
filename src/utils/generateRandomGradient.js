import listOfGradients from "./gradients.json";

const chooseRandom = (array) => array[Math.floor(Math.random() * array.length)];

function convertToTailwindGradient(gradients) {
  if (gradients.length === 2)
    return `from-[${gradients[0]}] to-[${gradients[1]}]`;

  const middleGradients = gradients.slice(1, gradients.length - 1);
  const middleGradientsString = middleGradients
    .map((m) => `via-[${m}]`)
    .join(" ");

  return `from-[${gradients[0]}] ${middleGradientsString} to-[${gradients[1]}]`;
}

function generateRandomGradient() {
  const { colors } = chooseRandom(listOfGradients);
  return convertToTailwindGradient(colors);
}

export default generateRandomGradient;
