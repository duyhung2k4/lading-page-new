import dataJSON from "./groupQuest.json" assert { type: "json" };

let data = dataJSON;
let ID_GROUP = 1;
let DATA_LENGTH = data.length;

// Element
const elementQuest = ({
  quest,
  id,
  idGroup,
  value,
}) => {
  const content = `
  <p>${quest}</p>
  <form name="form${id}">
    <div class="true-or-false">
      <div>
        <input class="radio" type="radio" name="${id}" value="0">
      </div>
      <div>
        <input class="radio" type="radio" name="${id}" value="1">
      </div>
    </div>
  </form>
  `

  const questElement = document.createElement("div");
  questElement.className = "quest";
  questElement.innerHTML = content;

  return questElement;
}

const elementGroup = ({
  id,
  name,
}) => {
  const content =
    `
  <div class="${id === ID_GROUP ? "group-active" : ""} number">${id}</div>
  <div class="name-group">${name}</div>
  `
  const groupElement = document.createElement("div");
  groupElement.className = `${id === ID_GROUP ? "active" : ""} group`;
  groupElement.innerHTML = content;
  return groupElement;
}

const groupNavigation = () => {
  const groups = document.querySelectorAll(".group");
  groups.forEach((g) => {
    g.addEventListener("click", () => {
      const indexGroup = Number(g.childNodes[1].innerHTML);
      ID_GROUP = indexGroup;

      prevButton.style.display = "block";
      prevButton.innerHTML = "Trở lại";
      nextButton.innerHTML = "Tiếp tục";
      switch (ID_GROUP) {
        case 1:
          prevButton.style.display = "none";
          break;
        case DATA_LENGTH:
          nextButton.innerHTML = "Hoàn thành";
        default:
          break;
      }

      initRender();
    })
  })
}

const prevButton = document.querySelector("#prev-button");
const nextButton = document.querySelector("#next-button");




// Render
const renderListGroup = () => {
  const listGroupElement = document.querySelector(".list-group")
  listGroupElement.innerHTML = "";
  data.forEach((d) => {
    listGroupElement.appendChild(elementGroup({ id: d.id, name: d.name }));
  })
}

const renderListQuest = () => {
  const headerQuestTitle = document.querySelector(".header .type .title");
  const headerQuestDetail = document.querySelector(".header .type .detail");
  const elementListQuest = document.querySelector(".list-quest");

  const group = data.find((d) => d.id === ID_GROUP);
  const listQuest = group.quests || [];

  headerQuestTitle.innerHTML = group.title;
  headerQuestDetail.innerHTML = group.detail;
  elementListQuest.innerHTML = "";
  listQuest.forEach((q) => {
    elementListQuest.appendChild(elementQuest({ ...q, idGroup: ID_GROUP }));
    const formQuest = document[`form${q.id}`];
    if (q.value === "0") {
      formQuest[0].checked = true;
    }
    if (q.value === "1") {
      formQuest[1].checked = true;
    }
    formQuest[0].addEventListener("click", () => {
      formQuest[0].checked = true;
      formQuest[1].checked = false;
      q.value = "0";
      group.quests = listQuest;
      data = data.map((d) => d.id === group.id ? group : d);
    })
    formQuest[1].addEventListener("click", () => {
      formQuest[0].checked = false;
      formQuest[1].checked = true;
      q.value = "1";
      group.quests = listQuest;
      data = data.map((d) => d.id === group.id ? group : d);
    })
  });
}


const initRender = () => {
  renderListGroup();
  renderListQuest();
  groupNavigation();
  resizeFunc();

  prevButton.addEventListener("click", prevFunc);
  if(ID_GROUP === DATA_LENGTH) {
    nextButton.removeEventListener("click", nextFunc);
    nextButton.addEventListener("click", submit);
  } else {
    nextButton.removeEventListener("click", submit);
    nextButton.addEventListener("click", nextFunc);
  }
  window.onresize = resizeFunc;
}




// Action
const nextFunc = () => {
  ID_GROUP = ID_GROUP < DATA_LENGTH ? ID_GROUP + 1 : DATA_LENGTH;
  prevButton.style.display = "block";
  if (ID_GROUP === DATA_LENGTH) {
    nextButton.innerHTML = "Hoàn thành";
  } else {
    nextButton.innerHTML = "Tiếp tục";
  }
  initRender();
}
const prevFunc = () => {
  ID_GROUP = ID_GROUP > 1 ? ID_GROUP - 1 : 1;
  nextButton.innerHTML = "Tiếp tục";
  if (ID_GROUP === 1) {
    prevButton.style.display = "none";
  } else {
    prevButton.style.display = "block";
  }
  initRender();
}
const resizeFunc = () => {
  const numberGroup = document.querySelector(".active.group .number");
  if(window.innerWidth < 576) {
    numberGroup.innerHTML = `Phần ${ID_GROUP}/${DATA_LENGTH}: `;
  } else {
    numberGroup.innerHTML = `${ID_GROUP}`;
  }
}
const submit = () => {
  const pointGroup = data.map((d) => {
    const point = d.quests.reduce((prev, cur) => prev = prev + (cur.value === "1" ? 1 : 0), 0);
    return {
      id: d.id,
      name: d.name,
      detail: d.detail,
      point,
      maxPoint: d.quests.length,
    }
  });
  console.log(pointGroup);
}



// init
prevButton.style.display = "none";
initRender();