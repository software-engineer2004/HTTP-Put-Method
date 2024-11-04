let userInput = document.getElementById('userInput');
let requestBody = document.getElementById("requestBody");
let sendPutRequestBtn = document.getElementById("sendPutRequestBtn");
let requestStatus = document.getElementById("requestStatus");
let httpResponse = document.getElementById("httpResponse");
let loading = document.getElementById("loading");


function getResult() {
    let userInputEl = (userInput.value);
    let data = JSON.parse(requestBody.value);
    let options = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer 94cd9945a7c07b7d9081578fa0c7ab96588feaa02bcb46ffb639be5b1dd837a4"
        },
        body: JSON.stringify(data)
    }

    loading.classList.remove("d-none");
    requestStatus.classList.add("d-none");

    fetch("https://gorest.co.in/public-api/users/" + userInputEl, options)
        .then(function(response) {
            return response.json();
        })

        .then(function(jsonData) {
            loading.classList.add("d-none");
            requestStatus.classList.remove("d-none");
            requestStatus.textContent = jsonData.code;
            httpResponse.textContent = JSON.stringify(jsonData);

        });
}


sendPutRequestBtn.addEventListener("click", getResult);
