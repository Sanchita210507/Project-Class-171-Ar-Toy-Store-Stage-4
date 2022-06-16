AFRAME.registerComponent("create-buttons", {
    init:function(){
      // 1. Create the button
      var button1 = document.createElement("button")
      button1.innerHTML = "ORDER SUMMARY"
      button1.setAttribute("id", "order-summary-button")
      button1.setAttribute("class", "btn btn-warning")
     
      var button2 = document.createElement("button")
      button2.innerHTML = "ORDER NOW"
      button2.setAttribute("id", "order-button")
      button2.setAttribute("class", "btn btn-warning")

      var buttonDiv = document.getElementById("button-div")
      buttonDiv.appendChild(button1)
      buttonDiv.appendChild(button2)

    },
    
})