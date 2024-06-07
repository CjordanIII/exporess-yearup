const urlParams = new URLSearchParams(location.search);
console.log(urlParams.get("courseid"));

if (urlParams.has("courseid")) {
  displayCourseDetails(urlParams.get("courseid"));
} else {
  alert("no valid course id");
  window.location.href = "./index.html";
}

async function displayCourseDetails(courseId) {
  try {
    let courseDetails = await getCourseDetails(courseId);
    const courseDetailsDiv = document.querySelector("#courseDetails");
    courseDetailsDiv.innerHTML = `<p>${courseDetails.id}</p><p>${courseDetails.dep}</p><p>${courseDetails.courseNum}</p><p>${courseDetails.courseName}</p>`;
  } catch (error) {
    console.log(error);
  }
}

async function getCourseDetails(courseId) {
  try {
    let res = await fetch("http://localhost:8081/api/courses/" + courseId);
    res = await res.json();
    return res;
  } catch (error) {
    console.log(error);
  }
}
