import { validateBars } from './examples/bars.mjs';
// import { validateCars } from './examples/cars.mjs';
// import { validatePersons } from './examples/persons.mjs';

export function demoSingle() {
  // const allowOpen = false; // TODO
  // const logDetails = false;

  const bars = validateBars(true);
  // const cars = validateCars(logDetails);
  // const persons = validatePersons(logDetails);

  console.log('bars', bars);

  if (
    bars // &&
    // cars &&
    // persons
  ) {
    console.log('success');
  }
}

demoSingle();