import { SchemaValidator } from '../schema-validator.mjs';

const barSchema = {
    name: 'string',
    address: 'string',
    drinks: 'object',
};

// Validates true
const barObj = {
    name: 'Jimmys drinks',
    address: 'Somewhere over the rainbow',
    drinks: {
        beer: ['Straffe Hendrik', 'Rochefort', 'St Bernard'],
    },
};

// Validates false
const barObjF = {
    name: 'Sjonnies',
    address: 'Centrum 001',
    drinks: [ // < No object
        'Heineken',
    ]
};

/**
 * Validate barSchema with 2 examples
 * @param {boolean} logDetails log some more details on what was validated
 * @returns boolean indicating the objects are properly validated
 */
export function validateBars(logDetails) {
    const validator = new SchemaValidator();
    const barObjResult = validator.validate(barSchema, barObj, logDetails);
    const barObjFResult = validator.validate(barSchema, barObjF, logDetails);
    if (logDetails) {
        console.log('validate: ', 'barObj', barObj, barObjResult);
        console.log('validate: ', 'barObjF', barObjF, barObjFResult);
    }
    if (
        barObjResult === true &&
        barObjFResult === false
    ) {
        console.log('---barSchema valid---');
        return true;
    } else {
        console.log('---barSchema invalid---');
        return false;
    }
}