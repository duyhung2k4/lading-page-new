const memberMasterJSON = [
  {
    "id": 1,
    "name": "PGS.TS. Nguyễn Thị Tuyết Mai",
    "detail": "Nguyên Vụ phó Vụ Quản lý các trường chính trị - HV Chính trị QG HCM",
    "hrefImg": "./imageMaster/img1.png",
  },
  {
    "id": 2,
    "name": "TS. Nguyễn Thị Thanh Hòa",
    "detail": "Trưởng khoa văn hóa, trường ĐH Thủ Đô",
    "hrefImg": "./imageMaster/img2.png",
  },
  {
    "id": 3,
    "name": "NCS. Nguyễn Thị Biên",
    "detail": "Thành viên Hội đồng biên soạn và thẩm định chương trình hướng nghiệp – khởi nghiệp của MOET",
    "hrefImg": "./imageMaster/img3.png",
  },
  {
    "id": 4,
    "name": "Ths. Nguyễn Thu Hiền",
    "detail": "Viện trưởng Viện nghiên cứu hướng nghiệp & khởi nghiệp - IGCE",
    "hrefImg": "./imageMaster/img4.png",
  },
  {
    "id": 5,
    "name": "Ths. Nguyễn Thị Bích Hòa",
    "detail": "Giám đốc chương trình IGCE",
    "hrefImg": "./imageMaster/img5.png",
  },
  {
    "id": 6,
    "name": "Ths. Đỗ Thị Phương Thảo",
    "detail": "Giám đốc đào tạo IGCE",
    "hrefImg": "./imageMaster/img6.png",
  }
]

const elementListMemberMaster = document.getElementById("council_list-member-master");




const memberMasterTemplate = (member) => {
  return (
    `
    <div class="council__member" id="council__member-master-${member.id}">
      <div class="council__member-img">
        <img src="${member.hrefImg}" alt="">
      </div>
      <p class="council_name">${member.name}</p>
      <p class="council_detail">${member.detail}</p>
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