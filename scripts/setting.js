"use strict";

const inputPageSize = document.getElementById("input-page-size");
const inputCategory = document.getElementById("input-category");

// sự kiện nút save setting
submitBtn.addEventListener("click", function () {
  // kiểm tra input page size <1
  if (inputPageSize.value < 1) {
    alert("input page size must be > 1");
  } else {
    // thêm page size và category vào currentUser
    currentUser.pageSize = inputPageSize.value;
    currentUser.category = inputCategory.value;
    // console.log(`currentUser.pageSize: ` + currentUser.pageSize);
    // console.log(`currentUser.category: ` + currentUser.category);
    alert("Moving to News");
    // lưu vào storage
    saveToStorage("currentUser", currentUser);
    window.location.href = "/pages/news.html";
  }
});
