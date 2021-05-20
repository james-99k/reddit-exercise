//AJAX
function loadDoc() {
    // Creating the XMLHttpRequest object
    var xhttp = new XMLHttpRequest();

    // Instanting the request object
    xhttp.open("GET", "https://www.reddit.com/r/motorcycle.json", true);

    // Defining event listener for readystatechange event
    xhttp.onreadystatechange = function () {
        // Check if the request is complete and was successful
        if (this.readyState === 4 && this.status === 200) {
            // Inserting the response from server into an HTML element
            document.getElementById("demo").innerHTML = xhttp.responseText;
        }
    };

    //console.log(JSON.stringify(xhttp))


    // Sending the request to the server
    xhttp.send();
}


function loadJSON() {
    var data_file = "https://www.reddit.com/r/motorcycle.json";
    var http_request = new XMLHttpRequest();

    http_request.onreadystatechange = function () {

        if (http_request.readyState == 4) {
            // Javascript function JSON.parse to parse JSON data
            var jsonObj = JSON.parse(http_request.responseText);

            // jsonObj variable now contains the data structure and can
            // be accessed as jsonObj.name and jsonObj.country.
            let card = document.querySelector('.card');
            jsonObj.data.children.forEach(e => {
                let title = document.createElement('h1'),
                    image = document.createElement('img');

                title.innerHTML = '<h1 class="reddit__title" style="font-size: 22px">' + e.data.title;
                image.style.height="300px";
                image.style.width="500px"
                image.src = e.data.url;
                console.log(e.data)

                card.appendChild(title)
                card.appendChild(image)
                console.log(e.data);
            });
        }
    }

    http_request.open("GET", data_file, true);
    http_request.send();
}