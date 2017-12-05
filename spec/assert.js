var assert = {
  isTrue: function(assertionToCheck) {
      if(!assertionToCheck) {
        throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
      } else {
        console.log("Assertion passed: " + assertionToCheck + " is truthy")
      }
  },
  isInstanceOf: function(object, objectType) {
    if(!object instanceof objectType) {
      throw new Error(`Assertion failed: ${object.constructor.name} is not a type of ${objectType.name}`);
    } else {
      console.log(`Assertion passed: Object is a type of ${objectType.name}`)
    }
  },
  arrayIncludes: function(array, value) {
    if(!array.includes(value)) {
      throw new Error(`Assertion failed: Array does not include ${value}`)
    } else {
      console.log(`Assertion passed: Array includes ${value}`)
    }
  }
};
