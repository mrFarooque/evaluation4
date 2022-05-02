// write js code here corresponding to matches.html
var schedule = JSON.parse(localStorage.getItem("schedule"));

function filterByVenue() {
  var selected = document.querySelector("#filterVenue").value;
  var filteredData = schedule.filter(function (ele) {
    return ele.venue == selected;
  });
  console.log(filteredData);
  display(filteredData);
}

display(schedule);

function display(data) {
  document.querySelector("tbody").innerHTML = "";
  data.forEach(function (ele) {
    var tr = document.createElement("tr");

    var td1 = document.createElement("td");
    td1.innerText = ele.name;

    var td2 = document.createElement("td");
    td2.innerText = ele.teamA;

    var td3 = document.createElement("td");
    td3.innerText = ele.teamB;

    var td4 = document.createElement("td");
    td4.innerText = ele.date;

    var td5 = document.createElement("td");
    td5.innerText = ele.venue;

    var td6 = document.createElement("td");
    td6.innerText = "Add as Favourites";
    td6.addEventListener("click", function () {
      favouriteFunction(ele);
    });

    tr.append(td1, td2, td3, td4, td5, td6);
    document.querySelector("tbody").append(tr);
  });

  var favouriteData = JSON.parse(localStorage.getItem(favouriteData)) || [];
  function favouriteFunction(ele) {
    favouriteData.push(ele);
    localStorage.setItem("favourites", JSON.stringify(favouriteData));
  }
}
