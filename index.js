// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit", formFunction);
var formData = JSON.parse(localStorage.getItem("schedule")) || [];
function formFunction() {
  event.preventDefault();

  var obj = {
    name: masaiForm.matchNum.value,
    teamA: masaiForm.teamA.value,
    teamB: masaiForm.teamB.value,
    date: masaiForm.date.value,
    venue: masaiForm.venue.value,
  };
  formData.push(obj);
  localStorage.setItem("schedule", JSON.stringify(formData));
}
