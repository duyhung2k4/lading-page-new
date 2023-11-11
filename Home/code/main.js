import dataJSON from "./home.json" assert { type: "json" };

const typeCourse = {
  "master": "chuyên sâu",
  "basic": "cơ bản",
}

const elementCourse = ({
  title,
  detail,
  linkImg,   
}) => {
  return (
    `
    <div class="course">
      <img src="${linkImg}" alt="">
      <div class="col-left">
        <p class="course-title">${title}</p>
        <p class="course-detail">${detail}</p>
      </div>
      <button class="button button-light">Chi tiết khóa học</button>
    </div>
    `
  )
}

const elementTypeCourse = ({
  type,
  courses,
}) => {
  const listCourse = courses.map((c) => elementCourse(c));
  const content =
  `
    <div class="group-title">
      <p class="title">Khám phá các khoá học ${typeCourse[type]}</p>
      <p class="detail">Dưới đây là một số lĩnh vực khoá học nổi bật mà bạn có thể khám phá</p>
    </div>
    <div class="list mr-top-md">
      ${`${listCourse}`.split(",").join("")}
    </div>
    <div class="show-more-course col-center mr-top-md">
      <button class="button button-dark">
        <p>
          Xem thêm các khóa học khác
        </p>
        <img height="20px" width="20px" src="./icon/next-right.png" alt="">
      </button>
    </div>
  `

  const element = document.createElement("div");
  element.className = "mr-top-lg";
  element.innerHTML = content;
  return element;
}

const renderCourseWithType = () => {
  const listType = [...new Set(dataJSON.map((d) => d.type))];
  const courseWithType = listType.map((t) => {
    const courses = dataJSON.filter((d) => d.type === t);
    return ({
      type: t,
      courses: courses,
    })
  });

  const elementListCourseWithType = document.querySelector(".course-with-type");
  courseWithType.forEach((c) => {
    elementListCourseWithType.appendChild(elementTypeCourse({ type: c.type, courses: c.courses }))
  })
}

const init = () => {
  renderCourseWithType();
}

init();