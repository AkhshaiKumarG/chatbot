let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];

let chatContainer = document.getElementById("chatContainer");
let userInput = document.getElementById("userInput");
let sendMsgBtn = document.getElementById("sendMsgBtn");
// let send = document.createElement("p");
let send = "";

function userSide() {
    let msgContainer = document.createElement("div");
    msgContainer.classList.add("msg-to-chatbot-container");
    chatContainer.appendChild(msgContainer);

    send = document.createElement("span");
    // send = "";
    send.textContent = userInput.value;
    send.classList.add("msg-to-chatbot");
    msgContainer.appendChild(send);
    botSide();
    userInput.value = "";
}
let chatMsg = chatbotMsgList[1];

function botSide() {
    let msgContainer = document.createElement("div");
    msgContainer.classList.add("msg-from-chatbot-container");
    chatContainer.appendChild(msgContainer);

    let receive = document.createElement("span");
    // console.log(typeof(send));
    // if (send.value === "hi" || send.value === "Hi") {
    //     receive.textContent = chatbotMsgList[1];
    // }
    let response = msgType();
    receive.textContent = response;
    receive.classList.add("msg-from-chatbot");
    msgContainer.appendChild(receive);

}

function msgType() {
    if (userInput.value === "hi" || userInput.value === "Hi") {
        return chatbotMsgList[1];
    }
    if (userInput.value === "Good Morning" || userInput.value === "good morning") {
        return [chatbotMsgList[2], chatbotMsgList[4]];
        // return chatbotMsgList[4];
    }
    if (userInput.value === "Good Evening" || userInput.value === "good evening") {
        return chatbotMsgList[3];
        // return chatbotMsgList[4];
        // return [chatbotMsgList[3], chatbotMsgList[4]];
    }
    if (userInput.value === "") {
        return chatbotMsgList[4];
    }
    if (userInput.value === "Thank You" || userInput.value === "thank you") {
        return chatbotMsgList[5];
    } else {
        let warning = "Sorry, I can't understand";
        return warning;
    }
}



sendMsgBtn.onclick = function() {
    userSide();
}
