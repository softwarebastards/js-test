/**
 * Class for validation.
 *
 * Right now it only really has a function to validate items but we can extend this to
 * include more logic and perhaps test over API or custom rules that need to be stored.
 */
export class SchemaValidator {

  allowedTypes = ['string', 'number', 'array', 'object', 'boolean'];
  logDetails = false;

  /**
   * Validate an object to a schema.
   * Schema will be validated 1 level deep and whether values are according to the schema.
   *
   * @param {object} mySchema schema to validate
   * @param {object} testItem item to validate with schema
   * @param {boolean} logDetails log details to console or not
   * @returns boolean whether testItem has valid schema
   */
  validate(mySchema, testItem, logDetails) {
    this.logDetails = !!logDetails;
    logDetails ? console.log('validate schema', mySchema, testItem) : undefined;

    if (this.testBasicObjectValidity(mySchema, testItem, logDetails) === false) {
      return false;
    }

    if (this.testSchema(mySchema, logDetails) === false) {
      return false;
    }

    if (this.testItemToValidate(mySchema, testItem, logDetails) === false) {
      return false;
    }

    if (this.compareItemToSchema(mySchema, testItem, logDetails) === false) {
      return false;
    }
    return true;
  }

  // validate if items are even objects
  testBasicObjectValidity(mySchema, testItem, logDetails) {
    if (
      !mySchema ||
      typeof mySchema !== 'object' ||
      !testItem ||
      typeof testItem !== 'object' ||
      Object.keys(mySchema)?.length === 0 ||
      Object.values(mySchema)?.length === 0
    ) {
      logDetails ? console.log('schema or testitem no object or without values') : undefined;
      return false;
    }
    return true;
  }


  // test schema to match basics
  testSchema(mySchema, logDetails) {
    const schemaKeys = Object.keys(mySchema);
    const schemaValues = Object.values(mySchema);
    if (schemaKeys.length !== schemaValues.length) {
      logDetails ? console.log('schema keys not equal to values') : undefined;
      return false;
    }
    const notAllowedValues = schemaValues.filter(value => this.allowedTypes.indexOf(value) === -1);
    if (notAllowedValues && notAllowedValues.length > 0) {
      logDetails ? console.log('not allowed value', notAllowedValues) : undefined;
      return false;
    }
    return true;
  }

  testItemToValidate(mySchema, testItem, logDetails) {
    // test testItem
    const schemaKeys = Object.keys(mySchema);
    const testKeys = Object.keys(testItem);
    const testValues = Object.values(testItem);
    if (testKeys.length !== testValues.length) {
      logDetails ?? console.log('schema keys not equal to values');
      return false;
    } else if (
      !schemaKeys.every((val, index) => val === testKeys[index])
    ) {
      logDetails ? console.log('schema keys contents not equal to values') : undefined;
      return false;
    }
    return true;
  }

  compareItemToSchema(mySchema, testItem, logDetails) {
    // compare testItem to schema and validate
    let valid = true;
    const schemaKeys = Object.keys(mySchema);
    schemaKeys.forEach(schemaKey => {
      const type = mySchema[schemaKey];
      const value = testItem[schemaKey];
      if (typeof value !== type && type !== 'array') {
        logDetails ? console.log('not valid', schemaKey, value, typeof value, 'should be', type) : undefined;
        valid = false;
      } else if (type === 'array' && !Array.isArray(value)) {
        logDetails ? console.log('not valid', schemaKey, value, 'object wants to be array') : undefined;
        valid = false;
      } else if (type === 'object' && Array.isArray(value)) {
        logDetails ? console.log('not valid', schemaKey, value, 'array wants to be object') : undefined;
        valid = false;
      }
      // TODO: Version 2.0 - search object or array for in-depth validation too
    });

    return valid;
  }
}