const memberMasterJSON = [
  {
    "id": 1,
    "name": "PGS.TS. Nguyễn Thị Tuyết Mai",
    "detail": "Nguyên Vụ phó Vụ Quản lý các trường chính trị - HV Chính trị QG HCM",
    "href-img": "",
  },
  {
    "id": 2,
    "name": "TS. Nguyễn Thị Thanh Hòa",
    "detail": "Trưởng khoa văn hóa, trường ĐH Thủ Đô",
    "href-img": "",
  },
  {
    "id": 3,
    "name": "NCS. Nguyễn Thị Biên",
    "detail": "Thành viên Hội đồng biên soạn và thẩm định chương trình hướng nghiệp – khởi nghiệp của MOET",
    "href-img": "",
  },
  {
    "id": 4,
    "name": "Ths. Nguyễn Thu Hiền",
    "detail": "Viện trưởng Viện nghiên cứu hướng nghiệp & khởi nghiệp - IGCE",
    "href-img": "",
  },
  {
    "id": 5,
    "name": "Ths. Nguyễn Thị Bích Hòa",
    "detail": "Giám đốc chương trình IGCE",
    "href-img": "",
  },
  {
    "id": 6,
    "name": "Ths. Đỗ Thị Phương Thảo",
    "detail": "Giám đốc đào tạo IGCE",
    "href-img": "",
  }
]

const elementListMemberMaster = document.getElementById("list-member-master");




const memberMasterTemplate = (member) => {
  return (
    `
    <div class="member" id="member-master-${member.id}">
      <div class="member-img">
        <img src="" alt="">
      </div>
      <p class="name">${member.name}</p>
      <p class="detail">${member.detail}</p>
    </div>
    `
  )
}

const renderListMemberMaster = () => {
  let template = ""
  memberMasterJSON.forEach((m) => {
    template += memberMasterTemplate(m);
  });

  elementListMemberMaster.innerHTML = template;
}


const render = () => {
  renderListMemberMaster();
}




const init = () => {
  render();
}
init();