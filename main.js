// Functionize Caught Speeding Start Code

// Determine Tickets Button Click Event
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Get Speed & Speed Limit Inputs
  let d1Speed = +document.getElementById("d1-speed").value;
  let d1Limit = +document.getElementById("d1-limit").value;
  let d2Speed = +document.getElementById("d2-speed").value;
  let d2Limit = +document.getElementById("d2-limit").value;
  let d3Speed = +document.getElementById("d3-speed").value;
  let d3Limit = +document.getElementById("d3-limit").value;

  // Calculate & Output Ticket Types
  // Driver 1
  ticketCalc(d1Speed, d1Limit, "d1");

  // Driver 2
  ticketCalc(d2Speed, d3Limit, "d2");

  // Driver 3
  ticketCalc(d3Speed, d3Limit, "d3");
}

// functions!!!!
function ticketCalc(speed, limit, whichd) {
  let ticket;
  if (speed > limit + 40) {
    ticket = "Really Big Ticket";
  } else if (speed > limit + 20) {
    ticket = "Big Ticket";
  } else if (speed > limit) {
    ticket = "Small Ticket";
  } else {
    ticket = "No Ticket";
  }
  document.getElementById(`${whichd}-ticket`).innerHTML = ticket;
}
