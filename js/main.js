
let files;
let isLoading = true;

f('0')

function getDetails(id) {
  // let id = "0";
  const url = "http://localhost:5000/folder/" + id;
  // isLoading = true;
  toggleLoadingDiv()
  return fetch(url).then(response => response.json());
}

function f(id) {
  getDetails(id).then(function(data) {
    console.log('Data for Id: ', id, ' --- ' ,data);
    files = data;

    handleBotResponse(data)
    updateScroll()
    // isLoading = false;
    toggleLoadingDiv()
  })
}

function handleBotResponse(data) {

  let chatBody = document.getElementById("chat-body")

  // let botResponse = document.getElementById("bot-response");
  let botResponse = document.createElement("div");
  botResponse.className = "bot-response-container"
  for (const item of data.files) {
    let button = document.createElement("button")
    button.className = "bot-button"
    button.innerText = item.name;
    button.onclick = function(){
      f(item.id);
      let visitorResponseDiv = document.createElement("div")
      visitorResponseDiv.innerText = item.name
      visitorResponseDiv.className = "visitor-response-container"
      chatBody.appendChild(visitorResponseDiv)
    };
    botResponse.appendChild(button)
  }

  chatBody.appendChild(botResponse)
}

function toggleLoadingDiv() {
  console.log('is loadd', isLoading)
  let loader = document.getElementById("loader")

  if (!isLoading) {
    loader.style.display = "none"
  } else {
    loader.style.display = "inline"
  }
  isLoading = !isLoading;
}

function updateScroll(){

  let element = document.getElementById("container");
  console.log('is lscrrr', element)
  element.scrollTop = element.scrollHeight;
}


// function handleBotResponse(data) {
//   let list = document.getElementById("bot-response");
//   list.className = "bot-response-container"
//
//   let chatBody = document.getElementById("chat-body")
//   chatBody.appendChild(list)
//
//   for (const item of data.files) {
//     let button = document.createElement("button")
//     button.className = "bot-button"
//     button.innerText = item.name;
//     button.onclick = function(){
//       f(item.id);
//       let visitorResponseDiv = document.createElement("div")
//       visitorResponseDiv.innerText = item.name
//       visitorResponseDiv.className = "visitor-response-container"
//       list.appendChild(visitorResponseDiv)
//     };
//     list.appendChild(button)
//   }
// }

// f()


