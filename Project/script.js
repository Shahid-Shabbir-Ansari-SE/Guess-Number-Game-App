var randnumber; // Declare randnumber as a global variable

window.onload = function () {
  generaterandomnumber();
  displayShuffledDigits();
  addClickEventListner1();
  shufflefirstandranddigit2();
  displayShuffledDigits2();
  addClickEventListner2();
  shufflefirstandranddigit3();
  displayShuffledDigits3();
  addClickEventListner3();
};

// Function to generate random number
function generaterandomnumber() {
  var min = 100; // Minimum value for the random number
  var max = 999; // Maximum value for the random number
  randnumber = Math.floor(Math.random() * (max - min + 1)) + min; // Assign to the global randnumber
  return randnumber;
}

/* get the digits of the randomnumber */
function getdigits() {
  var firstdigit = Math.floor(randnumber / 100);
  var randnumber = generaterandomnumber(); // Call the function to get the random number
  var seconddigits = Math.floor((randnumber % 100) / 10);
  var thirddigits = Math.floor(randnumber % 10);
  document.getElementById("thi-rd").textContent = thirddigits;
}

/* first digit iteration */
function generatetworanddigit() {
  var randdigit1 = Math.floor(Math.random() * 10);
  var randdigit2;

  do {
    randdigit2 = Math.floor(Math.random() * 10);
  } while (randdigit2 === randdigit1); // Keep generating until randdigit2 is not equal to randdigit1

  return [randdigit1, randdigit2];
}

/* shuffle randdigit with first digit */
function shufflefirstandranddigit() {
  var randomDigits = generatetworanddigit(); // Get a pair of different random digits
  var firstdigit = Math.floor(randnumber / 100); // Use the global randnumber

  // Shuffle the random digits with the first digit
  var shuffledDigits = [firstdigit, randomDigits[0], randomDigits[1]];

  // Perform the shuffle (You can use any shuffling algorithm here)
  // For example, here's a simple swap-based shuffle:
  for (var i = shuffledDigits.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = shuffledDigits[i];
    shuffledDigits[i] = shuffledDigits[j];
    shuffledDigits[j] = temp;
  }

  return shuffledDigits;
}

/* shuffle randdigit with second digit */
function shufflefirstandranddigit2() {
  var randomDigits = generatetworanddigit(); // Get a pair of different random digits
  var seconddigit = Math.floor((randnumber % 100) / 10); // Use the global randnumber

  // Shuffle the random digits with the first digit
  var shuffledDigits = [seconddigit, randomDigits[0], randomDigits[1]];

  // Perform the shuffle (You can use any shuffling algorithm here)
  // For example, here's a simple swap-based shuffle:
  for (var i = shuffledDigits.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = shuffledDigits[i];
    shuffledDigits[i] = shuffledDigits[j];
    shuffledDigits[j] = temp;
  }

  return shuffledDigits;
}

function shufflefirstandranddigit3() {
  var randomDigits = generatetworanddigit(); // Get a pair of different random digits
  var thirddigit = Math.floor(randnumber % 10); // Use the global randnumber

  // Shuffle the random digits with the first digit
  var shuffledDigits = [thirddigit, randomDigits[0], randomDigits[1]];

  // Perform the shuffle (You can use any shuffling algorithm here)
  // For example, here's a simple swap-based shuffle:
  for (var i = shuffledDigits.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = shuffledDigits[i];
    shuffledDigits[i] = shuffledDigits[j];
    shuffledDigits[j] = temp;
  }

  return shuffledDigits;
}

/* render shuffle digits */
function displayShuffledDigits() {
  var shuffledDigits = shufflefirstandranddigit();

  document.getElementById("firstdigits1").textContent = shuffledDigits[0];
  document.getElementById("firstdigits2").textContent = shuffledDigits[1];
  document.getElementById("firstdigits3").textContent = shuffledDigits[2];
}

/* render shuffle digits */
function displayShuffledDigits2() {
  var shuffledDigits = shufflefirstandranddigit2(); // Use shufflefirstandranddigit2() for second digit shuffle

  // Display the shuffled digits in the spans in container2
  document.getElementById("seconddigits1").textContent = shuffledDigits[0];
  document.getElementById("seconddigits2").textContent = shuffledDigits[1];
  document.getElementById("seconddigits3").textContent = shuffledDigits[2];
}

function displayShuffledDigits3() {
  var shuffledDigits = shufflefirstandranddigit3(); // Use shufflefirstandranddigit2() for second digit shuffle

  // Display the shuffled digits in the spans in container2
  document.getElementById("thirddigits1").textContent = shuffledDigits[0];
  document.getElementById("thirddigits2").textContent = shuffledDigits[1];
  document.getElementById("thirddigits3").textContent = shuffledDigits[2];
}

