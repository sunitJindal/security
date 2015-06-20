var hashing = require("../crypto/hashing")

/**
 * Generate a coma separated list of all possible 10000 combinations.
 * Time taken on tp create entire list is MacBook pro is < 5 ms. Time may vary machine to machine
 */
exports.generate4DigitPin = function () {
  var startTime = new Date(),
  digitCount = 4,

  pinArr = [],
  timeToGeneratePin,
  timeToPrintList;

  for (var firstDigit = 0; firstDigit <= 9; firstDigit++) {
    for (var secondDigit = 0; secondDigit <= 9; secondDigit++) {
      for (var thirdDigit = 0; thirdDigit <= 9; thirdDigit++) {
        for (var fourthDigit = 0; fourthDigit <= 9; fourthDigit++) {
          pinArr.push(_getPinString(firstDigit, secondDigit, thirdDigit, fourthDigit))
        }
      }
    }
  }

  timeToGeneratePin = new Date() - startTime;
  console.log(pinArr.join(","))
  timeToPrintList = new Date() -startTime -timeToGeneratePin
  console.log("Time taken to generate pin : " + timeToGeneratePin)
  console.log("Time taken to print list : " + timeToPrintList)
}


/**
 * Generate a coma separated list of all possible 10000 combinations in encrypted form.
 * Time taken on tp create entire list is MacBook pro is < 50 ms. Time may vary machine to machine
 */
exports.hashed4DigitPin = function(){
  var startTime = new Date(),
      digitCount = 4,

      pinArr = [],
      timeToGeneratePin,
      timeToPrintList;

  for (var firstDigit = 0; firstDigit <= 9; firstDigit++) {
    for (var secondDigit = 0; secondDigit <= 9; secondDigit++) {
      for (var thirdDigit = 0; thirdDigit <= 9; thirdDigit++) {
        for (var fourthDigit = 0; fourthDigit <= 9; fourthDigit++) {
          pinArr.push(_sha256(_getPinString(firstDigit, secondDigit, thirdDigit, fourthDigit)))
        }
      }
    }
  }

  timeToGeneratePin = new Date() - startTime;
  console.log(pinArr.join(","))
  timeToPrintList = new Date() -startTime -timeToGeneratePin
  console.log("Time taken to generate pin : " + timeToGeneratePin)
  console.log("Time taken to print list : " + timeToPrintList)
}

/**
 * Generate a coma separated list of all possible 10000 combinations in encrypted form.
 * Time taken on tp create entire list is MacBook pro is < 50 ms.
 * Time taken to find actual value is ~1 ms
 * Time may vary machine to machine
 */
exports.getValueForHashOf4DigitPin = function(hash){
  var startTime = new Date(),
      digitCount = 4,

      pinObj = {},
      realValue,
      timeToGeneratePin,
      timeToLocatePin;

  for (var firstDigit = 0; firstDigit <= 9; firstDigit++) {
    for (var secondDigit = 0; secondDigit <= 9; secondDigit++) {
      for (var thirdDigit = 0; thirdDigit <= 9; thirdDigit++) {
        for (var fourthDigit = 0; fourthDigit <= 9; fourthDigit++) {
          pinObj[_sha256(_getPinString(firstDigit, secondDigit, thirdDigit, fourthDigit))] = _getPinString(firstDigit, secondDigit, thirdDigit, fourthDigit);
        }
      }
    }
  }

  timeToGeneratePin = new Date() - startTime;
  realValue = pinObj[hash]


  timeToLocatePin = new Date() -startTime -timeToGeneratePin
  console.log("Time taken to generate pin : " + timeToGeneratePin)
  console.log("Time taken to locate pin : " + timeToLocatePin)
  console.log("Original value for input : "+realValue);
}

function _getPinString(a, b, c, d) {
  return '' + a + b + c + d
}

function _sha256(pin){
  return hashing.sha256(pin)
}


