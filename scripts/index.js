async function getCourses() {
  try {
    let res = await fetch("http://localhost:8081/api/courses");
    res = await res.json();

    return res;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}

async function populateTable() {
  let courses = await getCourses();

  let tbody = document.querySelector("#courseTableBody");

  courses.forEach((course) => {
    buildRow(tbody, course);
  });
}
function buildRow(tbody, course) {
  const row = tbody.insertRow();
  const departmentCell = row.insertCell();
  departmentCell.innerText = course.dept;
  const coruseNumber = row.insertCell();
  coruseNumber.innerText = course.courseNum;
  const courseNameCell = row.insertCell();
  courseNameCell.innerText = course.courseName;
  const courseDetails = row.insertCell();
  courseDetails.innerHTML = `<a href="./details.html?courseid=${course.id}"> Show Details</a>`;
}

populateTable();
