import dataJSON from "./teacher.json" assert { type: "json" };

const elementTeacher = ({
  name,
  linkImg,
  details,
}) => {
  const listDetail = details.map((d) => 
  `
  <div class="detail">
    <img src="./icon/point.png" alt="">
    <p>${d}</p>
  </div>
  `)
  const content = 
  `
  <div class="name">
    <img src="${linkImg}" alt="">
    <p>${name}</p>
  </div>
  <div class="info">${`${listDetail}`.split(",").join("")}</div>
  `
  
  const element = document.createElement("div");
  element.className = "teacher";
  element.innerHTML = content;
  return element;
}

const renderListTeacher = () => {
  const elementListTeacher = document.querySelector(".list-teacher");
  dataJSON.forEach((d) => {
    elementListTeacher.appendChild(elementTeacher(d));
  });
}

const init = () => {
  renderListTeacher();
}

init();