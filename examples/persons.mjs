import { SchemaValidator } from '../schema-validator.mjs';

const personSchema = {
    name: 'string',
    age: 'number',
    siblings: 'array',
    metaData: 'object',
    active: 'boolean',
 };

// Validates true
const personObj = {
    name: 'James',
    age: 25,
    siblings: ['Johnnathan'],
    metaData: {},
    active: true,
};

// Validates false
const personObjF = {
    name: 'James',
    age: 25,
    active: true,
};

/**
 * Validate personsSchema with 2 examples
 * @param {boolean} logDetails log some more details on what was validated
 * @returns boolean indicating the objects are properly validated
 */
export function validatePersons(logDetails) {
    const validator = new SchemaValidator();
    const personObjResult = validator.validate(personSchema, personObj, logDetails);
    const personObjFResult = validator.validate(personSchema, personObjF, logDetails);
    if (logDetails) {
        console.log('validate: ', 'personObj', personObj, personObjResult);
        console.log('validate: ', 'personObjF', personObjF, personObjFResult);
    }
    if (
        personObjResult === true &&
        personObjFResult === false
    ) {
        console.log('---personSchema valid---');
        return true;
    } else {
        console.log('---personSchema invalid---');
        return false;
    }
}