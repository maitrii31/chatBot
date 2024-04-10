// collapseable
document.addEventListener("DOMContentLoaded", function() {
    var coll = document.getElementsByClassName("collapsible");

    for (let i = 0; i < coll.length; i++)
    {
        coll[i].addEventListener("click",function()
        {
            this.classList.toggle("active");

            var content = this.nextElementSibling;

            if(content.style.maxHeight)
            {
                content.style.maxHeight = null;
            } 
            else
            {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    }

        function getTime()
        {
            let today = new Date();
            hours = today.getHours();
            minutes = today.getMinutes();
    
            if (hours < 10)
            {
                hours= "0" + hours ; //10:15
            }
            if (minutes < 10)
            {
                minutes= "0" + minutes ; //10:15
            }
    
            let time = hours + ":" + minutes;
            return time;
        }

        function firstBotMessage() {
            let firstMessage = "How's it going?";
            document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';
        
            let time = getTime();
        
            $("#chat-timestamp").append(time); // append the time to the chat timestamp element

            const textInput = document.getElementById("textInput");
            textInput.scrollIntoView({ behavior: "smooth", block: "start" });
            document.getElementById("textInput").scrollIntoView(false);
        }
               
        firstBotMessage();

        //retrieve responses
        function getHardResponse(userText) {
            let botResponse = getBotResponse(userText);
            let botHtml = '<p class="botText"><span class="material-symbols-outlined">smart_toy</span><span>...</span></p>';
            let botResponseHtml = '<p class="botText"><span class="material-symbols-outlined">smart_toy</span><span>' + botResponse + '</span></p>';
            $("#chatbox").append(botHtml);

        
            setTimeout(() => {
                const textInput = document.getElementById("textInput");
                textInput.scrollIntoView({ behavior: "smooth", block: "start" });
                let dots = $("#chatbox").children().last();
                dots.replaceWith(botResponseHtml);

                
                document.getElementById("chat-bar-bottom").scrollIntoView(true);
            }, 1000);
        }


        function getResponse() {
            let userText = $("#textInput").val();
        
            if(userText == ""){
                userText="heya whats up";
            }
        
            let userHtml= '<p class="userText"><span>' + userText + '</span></p>';
        
            $("#textInput").val("");
            $("#chatbox").append(userHtml);

            // keep the text input box visible
            const textInput = document.getElementById("textInput");
            textInput.scrollIntoView({ behavior: "smooth", block: "start" });
            
            document.getElementById("chat-bar-bottom").scrollIntoView(true);
        
            // update the time
            let time = getTime();
            $("#chat-timestamp").text(time); // update the chat timestamp element with the new time
        
            // get the bot response
            getHardResponse(userText);
        }

        function buttonSendText(sampleText){
            let userHtml =  '<p class="botText"><span>' + sampleText + '</span></p>';

            $("#textInput").val("");
            $("#chatbox").append(userHtml);

            const textInput = document.getElementById("textInput");
            textInput.scrollIntoView({ behavior: "smooth", block: "start" });

            document.getElementById("chat-bar-bottom").scrollIntoView(true);
        }


        function sendButton(){
            getResponse();
            $("#chat-bar-bottom").scrollIntoView({ behavior: "smooth", block: "end" });

        }

        function heartButton(){
            buttonSendText("liked The Text")
        }

        //press enter to send the message
        $("#textInput").keypress(function(e){
            if(e.which == 13){
                getResponse();
            }
        })

    
    });







// var coll = document.getElementsByClassName("collapsible");

// for (let i = 0; i < coll.length; i++)
// {
//     coll[i].addEventListener("click",function()
//     {
//         this.classList.toggle("active");

//         var content = this.nextElementSibling;

//         if(content.style.maxHeight)
//         {
//             content.style.maxHeight = null;
//         } 
//         else
//         {
//             content.style.maxHeight = content.scrollHeight + "px";
//         }
//     });
// }

// function getTime()
// {
//     let today = new Date();
//     hours = today.getHours();
//     minutes = today.getMinutes();

//     if (hours < 10)
//     {
//         hours= "0" + hours ; //10:15
//     }
//     if (minutes < 10)
//     {
//         minutes= "0" + minutes ; //10:15
//     }

//     let time = hours + ":" + minutes;
//     return time;
// }

// function firstBotMessage()
// {
//     let firstMessage = "How's it going?"
//     document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';

//     let time = getTime();

//     $("#chat-timestamp").append(time);
//     document.getElementById("userInput").scrollIntoView(false);

// }

// firstBotMessage();






// // collapseable
// document.addEventListener("DOMContentLoaded", function() {
//     var coll = document.getElementsByClassName("collapsible");

//     for (let i = 0; i < coll.length; i++)
//     {
//         coll[i].addEventListener("click",function()
//         {
//             this.classList.toggle("active");

//             var content = this.nextElementSibling;

//             if(content.style.maxHeight)
//             {
//                 content.style.maxHeight = null;
//             } 
//             else
//             {
//                 content.style.maxHeight = content.scrollHeight + "px";
//             }
//         });
//     }

//         function getTime()
//         {
//             let today = new Date();
//             hours = today.getHours();
//             minutes = today.getMinutes();
    
//             if (hours < 10)
//             {
//                 hours= "0" + hours ; //10:15
//             }
//             if (minutes < 10)
//             {
//                 minutes= "0" + minutes ; //10:15
//             }
    
//             let time = hours + ":" + minutes;
//             return time;
//         }
            
//         function firstBotMessage()
//         {
//             let firstMessage = "Hey there, ask me anything?!"
//             document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';
    
//             let time = getTime();
    
//             $("#chat-timestamp").append(time);
//             document.getElementById("userInput").scrollIntoView(false);
    
//         } 

//         document.addEventListener("DOMContentLoaded", function() {
//             firstBotMessage();
//           });
    
//         // firstBotMessage();

//         //retrieve responses
//         function getHardResponse(userText) {
//             let botResponse = getBotResponse(userText);
//             let botHtml = '<p class="botText"><span class="material-symbols-outlined">smart_toy</span><span>' + botResponse + '</span></p>';            $("#chatbox").append(botHtml);
             
//             document.getElementById("chat-bar-bottom").scrollIntoView(true);

//             // const textInput = document.getElementById("textInput");
//             // textInput.scrollIntoView({ behavior: "smooth", block: "start" });
//         }

//         function getResponse() {
//             let userText = $("#textInput").val();

//             if(userText == ""){
//                 userText="heya whats up";
//             }

//             let userHtml= '<p class="userText"><span>' + userText + '</span></p>';

//             $("#textInput").val("");
//             $("#chatbox").append(userHtml);
//             document.getElementById("chat-bar-bottom").scrollIntoView(true);

//             // const textInput = document.getElementById("textInput");
//             // textInput.scrollIntoView({ behavior: "smooth", block: "start" });

//             setTimeout(() => {
//                 getHardResponse(userText);
//                 document.getElementById("chat-bar-bottom").scrollIntoView(true);
//             },1000)
//         }
      

//         function buttonSendText(sampleText){
//             let userHtml =  '<p class="botText"><span>' + sampleText + '</span></p>';

//             $("#textInput").val("");
//             $("#chatbox").append(userHtml);
//             document.getElementById("chat-bar-bottom").scrollIntoView(true);

//         }

//         function sendButton(){
//             getResponse();
//         }

//         function heartButton(){
//             buttonSendText("liked The Text")
//         }

//         //press enter to send the message
//         $("#textInput").keypress(function(e){
//             if(e.which == 13){
//                 getResponse();
//             }
//         })

    
//     });






    
// var coll = document.getElementsByClassName("collapsible");

// for (let i = 0; i < coll.length; i++)
// {
//     coll[i].addEventListener("click",function()
//     {
//         this.classList.toggle("active");

//         var content = this.nextElementSibling;

//         if(content.style.maxHeight)
//         {
//             content.style.maxHeight = null;
//         } 
//         else
//         {
//             content.style.maxHeight = content.scrollHeight + "px";
//         }
//     });
// }

// function getTime()
// {
//     let today = new Date();
//     hours = today.getHours();
//     minutes = today.getMinutes();

//     if (hours < 10)
//     {
//         hours= "0" + hours ; //10:15
//     }
//     if (minutes < 10)
//     {
//         minutes= "0" + minutes ; //10:15
//     }

//     let time = hours + ":" + minutes;
//     return time;
// }

// function firstBotMessage()
// {
//     let firstMessage = "How's it going?"
//     document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';

//     let time = getTime();

//     $("#chat-timestamp").append(time);
//     document.getElementById("userInput").scrollIntoView(false);

// }

// firstBotMessage();

