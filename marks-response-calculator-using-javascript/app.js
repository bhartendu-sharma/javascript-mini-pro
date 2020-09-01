const gradeCalci = () => {
  let physics = document.getElementById("physics").value;
  let chemistry = document.getElementById("chemistry").value;
  let maths = document.getElementById("maths").value;
  let hindi = document.getElementById("hindi").value;
  let english = document.getElementById("english").value;
  let total_marks =
    parseFloat(physics) +
    parseFloat(chemistry) +
    parseFloat(maths) +
    parseFloat(hindi) +
    parseFloat(english);
  let percentage = (total_marks / 500) * 100;
  let grade = "";
  // grade calculate
  if (percentage > 90) {
    grade = "A+";
  } else if (percentage > 80 && percentage <= 90) {
    grade = "A";
  } else if (percentage > 70 && percentage <= 80) {
    grade = "B+";
  } else if (percentage > 60 && percentage <= 70) {
    grade = "B";
  } else if (percentage > 50 && percentage <= 60) {
    grade = "C";
  } else if (percentage > 40 && percentage <= 50) {
    grade = "D";
  } else if (percentage > 32 && percentage <= 40) {
    grade = "E";
  } else {
    grade = "F";
  }
  // pass or fail
  if (grade === "F") {
    status = "Fail";
  } else {
    status = "Pass";
  }
  document.getElementById("response").innerHTML = `Percentage: ${percentage}
  <br> Grade: ${grade} <br> Status: ${status}`;
  // attention :for use of ${percentage} inclode as quotes: ` located on below of Esc key on keyboard
};
