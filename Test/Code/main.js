const dataJSON = [
  {
    "id": 1,
    "name": "Trắc nghiệm phong cách học tập",
    "detail": "Xác định thiên hướng học tập theo VAK và thiên hướng tính cách theo DISC",
    "turns": 123456,
    "date": "11/02/2022",
    "linkImg": "https://scontent.fhan20-1.fna.fbcdn.net/v/t1.6435-9/49129565_1897297793671781_1620396392327413760_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=KSroVcBLFaIAX_0aA1h&_nc_ht=scontent.fhan20-1.fna&cb_e2o_trans=t&oh=00_AfCV7eE1olZtlH-ObinQE_umU0IvOJmBNiXtSWP6FgN6eg&oe=65963E24",
    "type": "junior",
    "href": "https://www.blacasa.vn/test/phong-cach-hoc-tap",
  },
  {
    "id": 2,
    "name": "Dựa vào ngày sinh, xác định tính cách nổi trội của bạn",
    "detail": "Bạn sinh vào ngày thứ mấy trong tuần?",
    "turns": 123456,
    "date": "11/02/2022",
    "linkImg": "https://i1-ngoisao.vnecdn.net/2023/04/18/GettyImages-598162030-d08b800-4998-1681805076.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=IfTIw6uAZsFpiruW6If9Ig",
    "type": "junior",
    "href": "https://ngoisao.vnexpress.net/quiz-dua-vao-ngay-sinh-xac-dinh-tinh-cach-noi-troi-cua-ban-4594825.html",
  },
  {
    "id": 3,
    "name": "Tiết lộ tính cách con người bạn dựa trên ngày sinh",
    "detail": "Bạn đã bao giờ tự hỏi tại sao bạn có những đặc điểm tính cách nhất định mà những người lại không có? Hóa ra, ngày sinh trong tuần cũng có liên quan ít nhiều đến tính cách của bạn.",
    "turns": 123456,
    "date": "11/02/2022",
    "linkImg": "https://afamilycdn.com/150157425591193600/2022/12/4/3724fdfe44ac2e541dbb95ec586dabb2-16701280569141623961713-1670130761751-1670130762007869041104.jpg",
    "type": "junior",
    "href": "https://afamily.vn/ban-sinh-vao-thu-may-trong-tuan-dieu-do-tiet-lo-rat-nhieu-dieu-ve-tinh-cach-con-nguoi-ban-20221204121533685.chn",
  },
  {
    "id": 4,
    "name": "Ý nghĩa 12 cung Hoàng Đạo và tính cách thú vị",
    "detail": "Bạn thuộc cung Hoàng Đạo nào? Mỗi chòm sao đều nói lên tính cách đặc trưng khác nhau. Cùng tìm hiểu về tính cách nổi bật của từng cung hoàng đạo nhé.",
    "turns": 123456,
    "date": "11/02/2022",
    "linkImg": "https://cdn.mediamart.vn/images/news/645e37ed-aa63-4012-a049-6a6be7e64d31_12-cung-hoang-dao-va-tinh-cach-co-ve-dung.jpg",
    "type": "junior",
    "href": "https://mediamart.vn/phong-thuy/12-cung-hoang-dao-va-tinh-cach-co-ve-dung",
  },
  {
    "id": 5,
    "name": "Trắc nghiệm vui: Đoán tính cách và mong muốn của bạn qua con số trên cây",
    "detail": "Nhà tâm lý học nổi tiếng người Anh Pip Wilson đã tạo ra bài trắc nghiệm này: Quan sát bức hình, chọn con số trên cây mà bạn nghĩ là thích hợp với mình nhất.",
    "turns": 123456,
    "date": "11/02/2022",
    "linkImg": "https://kenh14cdn.com/203336854389633024/2022/12/16/photo-1-16711601408521899895548.png",
    "type": "junior",
    "href": "https://kenh14.vn/trac-nghiem-vui-doan-tinh-cach-va-mong-muon-cua-ban-qua-con-so-tren-cay-2022121610114966.chn",
  },
  {
    "id": 6,
    "name": "Trắc nghiệm vui đoán tính cách",
    "detail": "Cảm nhận của bạn về những hình ảnh trong bài trắc nghiệm vui dưới đây sẽ tiết lộ các khía cạnh tiềm ẩn về tính cách và con người bạn.",
    "turns": 123456,
    "date": "11/02/2022",
    "linkImg": "https://image.vtc.vn/resize/th/upload/2021/04/13/1-11250203.jpg",
    "type": "junior",
    "href": "https://vtc.vn/trac-nghiem-vui-doan-tinh-cach-ban-thay-qua-bong-nao-lon-hon-ar606363.html",
  },
  {
    "id": 7,
    "name": "Bài test bóc phốt mọi điểm xấu tốt ở bạn",
    "detail": "Nếu phải chụp ảnh chung với một nhóm nhiều người, bạn sẽ chọn đứng ở vị trí nào như hình dưới đây?",
    "turns": 123456,
    "date": "11/02/2022",
    "linkImg": "https://i1-ngoisao.vnecdn.net/2023/05/24/unnamed-7487-1537232437-2299-1684914277.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=Nddh4WikWYfkwTr19tIUNg",
    "type": "junior",
    "href": "https://ngoisao.vnexpress.net/quiz-bai-test-tinh-huong-boc-phot-moi-diem-tot-xau-o-ban-4608564.html",
  },
  {
    "id": 8,
    "name": "Trắc nghiệm tính cách MBTI",
    "detail": "Test MBTI là một phương pháp phân tích tính cách sử dụng một loạt các câu hỏi trắc nghiệm. Kết quả kiểm tra MBTI cho thấy cách mọi người nhìn thế giới xung quanh và đưa ra quyết định về mọi vấn đề trong cuộc sống. ",
    "turns": 123456,
    "date": "11/02/2022",
    "linkImg": "https://www.16personalities.com/static/images/homepage/header-mountains-desktop.svg",
    "type": "senior",
    "href": "https://www.16personalities.com/free-personality-test",
  },
  {
    "id": 9,
    "name": "Trắc nghiệm não trái/ não phải",
    "detail": "Left-Brain/Right-Brain Test",
    "turns": 123456,
    "date": "11/02/2022",
    "linkImg": "https://st.gamevui.com/images/image/2020/03/05/brain-test-online-640.jpg",
    "type": "senior",
    "href": "https://testyourself.psychtests.com/bin/transfer?req=MnwzMTc4fDY3NTg1OTR8MHwxfDE=&refempt=",
  },
  {
    "id": 10,
    "name": "Test tính cách qua màu sắc",
    "detail": "Test color is the result of original research conducted and validated by a team of clinical psychologists, psychoanalysts and mathematicians. Test color can generate over 50 million different answers, personalized according to every test.",
    "turns": 123456,
    "date": "11/02/2022",
    "linkImg": "https://www.johnpaulcaponigro.com/blog/wp-content/uploads/2021/02/testcolorpsychtest.jpg",
    "type": "senior",
    "href": "https://www.testcolor.com/",
  },
  {
    "id": 11,
    "name": "Trắc nghiệm nghề nghiệp iPersonic",
    "detail": "Your iPersonic Career Profile gives you invaluable insight into your individuality, outlining your strengths along with areas of relative weakness.",
    "turns": 123456,
    "date": "11/02/2022",
    "linkImg": "https://www.ipersonic.com/press/index_files/page64_1.png",
    "type": "senior",
    "href": "https://www.ipersonic.com/test.html",
  },
  {
    "id": 12,
    "name": "Bảng hỏi nhận dạng trí thông minh đa diện (MIPQ)",
    "detail": "Bảng hỏi nhận dạng trí thông minh đa diện (MIPQ) là bảng câu hỏi tự đánh giá dựa trên lý thuyết về trí thông minh đa diện của tiến sĩ tâm lý học phát triển Howard Gardner.",
    "turns": 123456,
    "date": "11/02/2022",
    "linkImg": "https://huongnghiepsongan.com/wp-content/uploads/2020/09/Tri-thong-minh-da-dien-1400x788.png",
    "type": "senior",
    "href": "https://tracnghiem.huongnghiepsongan.com/assess/tracnghiem/MIPQVI",
  },
  {
    "id": 13,
    "name": "Trắc nghiệm nghề nghiệp - Test Energy",
    "detail": "Tìm ra đúng thiên hướng sở thích, nghề nghiệp của mình, từ đó chọn được nghề phù hợp nhất.",
    "turns": 123456,
    "date": "11/02/2022",
    "linkImg": "https://dev-media.asvabprogram.com/MEDIA_CENTER/images/FYI-career-interest-quiz-codes.png",
    "type": "senior",
    "href": "https://www.uef.edu.vn/huong-nghiep/trac-nghiem-nghe-nghiep",
  },
]

