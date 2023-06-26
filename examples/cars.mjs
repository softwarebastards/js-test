import { SchemaValidator } from '../schema-validator.mjs';

const carSchema = {
    brand: 'string',
    type: 'string',
    milage: 'number',
    extras: 'array',
};

// Validates true
const carObj = {
    brand: 'Mazda',
    type: 'MX5 NB 1.8',
    milage: 199999.99,
    extras: [
        '2001 Special Edition'
    ],
};

// Validates false
const carObjF = {
    brand: 'BMW',
    type: '335',
    milage: '100000', // < No number
    extras: [
        'LCI',
        'KW Coilovers',
    ],
};

/**
 * Validate carSchema with 2 examples
 * @param {boolean} logDetails log some more details on what was validated
 * @returns boolean indicating the objects are properly validated
 */
export function validateCars(logDetails) {
    const validator = new SchemaValidator();
    const carObjResult = validator.validate(carSchema, carObj, logDetails);
    const carObjFResult = validator.validate(carSchema, carObjF, logDetails);
    if (logDetails) {
        console.log('validate: ', 'carObj', carObj, carObjResult);
        console.log('validate: ', 'carObjF', carObjF, carObjFResult);
    }
    if (
        carObjResult === true &&
        carObjFResult === false
    ) {
        console.log('---carSchema valid---');
        return true;
    } else {
        console.log('---carSchema invalid---');
        return false;
    }
}
