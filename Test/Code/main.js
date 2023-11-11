import dataJSON from "./test.json" assert { type: "json" };

const elementTest = ({
  linkImg,
  name,
  detail,
  turns,
  date,
}) => {
  const content = 
  `
  <img src="${linkImg}" alt="">
  <div class="test-detail full-width">
    <p class="name">${name}</p>
    <p class="detail">${detail}</p>
  </div>
  <div class="test-info full-width">
    <img src="./icon/edit.png" alt="">
    <p>${turns} lượt làm&nbsp;|</p>
    <img src="./icon/clock.png" alt="">
    <p>${date}</p>
  </div>
  `
  const element = document.createElement("div");
  element.className = "test";
  element.innerHTML = content;
  return element;
}

const renderListTest = () => {
  const elementListTest = document.querySelector(".list-test");
  dataJSON.forEach((d) => {
    const child = elementTest(d);
    elementListTest.appendChild(child);
  })
}

const init = () => {
  renderListTest();
}

init();