import dataJSON from "./course.json" assert { type: "json" };

const elementCourse = ({
  title,
  detail,
  linkImg,
}) => {
  const content = 
  `
  <img src="${linkImg}" alt="">
  <div class="col-left">
    <p class="course-title">${title}</p>
    <p class="course-detail">${detail}</p>
  </div>
  <button class="button button-light">Chi tiết khóa học</button>
  `
  const element = document.createElement("div");
  element.className = "course";
  element.innerHTML = content;
  return element;
}

const renderListCourse = () => {
  const elementListCourse = document.querySelector(".list");
  dataJSON.forEach((d) => {
    elementListCourse.appendChild(elementCourse(d));
  });
}

const init = () => {
  renderListCourse();
}

init();