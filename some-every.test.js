/*
Write a function called hasOddNumber which accepts an array and returns true if the array contains at least one odd number, otherwise it returns false.

Examples:
    hasOddNumber([1,2,2,2,2,2,4]) // true
    hasOddNumber([2,2,2,2,2,4]) // false
*/

describe("#hasOddNumber", function() {
  it("returns true if there is at least one odd number in the array", function() {
    expect(hasOddNumber([1, 2, 2, 2, 2, 2, 4])).toEqual(true);
  });
  it("returns false if there are no odd numbers in the array", function() {
    expect(hasOddNumber([2, 2, 2, 2, 2, 4])).toEqual(false);
  });
});


/*
Write a function called hasAZero which accepts a number and returns true if that number contains at least one zero. Otherwise, the function should return false

Examples:
    hasAZero(3332123213101232321) // true
    hasAZero(1212121) // false
*/

describe("#hasAZero", function() {
  it("returns true if the number contains at least one 0", function() {
    expect(hasAZero(33321232131012)).toEqual(true);
  });
  it("returns false if the number does not have any zeros", function() {
    expect(hasAZero(1212121)).toEqual(false);
  });
});


/*
Write a function called hasOnlyOddNumbers which accepts an array and returns true if every single number in the array is odd. If any of the values in the array are not odd, the function should return false. 

Examples:
    hasOnlyOddNumbers([1,3,5,7]) // true
    hasOnlyOddNumbers([1,2,3,5,7]) // false
*/
describe("#hasOnlyOddNumbers", function() {
  it("returns true if every number in the array is odd", function() {
    expect(hasOnlyOddNumbers([1, 3, 5, 7])).toEqual(true);
  });
  it("returns false if there is one or more even numbers ", function() {
    expect(hasOnlyOddNumbers([1, 2, 3, 5, 7])).toEqual(false);
  });
});

/*
Write a function called hasNoDuplicates which accepts an array and returns true if there are no duplicate values (more than one element in the array that has the same value as another). If there are any duplicates, the function should return false.

Examples:
    hasNoDuplicates([1,2,3,1]) // false
    hasNoDuplicates([1,2,3]) // true
*/
describe("#hasNoDuplicates", function() {
  it("returns true if there are no duplicates in the array", function() {
    expect(hasNoDuplicates([1, 2, 3, 1])).toEqual(false);
  });
  it("returns false if there are duplicates in the array", function() {
    expect(hasNoDuplicates([1, 2, 3])).toEqual(true);
  });
});

/*
Write a function called hasCertainKey which accepts an array of objects and a key, and returns true if every single object in the array contains that key. Otherwise it should return false.

Examples:
    var arr = [
        {title: "Instructor", first: 'Elie', last:"Schoppik"}, 
        {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true}, 
        {title: "Instructor", first: 'Matt', last:"Lane"}, 
        {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
    ]
    
    hasCertainKey(arr,'first') // true
    hasCertainKey(arr,'isCatOwner') // false
*/
describe("#hasCertainKey", function() {
  var arr = [
    { first: "Elie", last: "Schoppik" },
    { first: "Tim", last: "Garcia", isCatOwner: true },
    { first: "Matt", last: "Lane" },
    { first: "Colt", last: "Steele", isCatOwner: true }
  ];
  it("returns true if every object in the array contains a certain key", function() {
    expect(hasCertainKey(arr, "first")).toEqual(true);
  });
  it("returns false if every object in the array does not contain a certain key", function() {
    expect(hasCertainKey(arr, "isCatOwner")).toEqual(false);
  });
});

/*
Write a function called hasCertainValue which accepts an array of objects and a key, and a value, and returns true if every single object in the array contains that value for the specific key. Otherwise it should return false.

Examples:
    var arr = [
        {title: "Instructor", first: 'Elie', last:"Schoppik"}, 
        {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true}, 
        {title: "Instructor", first: 'Matt', last:"Lane"}, 
        {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
    ]
    
    hasCertainValue(arr,'title','Instructor') // true
    hasCertainValue(arr,'first','Elie') // false
    
*/
describe("#hasCertainValue", function() {
  var arr = [
    { title: "Instructor", first: "Elie", last: "Schoppik" },
    { title: "Instructor", first: "Tim", last: "Garcia", isCatOwner: true },
    { title: "Instructor", first: "Matt", last: "Lane" },
    { title: "Instructor", first: "Colt", last: "Steele", isCatOwner: true }
  ];
  it("returns true if every object in an array has the same value for some key", function() {
    expect(hasCertainValue(arr, "title", "Instructor")).toEqual(true);
  });
  it("returns false if every object in an array does not have the same value for some key", function() {
    expect(hasCertainValue(arr, "first", "Elie")).toEqual(false);
  });
});
