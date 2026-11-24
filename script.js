"use strict";

function initMap() {
  const campus = { lat: 41.8349, lng: -87.6270 };
  const map = new google.maps.Map(document.getElementById("map"), {
    center: campus,
    zoom: 16
  });

  const marker = new google.maps.Marker({
    position: campus,
    map: map,
    title: "Illinois Tech",
    label: "IIT"
  });

  const info = new google.maps.InfoWindow({
    content: "<h2>Illinois Tech</h2><p>Mies Campus, Chicago</p>"
  });

  marker.addListener("click", function () {
    info.open(map, marker);
  });

  new google.maps.Circle({
    map: map,
    center: campus,
    radius: 250,
    strokeColor: "#a32638",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#a32638",
    fillOpacity: 0.15
  });
}

window.initMap = initMap;

document.addEventListener("DOMContentLoaded", function () {
  const questions = document.getElementById("questions");
  if (questions) {
    questions.addEventListener("click", function () {
      alert("If you have questions, contact me at:\nasalazar8@hawk.illinoistech.edu");
    });
  }
});
