var force = require("../core/init.js").force_layout;
var switchToFullScreen = require("./fullscreen").switchToFullScreen;
var neuroSim = require("../neurosim/execSimulation");
var querySelector = {
  threshold: 0.6,
  amplitude: 1,
  steepness: 15
}


if(localStorage.getItem("directed") == 1) {
  document.querySelector("#directed").checked = true;
  document.querySelector("#undirected").checked = false;
} 
else {
  document.querySelector("#directed").checked = false;
  document.querySelector("#undirected").checked = true;
}

directed.onclick = function() {
  localStorage.setItem("directed", Number(1));
  window.location.reload();
};

undirected.onclick = function() {
  localStorage.setItem("directed", Number(0));
  window.location.reload();
};

function setDirectionUnchecked() {
  document.querySelector("#directed").checked = false;
  document.querySelector("#undirected").checked = false;
}


function startStopNeuroSim() {
  //start force directed layout
  if(!document.querySelector("#forceLayoutSwitch").checked) {
    neuroSim.startSimulation();
  }
  //stop force directed layout
  else {
    neuroSim.pauseSimulation();
  }
}


function startStopHistory() {
  if(!document.querySelector("#historySwitch").checked) {
    console.log("History OFF...");
    // force.fdLoop();
  }
  else {
    console.log("History ON...");
    // force.fdStop();
  }
}

document.querySelector("#threshold").addEventListener('input', function(event) {
  var thresh = +document.querySelector("#threshold").value;
  querySelector.threshold = thresh;
  neuroSim.changeParams (querySelector);
  document.querySelector("#thresh_display").innerHTML = thresh;
});

document.querySelector("#amplitude").addEventListener('input', function(event) {
  var amp = +document.querySelector("#amplitude").value;
  querySelector.amplitude = amp;
  neuroSim.changeParams (querySelector);
  document.querySelector("#amp_display").innerHTML = amp;
});

document.querySelector("#steepness").addEventListener('input', function(event) {
  var k = +document.querySelector("#steepness").value;
  querySelector.steepness = k;
  neuroSim.changeParams (querySelector);
  document.querySelector("#steep_display").innerHTML = k;
});

// document.querySelector("#force_magnitude").addEventListener('input', function(event) {
//   var mag = +document.querySelector("#force_magnitude").value;
//   force.magnitude = mag;
//   document.querySelector("#force_mag_display").innerHTML = mag;
// });
//
// document.querySelector("#force_speed").addEventListener('input', function(event) {
//   var speed = +document.querySelector("#force_speed").value;
//   force.speed = speed;
//   document.querySelector("#force_speed_display").innerHTML = speed;
// });
//
// document.querySelector("#force_speed").addEventListener('input', function(event) {
//   var speed = +document.querySelector("#force_speed").value;
//   force.speed = speed;
//   document.querySelector("#force_speed_display").innerHTML = speed;
// });

module.exports = {
  startStopNeuroSim: startStopNeuroSim,
  startStopHistory: startStopHistory,
  setDirectionUnchecked: setDirectionUnchecked
};
