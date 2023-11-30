// Check if the browser supports Geolocation
if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
} else {
    document.getElementById("location").innerHTML = "Geolocation is not supported by your browser";
}

// Success callback function
function successCallback(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    // Use a reverse geocoding API (e.g., OpenCage Geocoding API)
    var apiKey = '2bb2334f2697474287b53e158d8fc2a8'; // Replace with your API key
    var apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`;

    // Make a request to the reverse geocoding API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.results.length > 0) {
                var city = data.results[0].components.city;
                var country = data.results[0].components.country;
                document.getElementById("location").innerHTML = `<i id="locIcon" class="material-icons">place</i>${city}, ${country}`;
            }
        })
        .catch(error => {
            console.error("Error fetching location data:", error);
            document.getElementById("location").innerHTML = `<i id="locIcon" class="material-icons">place</i>Cabuyao, Philippines`;
        });
}

// Error callback function
function errorCallback(error) {
    console.log(error);
    document.getElementById("location").innerHTML = `<i id="locIcon" class="material-icons">place</i>Cabuyao, Philippines`;
}

function goToFindATable() {
    // Use JavaScript to navigate to the element with the ID "findATable"
    var findATableSection = document.getElementById('findATable');
    if (findATableSection) {
        findATableSection.scrollIntoView({ behavior: 'smooth' }); // Optional: smooth scrolling
    }
}

function avalaibleRestaurant() {
    // Use JavaScript to navigate to the element with the ID "findATable"
    var avalaibleRestaurant = document.getElementById('avalaibleRestaurant');
    if (avalaibleRestaurant) {
        avalaibleRestaurant.scrollIntoView({ behavior: 'smooth' }); // Optional: smooth scrolling
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the tabs
    var tabs = document.querySelectorAll('.tabs');
    M.Tabs.init(tabs);
  
    // Function to switch to the "Your Details" tab
    function switchToYourDetailsTab() {
      var tabsInstance = M.Tabs.getInstance(tabs[0]);
      tabsInstance.select('yourDetails');
    }
  
    // Add a click event listener to the "Find a Table" button
    var findATableBtn = document.getElementById('findATableBtn');
    findATableBtn.addEventListener('click', function() {
      // Call the function to switch to the "Your Details" tab
      switchToYourDetailsTab();
    });
  });

  