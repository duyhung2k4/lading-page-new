const templateResult = (
  {
    point, //number
    maxPoint, // number
    vieNameOtp, // string
    engNameOtp, // string
    characteristic, // string
    keywords, // string
    major, // string
  }
) => {
  return (
    `
    <div class="box-point">
      <div class="point">
        <p class="count">${point} / ${maxPoint}</p>
        <p class="unit">điểm</p>
      </div>
    </div>
    <div class="detail">
      <p class="title">${vieNameOtp} (${engNameOtp})</p>
      <div class="option">
        <p>
          <span class="label">Đặc điểm:</span>
          <span class="value">${characteristic}</span>
        </p>
        <p>
          <span class="label">Từ khóa nổi bật để gợi nhắc:</span>
          <span class="value">${keywords}</span>
        </p>
        <p>
          <span class="label">Ngành phù hợp:</span>
          <span class="value">${major}</span>
        </p>
      </div>
    </div>
    `
  )
}

const renderListResult = async () => {
  let listResult = [];
  const boxResult = document.querySelector(".list-result");
  console.log(boxResult);

  //listResult = await axios(...) sau thêm api vào đây
  // fix cứng data
  listResult = [
    {
      point: 9, 
      maxPoint: 18, 
      vieNameOtp: "Kỹ thuật", 
      engNameOtp: "Realistic", 
      characteristic: "Realistic được mệnh danh là nhóm “Do-er”. Họ thường thích làm việc trong môi trường vật chất bên ngoài như làm việc với máy móc, công cụ, động thực vật. Họ thích được hoạt động tay chân hơn là ngồi một chỗ và suy nghĩ. Họ không phù hợp với công việc bàn giấy hay phải làm việc thân thiết, chặt chẽ với quá nhiều người.", 
      keywords: "Thực tế - Chân thật - Khỏe mạnh - Hành động - Tỉ mỉ", 
      major: "Những ngành nghề của Nhóm người Kỹ thuật thường bao gồm những vấn đề thực hành, ứng dụng thực tế và đưa ra giải pháp như: ngành Kiến trúc - Xây Dựng, ngành Ô tô - Cơ khí, ngành Điện - Điện tử, Địa chất, Tự động hóa, Công nghệ thông tin, Nông - lâm - ngư nghiệp, Quản lý công nghiệp, Hải dương học…", 
    },
    {
      point: 12, 
      maxPoint: 18, 
      vieNameOtp: "Xã hội", 
      engNameOtp: "Social", 
      characteristic: "Nhóm này được mệnh danh là những “Helper”. Người thuộc nhóm này thích giúp đỡ, huấn luyện hoặc chăm sóc sức khỏe cho người khác. Họ có khả năng về diễn đạt, giảng giải và thuyết phục. Họ là người hướng ngoại, thích hoạt động xã hội, từ thiện, cộng đồng.", 
      keywords: "Quảng giao - Lắng nghe - Linh hoạt - Nhạy cảm - Kiên nhẫn", 
      major: "Những công việc phù hợp với nhóm này đòi hỏi giao tiếp, kết nối và truyền đạt thông tin đến người khác như: Giáo viên, giảng viên; Hướng dẫn viên du lịch; Tư vấn viên lĩnh vực tâm lý; Chăm sóc sức khỏe cộng đồng; Công tác nhân sự; Cảnh sát; Nhân viên xã hội học.", 
    },
    {
      point: 4, 
      maxPoint: 18, 
      vieNameOtp: "Nghiên cứu", 
      engNameOtp: "Investigative", 
      characteristic: " Investigative được biết đến là nhóm “Thinker”. Nhóm người này thường thích học và giải toán hoặc các môn khoa học. Họ thường là nhóm hướng nội, và nhìn chung sẽ tránh việc phải làm leader, giao tiếp nhiều hay thuyết phục người khác. Họ có óc phân tích tốt, cẩn thận, tỉ mỉ và chính xác.", 
      keywords: "Phân tích - Tò mò - Logic - Điềm tĩnh - Độc lập", 
      major: "Nghề nghiệp phù hợp với nhóm Investigative thường liên quan đến ý tưởng và yêu cầu phải suy nghĩ nhiều hay tìm kiếm sự thật và suy nghĩ để xác định vấn đề như Khoa học công nghệ (trí tuệ nhân tạo, công nghệ thông tin, y sinh môi trường, kỹ thuật….), Khoa học tự nhiên (toán, lý, hóa, sinh, địa lý, thống kê…), Khoa học xã hội (nhân học, tâm lý học, pháp luật, sử học, địa lý…), Y _ Dược…", 
    }
  ]

  listResult.forEach((result) => {
    const divResult = document.createElement("div");
    divResult.className = "result";
    divResult.innerHTML = templateResult(result);
    boxResult.appendChild(divResult);
  })
}

renderListResult();