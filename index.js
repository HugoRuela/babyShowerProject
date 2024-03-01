
// Initialize counters

var boyCount = 0;
var girlCount = 0;

// Get references to the buttons and counters

var boyButton = document.getElementById('boyButton');
var girlButton = document.getElementById('girlButton');
var boyCounter = document.getElementById('boyCounter');
var girlCounter = document.getElementById('girlCounter');

// Function to update the counters

function updateCounters() {
  boyCounter.textContent = boyCount;
  girlCounter.textContent = girlCount;
}

// Event listener for the boy button

boyButton.addEventListener('click', function() {
  boyCount++;
  updateCounters();
  alert("Está registado! Vamos ver se tens o 6º Sentido apurado :D ");

});

// Event listener for the girl button

girlButton.addEventListener('click', function() {
  girlCount++;
  updateCounters();
  alert("Está registado! Vamos ver se tens o 6º Sentido apurado :D ");

});


// Function to output the results of the count & Call a funciton with the % output
function countResult () {


    var boyPercentage = Math.floor( boyCount * 100 ) / (boyCount + girlCount);
    var girlPercentage = Math.floor( girlCount * 100 ) / (boyCount + girlCount);


    console.log("Number of Boy Clicks: " + boyCounter.innerHTML + " Which represents a total of " + boyPercentage + "% !");
    console.log("Number of Girl Clicks: " + girlCounter.innerHTML + " Which represents a total of " + girlPercentage + "% !");

}

// Call countResult function at the end

window.addEventListener('load', countResult);


function openImagePopupBinance(imageUrl) {
    
      // Calculate the left and top position to center the popup window
      var leftPosition = (window.screen.width - 600) / 2;
      var topPosition = (window.screen.height - 600) / 2;
  
      // Open a new window with specified dimensions and centered position
      var popupWindow = window.open("", "_blank", "width=600,height=600,left=" + leftPosition + ",top=" + topPosition);

    var popupContent = "<html><head><title>Image Popup</title></head><body style='margin:0; text-align:center;'>";
    popupContent += "<img src='" + imageUrl + "' style='max-width:100%; max-height:100%;'>";
    popupContent += "</body></html>";
    popupWindow.document.write(popupContent);
}

function openImagePopupMbWay(imageUrl) {
    
    // Calculate the left and top position to center the popup window
    var leftPosition = (window.screen.width - 600) / 2;
    var topPosition = (window.screen.height - 600) / 2;

    // Open a new window with specified dimensions and centered position
    var popupWindow = window.open("", "_blank", "width=600,height=600,left=" + leftPosition + ",top=" + topPosition);

  var popupContent = "<html><head><title>Image Popup</title></head><body style='margin:0; text-align:center;'>";
  popupContent += "<img src='" + imageUrl + "' style='max-width:100%; max-height:100%;'>";
  popupContent += "</body></html>";
  popupWindow.document.write(popupContent);
}