const typeSchool = {
  "all": "Tất cả",
  "senior": "Chuyên gia",
  "junior": "Người mới"
}

let TEST_OF_PAGE = -1;
let INDEX_OF_PAGE = 0;
let COUNT_PAGE = 0;

let listTest = dataJSON;
let typeTest = "all";


const elementSelect = document.getElementById("type-school");
const elementListTest = document.getElementById("list-test");
const elementPage = document.getElementById("render-page");
const nextBtn = document.getElementById("btn-next");
const backBtn = document.getElementById("btn-back");

const templateTest = ({
  linkImg,
  name,
  detail,
  turns,
  date,
  id,
}) => {
  const test = dataJSON.find((d) => d.id === id);
  const content =
    `
  <div class="wrap-title">
    <div class="test-img" style="background-image: url(${linkImg})" id="bg-img-${id}"></div>
    <div class="test-detail full-width mr-top-sm">
      <p class="name">${name}</p>
      <p class="detail">${detail}</p>
    </div>
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
  element.id = `test-${id}`;
  element.innerHTML = content;
  return element;
}


// Element
const templateType = (type) => {
  return (
    `<option class="test-option" value="${type}">${typeSchool[type]}</option>`
  )
}

const templatePage = (index) => {
  return (
    `<div id="index-${index}" class="page ${index === INDEX_OF_PAGE ? "active" : ""}">${index + 1}</div>`
  )
}


// Handle
const renderListTest = () => {
  if (typeTest === "all") {
    listTest = dataJSON;
  } else {
    listTest = dataJSON.filter((d) => d.type === typeTest);
  }

  elementListTest.innerHTML = "";

  if (TEST_OF_PAGE !== -1) {
    listTest = listTest.slice(INDEX_OF_PAGE * TEST_OF_PAGE, (INDEX_OF_PAGE + 1) * TEST_OF_PAGE);
  }

  listTest.forEach((d) => {
    const child = templateTest(d);
    elementListTest.appendChild(child);
  });

  // renderPageIndex(listTest.length);

}

const renderSelect = () => {
  let templateString = "";
  for (const [key, value] of Object.entries(typeSchool)) {
    templateString += templateType(key);
  }
  elementSelect.innerHTML = templateString;

  listTestOnClick();
}

// const renderPageIndex = (lengthListTest) => {
//   const mod = lengthListTest % TEST_OF_PAGE > 0 ? 1 : 0;
//   const countPage = (lengthListTest - (lengthListTest % TEST_OF_PAGE)) / TEST_OF_PAGE + mod;

//   const pages = [];
//   for(let i = 0; i < countPage; i++) {
//     pages.push(i);
//   };

//   COUNT_PAGE = pages.length;

//   let templatePageString = "";
//   pages.forEach((p) => {
//     templatePageString += templatePage(p);
//   });

//   elementPage.innerHTML = templatePageString;
//   const listPage = document.querySelectorAll(".page");
//   listPage.forEach((p) => {
//     p.addEventListener("click", () => {
//       const index = Number(`${p.id}`.split("-")[1]) || 0;
//       if(INDEX_OF_PAGE === index) {
//         return;
//       }
//       INDEX_OF_PAGE = index;
//       renderListTest();
//     })
//   });

// }

const listTestOnClick = () => {
  const elementTests = document.querySelectorAll(".test");

  elementTests.forEach((e) => {
    e.addEventListener("click", () => testHandleClick(e));
  })
}

const handleSelect = (e) => {
  typeTest = e.target.value;
  INDEX_OF_PAGE = 0;
  renderListTest();
}

const navigationHandle = (type) => {
  if (type)
    INDEX_OF_PAGE = INDEX_OF_PAGE >= COUNT_PAGE ? INDEX_OF_PAGE : INDEX_OF_PAGE + 1;
}

const testHandleClick = (e) => {
  const test = dataJSON.find((d) => d.id === Number(`${e.id}`.split("-")[1]));
  window.open(test.href, "_blank");
}




// Init
const init = () => {
  renderListTest();
  renderSelect();
}
init();




// Add event
elementSelect.addEventListener("change", handleSelect);