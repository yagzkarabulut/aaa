$(document).ready(function () {
  var currentIndex = 0;
  var pageSize = 1;
  var totalUsers = 0;
  var data = [];
  const domain = "http://13.48.195.160";
  const token =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzI0NDA3MDc4LCJpYXQiOjE3MjM4MDIyNzgsImp0aSI6ImNiMjU5OTQ1ZWNiMDQ2MGZiNjhmNmVkM2JkNGM0MDRkIiwidXNlcl9pZCI6MX0.SeC1kM4rf4IopYfF6Z7XeDKSKZNNpue-DIu0q70L3xI"; // Buraya token'ınızı ekleyin
  function change_data(response) {
    console.log(response.user.profile_photo);
    $('#gender').text(response.user.gender);
    $('#phone').text(response.user.phone);
    $('#fname').text(response.user.fname);
    $('#lname').text(response.user.lname);
    $('#email').text(response.user.email);
    $('#user_profile_photo').html(`<img class="d-block w-100" src="${domain +response.user.profile_photo}" alt="Placeholder slide" />`)

  }

  // // if (currentIndex < totalUsers) {
  // // var users = data.slice(currentIndex, currentIndex + pageSize);
  // response.forEach(function (user, index) {
  //   var carouselInner = $("#carousel-content");
  //   var carouselItem = `
  //                   <div class="carousel-item">
  //                       <img class="d-block w-100" src="https://via.placeholder.com/600x300" alt="Slide ${
  //                         currentIndex + index + 1
  //                       }" />
  //                       <p class="fs-5 my-3">İsim: ${user.fname}</p>
  //                       <p class="fs-5 mb-3">Kullanıcı Adı: ${user.lname}</p>
  //                       <p class="fs-5 my-3">Tel: ${user.phone}</p>
  //                       <p class="fs-5 mb-3">Email: ${user.email}</p>
  //                   </div>
  //               `;
  //   carouselInner.append(carouselItem);
  // });
  // $(".carousel-item").removeClass("active");
  // $(".carousel-item").last().addClass("active");
  // currentIndex += pageSize;
  // $(".carousel").carousel("next");
  // // }
  //   console.log(response.user);
  // }
  $("#load-next").on("click", function (e) {
      
      $.ajax({
        url: domain + "/api/user/get/",
        type: "GET",
        headers: {
          Authorization: token,
        },
        success: function (response) {
          data = response;
          totalUsers = data.length;

          change_data(response);
        },
        error: function (error) {
          console.error("Bir hata oluştu:", error);
        },
      });
    
  });






});