/* add click event listner */
function addClickEventListner1() {
  document
    .getElementById("firstdigits1")
    .addEventListener("click", function () {
      if (
        parseInt(document.getElementById("firstdigits1").textContent) ===
        Math.floor(randnumber / 100)
      ) {
        alert("Correct guess!");
        document.getElementById("container").style.display = "none";
        document.getElementById("container2").style.display = "flex";
        document.getElementById("fir-st").textContent = Math.floor(
          randnumber / 100
        );
      } else {
        alert("Wrong guess!");
      }
    });
  document
    .getElementById("firstdigits2")
    .addEventListener("click", function () {
      if (
        parseInt(document.getElementById("firstdigits2").textContent) ===
        Math.floor(randnumber / 100)
      ) {
        alert("Correct guess!");
        document.getElementById("container").style.display = "none";
        document.getElementById("container2").style.display = "flex";
        document.getElementById("fir-st").textContent = Math.floor(
          randnumber / 100
        );
      } else {
        alert("Wrong guess!");
      }
    });
  document
    .getElementById("firstdigits3")
    .addEventListener("click", function () {
      if (
        parseInt(document.getElementById("firstdigits3").textContent) ===
        Math.floor(randnumber / 100)
      ) {
        alert("Correct guess!");
        document.getElementById("container").style.display = "none";
        document.getElementById("container2").style.display = "flex";
        document.getElementById("fir-st").textContent = Math.floor(
          randnumber / 100
        );
      } else {
        alert("Wrong guess!");
      }
    });
}

function addClickEventListner2() {
  document
    .getElementById("seconddigits1")
    .addEventListener("click", function () {
      if (
        parseInt(document.getElementById("seconddigits1").textContent) ===
        Math.floor((randnumber % 100) / 10)
      ) {
        alert("Correct guess!");
        document.getElementById("container2").style.display = "none";
        document.getElementById("container3").style.display = "flex";
        document.getElementById("seco-nd").textContent = Math.floor(
          (randnumber % 100) / 10
        );
      } else {
        alert("Wrong guess!");
      }
    });
  document
    .getElementById("seconddigits2")
    .addEventListener("click", function () {
      if (
        parseInt(document.getElementById("seconddigits2").textContent) ===
        Math.floor((randnumber % 100) / 10)
      ) {
        alert("Correct guess!");
        document.getElementById("container2").style.display = "none";
        document.getElementById("container3").style.display = "flex";
        document.getElementById("seco-nd").textContent = Math.floor(
          (randnumber % 100) / 10
        );
      } else {
        alert("Wrong guess!");
      }
    });
  document
    .getElementById("seconddigits3")
    .addEventListener("click", function () {
      if (
        parseInt(document.getElementById("seconddigits3").textContent) ===
        Math.floor((randnumber % 100) / 10)
      ) {
        alert("Correct guess!");
        document.getElementById("container2").style.display = "none";
        document.getElementById("container3").style.display = "flex";
        document.getElementById("seco-nd").textContent = Math.floor(
          (randnumber % 100) / 10
        );
      } else {
        alert("Wrong guess!");
      }
    });
}

function addClickEventListner3() {
  document
    .getElementById("thirddigits1")
    .addEventListener("click", function () {
      if (
        parseInt(document.getElementById("thirddigits1").textContent) ===
        Math.floor(randnumber % 10)
      ) {
        alert("Hurrah! Your all guess are correct");
        document.getElementById("randomnumber").textContent = randnumber;
        document.getElementById("thi-rd").textContent = Math.floor(
          randnumber % 10
        );
      } else {
        alert("Wrong guess!");
      }
    });
  document
    .getElementById("thirddigits2")
    .addEventListener("click", function () {
      if (
        parseInt(document.getElementById("thirddigits2").textContent) ===
        Math.floor(randnumber % 10)
      ) {
        alert("Hurrah! Your all guess are correct");
        document.getElementById("randomnumber").textContent = randnumber;
        document.getElementById("thi-rd").textContent = Math.floor(
          randnumber % 10
        );
      } else {
        alert("Wrong guess!");
      }
    });
  document
    .getElementById("thirddigits3")
    .addEventListener("click", function () {
      if (
        parseInt(document.getElementById("thirddigits3").textContent) ===
        Math.floor(randnumber % 10)
      ) {
        alert("Hurrah! Your all guess are correct");
        document.getElementById("randomnumber").textContent = randnumber;
        document.getElementById("thi-rd").textContent = Math.floor(
          randnumber % 10
        );
      } else {
        alert("Wrong guess!");
      }
    });
}

// Add an event listener to the refresh button
document.getElementById("refreshButton").addEventListener("click", refreshPage);

// Refresh page function
function refreshPage() {
  location.reload();
}

