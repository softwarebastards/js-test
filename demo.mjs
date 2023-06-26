import open from 'open';
import { validateBars } from './examples/bars.mjs';
import { validateCars } from './examples/cars.mjs';
import { validatePersons } from './examples/persons.mjs';

export async function demo() {
  const allowOpen = true;
  const logDetails = true;

  const successVideo = 'https://www.youtube.com/watch?v=bxqLsrlakK8';
  const sadVideo = 'https://www.youtube.com/watch?v=CQeezCdF4mk';

  const bars = validateBars(logDetails);
  const cars = validateCars(logDetails);
  const persons = validatePersons(logDetails);

  if (bars && cars && persons) {
    console.log('=======validator complete, all systems go========');
    if (allowOpen) {
      await open(successVideo); // happy
    }
  } else {
    console.log('=======something went wrong========')
    console.log('details: ', 'bars', bars, 'cars', cars, 'persons', persons);
    if (allowOpen) {
      await open(sadVideo); // sad
    }
  }
}

demo();