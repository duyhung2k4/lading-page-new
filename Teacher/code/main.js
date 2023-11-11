const dataJSON = [
  {
    "id": 1,
    "name": "T.S Vũ Đức Minh",
    "linkImg": "./image/teacher/teacher_1.png",
    "details": [
      "Tốt nghiệp Tiến sĩ tại Đại học Montreal (Canada) năm 2014, đã làm việc tại Mỹ, Anh, Pháp, v.v.",
      "Giảng dạy tại trường đại học Phenikaa"
    ]
  },
  {
    "id": 2,
    "name": "T.S Lương Văn Thiện",
    "linkImg": "./image/teacher/teacher_2.png",
    "details": [
      "Tốt nghiệp Tiến sĩ tại Đại học Queen's University Belfast (Vương Quốc Anh) năm 2019.",
      "Công bố nhiều bài báo trên các tạp chí quốc tế."
    ]
  },
  {
    "id": 3,
    "name": "Chị Dương Ngân Hà",
    "linkImg": "./image/teacher/teacher_3.png",
    "details": [
      "Tốt nghiệp thủ khoa ngành Khoa học Máy tính trường Đại học Công nghệ, ĐHQGHN.",
      "Học bổng toàn phần khóa học thạc sĩ tại Châu Âu."
    ]
  },
  {
    "id": 4,
    "name": "Chị Nguyễn Hoàng Anh",
    "linkImg": "./image/teacher/teacher_4.png",
    "details": [
      "Giám đốc nhân sự của Krystal - Kyber Group và Outcubator Vietnam"
    ]
  },
  {
    "id": 5,
    "name": "PGS.TS Nguyễn Trung Thành",
    "linkImg": "./image/teacher/teacher_5.png",
    "details": [
      "Tốt nghiệp tiến sĩ chuyên ngành Khoa học máy tính tại trường Đại học Duesseldorf, CHLB Đức.",
      "Từng làm việc tại Các tiểu vương quốc Ả rập thống nhất (MIST-KU),..."
    ]
  },
  {
    "id": 6,
    "name": "T.S Hà Minh Hoàng",
    "linkImg": "./image/teacher/teacher_6.png",
    "details": [
      "Tốt nghiệp thạc sĩ và tiến sĩ tại Pháp và Canada.",
      "10 năm kinh nghiệm nghiên cứu và giảng dạy CNTT tại các trường Đại học như FPT, trường đại học Công nghệ ĐHQGHN,..."
    ]
  },
  {
    "id": 7,
    "name": "T.S Mai Tiến",
    "linkImg": "./image/teacher/teacher_7.png",
    "details": [
      "Hiện đang làm giáo sư tại trường Đại học Quản lý Singapore (SMU)",
      "Tốt nghiệp tiến sĩ tại Canada và từng làm việc tại Viện Công nghệ Massachusetts (MIT). "
    ]
  },
  {
    "id": 8,
    "name": "Anh Ngô Hữu Quân",
    "linkImg": "./image/teacher/teacher_8.png",
    "details": [
      "5 năm kinh nghiệm làm kỹ sư phần mềm cho các công ty tại Singapore và Đức."
    ]
  },
  {
    "id": 9,
    "name": "T.S Đỗ Đức Đông",
    "linkImg": "./image/teacher/teacher_9.png",
    "details": [
      "Chuyên gia về lập trình thi đấu.",
      "Giảng viên hướng dẫn các đội tuyển tin học Việt Nam tham gia các kỳ Olympic Tin học Quốc tế (IOI)..."
    ]
  }
]
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