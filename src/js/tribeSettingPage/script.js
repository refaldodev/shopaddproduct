var containerAccordion = document.querySelector(".accordion-container");

containerAccordion.addEventListener("click", function (e) {
  // e.preventDefault();
  var header = e.target.closest(".accordion-header");
  if (header) {
    // Hide current open
    var headerOpen = document.querySelector(
      ".accordion-item.active .accordion-header"
    );
    if (headerOpen && !headerOpen.isSameNode(header)) {
      headerOpen.closest(".accordion-item").classList.remove("active");
    }

    // Show current clicked
    var item = e.target.closest(".accordion-item");

    item.classList.toggle("active");

    // var tujuan = item.children[0].getAttribute("href");
    if (item.classList.contains("active")) {
      $("html, body").animate(
        {
          scrollTop: $(item).offset().top - 70,
        },
        500,
        "easeInOutExpo"
      );
    }

    // text area
    $("textarea")
      .each(function () {
        this.setAttribute(
          "style",
          "height:" + this.scrollHeight + "px;overflow-y:hidden;"
        );
        if (this.id === "titleGeneral") {
          $("#counttitleGeneral").text(this.value.length + " " + " / 60");
        } else if (this.id === "titleMultiplePrice") {
          $("#counttitleMultiplePrice").text(
            this.value.length + " " + " / 200"
          );
        } else if (this.id === "titleMultiplePrices") {
          $("#counttitleMultiplePrices").text(
            this.value.length + " " + " / 200"
          );
        } else if (this.id === "word") {
          $("#countword").text(this.value.length + " " + " / 200");
        } else if (this.id === "profileName") {
          $("#countProfileName").text(this.value.length + " " + " / 60");
        } else if (this.id === "TextonButton") {
          $("#countTextonButton").text(this.value.length + " " + " / 20");
        } else if (this.id === "TextonButton2") {
          $("#countTextonButton2").text(this.value.length + " " + " / 20");
        } else if (this.id === "ItemName") {
          $("#countItemName").text(this.value.length + " " + " / 20");
        } else if (this.id === "titleAmount") {
          $("#countTitleAmount").text(this.value.length + " " + " / 100");
        } else if (this.id === "titleLabel") {
          $("#countLabel").text(this.value.length + " " + " / 20");
        } else if (this.id === "PageTittleInput") {
          $("#countPageTittle").text(this.value.length + " " + " / 60");
        } else if (this.id === "inputPageDesc") {
          $("#countPageDesc").text(this.value.length + " " + " / 155");
        } else if (this.id === "titlebuttonText") {
          $("#countbuttonText").text(this.value.length + " " + " / 30");
        }
      })
      .on("input", function () {
        this.style.height = "auto";
        this.style.height = this.scrollHeight + "px";
        var result = 0;
        if (this.id === "titleGeneral") {
          $("#counttitleGeneral").text(this.value.length + " " + " / 60");
        } else if (this.id === "titleMultiplePrice") {
          $("#counttitleMultiplePrice").text(
            this.value.length + " " + " / 200"
          );
        } else if (this.id === "titleMultiplePrices") {
          $("#counttitleMultiplePrices").text(
            this.value.length + " " + " / 200"
          );
        } else if (this.id === "word") {
          $("#countword").text(this.value.length + " " + " / 200");
        } else if (this.id === "profileName") {
          $("#countProfileName").text(this.value.length + " " + " / 60");
        } else if (this.id === "TextonButton") {
          $("#countTextonButton").text(this.value.length + " " + " / 20");
        } else if (this.id === "TextonButton2") {
          $("#countTextonButton2").text(this.value.length + " " + " / 20");
        } else if (this.id === "ItemName") {
          $("#countItemName").text(this.value.length + " " + " / 20");
        } else if (this.id === "titleAmount") {
          $("#countTitleAmount").text(this.value.length + " " + " / 100");
        } else if (this.id === "titleLabel") {
          $("#countLabel").text(this.value.length + " " + " / 20");
        } else if (this.id === "PageTittleInput") {
          $("#countPageTittle").text(this.value.length + " " + " / 60");
        } else if (this.id === "inputPageDesc") {
          $("#countPageDesc").text(this.value.length + " " + " / 155");
        } else if (this.id === "titlebuttonText") {
          $("#countbuttonText").text(this.value.length + " " + " / 30");
        }
      });
  }
});

// text area
$("textarea")
  .each(function () {
    this.setAttribute(
      "style",
      "height:" + this.scrollHeight + "px;overflow-y:hidden;"
    );
    if (this.id === "titleGeneral") {
      $("#counttitleGeneral").text(this.value.length + " " + " / 60");
    } else if (this.id === "titleMultiplePrice") {
      $("#counttitleMultiplePrice").text(this.value.length + " " + " / 200");
    } else if (this.id === "titleMultiplePrices") {
      $("#counttitleMultiplePrices").text(this.value.length + " " + " / 200");
    } else if (this.id === "word") {
      $("#countword").text(this.value.length + " " + " / 200");
    } else if (this.id === "profileName") {
      $("#countProfileName").text(this.value.length + " " + " / 60");
    } else if (this.id === "TextonButton") {
      $("#countTextonButton").text(this.value.length + " " + " / 20");
    } else if (this.id === "TextonButton2") {
      $("#countTextonButton2").text(this.value.length + " " + " / 20");
    } else if (this.id === "ItemName") {
      $("#countItemName").text(this.value.length + " " + " / 20");
    } else if (this.id === "titleAmount") {
      $("#countTitleAmount").text(this.value.length + " " + " / 100");
    } else if (this.id === "titleLabel") {
      $("#countLabel").text(this.value.length + " " + " / 20");
    } else if (this.id === "PageTittleInput") {
      $("#countPageTittle").text(this.value.length + " " + " / 60");
    } else if (this.id === "inputPageDesc") {
      $("#countPageDesc").text(this.value.length + " " + " / 155");
    } else if (this.id === "titlebuttonText") {
      $("#countbuttonText").text(this.value.length + " " + " / 30");
    }
  })
  .on("input", function () {
    this.style.height = "auto";
    this.style.height = this.scrollHeight + "px";
    var result = 0;
    if (this.id === "titleGeneral") {
      $("#counttitleGeneral").text(this.value.length + " " + " / 60");
    } else if (this.id === "titleMultiplePrice") {
      $("#counttitleMultiplePrice").text(this.value.length + " " + " / 200");
    } else if (this.id === "titleMultiplePrices") {
      $("#counttitleMultiplePrices").text(this.value.length + " " + " / 200");
    } else if (this.id === "word") {
      $("#countword").text(this.value.length + " " + " / 200");
    } else if (this.id === "profileName") {
      $("#countProfileName").text(this.value.length + " " + " / 60");
    } else if (this.id === "TextonButton") {
      $("#countTextonButton").text(this.value.length + " " + " / 20");
    } else if (this.id === "TextonButton2") {
      $("#countTextonButton2").text(this.value.length + " " + " / 20");
    } else if (this.id === "ItemName") {
      $("#countItemName").text(this.value.length + " " + " / 20");
    } else if (this.id === "titleAmount") {
      $("#countTitleAmount").text(this.value.length + " " + " / 100");
    } else if (this.id === "titleLabel") {
      $("#countLabel").text(this.value.length + " " + " / 20");
    } else if (this.id === "PageTittleInput") {
      $("#countPageTittle").text(this.value.length + " " + " / 60");
    } else if (this.id === "inputPageDesc") {
      $("#countPageDesc").text(this.value.length + " " + " / 155");
    } else if (this.id === "titlebuttonText") {
      $("#countbuttonText").text(this.value.length + " " + " / 30");
    }
  });
// sub accordion
var subContainerAccordion = document.querySelector(".subAccordion-container");

subContainerAccordion.addEventListener("click", function (e) {
  // e.preventDefault();
  var header = e.target.closest(".subAccordion-header");
  if (header) {
    // Hide current open
    var headerOpen = document.querySelector(
      ".subAccordion-item.active .subAccordion-header"
    );
    if (headerOpen && !headerOpen.isSameNode(header)) {
      headerOpen.closest(".subAccordion-item").classList.remove("active");
    }

    // Show current clicked
    var item = e.target.closest(".subAccordion-item");
    item.classList.toggle("active");
    if (item.classList.contains("active")) {
      $("html, body").animate(
        {
          scrollTop: $(item).offset().top - 70,
        },
        500,
        "easeInOutExpo"
      );
    }
    // text area
    $("textarea")
      .each(function () {
        this.setAttribute(
          "style",
          "height:" + this.scrollHeight + "px;overflow-y:hidden;"
        );
        if (this.id === "titleGeneral") {
          $("#counttitleGeneral").text(this.value.length + " " + " / 60");
        } else if (this.id === "titleMultiplePrice") {
          $("#counttitleMultiplePrice").text(
            this.value.length + " " + " / 200"
          );
        } else if (this.id === "titleMultiplePrices") {
          $("#counttitleMultiplePrices").text(
            this.value.length + " " + " / 200"
          );
        } else if (this.id === "word") {
          $("#countword").text(this.value.length + " " + " / 200");
        } else if (this.id === "profileName") {
          $("#countProfileName").text(this.value.length + " " + " / 60");
        } else if (this.id === "TextonButton") {
          $("#countTextonButton").text(this.value.length + " " + " / 20");
        } else if (this.id === "TextonButton2") {
          $("#countTextonButton2").text(this.value.length + " " + " / 20");
        } else if (this.id === "ItemName") {
          $("#countItemName").text(this.value.length + " " + " / 20");
        } else if (this.id === "titleAmount") {
          $("#countTitleAmount").text(this.value.length + " " + " / 100");
        } else if (this.id === "titleNOS") {
          $("#countTitleNOS").text(this.value.length + " " + " / 100");
        } else if (this.id === "elementInput") {
        }
      })
      .on("input", function () {
        this.style.height = "auto";
        this.style.height = this.scrollHeight + "px";
        var result = 0;
        if (this.id === "titleGeneral") {
          $("#counttitleGeneral").text(this.value.length + " " + " / 60");
        } else if (this.id === "titleMultiplePrice") {
          $("#counttitleMultiplePrice").text(
            this.value.length + " " + " / 200"
          );
        } else if (this.id === "titleMultiplePrices") {
          $("#counttitleMultiplePrices").text(
            this.value.length + " " + " / 200"
          );
        } else if (this.id === "word") {
          $("#countword").text(this.value.length + " " + " / 200");
        } else if (this.id === "profileName") {
          $("#countProfileName").text(this.value.length + " " + " / 60");
        } else if (this.id === "TextonButton") {
          $("#countTextonButton").text(this.value.length + " " + " / 20");
        } else if (this.id === "TextonButton2") {
          $("#countTextonButton2").text(this.value.length + " " + " / 20");
        } else if (this.id === "ItemName") {
          $("#countItemName").text(this.value.length + " " + " / 20");
        } else if (this.id === "titleAmount") {
          $("#countTitleAmount").text(this.value.length + " " + " / 100");
        } else if (this.id === "titleNOS") {
          $("#countTitleNOS").text(this.value.length + " " + " / 100");
        } else if (this.id === "elementInput") {
        }
      });
  }
});

// sub accordion Supporter
var subContainerAccordionSupporter = document.querySelector(
  ".subAccordion-containerSupporter"
);

subContainerAccordionSupporter.addEventListener("click", function (e) {
  // e.preventDefault();
  var header = e.target.closest(".subAccordion-headerSupporter");
  if (header) {
    // Hide current open
    var headerOpen = document.querySelector(
      ".subAccordion-itemSupporter.active .subAccordion-headerSupporter"
    );
    if (headerOpen && !headerOpen.isSameNode(header)) {
      headerOpen
        .closest(".subAccordion-itemSupporter")
        .classList.remove("active");
    }

    // Show current clicked
    var item = e.target.closest(".subAccordion-itemSupporter");
    item.classList.toggle("active");
    if (item.classList.contains("active")) {
      $("html, body").animate(
        {
          scrollTop: $(item).offset().top - 70,
        },
        500,
        "easeInOutExpo"
      );
    }
    // text area
    $("textarea")
      .each(function () {
        this.setAttribute(
          "style",
          "height:" + this.scrollHeight + "px;overflow-y:hidden;"
        );
        if (this.id === "titleGeneral") {
          $("#counttitleGeneral").text(this.value.length + " " + " / 60");
        } else if (this.id === "titleMultiplePrice") {
          $("#counttitleMultiplePrice").text(
            this.value.length + " " + " / 200"
          );
        } else if (this.id === "titleMultiplePrices") {
          $("#counttitleMultiplePrices").text(
            this.value.length + " " + " / 200"
          );
        } else if (this.id === "word") {
          $("#countword").text(this.value.length + " " + " / 200");
        } else if (this.id === "profileName") {
          $("#countProfileName").text(this.value.length + " " + " / 60");
        } else if (this.id === "TextonButton") {
          $("#countTextonButton").text(this.value.length + " " + " / 20");
        } else if (this.id === "TextonButton2") {
          $("#countTextonButton2").text(this.value.length + " " + " / 20");
        } else if (this.id === "ItemName") {
          $("#countItemName").text(this.value.length + " " + " / 20");
        } else if (this.id === "titleAmount") {
          $("#countTitleAmount").text(this.value.length + " " + " / 100");
        } else if (this.id === "titleNOS") {
          $("#countTitleNOS").text(this.value.length + " " + " / 100");
        } else if (this.id === "elementInput") {
        }
      })
      .on("input", function () {
        this.style.height = "auto";
        this.style.height = this.scrollHeight + "px";
        var result = 0;
        if (this.id === "titleGeneral") {
          $("#counttitleGeneral").text(this.value.length + " " + " / 60");
        } else if (this.id === "titleMultiplePrice") {
          $("#counttitleMultiplePrice").text(
            this.value.length + " " + " / 200"
          );
        } else if (this.id === "titleMultiplePrices") {
          $("#counttitleMultiplePrices").text(
            this.value.length + " " + " / 200"
          );
        } else if (this.id === "word") {
          $("#countword").text(this.value.length + " " + " / 200");
        } else if (this.id === "profileName") {
          $("#countProfileName").text(this.value.length + " " + " / 60");
        } else if (this.id === "TextonButton") {
          $("#countTextonButton").text(this.value.length + " " + " / 20");
        } else if (this.id === "TextonButton2") {
          $("#countTextonButton2").text(this.value.length + " " + " / 20");
        } else if (this.id === "ItemName") {
          $("#countItemName").text(this.value.length + " " + " / 20");
        } else if (this.id === "titleAmount") {
          $("#countTitleAmount").text(this.value.length + " " + " / 100");
        } else if (this.id === "titleNOS") {
          $("#countTitleNOS").text(this.value.length + " " + " / 100");
        } else if (this.id === "elementInput") {
        }
      });
  }
});

// // profile image
// function profileSection() {
//   //input profile image
//   // $(".cover-image").css("display", "none");

//   let $uploadCrop;
//   function uploadProfileImg() {
//     var isValidSize = true;
//     function readFile(input) {
//       if (input.files && input.files[0]) {
//         var reader = new FileReader();
//         if (input.files[0].size > 1048576) {
//           isValidSize = false;
//           $(".get-cropped-imgPicture").prop("disabled", true);
//           $(".modal .image-error-msgprofile").html("Max 1MB");

//           return;
//         }
//         isValidSize = true;
//         reader.onload = function (e) {
//           $(".upload-profile-imgPicture").addClass("ready");
//           $uploadCrop
//             .croppie("bind", {
//               url: e.target.result,
//             })
//             .then(function () {
//               console.log("jQuery bind complete");
//             });
//         };
//         reader.readAsDataURL(input.files[0]);
//       } else {
//         return false;
//       }
//     }

//     $uploadCrop = $("#upload-profile-imgPicture").croppie({
//       viewport: {
//         width: 250,
//         height: 250,
//         type: "circle",
//       },
//       enableExif: true,

//       enableOrientation: true,
//     });

//     $("#uploadProfile").on("change", function (e) {
//       var _this = this;
//       if (this.files) {
//         var file, img;
//         img = new Image();
//         var objectUrl = URL.createObjectURL(this.files[0]);
//         img.onload = function () {
//           if (this.height > 300 && this.width > 300) {
//             readFile(_this);
//             URL.revokeObjectURL(objectUrl);
//             if (isValidSize && this.height > 320 && this.width > 320) {
//               $(".file-nameprofile").html(_this.files[0].name);
//               $(".modal .image-error-msgprofile").html("");
//               $(".get-cropped-imgPicture").prop("disabled", false);
//             }
//           } else {
//             $(".modal .image-error-msgprofile").html(
//               "Min height 300px dan min width 300px"
//             );
//             $(".profile-img-container").css("display", "none");
//             $(".get-cropped-imgPicture").prop("disabled", true);
//           }
//         };
//         img.src = objectUrl;
//       }
//     });

//     $(".get-cropped-imgPicture").on("click", function (ev) {
//       $uploadCrop
//         .croppie("result", {
//           type: "canvas",
//           size: "viewport",
//         })
//         .then(function (resp) {
//           $("#profile-image").attr("src", resp);
//           fetch(resp)
//             .then((res) => res.blob())
//             .then((res) => {
//               console.log(res);
//             });
//         });
//       $(".profile-img-container").css("display", "block");
//       $("#wrapper-deleteIconProfile").css("display", "flex");
//     });
//   }

//   uploadProfileImg();

//   //delete profile image
//   $("#wrapper-deleteIconProfile").click(function (e) {
//     deleteConfirmation();
//   });

//   function deleteConfirmation() {
//     document
//       .querySelector("#confirm-delete-btnProfile")
//       .addEventListener("click", function () {
//         $("#wrapper-deleteIconProfile").css("display", "none");

//         removeAtr();
//       });

//     function removeAtr() {
//       $("#profile-image").attr("src", "");
//       $("#upload-profile-imgPicture").croppie("destroy");
//       $(".file-nameprofile").html("No file selected");
//       $(".profile-img-container").css("display", "none");
//       uploadProfileImg();
//       document
//         .querySelector("#confirm-delete-btnProfile")
//         .removeEventListener("click", removeAtr);
//     }
//   }
// }

// profileSection();

// Function untuk mengupload image
// function uploadImageItem() {
//   // Ambil element form dan file yang akan diupload
//   const form = document.getElementById("upload-form");
//   const file = document.getElementById("uploadItem").files[0];

//   // Jika tidak ada file yang dipilih, tampilkan pesan error
//   if (!file) {
//     showErrorMessageItem("Silakan pilih file gambar terlebih dahulu");
//     return;
//   }

//   // Ambil ukuran file
//   const fileSize = file.size;
//   const fileSizeKB = fileSize / 1024; // Ukuran file dalam KB

//   // Jika ukuran file lebih dari 500KB, tampilkan pesan error
//   if (fileSizeKB > 500) {
//     showErrorMessageItem("Ukuran file tidak boleh lebih dari 500KB");
//     return;
//   }

//   // Ambil informasi mengenai lebar dan tinggi gambar
//   const imageURL = URL.createObjectURL(file);
//   const image = new Image();
//   image.src = imageURL;
//   image.onload = function () {
//     // Ambil lebar dan tinggi gambar
//     const width = this.naturalWidth;
//     const height = this.naturalHeight;

//     // Jika lebar atau tinggi gambar kurang dari 100, tampilkan pesan error
//     if (width < 100 || height < 100) {
//       showErrorMessageItem(
//         "Lebar dan tinggi gambar tidak boleh kurang dari 100 pixel"
//       );
//       return;
//     }

//     // Selain itu, lakukan proses upload file
//     var src = URL.createObjectURL(file);
//     var preview = document.getElementById("item-image");
//     var item = document.getElementById("wrapperitem-image");

//     preview.src = src;
//     preview.style.display = "block";
//     var btn = document.getElementById("wrapper-deleteItem");
//     btn.style.display = "block";
//     item.style.display = "block";
//     showErrorMessageItem("");
//   };
// }

// // Function untuk menampilkan pesan error
// function showErrorMessageItem(message) {
//   const errorMessage = document.getElementById("error-message");
//   errorMessage.innerText = message;
// }

// // Event listener untuk mengupload image ketika file dipilih
// const fileInputItem = document.getElementById("uploadItem");
// fileInputItem.addEventListener("change", function () {
//   uploadImageItem();
// });

// // confirm-delete-btnItem

// function deleteImageItem() {
//   // Ambil element gambar
//   // const image = document.getElementById("item-image");
//   $("#item-image").attr("src", "");
//   // Hapus element gambar
//   var item = document.getElementById("wrapperitem-image");
//   var btn = document.getElementById("wrapper-deleteItem");
//   btn.style.display = "none";

//   // image.parentNode.removeChild(image);
//   item.style.display = "none";
// }

// // Event listener untuk menghapus image ketika tombol hapus diklik
// const deleteButton = document.getElementById("confirm-delete-btnItem");
// deleteButton.addEventListener("click", function () {
//   deleteImageItem();
// });

// select2
// In your Javascript (external .js resource or <script> tag)
$(document).ready(function () {
  $(".language").select2();
});
$(document).ready(function () {
  $(".type").select2({
    minimumResultsForSearch: -1,
    dropdownCssClass: "typeColor",
  });
});
// $(document).ready(function () {
//   $(".destination").select2({
//     dropdownCssClass: "typeColor",
//     tags: true,
//   });
// });

$(".destination").select2({
  tags: true,
  // tokenSeparators: [",", " "],
  tokenSeparators: [","],

  templateSelection: function (selection) {
    if (selection.selected) {
      return $.parseHTML(
        '<span class="customclass">' + selection.text + "</span>"
      );
    } else {
      return $.parseHTML(
        '<span class="customclass">' + selection.text + "</span>"
      );
    }
  },
});
// Function untuk mengupload video
// function uploadVideo() {
//   // Ambil element form dan file yang akan diupload
//   // const form = document.getElementById('upload-form');
//   const file = document.getElementById("video-file").files[0];

//   // Jika tidak ada file yang dipilih, tampilkan pesan error
//   if (!file) {
//     showErrorMessageVideo("Silakan pilih file video terlebih dahulu");
//     return;
//   }

//   // Ambil ukuran file
//   const fileSize = file.size;
//   const fileSizeMB = fileSize / (1024 * 1024); // Ukuran file dalam MB

//   // Jika ukuran file lebih dari 20MB, tampilkan pesan error
//   if (fileSizeMB > 20) {
//     showErrorMessageVideo("Ukuran file tidak boleh lebih dari 20MB");
//     return;
//   }

//   // Selain itu, lakukan proses upload file
//   var freader = new FileReader();
//   const fileVideo = document.getElementById("video-file").files[0];

//   var videoShow = document.querySelector(".wrapper-showVideo");
//   freader.readAsDataURL(fileVideo);
//   freader.onload = function () {
//     console.log(freader.result);
//     videoShow.style.display = "block";
//     document.getElementById("sourceVideo").src = freader.result;
//     var btn = document.getElementById("wrapper-deleteVideo");
//     btn.style.display = "block";
//     showErrorMessageVideo("");
//   };
// }

// // Function untuk menampilkan pesan error
// function showErrorMessageVideo(message) {
//   const errorMessage = document.querySelector(".error-message-Video");
//   errorMessage.innerText = message;
// }

// const fileInputVideo = document.getElementById("video-file");
// fileInputVideo.addEventListener("change", function () {
//   uploadVideo();
//   var vid = document.getElementById("sourceVideo");
//   var videoShow = document.querySelector(".wrapper-showVideo");
//   vid.addEventListener("loadedmetadata", (event) => {
//     vid.style.width = vid.videoWidth;
//     videoShow.style.height = videoShow.videoHeight;
//     console.log(vid.videoWidth);
//   });
// });

// // Fungsi delete untuk menghapus video
// function deleteVideo() {
//   // Mendapatkan elemen confirm-delete-btnVideo
//   var video = document.getElementById("sourceVideo");
//   var videoShow = document.querySelector(".wrapper-showVideo");

//   videoShow.style.display = "none";
//   var btn = document.getElementById("wrapper-deleteVideo");
//   btn.style.display = "none";
//   // Mengosongkan sumber video
//   video.src = "";
//   const fileInputVideo = document.getElementById("video-file");

//   showErrorMessageVideo("");
// }
// document
//   .getElementById("confirm-delete-btnVideo")
//   .addEventListener("click", deleteVideo);

// // image message supporter
// function uploadImageMessage() {
//   // Ambil element form dan file yang akan diupload
//   // const form = document.getElementById("upload-form");
//   const file = document.getElementById("image-message").files[0];
//   console.log(file);

//   // Jika tidak ada file yang dipilih, tampilkan pesan error
//   if (!file) {
//     showErrorMessageImage("Silakan pilih file gambar terlebih dahulu");
//     return;
//   }

//   // Ambil ukuran file
//   const fileSize = file.size;
//   const fileSizeKB = 1 * 1024 * 1024; // Ukuran file dalam KB

//   // Jika ukuran file lebih dari 500KB, tampilkan pesan error
//   if (fileSize > fileSizeKB) {
//     showErrorMessageImage("Ukuran file tidak boleh lebih dari 1MB");
//     return;
//   }

//   // Ambil informasi mengenai lebar dan tinggi gambar
//   const imageURL = URL.createObjectURL(file);
//   const image = new Image();
//   image.src = imageURL;
//   image.onload = function () {
//     // Ambil lebar dan tinggi gambar
//     const width = this.naturalWidth;
//     const height = this.naturalHeight;

//     // Jika lebar atau tinggi gambar kurang dari 100, tampilkan pesan error
//     if (width < 100 || height < 100) {
//       showErrorMessageImage(
//         "Lebar dan tinggi gambar tidak boleh kurang dari 100 pixel"
//       );
//       return;
//     }
//     var parent = document.querySelector(".wrapper-showImage");
//     widthParent = parent.offsetWidth;

//     // Selain itu, lakukan proses upload file
//     var src = URL.createObjectURL(file);
//     var preview = document.getElementById("image-supporter");
//     var btn = document.getElementById("wrapper-deleteImageMessageModal");
//     btn.style.display = "block";
//     preview.src = src;
//     preview.style.display = "block";
//     // preview.style.width = `${width}px`;
//     preview.style.height = `auto`;
//     // var btn = document.getElementById("wrapper-deleteItem");
//     // btn.style.display = "block";
//     var item = document.querySelector(".wrapper-showImage");
//     item.style.display = "block";
//     showErrorMessageImage("");
//   };
// }

// // Function untuk menampilkan pesan error
// function showErrorMessageImage(message) {
//   const errorMessage = document.querySelector(".error-message-imageSupporter");
//   errorMessage.innerText = message;
// }

// // Event listener untuk mengupload image ketika file dipilih
// const fileInputImage = document.getElementById("image-message");
// fileInputImage.addEventListener("change", function () {
//   uploadImageMessage();
// });

// // Event listener untuk button delete
// function deleteImageMessage() {
//   // Ambil element gambar
//   // const image = document.getElementById("item-image");
//   $("#image-supporter").attr("src", "");
//   // Hapus element gambar

//   var btn = document.getElementById("wrapper-deleteImageMessageModal");
//   btn.style.display = "none";
//   var item = document.querySelector(".wrapper-showImage");

//   // image.parentNode.removeChild(image);
//   item.style.display = "none";
// }
// document
//   .getElementById("wrapper-deleteImageMessage")
//   .addEventListener("click", deleteImageMessage);

// radio
$('input[type="radio"].radioedit').on("change", function () {
  $('input[type="radio"].radioedit').not(this).prop("checked", false);
  if (this.name != "custom") {
    $("#year").attr("disabled", true);
    $("#months").attr("disabled", true);
    $("#date").attr("disabled", true);
    $("#hour").attr("disabled", true);
    $("#minute").attr("disabled", true);
  } else {
    $("#year").attr("disabled", false);
    $("#months").attr("disabled", false);
    $("#date").attr("disabled", false);
    $("#hour").attr("disabled", false);
    $("#minute").attr("disabled", false);
  }
});

$('input[type="radio"].radioedit2').on("change", function () {
  $('input[type="radio"].radioedit2').not(this).prop("checked", false);
  console.log(this.name);
  if (this.name != "custom2") {
    $("#year2").attr("disabled", true);
    $("#months2").attr("disabled", true);
    $("#date2").attr("disabled", true);
    $("#hour2").attr("disabled", true);
    $("#minute2").attr("disabled", true);
  } else {
    $("#year2").attr("disabled", false);
    $("#months2").attr("disabled", false);
    $("#date2").attr("disabled", false);
    $("#hour2").attr("disabled", false);
    $("#minute2").attr("disabled", false);
  }
});

var toolbarOptions = [
  // ["bold", "italic", "underline"], // toggled buttons
  [
    "bold",
    "italic",
    "underline",
    { list: "ordered" },
    { list: "bullet" },
    "link",
  ],
];

// var quill = new Quill("#editorQuill", {
//   modules: {
//     toolbar: toolbarOptions,
//   },
//   theme: "bubble",

//   // modules: {
//   //   toolbar: toolbarOptions
//   // }
// });
// var quill2 = new Quill("#editorQuillAmount", {
//   theme: "bubble",

//   bounds: "#editorQuillAmount",
//   scrollingContainer: "#editorQuillAmount",
//   modules: {
//     toolbar: toolbarOptions,
//   },
//   // modules: {
//   //   toolbar: toolbarOptions
//   // }
// });
// var quill3 = new Quill("#editorQuillSupporter", {
//   theme: "bubble",
//   modules: {
//     toolbar: toolbarOptions,
//   },
//   // modules: {
//   //   toolbar: toolbarOptions
//   // }
// });

// const editor = new EditorJS({
//   holder: "editorjs",
//   // tools: {

//   //   list: {
//   //     class: List,
//   //     inlineToolbar: true,
//   //     config: {
//   //       defaultStyle: "unordered",
//   //     },
//   //   },
//   // },
//   tools: {
//     list: {
//       class: List,

//       inlineToolbar: true,
//       shortcut: "CMD+SHIFT+L",
//     },
//     paragraph: {
//       class: Paragraph,
//       inlineToolbar: true,
//     },
//     linkTool: {
//       class: LinkTool,
//     },

//     underline: Underline,
//   },
//   minHeight: 0,
// });
// var quill = new Quill("#editorContainer", {
//   theme: "bubble",
//   bounds: "#editorContainer",
//   scrollingContainer: "#editorContainer",
//   modules: {
//     toolbar: toolbarOptions,
//   },
// });

// editor

$("#trumbowyg-container").trumbowyg({
  btns: [
    ["bold", "italic", "underline"],
    ["unorderedList", "orderedList"],
    ["link"],
  ],
  minimalLinks: true, // Menyembunyikan opsi 'Target' dan 'Title'
  resetCss: true,
  autogrowOnEnter: true,
  autogrow: true,
});

$("#editorContainer2").trumbowyg({
  btns: [
    ["bold", "italic", "underline"],
    ["unorderedList", "orderedList"],
    ["link"],
  ],
  minimalLinks: true, // Menyembunyikan opsi 'Target' dan 'Title'
  resetCss: true,
  autogrowOnEnter: true,
  autogrow: true,
});

// var quill = new Quill("#editorContainer2", {
//   theme: "bubble",
//   bounds: "#editorContainer2",
//   scrollingContainer: "#editorContainer2",
//   modules: {
//     toolbar: toolbarOptions,
//   },
// });

$("#editorContainerBuyers").trumbowyg({
  btns: [
    ["bold", "italic", "underline"],
    ["unorderedList", "orderedList"],
    ["link"],
  ],
  minimalLinks: true, // Menyembunyikan opsi 'Target' dan 'Title'
  resetCss: true,
  autogrowOnEnter: true,
  autogrow: true,
});
// var quill = new Quill("#editorContainerBuyers", {
//   theme: "bubble",
//   bounds: "#editorContainerBuyers",
//   scrollingContainer: "#editorContainerBuyers",
//   modules: {
//     toolbar: toolbarOptions,
//   },
// });

// var quill = new Quill("#editorContainerTY", {
//   theme: "bubble",
//   bounds: "#editorContainerTY",
//   scrollingContainer: "#editorContainerTY",
//   modules: {
//     toolbar: toolbarOptions,
//   },
// });

$("#editorContainerTY").trumbowyg({
  btns: [
    ["bold", "italic", "underline"],
    ["unorderedList", "orderedList"],
    ["link"],
  ],
  minimalLinks: true, // Menyembunyikan opsi 'Target' dan 'Title'
  resetCss: true,
  autogrowOnEnter: true,
  autogrow: true,
});
$("#editorContainer199").trumbowyg({
  btns: [
    ["bold", "italic", "underline"],
    ["unorderedList", "orderedList"],
    ["link"],
  ],
  minimalLinks: true, // Menyembunyikan opsi 'Target' dan 'Title'
  resetCss: true,
  autogrowOnEnter: true,
  autogrow: true,
});

// conTOHU
// const editor = new EditorJS({
//   holder: "editorjs",
//   inlineToolbar: ["bold", "italic", "underline", "link"],
//   tools: {
//     list: List,
//     underline: Underline,
//   },
//   minHeight: 0,
// });

// const editorJsTarget = new EditorJS({
//   holder: "editorJsTarget",
//   inlineToolbar: ["bold", "italic", "underline", "link"],
//   tools: {
//     list: List,
//     underline: Underline,
//   },
//   minHeight: 0,
// });

// const editorJsTarget2 = new EditorJS({
//   holder: "editorJsTarget2",
//   inlineToolbar: ["bold", "italic", "underline", "link"],
//   tools: {
//     list: List,
//     underline: Underline,
//   },
//   minHeight: 0,
// });
// var tooltip = quill.theme.tooltip;
// var input = tooltip.root.querySelector("input[data-link]");
// input.dataset.link = "www.sociabuzz.com";

$(document).ready(function () {
  $(".ql-tooltip-editor input").on("keydown", function (e) {
    console.log($(this).val());
    if (e.shiftKey === true || e.keyCode === 13) {
      e.preventDefault();
    }
  });
});
// const toolbar = quill.getModule("toolbar");
// toolbar.addHandler("link", (formatTextToLink) => {
//   if (formatTextToLink) {
//     quill.theme.tooltip.edit();
//   } else {
//     quill.theme.tooltip.edit("link", quill.getFormat().link);
//   }
// });

// tooltip icon
$(".color-exclamation-circle").tooltip({
  trigger: "hover", // Menetapkan trigger manual agar tooltip tidak muncul saat hover
});
$(function () {
  $(".color-exclamation-circle").tooltip();
});

// add options
/* 
document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.querySelector(".addOptions");
  const optionsContainer = document.querySelector(".container-wrapperPrice");

  addButton.addEventListener("click", function () {
    // Dapatkan elemen select terakhir
    const lastSelect = optionsContainer.querySelector(
      ".wrapper-price:last-child"
    );

    // Duplikasi elemen select
    const newSelect = lastSelect.cloneNode(true);

    // Kosongkan nilai pilihan baru
    newSelect.selectedIndex = 0;

    // Tambahkan elemen select baru ke dalam kontainer
    optionsContainer.appendChild(newSelect);
  });
});
*/

// button add options 1
function addOption1() {
  const sortableContainer = document.getElementById("container-wrapperPrice1");

  sortableContainer.addEventListener("click", (event) => {
    const clickedIcon = event.target;
    if (clickedIcon.classList.contains("item-icon")) {
      const item = clickedIcon.closest(".wrapper-price");
      const direction = clickedIcon.getAttribute("data-direction");

      if (direction === "up" && item.previousElementSibling) {
        sortableContainer.insertBefore(item, item.previousElementSibling);
      } else if (direction === "down" && item.nextElementSibling) {
        sortableContainer.insertBefore(item.nextElementSibling, item);
      }

      if (clickedIcon.classList.contains("delete-element")) {
        // $("body").tooltip("hide");

        $(".item-icon").tooltip();

        $(".item-icon").on("click", function () {
          $(this).tooltip("hide");
        });
        item.remove();
        // $("body").tooltip("show");
      }
    }
  });

  document.addEventListener("DOMContentLoaded", function () {
    const addButton = document.getElementById("addOptionsBtnPrice1");
    const container = document.getElementById("container-wrapperPrice1");

    let optionCount = 3;
    let descriptionCount = 3;

    addButton.addEventListener("click", () => {
      const optionDiv = createOptionDiv();
      container.appendChild(optionDiv);
      textareaMultiple(optionCount);
      $(".item-icon").tooltip();

      $(".item-icon").on("click", function () {
        $(this).tooltip("hide");
      });
      // var toolbarOptions = [
      //   // ["bold", "italic", "underline"], // toggled buttons
      //   [
      //     "bold",
      //     "italic",
      //     "underline",
      //     { list: "ordered" },
      //     { list: "bullet" },
      //     "link",
      //   ],
      // ];
      // var quill = new Quill(`#editorContainer${optionCount}`, {
      //   theme: "bubble",
      //   bounds: `#editorContainer${optionCount}`,
      //   scrollingContainer: `#editorContainer${optionCount}`,
      //   modules: {
      //     toolbar: toolbarOptions,
      //   },
      // });

      $(`#editorContainer${optionCount}`).trumbowyg({
        btns: [
          ["bold", "italic", "underline"],
          ["unorderedList", "orderedList"],
          ["link"],
        ],
        minimalLinks: true, // Menyembunyikan opsi 'Target' dan 'Title'
        resetCss: true,
        autogrowOnEnter: true,
        autogrow: true,
      });
      optionCount++;
      descriptionCount++;
    });

    function textareaMultiple(optionCount) {
      // text area
      $("textarea")
        .each(function () {
          this.setAttribute(
            "style",
            "height:" + this.scrollHeight + "px;overflow-y:hidden;"
          );
          if (this.id === `titleMultiplePrice${optionCount}`) {
            $(`#counttitleMultiplePrice${optionCount}`).text(
              this.value.length + " " + " / 200"
            );
          }
        })
        .on("input", function () {
          this.style.height = "auto";
          this.style.height = this.scrollHeight + "px";
          var result = 0;
          if (this.id === `titleMultiplePrice${optionCount}`) {
            $(`#counttitleMultiplePrice${optionCount}`).text(
              this.value.length + " " + " / 200"
            );
          }
        });
    }
    function createOptionDiv() {
      const optionDiv = document.createElement("div");
      optionDiv.className = `multiple-prices wrapper-price mt-custom ml-28 `;

      const div = `
    <div class="wrapper-form mb-10">
                    <p class="form-title">
                     Price
                  </p>
                    <div class="col-auto p-0">
                      <label class="sr-only" for="inlineFormInputGroup">Username</label>
                      <div class="input-group ">
                        <div class="input-group-prepend ">
                          <div class="input-group-text border-custom-currency">SGD</div>
                        </div>
                        <input type="number" class="form-control mt-9 messageInput border-currency" id="inlineFormInputGroup" style="height: 38px; overflow-y: hidden;">
                      </div>
                      <div class="d-flex align-items-start flex  justify-content-start mb-2">
                        <p class="error-textarea">Cannot be empty</p>
                       
                    </div>
                    </div>
                  </div>
                  <div class="wrapper-form mb-9">
                    <p class="form-title">
                        Title
                  </p>
                 
      
                  <textarea type="text" id="titleMultiplePrice${optionCount}" rows="1" class="form-control mt-9 messageInput" maxlength="200" style="height:38px;overflow-y:hidden;"></textarea>
                  <div class="d-flex align-items-start flex  justify-content-between">
                    <p class="error-textarea">Cannot be empty</p>
                    <p class="countNumber" id="counttitleMultiplePrice${optionCount}">0  / 200</p>
                </div>
                </div>

                <!-- multiple prices editor -->
                <div class="wrapper-form mb-0" id="heading-element${optionCount}">
                  <div class="collapse-text form-title  FSize collapsed" data-toggle="collapse" data-target="#collapse-element${optionCount}" aria-expanded="false" aria-controls="collapse-element${optionCount}">
                  
                      Description
                  
                  </div>
                  <div class="collapse" id="collapse-element${optionCount}" aria-labelledby="heading-element${optionCount}" data-parent="#heading-element${optionCount}">
                <div id="editorContainer${optionCount}" style="margin-bottom: 12px;"></div>
                
              </div>
                <!-- <div class="text-editor">
                  <div id="editorJsFirst"  >
                  
                  </div>
                </div> -->
                
            </div>

            <div class="wrapperEvent d-flex mt-5px">
              <i class="fa-regular fa-circle-up mr-20 to-top item-icon" data-direction="up" data-toggle="tooltip" data-placement="top" title="Move position up"></i>
              <i class="fa-regular fa-circle-down mr-20 to-bottom item-icon" data-direction="down" data-toggle="tooltip" data-placement="top" title="Move position down"></i>
              <i class="fa-regular fa-trash-can mr-20 delete-element item-icon" data-toggle="tooltip" data-placement="top" title="Delete it"></i>
            </div>
`;
      optionDiv.innerHTML = div;

      /*   const iconsWrapper = optionDiv.querySelector(".wrapperEvent");
    const toTopIcon = createIcon("fa-circle-up", "to-top", "up");
    const toBottomIcon = createIcon("fa-circle-down", "to-bottom", "down");
    const deleteIcon = createIcon("fa-trash", "delete-element", "delete");

    iconsWrapper.appendChild(toTopIcon);
    iconsWrapper.appendChild(toBottomIcon);
    iconsWrapper.appendChild(deleteIcon);
 */
      // text area add options

      return optionDiv;
    }

    // function deleteElement(element) {
    //   element.remove();
    // }
  });
}
addOption1();

function addOption2() {
  const sortableContainer = document.getElementById("container-wrapperPrice2");

  sortableContainer.addEventListener("click", (event) => {
    const clickedIcon = event.target;
    if (clickedIcon.classList.contains("item-icon")) {
      const item = clickedIcon.closest(".wrapper-price");
      const direction = clickedIcon.getAttribute("data-direction");

      if (direction === "up" && item.previousElementSibling) {
        sortableContainer.insertBefore(item, item.previousElementSibling);
      } else if (direction === "down" && item.nextElementSibling) {
        sortableContainer.insertBefore(item.nextElementSibling, item);
      }

      if (clickedIcon.classList.contains("delete-element")) {
        // $(clickedIcon).tooltip("hide");
        item.remove();
        $(".item-icon").tooltip();

        $(".item-icon").on("click", function () {
          $(this).tooltip("hide");
        });
      }
    }
  });

  document.addEventListener("DOMContentLoaded", function () {
    const addButton = document.getElementById("addOptionsBtnPrice2");
    const container = document.getElementById("container-wrapperPrice2");
    let optionCount = 200;
    let descriptionCount = 200;

    addButton.addEventListener("click", () => {
      const optionDiv = createOptionDiv();
      container.appendChild(optionDiv);
      textareaMultiple(optionCount);
      $(".item-icon").tooltip();

      $(".item-icon").on("click", function () {
        $(this).tooltip("hide");
      });
      $(`#editorContainer${optionCount}`).trumbowyg({
        btns: [
          ["bold", "italic", "underline"],
          ["unorderedList", "orderedList"],
          ["link"],
        ],
        minimalLinks: true, // Menyembunyikan opsi 'Target' dan 'Title'
        resetCss: true,
        autogrowOnEnter: true,
        autogrow: true,
      });
      optionCount++;
      descriptionCount++;
    });

    function textareaMultiple(optionCount) {
      // text area
      $("textarea")
        .each(function () {
          this.setAttribute(
            "style",
            "height:" + this.scrollHeight + "px;overflow-y:hidden;"
          );
          if (this.id === `titleMultiplePrices${optionCount}`) {
            $(`#counttitleMultiplePrices${optionCount}`).text(
              this.value.length + " " + " / 200"
            );
          }
        })
        .on("input", function () {
          this.style.height = "auto";
          this.style.height = this.scrollHeight + "px";
          var result = 0;
          if (this.id === `titleMultiplePrices${optionCount}`) {
            $(`#counttitleMultiplePrices${optionCount}`).text(
              this.value.length + " " + " / 200"
            );
          }
        });
    }
    function createOptionDiv() {
      const optionDiv = document.createElement("div");
      optionDiv.className = `multiple-prices wrapper-price mt-15 ml-28 `;

      const div = `
    <div class="wrapper-form mb-10">
                    <p class="form-title">
                     Price
                  </p>
                    <div class="col-auto p-0">
                      <label class="sr-only" for="inlineFormInputGroup">Username</label>
                      <div class="input-group ">
                        <div class="input-group-prepend ">
                          <div class="input-group-text border-custom-currency">SGD</div>
                        </div>
                        <input type="number" class="form-control mt-9 messageInput border-currency" id="inlineFormInputGroup" style="height: 38px; overflow-y: hidden;">
                      </div>
                      <div class="d-flex align-items-start flex  justify-content-start mb-2">
                        <p class="error-textarea">Cannot be empty</p>
                       
                    </div>
                    </div>
                  </div>
                  <div class="wrapper-form mb-9">
                    <p class="form-title">
                        Title
                  </p>
                 
      
                  <textarea type="text" id="titleMultiplePrices${optionCount}" rows="1" class="form-control mt-9 messageInput" maxlength="200" style="height:38px;overflow-y:hidden;"></textarea>
                  <div class="d-flex align-items-start flex  justify-content-between">
                    <p class="error-textarea">Cannot be empty</p>
                    <p class="countNumber" id="counttitleMultiplePrices${optionCount}">0  / 200</p>
                </div>
                </div>

                <!-- multiple prices editor -->
                <div class="wrapper-form mb-0" id="heading-element${optionCount}">
                  <div class="collapse-text form-title  FSize collapsed" data-toggle="collapse" data-target="#collapse-element${optionCount}" aria-expanded="false" aria-controls="collapse-element${optionCount}">
                  
                      Description
                  
                  </div>
                  <div class="collapse" id="collapse-element${optionCount}" aria-labelledby="heading-element${optionCount}" data-parent="#heading-element${optionCount}">
                <div id="editorContainer${descriptionCount}" style="margin-bottom: 12px;"></div>
                
              </div>
                <!-- <div class="text-editor">
                  <div id="editorJsFirst"  >
                  
                  </div>
                </div> -->
                
            </div>

            <div class="wrapperEvent d-flex mt-5px">
              <i class="fa-regular fa-circle-up mr-20 to-top item-icon" data-direction="up" data-toggle="tooltip" data-placement="top" title="Move position up"></i>
              <i class="fa-regular fa-circle-down mr-20 to-bottom item-icon" data-direction="down" data-toggle="tooltip" data-placement="top" title="Move position down"></i>
              <i class="fa-regular fa-trash-can mr-20 delete-element item-icon" data-toggle="tooltip" data-placement="top" title="Delete it"></i>
            </div>
`;
      optionDiv.innerHTML = div;

      /*   const iconsWrapper = optionDiv.querySelector(".wrapperEvent");
    const toTopIcon = createIcon("fa-circle-up", "to-top", "up");
    const toBottomIcon = createIcon("fa-circle-down", "to-bottom", "down");
    const deleteIcon = createIcon("fa-trash", "delete-element", "delete");

    iconsWrapper.appendChild(toTopIcon);
    iconsWrapper.appendChild(toBottomIcon);
    iconsWrapper.appendChild(deleteIcon);
 */

      return optionDiv;
    }

    // function deleteElement(element) {
    //   element.remove();
    // }
  });
}
addOption2();

function cekRadioButton(option) {
  // Menyembunyikan semua elemen wrapper-form terlebih dahulu
  var wrappers = document.querySelectorAll(".wrappper-event");
  wrappers.forEach(function (wrapper) {
    wrapper.style.display = "none";
  });

  // Menampilkan elemen wrapper-form yang sesuai dengan radio button yang dicentang
  var wrapperToShow = document.getElementById("wrapperForm" + option);
  wrapperToShow.style.display = "block";
  if (option === 1) {
    $("#wrapperOnePrice").addClass("d-block");
    $("#wrapperMultiplePrice").removeClass("d-block");
  } else if (option === 2 || 3) {
    $("#wrapperOnePrice").removeClass("d-block");
    $("#wrapperMultiplePrice").addClass("d-block");
    $("textarea")
      .each(function () {
        this.setAttribute(
          "style",
          "height:" + this.scrollHeight + "px;overflow-y:hidden;"
        );
        if (this.id === `titleMultiplePrice`) {
          $(`#counttitleMultiplePrice`).text(
            this.value.length + " " + " / 200"
          );
        }
      })
      .on("input", function () {
        this.style.height = "auto";
        this.style.height = this.scrollHeight + "px";
        var result = 0;
        if (this.id === `titleMultiplePrice`) {
          $(`#counttitleMultiplePrice`).text(
            this.value.length + " " + " / 200"
          );
        }
      });
  }
  //  else if( optio)
}

function addLink() {
  document.addEventListener("DOMContentLoaded", function () {
    const uploadedFilesContainer =
      document.getElementById("wrapper-uploadFile");
    const btnAddLink = document.getElementById("button-AddLink");

    btnAddLink.addEventListener("click", () => {
      const optionDiv = createOptionDiv();
      uploadedFilesContainer.appendChild(optionDiv);
      $(".icon-deleteSingle").tooltip();
      $(".hover-tooltips").tooltip();

      $(".icon-deleteSingle").on("click", function () {
        $(this).tooltip("hide");
      });
    });
    function createOptionDiv() {
      var inputValue = document.getElementById("inputAddLink").value;
      var clearinputValue = document.getElementById("inputAddLink");
      console.log(inputValue);
      const uploadedFile = document.createElement("div");
      uploadedFile.className = `wrapper-file d-flex justify-content-between align-items-center `;
      const elementFile = `
  <div class="wrapper-drag drag-btn" style="cursor: grab;" data-tooltip="tooltip" data-placement="top" title="" data-original-title="Drag to reorder">
  <button class=" drag-btnElement btn hover-tooltips "  data-tooltip="tooltip" data-placement="top" title="Drag to rearrange">        
    <i class="fas fa-ellipsis-v "></i>      
</button>
</div>
<div class="wrapperName-file">
  <p class="name-file color-a hover-tooltips" data-tooltip="tooltip" data-placement="bottom" title="${inputValue}" > <a href="${inputValue}" target="_blank">${inputValue} </a></p>
</div>
<div class="btn-event d-flex">
<a href="${inputValue}" target="_blank" ><i class="fa-solid fa-up-right-from-square icon-deleteSingle hover-tooltips "  data-tooltip="tooltip" data-placement="top" title="Open link"></i> </a>

<i class="fas fa-trash-alt item-icon-delete icon-deleteSingle hover-tooltips"   data-tooltip="tooltip" data-placement="top" title="Delete it"></i>   
</div>
    `;

      // $('[data-toggle="tooltip"]').tooltip();
      uploadedFile.innerHTML = elementFile;

      clearinputValue.value = "";
      return uploadedFile;
    }

    // $("body").tooltip({
    //   selector: ".hover-tooltips",
    // });
  });
}
addLink();
function rearrangeHandler() {
  //for input form
  let inputFormContainer = document.querySelector(".wrapper-uploadFile");
  new Sortable(inputFormContainer, {
    animation: 150,
    handle: ".drag-btn",
    ghostClass: "ghost",
    forceFallback: true,
    onStart: function (evt) {
      document.documentElement.classList.add("draggable-cursor");
      $("[data-toggle=tooltip]").tooltip("hide");
      $("[data-toggle=tooltip]").tooltip("disable");
    },
    // Restores default page cursor
    onEnd: function (evt) {
      document.documentElement.classList.remove("draggable-cursor");
      $("[data-toggle=tooltip]").tooltip("enable");
    },
  });
}

rearrangeHandler();

function addLinkMultiplePrice() {
  document.addEventListener("DOMContentLoaded", function () {
    const uploadedFilesContainer = document.getElementById(
      "wrapper-uploadFileMultiplePrice"
    );
    const btnAddLink = document.getElementById("button-AddLinkMultiplePrice");

    btnAddLink.addEventListener("click", () => {
      const optionDiv = createOptionDiv();
      uploadedFilesContainer.appendChild(optionDiv);
      $(".hover-tooltips").tooltip();
      $(".item-icon-deleteMultiple").tooltip();

      $(".item-icon-deleteMultiple").on("click", function () {
        $(this).tooltip("hide");
      });
    });
    function createOptionDiv() {
      var inputValue = document.getElementById(
        "inputAddLinkMultiplePrice"
      ).value;
      var clearinputValue = document.getElementById(
        "inputAddLinkMultiplePrice"
      );
      console.log(inputValue);
      const uploadedFile = document.createElement("div");
      uploadedFile.className = `wrapper-file d-flex justify-content-between align-items-center `;
      const elementFile = `
  <div class="wrapper-drag drag-btnMultiplePrice" style="cursor: grab;" data-tooltip="tooltip" data-placement="top" title="" data-original-title="Drag to reorder">
  <button class=" drag-btnElement btn hover-tooltips "  data-tooltip="tooltip" data-placement="top" title="Drag to rearrange">        
    <i class="fas fa-ellipsis-v "></i>      
</button>
</div>
<div class="wrapperName-file">
  <p class="name-file color-a hover-tooltips" data-tooltip="tooltip" data-placement="bottom" title="${inputValue}" > <a href="${inputValue}" target="_blank">${inputValue} </a></p>
</div>
<div class="btn-event d-flex">
<a href="${inputValue}" target="_blank" ><i class="fa-solid fa-up-right-from-square hover-tooltips "  data-tooltip="tooltip" data-placement="top" title="Open link"></i> </a>

<i class="fas fa-trash-alt item-icon-delete item-icon-deleteMultiple hover-tooltips"   data-tooltip="tooltip" data-placement="top" title="Delete it"></i>   
</div>
    `;

      // $('[data-toggle="tooltip"]').tooltip();
      uploadedFile.innerHTML = elementFile;

      clearinputValue.value = "";
      return uploadedFile;
    }

    // $("body").tooltip({
    //   selector: ".hover-tooltips",
    // });
  });
}
addLinkMultiplePrice();

function rearrangeHandlerMultiplePrice() {
  //for input form
  let inputFormContainer = document.querySelector(
    "#wrapper-uploadFileMultiplePrice"
  );
  new Sortable(inputFormContainer, {
    animation: 150,
    handle: ".drag-btnMultiplePrice",
    ghostClass: "ghost",
    forceFallback: true,
    onStart: function (evt) {
      document.documentElement.classList.add("draggable-cursor");
      $("[data-toggle=tooltip]").tooltip("hide");
      $("[data-toggle=tooltip]").tooltip("disable");
    },
    // Restores default page cursor
    onEnd: function (evt) {
      document.documentElement.classList.remove("draggable-cursor");
      $("[data-toggle=tooltip]").tooltip("enable");
    },
  });
}

rearrangeHandlerMultiplePrice();

function addLinkMultiplePrice2() {
  document.addEventListener("DOMContentLoaded", function () {
    const uploadedFilesContainer = document.getElementById(
      "wrapper-uploadFileMultiplePrice2"
    );
    const btnAddLink = document.getElementById("button-AddLinkMultiplePrice2");

    btnAddLink.addEventListener("click", () => {
      const optionDiv = createOptionDiv();
      uploadedFilesContainer.appendChild(optionDiv);
      $(".hover-tooltips").tooltip();
      $(".item-icon-deleteMultiple2").tooltip();

      $(".item-icon-deleteMultiple2").on("click", function () {
        $(this).tooltip("hide");
      });
    });
    function createOptionDiv() {
      var inputValue = document.getElementById(
        "inputAddLinkMultiplePrice2"
      ).value;
      var clearinputValue = document.getElementById(
        "inputAddLinkMultiplePrice2"
      );
      console.log(inputValue);
      const uploadedFile = document.createElement("div");
      uploadedFile.className = `wrapper-file d-flex justify-content-between align-items-center `;
      const elementFile = `
  <div class="wrapper-drag drag-btnMultiplePrice2" style="cursor: grab;" data-tooltip="tooltip" data-placement="top" title="" data-original-title="Drag to reorder">
  <button class=" drag-btnElement btn hover-tooltips "  data-tooltip="tooltip" data-placement="top" title="Drag to rearrange">        
    <i class="fas fa-ellipsis-v "></i>      
</button>
</div>
<div class="wrapperName-file">
  <p class="name-file color-a hover-tooltips" data-tooltip="tooltip" data-placement="bottom" title="${inputValue}" > <a href="${inputValue}" target="_blank">${inputValue} </a></p>
</div>
<div class="btn-event d-flex">
<a href="${inputValue}" target="_blank" ><i class="fa-solid fa-up-right-from-square hover-tooltips "  data-tooltip="tooltip" data-placement="top" title="Open link"></i> </a>

<i class="fas fa-trash-alt item-icon-delete item-icon-deleteMultiple2 hover-tooltips"   data-tooltip="tooltip" data-placement="top" title="Delete it"></i>   
</div>
    `;

      // $('[data-toggle="tooltip"]').tooltip();
      uploadedFile.innerHTML = elementFile;

      clearinputValue.value = "";
      return uploadedFile;
    }

    // $("body").tooltip({
    //   selector: ".hover-tooltips",
    // });
  });
}
addLinkMultiplePrice2();

function rearrangeHandlerMultiplePrice2() {
  //for input form
  let inputFormContainer = document.querySelector(
    "#wrapper-uploadFileMultiplePrice2"
  );
  new Sortable(inputFormContainer, {
    animation: 150,
    handle: ".drag-btnMultiplePrice2",
    ghostClass: "ghost",
    forceFallback: true,
    onStart: function (evt) {
      document.documentElement.classList.add("draggable-cursor");
      $("[data-toggle=tooltip]").tooltip("hide");
      $("[data-toggle=tooltip]").tooltip("disable");
    },
    // Restores default page cursor
    onEnd: function (evt) {
      document.documentElement.classList.remove("draggable-cursor");
      $("[data-toggle=tooltip]").tooltip("enable");
    },
  });
}

rearrangeHandlerMultiplePrice2();

// bonus

function addLinkMultipleBonus() {
  document.addEventListener("DOMContentLoaded", function () {
    const uploadedFilesContainer = document.getElementById(
      "wrapper-uploadFileBonus"
    );
    const btnAddLink = document.getElementById("button-AddLinkBonus");

    btnAddLink.addEventListener("click", () => {
      const optionDiv = createOptionDiv();
      uploadedFilesContainer.appendChild(optionDiv);
      $(".hover-tooltips").tooltip();
      $(".item-icon-deleteMultipleBonus").tooltip();

      $(".item-icon-deleteMultipleBonus").on("click", function () {
        $(this).tooltip("hide");
      });
    });
    function createOptionDiv() {
      var inputValue = document.getElementById("inputAddLinkBonus").value;
      var clearinputValue = document.getElementById("inputAddLinkBonus");

      const uploadedFile = document.createElement("div");
      uploadedFile.className = `wrapper-file d-flex justify-content-between align-items-center `;
      const elementFile = `
  <div class="wrapper-drag drag-btnBonus" style="cursor: grab;" data-tooltip="tooltip" data-placement="top" title="" data-original-title="Drag to reorder">
  <button class=" drag-btnElement btn hover-tooltips "  data-tooltip="tooltip" data-placement="top" title="Drag to rearrange">        
    <i class="fas fa-ellipsis-v "></i>      
</button>
</div>
<div class="wrapperName-file">
  <p class="name-file color-a hover-tooltips" data-tooltip="tooltip" data-placement="bottom" title="${inputValue}" > <a href="${inputValue}" target="_blank">${inputValue} </a></p>
</div>
<div class="btn-event d-flex">
<a href="${inputValue}" target="_blank" ><i class="fa-solid fa-up-right-from-square hover-tooltips "  data-tooltip="tooltip" data-placement="top" title="Open link"></i> </a>

<i class="fas fa-trash-alt item-icon-delete hover-tooltips item-icon-deleteMultipleBonus"   data-tooltip="tooltip" data-placement="top" title="Delete it"></i>   
</div>
    `;

      // $('[data-toggle="tooltip"]').tooltip();
      uploadedFile.innerHTML = elementFile;

      clearinputValue.value = "";
      return uploadedFile;
    }

    // $("body").tooltip({
    //   selector: ".hover-tooltips",
    // });
  });
}
addLinkMultipleBonus();

function rearrangeHandlerBonus() {
  //for input form
  let inputFormContainer = document.querySelector("#wrapper-uploadFileBonus");
  new Sortable(inputFormContainer, {
    animation: 150,
    handle: ".drag-btnBonus",
    ghostClass: "ghost",
    forceFallback: true,
    onStart: function (evt) {
      document.documentElement.classList.add("draggable-cursor");
      $("[data-toggle=tooltip]").tooltip("hide");
      $("[data-toggle=tooltip]").tooltip("disable");
    },
    // Restores default page cursor
    onEnd: function (evt) {
      document.documentElement.classList.remove("draggable-cursor");
      $("[data-toggle=tooltip]").tooltip("enable");
    },
  });
}

rearrangeHandlerBonus();

function toggleInput() {
  $("textarea#inputAddLink")
    .each(function () {
      this.setAttribute(
        "style",
        "height:" + this.scrollHeight + "px;overflow-y:hidden;"
      );
    })
    .on("input", function () {
      this.style.height = "auto";
      this.style.height = this.scrollHeight + "px";
      var result = 0;
    });
  var wrapperAddLinkInput = document.getElementById("wrapper-elementInput");
  if (
    wrapperAddLinkInput.style.display === "none" ||
    wrapperAddLinkInput.style.display === ""
  ) {
    wrapperAddLinkInput.style.display = "block";
  } else {
    wrapperAddLinkInput.style.display = "none";
  }
}

function toggleInput1() {
  $("textarea#inputAddLinkMultiplePrice")
    .each(function () {
      this.setAttribute(
        "style",
        "height:" + this.scrollHeight + "px;overflow-y:hidden;"
      );
    })
    .on("input", function () {
      this.style.height = "auto";
      this.style.height = this.scrollHeight + "px";
      var result = 0;
    });
  var wrapperAddLinkInput = document.getElementById(
    "wrapper-elementInputMultiplePrice"
  );
  if (
    wrapperAddLinkInput.style.display === "none" ||
    wrapperAddLinkInput.style.display === ""
  ) {
    wrapperAddLinkInput.style.display = "block";
  } else {
    wrapperAddLinkInput.style.display = "none";
  }
}

function toggleInput2() {
  $("textarea#inputAddLinkMultiplePrice2")
    .each(function () {
      this.setAttribute(
        "style",
        "height:" + this.scrollHeight + "px;overflow-y:hidden;"
      );
    })
    .on("input", function () {
      this.style.height = "auto";
      this.style.height = this.scrollHeight + "px";
      var result = 0;
    });
  var wrapperAddLinkInput = document.getElementById(
    "wrapper-elementInputMultiplePrice2"
  );
  if (
    wrapperAddLinkInput.style.display === "none" ||
    wrapperAddLinkInput.style.display === ""
  ) {
    wrapperAddLinkInput.style.display = "block";
  } else {
    wrapperAddLinkInput.style.display = "none";
  }
}

function toggleInputBonus() {
  $("textarea#inputAddLinkBonus")
    .each(function () {
      this.setAttribute(
        "style",
        "height:" + this.scrollHeight + "px;overflow-y:hidden;"
      );
    })
    .on("input", function () {
      this.style.height = "auto";
      this.style.height = this.scrollHeight + "px";
      var result = 0;
    });
  var wrapperAddLinkInput = document.getElementById(
    "wrapper-elementInputBonus"
  );
  if (
    wrapperAddLinkInput.style.display === "none" ||
    wrapperAddLinkInput.style.display === ""
  ) {
    wrapperAddLinkInput.style.display = "block";
  } else {
    wrapperAddLinkInput.style.display = "none";
  }
}

// add file
function uploadFileSingle() {
  const fileInput = document.getElementById("uploadFile");
  const fileInputLabel = document.getElementById("uploadFileLabel");
  const uploadedFilesContainer = document.getElementById("wrapper-uploadFile");

  fileInput.addEventListener("change", function () {
    if (fileInput.files.length > 0) {
      const fileName = fileInput.files[0].name;
      const uploadedFile = createUploadedFileElement(fileName);
      uploadedFilesContainer.appendChild(uploadedFile);
      fileInputLabel.textContent = "Upload File"; // Mengubah label setelah file dipilih
      $(".hover-tooltips").tooltip();
      $(".icon-deleteSingle").tooltip();

      $(".icon-deleteSingle").on("click", function () {
        $(this).tooltip("hide");
      });
    } else {
      // Jika pengguna membatalkan pemilihan file, reset tampilan
      uploadedFilesContainer.innerHTML = "";
      fileInputLabel.textContent = "Pilih File"; // Mengembalikan label ke tampilan awal
    }
  });

  function createUploadedFileElement(fileName) {
    const elementFile = `
          
    <div class="wrapper-drag drag-btn" style="cursor: grab;" data-tooltip="tooltip" data-placement="top" title="" data-original-title="Drag to reorder">
    <button class=" drag-btnElement btn hover-tooltips"  data-tooltip="tooltip" data-placement="top" title="Drag to rearrange">        
      <i class="fas fa-ellipsis-v"></i>      
  </button>
  </div>
  <div class="wrapperName-file">
    <p class="name-file hover-tooltips" data-tooltip="tooltip"  data-placement="bottom" title="${fileName}">${fileName}</p>
  </div>
  <div class="btn-event d-flex">
            
      <i class="fa-solid fa-download icon-deleteSingle hover-tooltips"   data-tooltip="tooltip" data-placement="top" title="Download"></i>
  
    
      <i class="fas fa-trash-alt item-icon-delete icon-deleteSingle  hover-tooltips"  data-tooltip="tooltip" data-placement="top" title="Delete it"></i>    
  
  
  </div>
         
      `;

    const uploadedFile = document.createElement("div");
    uploadedFile.classList.add(
      "wrapper-file",
      "d-flex",
      "justify-content-between",
      "align-items-center"
    );
    // $('[data-toggle="tooltip"]').tooltip();

    uploadedFile.innerHTML = elementFile;
    // $(document).ready(function () {
    //   $('[data-toggle="tooltip"]').tooltip();
    // });
    return uploadedFile;
  }
}
uploadFileSingle();

// add file
function uploadFileMultiplePrice() {
  const fileInput = document.getElementById("uploadFileMultiple");
  const fileInputLabel = document.getElementById("uploadFileLabelMultiple");
  const uploadedFilesContainer = document.getElementById(
    "wrapper-uploadFileMultiplePrice"
  );

  fileInput.addEventListener("change", function () {
    if (fileInput.files.length > 0) {
      const fileName = fileInput.files[0].name;
      const uploadedFile = createUploadedFileElement(fileName);
      uploadedFilesContainer.appendChild(uploadedFile);
      fileInputLabel.textContent = "Upload File"; // Mengubah label setelah file dipilih
      $(".hover-tooltips").tooltip();

      $(".item-icon-deleteMultiple").tooltip();
      $(".item-icon-deleteMultiple").on("click", function () {
        $(this).tooltip("hide");
      });
    } else {
      // Jika pengguna membatalkan pemilihan file, reset tampilan
      uploadedFilesContainer.innerHTML = "";
      fileInputLabel.textContent = "Pilih File"; // Mengembalikan label ke tampilan awal
    }
  });

  function createUploadedFileElement(fileName) {
    const elementFile = `
          
    <div class="wrapper-drag drag-btnMultiplePrice" style="cursor: grab;" data-tooltip="tooltip" data-placement="top" title="" data-original-title="Drag to reorder">
    <button class=" drag-btnElement btn hover-tooltips"  data-tooltip="tooltip" data-placement="top" title="Drag to rearrange">        
      <i class="fas fa-ellipsis-v"></i>      
  </button>
  </div>
  <div class="wrapperName-file">
    <p class="name-file hover-tooltips" data-tooltip="tooltip"  data-placement="bottom" title="${fileName}">${fileName}</p>
  </div>
  <div class="btn-event d-flex">
            
      <i class="fa-solid fa-download hover-tooltips"   data-tooltip="tooltip" data-placement="top" title="Download"></i>
  
    
      <i class="fas fa-trash-alt item-icon-delete item-icon-deleteMultiple hover-tooltips"  data-tooltip="tooltip" data-placement="top" title="Delete it"></i>    
  
  
  </div>
         
      `;

    const uploadedFile = document.createElement("div");
    uploadedFile.classList.add(
      "wrapper-file",
      "d-flex",
      "justify-content-between",
      "align-items-center"
    );
    // $('[data-toggle="tooltip"]').tooltip();

    uploadedFile.innerHTML = elementFile;
    // $(document).ready(function () {
    //   $('[data-toggle="tooltip"]').tooltip();
    // });
    return uploadedFile;
  }
}
uploadFileMultiplePrice();

function uploadFileMultiplePrice2() {
  const fileInput = document.getElementById("uploadFileMultiple2");
  const fileInputLabel = document.getElementById("uploadFileLabelMultiple2");
  const uploadedFilesContainer = document.getElementById(
    "wrapper-uploadFileMultiplePrice2"
  );

  fileInput.addEventListener("change", function () {
    if (fileInput.files.length > 0) {
      const fileName = fileInput.files[0].name;
      const uploadedFile = createUploadedFileElement(fileName);
      uploadedFilesContainer.appendChild(uploadedFile);
      fileInputLabel.textContent = "Upload File"; // Mengubah label setelah file dipilih
      $(".hover-tooltips").tooltip();

      $(".item-icon-deleteMultiple2").tooltip();
      $(".item-icon-deleteMultiple2").on("click", function () {
        $(this).tooltip("hide");
      });
    } else {
      // Jika pengguna membatalkan pemilihan file, reset tampilan
      uploadedFilesContainer.innerHTML = "";
      fileInputLabel.textContent = "Pilih File"; // Mengembalikan label ke tampilan awal
    }
  });

  function createUploadedFileElement(fileName) {
    const elementFile = `
          
    <div class="wrapper-drag drag-btnMultiplePrice2" style="cursor: grab;" data-tooltip="tooltip" data-placement="top" title="" data-original-title="Drag to reorder">
    <button class=" drag-btnElement btn hover-tooltips"  data-tooltip="tooltip" data-placement="top" title="Drag to rearrange">        
      <i class="fas fa-ellipsis-v"></i>      
  </button>
  </div>
  <div class="wrapperName-file">
    <p class="name-file hover-tooltips" data-tooltip="tooltip"  data-placement="bottom" title="${fileName}">${fileName}</p>
  </div>
  <div class="btn-event d-flex">
            
      <i class="fa-solid fa-download hover-tooltips"   data-tooltip="tooltip" data-placement="top" title="Download"></i>
  
    
      <i class="fas fa-trash-alt item-icon-delete item-icon-deleteMultiple2 hover-tooltips"  data-tooltip="tooltip" data-placement="top" title="Delete it"></i>    
  
  
  </div>
         
      `;

    const uploadedFile = document.createElement("div");
    uploadedFile.classList.add(
      "wrapper-file",
      "d-flex",
      "justify-content-between",
      "align-items-center"
    );
    // $('[data-toggle="tooltip"]').tooltip();

    uploadedFile.innerHTML = elementFile;
    // $(document).ready(function () {
    //   $('[data-toggle="tooltip"]').tooltip();
    // });
    return uploadedFile;
  }
}
uploadFileMultiplePrice2();

function uploadFileMultipleBonus() {
  const fileInput = document.getElementById("uploadFileBonus");
  const fileInputLabel = document.getElementById("uploadFileLabelBonus");
  const uploadedFilesContainer = document.getElementById(
    "wrapper-uploadFileBonus"
  );

  fileInput.addEventListener("change", function () {
    if (fileInput.files.length > 0) {
      const fileName = fileInput.files[0].name;
      const uploadedFile = createUploadedFileElement(fileName);
      uploadedFilesContainer.appendChild(uploadedFile);
      fileInputLabel.textContent = "Upload File"; // Mengubah label setelah file dipilih
      $(".hover-tooltips").tooltip();

      $(".item-icon-deleteMultipleBonus").tooltip();
      $(".item-icon-deleteMultipleBonus").on("click", function () {
        $(this).tooltip("hide");
      });
    } else {
      // Jika pengguna membatalkan pemilihan file, reset tampilan
      uploadedFilesContainer.innerHTML = "";
      fileInputLabel.textContent = "Pilih File"; // Mengembalikan label ke tampilan awal
    }
  });

  function createUploadedFileElement(fileName) {
    const elementFile = `
          
   
    <div class="wrapper-drag drag-btnBonus hover-tooltips" style="cursor: grab;" data-tooltip="tooltip" data-placement="top" title="Drag to reorder">
      <button class=" drag-btnElement btn hover-tooltips " style="cursor: grab;">        
        <i class="fas fa-ellipsis-v"></i>      
    </button>
    </div>
    <div class="wrapperName-file">
      <p class="name-file hover-tooltips" data-tooltip="tooltip" data-placement="bottom" title="${fileName}">${fileName}</p>
    </div>
    <div class="btn-event d-flex">
              
        <i class="fa-solid fa-download hover-tooltips " data-tooltip="tooltip" data-placement="top" title="" data-original-title="Download"></i>
    
      
        <i class="fas fa-trash-alt  item-icon-delete hover-tooltips item-icon-deleteMultipleBonus" data-tooltip="tooltip" data-placement="top" title="" data-original-title="Delete it"></i>    

  <!-- 
  <button class="redirect-file btn" data-tooltip="tooltip" data-placement="top" title="" data-original-title="redirect file">        
    <i class="fa-solid fa-up-right-from-square" data-tooltip="tooltip" data-placement="top" title="Open link"></i>
</button> -->
    </div>
 
         
      `;

    const uploadedFile = document.createElement("div");
    uploadedFile.classList.add(
      "wrapper-file",
      "d-flex",
      "justify-content-between",
      "align-items-center"
    );
    // $('[data-toggle="tooltip"]').tooltip();

    uploadedFile.innerHTML = elementFile;
    // $(document).ready(function () {
    //   $('[data-toggle="tooltip"]').tooltip();
    // });
    return uploadedFile;
  }
}
uploadFileMultipleBonus();

function deleteSinglePrice() {
  const sortableContainer = document.getElementById("wrapper-uploadFile");

  sortableContainer.addEventListener("click", (event) => {
    const clickedIcon = event.target;
    if (clickedIcon.classList.contains("item-icon-delete")) {
      const item = clickedIcon.closest(".wrapper-file");
      $(clickedIcon).tooltip("hide");

      item.remove();
    }
  });
}
deleteSinglePrice();

function deleteMultiplePrice() {
  const sortableContainer = document.getElementById(
    "wrapper-uploadFileMultiplePrice"
  );

  sortableContainer.addEventListener("click", (event) => {
    const clickedIcon = event.target;
    if (clickedIcon.classList.contains("item-icon-deleteMultiple")) {
      const item = clickedIcon.closest(".wrapper-file");

      item.remove();
    }
  });
}
deleteMultiplePrice();

function deleteMultiplePrice2() {
  const sortableContainer = document.getElementById(
    "wrapper-uploadFileMultiplePrice2"
  );

  sortableContainer.addEventListener("click", (event) => {
    const clickedIcon = event.target;
    if (clickedIcon.classList.contains("item-icon-deleteMultiple2")) {
      const item = clickedIcon.closest(".wrapper-file");

      item.remove();
    }
  });
}
deleteMultiplePrice2();

function deleteMultipleBonus() {
  const sortableContainer = document.getElementById("wrapper-uploadFileBonus");

  sortableContainer.addEventListener("click", (event) => {
    const clickedIcon = event.target;
    if (clickedIcon.classList.contains("item-icon-deleteMultipleBonus")) {
      const item = clickedIcon.closest(".wrapper-file");

      item.remove();
    }
  });
}
deleteMultipleBonus();

// cover image
function uploadCover() {
  var fileInput = document.getElementById("uploadFileImage");
  var profileImage = document.getElementById("cover-image");

  fileInput.addEventListener("change", function () {
    var file = fileInput.files[0];

    if (file) {
      // Validasi format file
      var fileName = file.name;
      var allowedFormats = ["image/jpeg", "image/jpg", "image/png"];
      if (allowedFormats.indexOf(file.type) === -1) {
        alert("Hanya file JPG, JPEG, atau PNG yang diizinkan.");
        fileInput.value = ""; // Reset input file
        return;
      }

      // Validasi ukuran file (maksimum 2MB)
      if (file.size > 2 * 1024 * 1024) {
        alert("Ukuran file maksimum adalah 2MB.");
        fileInput.value = ""; // Reset input file
        return;
      }

      // Tampilkan gambar dalam elemen dengan ID 'profile-image'
      var reader = new FileReader();
      reader.onload = function (e) {
        var cover = document.getElementById("wrapper-cover-image");

        profileImage.src = e.target.result;

        var btn = document.getElementById("wrapper-deleteCoverImg");
        btn.style.display = "block";
        cover.style.display = "block";
        cover.setAttribute("data-tooltip", "tooltip");
        cover.setAttribute("data-placement", "top");
        cover.setAttribute("title", `${fileName}`);
      };
      reader.readAsDataURL(file);
    } else {
      // Reset gambar saat tidak ada file yang dipilih
      profileImage.src = "";
    }
  });

  function deleteImageItem() {
    // Ambil element gambar
    // const image = document.getElementById("item-image");
    $("#cover-image").attr("src", "");
    // Hapus element gambar
    var item = document.getElementById("wrapper-cover-image");
    var btn = document.getElementById("wrapper-deleteCoverImg");
    btn.style.display = "none";

    // image.parentNode.removeChild(image);
    item.style.display = "none";
  }

  // // Event listener untuk menghapus image ketika tombol hapus diklik
  const deleteButton = document.getElementById("confirm-delete-btnCoverImg");
  deleteButton.addEventListener("click", function () {
    deleteImageItem();
  });
}

uploadCover();

function uploadImagePreview() {
  var fileInput = document.getElementById("uploadFileImagePreview");

  fileInput.addEventListener("change", function () {
    var file = fileInput.files[0];
    var profileImageContainer = document.querySelector("#wrapper-flex-preview");

    if (file) {
      // Validasi format file
      var fileName = file.name;

      var allowedFormats = ["image/jpeg", "image/jpg", "image/png"];
      if (allowedFormats.indexOf(file.type) === -1) {
        alert("Hanya file JPG, JPEG, atau PNG yang diizinkan.");
        fileInput.value = ""; // Reset input file
        return;
      }

      // Validasi ukuran file (maksimum 2MB)
      if (file.size > 2 * 1024 * 1024) {
        alert("Ukuran file maksimum adalah 2MB.");
        fileInput.value = ""; // Reset input file
        return;
      }

      // Validasi dimensi gambar
      var imageElement = new Image();
      imageElement.onload = function () {
        // Buat elemen img
        var divElement = document.createElement("div");
        divElement.className = "profile-img-container2 mr-20 profile-image  ";
        var wrapperdivElement = document.createElement("div");
        wrapperdivElement.className = "hover-tooltips  wrapperImg ";
        wrapperdivElement.setAttribute("data-tooltip", "tooltip");
        wrapperdivElement.setAttribute("data-placement", "top");
        wrapperdivElement.setAttribute("title", `${fileName}`);

        var imageElement = document.createElement("img");
        imageElement.src = URL.createObjectURL(file);
        imageElement.alt = "profile-image";
        imageElement.id = "profile-image";

        imageElement.className = "img-preview";
        // imageElement.setAttribute("data-original-title", `${fileName}`);
        // Buat elemen ikon delete
        var deleteIcon = document.createElement("i");
        deleteIcon.className =
          "fas fa-trash-alt item-icon-delete hover-tooltips custom-position-icon icon-delete-img";
        deleteIcon.setAttribute("data-tooltip", "tooltip");
        deleteIcon.setAttribute("data-placement", "top");
        deleteIcon.setAttribute("title", "Delete it");
        // deleteIcon.setAttribute("data-original-title", "Delete it");
        // deleteIcon.setAttribute("data-toggle", "modal");
        // deleteIcon.setAttribute("data-target", "#deleteModalItem");

        // // Bersihkan isi dari profileImageContainer
        // profileImageContainer.innerHTML = "";

        // Tambahkan elemen gambar dan ikon delete ke dalam profileImageContainer
        wrapperdivElement.appendChild(imageElement);
        divElement.appendChild(wrapperdivElement);
        divElement.appendChild(deleteIcon);
        profileImageContainer.appendChild(divElement);
        // }
        $(".icon-delete-img").tooltip();

        $(".icon-delete-img").on("click", function () {
          $(this).tooltip("hide");
          $(".wrapperImg").tooltip("hide");
        });
        $(".wrapperImg").tooltip();
      };

      imageElement.src = URL.createObjectURL(file);
    } else {
      // Reset gambar dan ikon delete saat tidak ada file yang dipilih
      profileImageContainer.innerHTML = "";
    }
  });
}
uploadImagePreview();
function removeImgPreview() {
  // Temukan elemen induk yang berisi gambar dan ikon delete
  var imageContainer = document.querySelector("#wrapper-flex-preview");

  // Tambahkan event listener ke elemen induk untuk menangani klik pada ikon delete
  // imageContainer.addEventListener("click", function (event) {
  //   // Periksa apakah elemen yang diklik adalah ikon delete
  //   if (event.target.classList.contains("item-icon-delete")) {
  //     // Temukan elemen gambar yang bersesuaian dengan ikon delete yang diklik
  //     var imageElement = event.target.previousElementSibling;

  //     // var div = event.target.parentNode;
  //     // Hapus elemen gambar dan ikon delete
  //     imageElement.remove();
  //     event.target.remove();
  //     // div.remove();
  //   }
  // });

  imageContainer.addEventListener("click", (event) => {
    const clickedIcon = event.target;
    if (clickedIcon.classList.contains("item-icon-delete")) {
      const item = clickedIcon.closest(".profile-img-container2");

      if (clickedIcon.classList.contains("custom-position-icon")) {
        item.remove();
      }
    }
  });
}
removeImgPreview();
function rearrangeHandlerImgPreview() {
  //for input form
  let inputFormContainer = document.querySelector("#wrapper-flex-preview");
  new Sortable(inputFormContainer, {
    animation: 150,
    handle: ".wrapperImg",
    ghostClass: "ghost",
    forceFallback: true,
    onStart: function (evt) {
      document.documentElement.classList.add("draggable-cursor");
      $("[data-toggle=tooltip]").tooltip("hide");
      $("[data-toggle=tooltip]").tooltip("disable");
    },
    // Restores default page cursor
    onEnd: function (evt) {
      document.documentElement.classList.remove("draggable-cursor");
      $("[data-toggle=tooltip]").tooltip("enable");
    },
  });
}

rearrangeHandlerImgPreview();

// add video
document.addEventListener("DOMContentLoaded", function () {
  var sortableListVideo = new Sortable(
    document.getElementById("sortable-list-video"),
    {
      animation: 150, // Durasi animasi saat item diurutkan (ms)
      forceFallback: true,
      ghostClass: "ghost",
      filter: ".delete-iconVideo",
      handle: ".drag-video",
      onStart: function (evt) {
        document.documentElement.classList.add("draggable-cursor");
      },
      // Restores default page cursor
      onEnd: function (evt) {
        document.documentElement.classList.remove("draggable-cursor");
      },
    }
  );
  window.addVideo = function () {
    var videoLinkInput = document.getElementById("videoLinkInput");
    var videoLink = videoLinkInput.value;

    if (videoLink) {
      var listItemVideo = document.createElement("li");
      listItemVideo.classList.add("video-item");
      listItemVideo.innerHTML = `
              <div class="video-controls">
                  <iframe class="video-iframe" src="${getEmbeddedVideoUrl(
                    videoLink
                  )}" frameborder="0" allowfullscreen></iframe>
                 <div class="d-flex justify-content-center " style="margin-top:8px;">
                  <i class="fas fa-trash-alt  delete-iconVideo  " data-tooltip="tooltip" data-placement="right" title="Delete it" onclick="deleteVideo(this)"></i>
                  <i class="fa-solid fa-grip-vertical drag-video" data-tooltip="tooltip" data-placement="right" title="Drag video"></i>
                  </div>
              </div>
          `;
      sortableListVideo.el.appendChild(listItemVideo);

      // Inisialisasi tooltip Bootstrap secara manual
      // deleteIcon.addEventListener("click", function () {
      //   deleteAudio(listItemVideo);
      // });
      $(".delete-iconVideo").tooltip();

      $(".delete-iconVideo").on("click", function () {
        $(this).tooltip("hide");
      });
      $(".drag-video").tooltip();

      $(".drag-video").on("click", function () {
        $(this).tooltip("hide");
      });
      // Reset nilai input setelah menambahkan video
      videoLinkInput.value = "";
    }
  };

  window.deleteVideo = function (element) {
    var listItemVideo = element.closest(".video-item");
    listItemVideo.remove();
    sortableListVideo.sort();
  };

  function getEmbeddedVideoUrl(youtubeUrl) {
    // Ambil ID video dari URL YouTube
    var videoId = youtubeUrl.match(
      /(?:youtu\.be\/|youtube\.com(?:\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|\/(?:[^\/\n\s]+\/\S+\/|\S*?[?&]v=)))([a-zA-Z0-9_-]{11})/
    );

    if (videoId) {
      // Bangun ulang URL untuk menyematkan video
      return `https://www.youtube.com/embed/${videoId[1]}`;
    } else {
      // URL tidak valid atau tidak ditemukan ID video
      console.error("Invalid YouTube URL");
      return "";
    }
  }
});

// audio
document.addEventListener("DOMContentLoaded", function () {
  var sortableList = new Sortable(document.getElementById("sortable-list"), {
    animation: 150, // Durasi animasi saat item diurutkan (ms)
    forceFallback: true,
    ghostClass: "ghost",
    filter: ".item-delete-audio",
    onStart: function (evt) {
      document.documentElement.classList.add("draggable-cursor");
    },
    // Restores default page cursor
    onEnd: function (evt) {
      document.documentElement.classList.remove("draggable-cursor");
    },
  });

  // Fungsi untuk menambahkan audio ke daftar
  function addAudio(src, fileName) {
    var listItem = document.createElement("div");
    listItem.classList.add("audio-item");
    listItem.innerHTML = `
          <div class="audio-controls"  data-tooltip="tooltip" data-placement="top"  title="${fileName}">
          
              <audio controls >
                  <source src="${src}" type="audio/mp3">
                  Your browser does not support the audio tag.
              </audio>
 <i class="fas fa-trash-alt  item-delete-audio  delete-icon"  data-tooltip="tooltip" data-placement="top"  title="Delete it" ></i>
 
 

          </div>
      `;
    sortableList.el.appendChild(listItem);
    // Tambahkan event handler onclick ke ikon delete
    var deleteIcon = listItem.querySelector(".delete-icon");
    deleteIcon.addEventListener("click", function () {
      deleteAudio(listItem);
    });
    $(".audio-controls").tooltip();
    $(".item-delete-audio").tooltip();

    $(".item-delete-audio").on("click", function () {
      $(this).tooltip("hide");
    });
    $(".audio-controls").on("click", function () {
      $(this).tooltip("hide");
    });
  }
  // Fungsi untuk menghapus audio dari daftar
  function deleteAudio(element) {
    element.remove(); // Menggunakan metode remove() untuk menghapus elemen dari DOM
    sortableList.sort(); // Memanggil fungsi sort() untuk memberitahu Sortable.js tentang perubahan
  }

  // Fungsi untuk menghandle event upload audio
  document
    .getElementById("uploadFileAudio")
    .addEventListener("change", function (event) {
      var file = event.target.files[0];
      if (file) {
        var objectURL = URL.createObjectURL(file);
        addAudio(objectURL, file.name);
        // Reset nilai input file untuk memungkinkan upload file yang sama
        event.target.value = "";
      }
    });

  // Contoh penggunaan hasil urutan setelah diurutkan
  document
    .getElementById("sortable-list")
    .addEventListener("sortupdate", function () {
      // Lakukan sesuatu dengan urutan audio yang sudah diurutkan
    });
});

$("#category").select2({
  tags: true,
  // tokenSeparators: [",", " "],
  tokenSeparators: [","],

  templateSelection: function (selection) {
    if (selection.selected) {
      return $.parseHTML(
        '<span class="customclass">' + selection.text + "</span>"
      );
    } else {
      return $.parseHTML(
        '<span class="customclass">' + selection.text + "</span>"
      );
    }
  },
});

$("#category").on("change", function () {
  // Get selected values
  var selectedTags = $("#category").val();

  // Display selected tags in another HTML element (e.g., a div)
  displaySelectedTags(selectedTags);
});

// Display selected tags in the specified container
function displaySelectedTags(selectedTags) {
  var wrapper = $("#selectedTags");
  wrapper.empty();

  selectedTags.forEach(function (tag) {
    var tagElement = $(
      '<div class="labelCategori">' +
        tag +
        ' <span class="remove-tag" data-tag="' +
        tag +
        '">x</span></div>'
    );
    wrapper.append(tagElement);
  });

  // Attach click event for remove tag
  $(".remove-tag").on("click", function () {
    var tagToRemove = $(this).data("tag");
    var currentTags = $("#category").val();
    var index = currentTags.indexOf(tagToRemove);
    if (index !== -1) {
      currentTags.splice(index, 1);
      $("#category").val(currentTags).trigger("change");
    }
  });
}
// $("#category").on("change", function () {
//   // Get selected values
//   var selectedTags = $("#category").val();
//   console.log(selectedTags);
//   // Display selected tags in another HTML element (e.g., a div)
//   $(".wrapper-categoryPreview").html(
//     `<div class="labelCategori">${selectedTags} <span class="remove-tag">x</span> </div>`
//   );
// });

$("#test").on("select2:select", function (e) {
  $("li[aria-selected='true']").addClass("customclass");
  $("li[aria-selected='false']").removeClass("customclass");

  $(".select2-search-choice:not(.my-custom-css)", this).addClass(
    "my-custom-css"
  );
});

$("#test").on("select2:unselect", function (e) {
  $("li[aria-selected='false']").removeClass("customclass");
});

$("#test").on("select2:select select2:unselect", function (e) {
  //this returns all the selected item
  var items = $(this).val();
  console.log(items);
  //Gets the last selected item
  var lastSelectedItem = e.params.data.id;
  console.log(lastSelectedItem);
});
function QuantityExpand() {
  const inputQuantity = document.getElementById("inputQuantity");

  inputQuantity.addEventListener("input", function () {
    const inputText = inputQuantity.value;
    const textWidth = getTextWidth(
      inputText,
      window.getComputedStyle(inputQuantity).font
    );

    // Set width input sesuai dengan panjang teksnya, tapi tidak kurang dari min-width
    inputQuantity.style.width = Math.max(textWidth, 90) + "px";
  });

  function getTextWidth(text, font) {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    context.font = font;
    const width = context.measureText(text).width;
    canvas.remove();
    return width;
  }
}
QuantityExpand();
function inputMinimunAmount() {
  const inputMinimunAmount = document.getElementById("inputMinimunAmount");

  inputMinimunAmount.addEventListener("input", function () {
    const inputText = inputMinimunAmount.value;
    const textWidth = getTextWidth(
      inputText,
      window.getComputedStyle(inputMinimunAmount).font
    );

    // Set width input sesuai dengan panjang teksnya, tapi tidak kurang dari min-width
    inputMinimunAmount.style.width = Math.max(textWidth, 90) + "px";
  });

  function getTextWidth(text, font) {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    context.font = font;
    const width = context.measureText(text).width;
    canvas.remove();
    return width;
  }
}
inputMinimunAmount();

function inputMaximumAmount() {
  inputMaximumAmount = document.getElementById("inputMaximumAmount");

  inputMaximumAmount.addEventListener("input", function () {
    const inputText = inputMaximumAmount.value;
    const textWidth = getTextWidth(
      inputText,
      window.getComputedStyle(inputMaximumAmount).font
    );

    // Set width input sesuai dengan panjang teksnya, tapi tidak kurang dari min-width
    inputMaximumAmount.style.width = Math.max(textWidth, 90) + "px";
  });

  function getTextWidth(text, font) {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    context.font = font;
    const width = context.measureText(text).width;
    canvas.remove();
    return width;
  }
}
inputMaximumAmount();

function DiscountExpand() {
  inputMaximumAmount = document.getElementById("inputExpandDiscount");

  inputMaximumAmount.addEventListener("input", function () {
    const inputText = inputMaximumAmount.value;
    const textWidth = getTextWidth(
      inputText,
      window.getComputedStyle(inputMaximumAmount).font
    );

    // Set width input sesuai dengan panjang teksnya, tapi tidak kurang dari min-width
    inputMaximumAmount.style.width = Math.max(textWidth, 90) + "px";
  });

  function getTextWidth(text, font) {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    context.font = font;
    const width = context.measureText(text).width;
    canvas.remove();
    return width;
  }
}
DiscountExpand();
// button add options 1
function addQuestions() {
  const sortableContainer = document.getElementById("wrapperQuestions");

  sortableContainer.addEventListener("click", (event) => {
    const clickedIcon = event.target;
    if (clickedIcon.classList.contains("item-icon-question")) {
      const item = clickedIcon.closest(".container-wrapperQuestions");
      const direction = clickedIcon.getAttribute("data-direction");

      if (direction === "up" && item.previousElementSibling) {
        sortableContainer.insertBefore(item, item.previousElementSibling);
      } else if (direction === "down" && item.nextElementSibling) {
        sortableContainer.insertBefore(item.nextElementSibling, item);
      }

      if (clickedIcon.classList.contains("delete-element-question")) {
        $(".item-icon-question").on("click", function () {
          $(this).tooltip("hide");
        });
        item.remove();
      }
    }
  });

  document.addEventListener("DOMContentLoaded", function () {
    const addButton = document.getElementById("button-AddQuestions");
    const container = document.getElementById("wrapperQuestions");
    let optionCount = 400;

    addButton.addEventListener("click", () => {
      const optionDiv = createOptionDiv();

      container.appendChild(optionDiv);
      $(".item-icon-question").tooltip();

      $(".item-icon-question").on("click", function () {
        $(this).tooltip("hide");
      });
      optionCount++;
      // descriptionCount++;

      // text area
      $("textarea.titleQuestion")
        .each(function () {
          this.setAttribute(
            "style",
            "height:" + this.scrollHeight + "px;overflow-y:hidden;"
          );
        })
        .on("input", function () {
          this.style.height = "auto";
          this.style.height = this.scrollHeight + "px";
          var result = 0;
        });
    });

    function createOptionDiv() {
      const optionDiv = document.createElement("div");
      optionDiv.className = `container-wrapperQuestions `;

      const div = `
      <div class="wrapper-questions mt-customQuestions " >
        <div class="wrapper-form mb-12px ">
        <textarea type="text" id="titleQuestion${optionCount}" rows="1" class="form-control mt-9 messageInput titleQuestion" maxlength="200" style="height:38px;overflow-y:hidden;"></textarea>
        <div class="d-flex align-items-start flex  justify-content-between">
          <p class="error-textarea">Cannot be empty</p>
          <p class="countNumber" id="counttitleQuestion${optionCount}">0  / 200</p>
      </div>
      </div>
  <div class="wrapperEvent d-flex mt-5px">
    <i class="fa-regular fa-circle-up mr-20 to-top item-icon-question" data-direction="up" data-toggle="tooltip" data-placement="top" title="Move position up"></i>
    <i class="fa-regular fa-circle-down mr-20 to-bottom item-icon-question" data-direction="down" data-toggle="tooltip" data-placement="top" title="Move position down"></i>
    <i class="fa-regular fa-trash-can mr-20 delete-element-question item-icon-question" data-toggle="tooltip" data-placement="top" title="Delete it"></i>
  </div>
      </div>
`;
      optionDiv.innerHTML = div;

      // text area add options

      return optionDiv;
    }

    // function deleteElement(element) {
    //   element.remove();
    // }
  });
}
addQuestions();

function cekRadioButtonDelivery(option) {
  // Menyembunyikan semua elemen wrapper-form terlebih dahulu
  var wrappers = document.querySelectorAll(".wrapperDelivery");
  wrappers.forEach(function (wrapper) {
    wrapper.style.display = "none";
  });

  // // Menampilkan elemen wrapper-form yang sesuai dengan radio button yang dicentang
  // var wrapperToShow = document.getElementById(
  //   "wrapper-form__delivery" + option
  // );
  // wrapperToShow.style.display = "block";
  if (option === 1) {
    $("#wrapperShipping").addClass("d-block");
    $("#wrapperMultipleShipping").removeClass("d-block");
  } else if (option === 2 || 3) {
    $("#wrapperShipping").removeClass("d-block");
    $("#wrapperMultipleShipping").addClass("d-block");
  }
  //  else if( optio)
}

// button add
function addDelivery() {
  const sortableContainer = document.getElementById("wrapperShippingCosts");

  sortableContainer.addEventListener("click", (event) => {
    const clickedIcon = event.target;

    if (clickedIcon.classList.contains("item-iconShipping")) {
      const item = clickedIcon.closest(".wrapper-form__delivery");

      if (clickedIcon.classList.contains("delete-elementShipping")) {
        item.remove();
      }
    }
  });

  document.addEventListener("DOMContentLoaded", function () {
    const addButton = document.getElementById("button-AddDestinations");
    const container = document.getElementById("wrapperShippingCosts");
    let optionCount = 400;

    addButton.addEventListener("click", () => {
      const optionDiv = createOptionDiv();
      container.appendChild(optionDiv);
      $(".delete-elementShipping").tooltip();

      $(".delete-elementShipping").on("click", function () {
        $(this).tooltip("hide");
      });
      $(`.destination${optionCount}`).select2({
        tags: true,
        // tokenSeparators: [",", " "],
        tokenSeparators: [","],

        templateSelection: function (selection) {
          if (selection.selected) {
            return $.parseHTML(
              '<span class="customclass">' + selection.text + "</span>"
            );
          } else {
            return $.parseHTML(
              '<span class="customclass">' + selection.text + "</span>"
            );
          }
        },
      });
      optionCount++;
      // descriptionCount++;
    });

    function createOptionDiv() {
      const optionDiv = document.createElement("div");
      optionDiv.className = `wrapper-form wrapper-form__delivery  mt-15`;
      optionDiv.style.marginLeft = "28px";
      const div = `
      <div class="wrapper-oneShiping mb-14">
      <p class="f-size16 font-weight-bold lh-140 mb-1">Destinations</p>
      <div class="input-group ">
       
      <div class="select-container select-container-type ml-0 w-100">
            <select class="destination${optionCount}" multiple="multiple">
           
                <option disabled>select country</option>
                <option value="AF">Afghanistan</option>
                <option value="AX">Aland Islands</option>
                <option value="AL">Albania</option>
                <option value="DZ">Algeria</option>
                <option value="AS">American Samoa</option>
                <option value="AD">Andorra</option>
                <option value="AO">Angola</option>
                <option value="AI">Anguilla</option>
                <option value="AQ">Antarctica</option>
                <option value="AG">Antigua and Barbuda</option>
                <option value="AR">Argentina</option>
                <option value="AM">Armenia</option>
                <option value="AW">Aruba</option>
                <option value="AU">Australia</option>
                <option value="AT">Austria</option>
                <option value="AZ">Azerbaijan</option>
                <option value="BS">Bahamas</option>
                <option value="BH">Bahrain</option>
                <option value="BD">Bangladesh</option>
                <option value="BB">Barbados</option>
                <option value="BY">Belarus</option>
                <option value="BE">Belgium</option>
                <option value="BZ">Belize</option>
                <option value="BJ">Benin</option>
                <option value="BM">Bermuda</option>
                <option value="BT">Bhutan</option>
                <option value="BO">Bolivia</option>
                <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
                <option value="BA">Bosnia and Herzegovina</option>
                <option value="BW">Botswana</option>
                <option value="BV">Bouvet Island</option>
                <option value="BR">Brazil</option>
                <option value="IO">British Indian Ocean Territory</option>
                <option value="BN">Brunei Darussalam</option>
                <option value="BG">Bulgaria</option>
                <option value="BF">Burkina Faso</option>
                <option value="BI">Burundi</option>
                <option value="KH">Cambodia</option>
                <option value="CM">Cameroon</option>
                <option value="CA">Canada</option>
                <option value="CV">Cape Verde</option>
                <option value="KY">Cayman Islands</option>
                <option value="CF">Central African Republic</option>
                <option value="TD">Chad</option>
                <option value="CL">Chile</option>
                <option value="CN">China</option>
                <option value="CX">Christmas Island</option>
                <option value="CC">Cocos (Keeling) Islands</option>
                <option value="CO">Colombia</option>
                <option value="KM">Comoros</option>
                <option value="CG">Congo</option>
                <option value="CD">Congo, Democratic Republic of the Congo</option>
                <option value="CK">Cook Islands</option>
                <option value="CR">Costa Rica</option>
                <option value="CI">Cote D'Ivoire</option>
                <option value="HR">Croatia</option>
                <option value="CU">Cuba</option>
                <option value="CW">Curacao</option>
                <option value="CY">Cyprus</option>
                <option value="CZ">Czech Republic</option>
                <option value="DK">Denmark</option>
                <option value="DJ">Djibouti</option>
                <option value="DM">Dominica</option>
                <option value="DO">Dominican Republic</option>
                <option value="EC">Ecuador</option>
                <option value="EG">Egypt</option>
                <option value="SV">El Salvador</option>
                <option value="GQ">Equatorial Guinea</option>
                <option value="ER">Eritrea</option>
                <option value="EE">Estonia</option>
                <option value="ET">Ethiopia</option>
                <option value="FK">Falkland Islands (Malvinas)</option>
                <option value="FO">Faroe Islands</option>
                <option value="FJ">Fiji</option>
                <option value="FI">Finland</option>
                <option value="FR">France</option>
                <option value="GF">French Guiana</option>
                <option value="PF">French Polynesia</option>
                <option value="TF">French Southern Territories</option>
                <option value="GA">Gabon</option>
                <option value="GM">Gambia</option>
                <option value="GE">Georgia</option>
                <option value="DE">Germany</option>
                <option value="GH">Ghana</option>
                <option value="GI">Gibraltar</option>
                <option value="GR">Greece</option>
                <option value="GL">Greenland</option>
                <option value="GD">Grenada</option>
                <option value="GP">Guadeloupe</option>
                <option value="GU">Guam</option>
                <option value="GT">Guatemala</option>
                <option value="GG">Guernsey</option>
                <option value="GN">Guinea</option>
                <option value="GW">Guinea-Bissau</option>
                <option value="GY">Guyana</option>
                <option value="HT">Haiti</option>
                <option value="HM">Heard Island and Mcdonald Islands</option>
                <option value="VA">Holy See (Vatican City State)</option>
                <option value="HN">Honduras</option>
                <option value="HK">Hong Kong</option>
                <option value="HU">Hungary</option>
                <option value="IS">Iceland</option>
                <option value="IN">India</option>
                <option value="ID">Indonesia</option>
                <option value="IR">Iran, Islamic Republic of</option>
                <option value="IQ">Iraq</option>
                <option value="IE">Ireland</option>
                <option value="IM">Isle of Man</option>
                <option value="IL">Israel</option>
                <option value="IT">Italy</option>
                <option value="JM">Jamaica</option>
                <option value="JP">Japan</option>
                <option value="JE">Jersey</option>
                <option value="JO">Jordan</option>
                <option value="KZ">Kazakhstan</option>
                <option value="KE">Kenya</option>
                <option value="KI">Kiribati</option>
                <option value="KP">Korea, Democratic People's Republic of</option>
                <option value="KR">Korea, Republic of</option>
                <option value="XK">Kosovo</option>
                <option value="KW">Kuwait</option>
                <option value="KG">Kyrgyzstan</option>
                <option value="LA">Lao People's Democratic Republic</option>
                <option value="LV">Latvia</option>
                <option value="LB">Lebanon</option>
                <option value="LS">Lesotho</option>
                <option value="LR">Liberia</option>
                <option value="LY">Libyan Arab Jamahiriya</option>
                <option value="LI">Liechtenstein</option>
                <option value="LT">Lithuania</option>
                <option value="LU">Luxembourg</option>
                <option value="MO">Macao</option>
                <option value="MK">Macedonia, the Former Yugoslav Republic of</option>
                <option value="MG">Madagascar</option>
                <option value="MW">Malawi</option>
                <option value="MY">Malaysia</option>
                <option value="MV">Maldives</option>
                <option value="ML">Mali</option>
                <option value="MT">Malta</option>
                <option value="MH">Marshall Islands</option>
                <option value="MQ">Martinique</option>
                <option value="MR">Mauritania</option>
                <option value="MU">Mauritius</option>
                <option value="YT">Mayotte</option>
                <option value="MX">Mexico</option>
                <option value="FM">Micronesia, Federated States of</option>
                <option value="MD">Moldova, Republic of</option>
                <option value="MC">Monaco</option>
                <option value="MN">Mongolia</option>
                <option value="ME">Montenegro</option>
                <option value="MS">Montserrat</option>
                <option value="MA">Morocco</option>
                <option value="MZ">Mozambique</option>
                <option value="MM">Myanmar</option>
                <option value="NA">Namibia</option>
                <option value="NR">Nauru</option>
                <option value="NP">Nepal</option>
                <option value="NL">Netherlands</option>
                <option value="AN">Netherlands Antilles</option>
                <option value="NC">New Caledonia</option>
                <option value="NZ">New Zealand</option>
                <option value="NI">Nicaragua</option>
                <option value="NE">Niger</option>
                <option value="NG">Nigeria</option>
                <option value="NU">Niue</option>
                <option value="NF">Norfolk Island</option>
                <option value="MP">Northern Mariana Islands</option>
                <option value="NO">Norway</option>
                <option value="OM">Oman</option>
                <option value="PK">Pakistan</option>
                <option value="PW">Palau</option>
                <option value="PS">Palestinian Territory, Occupied</option>
                <option value="PA">Panama</option>
                <option value="PG">Papua New Guinea</option>
                <option value="PY">Paraguay</option>
                <option value="PE">Peru</option>
                <option value="PH">Philippines</option>
                <option value="PN">Pitcairn</option>
                <option value="PL">Poland</option>
                <option value="PT">Portugal</option>
                <option value="PR">Puerto Rico</option>
                <option value="QA">Qatar</option>
                <option value="RE">Reunion</option>
                <option value="RO">Romania</option>
                <option value="RU">Russian Federation</option>
                <option value="RW">Rwanda</option>
                <option value="BL">Saint Barthelemy</option>
                <option value="SH">Saint Helena</option>
                <option value="KN">Saint Kitts and Nevis</option>
                <option value="LC">Saint Lucia</option>
                <option value="MF">Saint Martin</option>
                <option value="PM">Saint Pierre and Miquelon</option>
                <option value="VC">Saint Vincent and the Grenadines</option>
                <option value="WS">Samoa</option>
                <option value="SM">San Marino</option>
                <option value="ST">Sao Tome and Principe</option>
                <option value="SA">Saudi Arabia</option>
                <option value="SN">Senegal</option>
                <option value="RS">Serbia</option>
                <option value="CS">Serbia and Montenegro</option>
                <option value="SC">Seychelles</option>
                <option value="SL">Sierra Leone</option>
                <option value="SG">Singapore</option>
                <option value="SX">Sint Maarten</option>
                <option value="SK">Slovakia</option>
                <option value="SI">Slovenia</option>
                <option value="SB">Solomon Islands</option>
                <option value="SO">Somalia</option>
                <option value="ZA">South Africa</option>
                <option value="GS">South Georgia and the South Sandwich Islands</option>
                <option value="SS">South Sudan</option>
                <option value="ES">Spain</option>
                <option value="LK">Sri Lanka</option>
                <option value="SD">Sudan</option>
                <option value="SR">Suriname</option>
                <option value="SJ">Svalbard and Jan Mayen</option>
                <option value="SZ">Swaziland</option>
                <option value="SE">Sweden</option>
                <option value="CH">Switzerland</option>
                <option value="SY">Syrian Arab Republic</option>
                <option value="TW">Taiwan, Province of China</option>
                <option value="TJ">Tajikistan</option>
                <option value="TZ">Tanzania, United Republic of</option>
                <option value="TH">Thailand</option>
                <option value="TL">Timor-Leste</option>
                <option value="TG">Togo</option>
                <option value="TK">Tokelau</option>
                <option value="TO">Tonga</option>
                <option value="TT">Trinidad and Tobago</option>
                <option value="TN">Tunisia</option>
                <option value="TR">Turkey</option>
                <option value="TM">Turkmenistan</option>
                <option value="TC">Turks and Caicos Islands</option>
                <option value="TV">Tuvalu</option>
                <option value="UG">Uganda</option>
                <option value="UA">Ukraine</option>
                <option value="AE">United Arab Emirates</option>
                <option value="GB">United Kingdom</option>
                <option value="US">United States</option>
                <option value="UM">United States Minor Outlying Islands</option>
                <option value="UY">Uruguay</option>
                <option value="UZ">Uzbekistan</option>
                <option value="VU">Vanuatu</option>
                <option value="VE">Venezuela</option>
                <option value="VN">Viet Nam</option>
                <option value="VG">Virgin Islands, British</option>
                <option value="VI">Virgin Islands, U.s.</option>
                <option value="WF">Wallis and Futuna</option>
                <option value="EH">Western Sahara</option>
                <option value="YE">Yemen</option>
                <option value="ZM">Zambia</option>
                <option value="ZW">Zimbabwe</option>
            
            </select>
            <span class="arrow-icon">
                <i class="fas fa-chevron-down"></i>
            </span>
        </div>  

      </div>
    </div>
    <div class="wrapper-oneShiping mb-14">
    <p class="f-size16 font-weight-bold lh-140 mb-1">Amount alone</p>
    <div class="input-group ">
      <div class="input-group-prepend ">
        <div class="input-group-text border-custom-currency">SGD</div>
      </div>
      <input type="number" class="form-control mt-9 messageInput border-currency" id="inlineFormInputGroup" style="height:0px;overflow-y:hidden;">
    </div>
  </div>
  <div class="wrapper-oneShiping">

    <p class="f-size16 font-weight-bold lh-140 mb-1">Amount with others</p>
    <div class="input-group ">
      <div class="input-group-prepend ">
        <div class="input-group-text border-custom-currency">SGD</div>
      </div>
      <input type="number" class="form-control mt-9 messageInput border-currency" id="inlineFormInputGroup" style="height:0px;overflow-y:hidden;">
    </div>
  </div>
  <div class="wrapperEvent d-flex mt-15">
 
    <i class="fa-regular fa-trash-can mr-20 delete-elementShipping  item-iconShipping" data-toggle="tooltip" data-placement="top" title="Delete it"></i>
  </div>
`;
      optionDiv.innerHTML = div;

      return optionDiv;
    }

    // function deleteElement(element) {
    //   element.remove();
    // }
  });
}
addDelivery();

// button add
function addWebhokLink() {
  const sortableContainer = document.getElementById("wrapper-addWebhokLink");

  sortableContainer.addEventListener("click", (event) => {
    const clickedIcon = event.target;
    if (clickedIcon.classList.contains("item-iconWebhook")) {
      const item = clickedIcon.closest(".wrapper-form__Webhook");

      if (clickedIcon.classList.contains("delete-elementWebhook")) {
        item.remove();
      }
    }
  });

  document.addEventListener("DOMContentLoaded", function () {
    const addButton = document.getElementById("button-AddWebhook");
    const container = document.getElementById("wrapper-addWebhokLink");
    let optionCount = 400;

    addButton.addEventListener("click", () => {
      const optionDiv = createOptionDiv();
      container.appendChild(optionDiv);
      textareaWebhook(optionCount);
      $(".delete-elementWebhook").tooltip();

      $(".delete-elementWebhook").on("click", function () {
        $(this).tooltip("hide");
      });
      optionCount++;
      // descriptionCount++;

      // text area
    });

    function createOptionDiv() {
      const optionDiv = document.createElement("div");
      optionDiv.className = `wrapper-form wrapper-form__Webhook  mt-15`;

      const div = `
      <div class="wrapper-addWebhok mb-14">
        <p class="f-size16 font-weight-bold lh-140 mb-1">Webhook link</p>
        <div class="input-group ">
          
        <textarea type="text" id="webhook${optionCount}" rows="1" class="form-control messageInput webhookLink"  style="height:38px;overflow-y:hidden;"></textarea>
        </div>
        <p class="error-textarea">Cannot be empty</p>
      </div>
    <div class="wrapperEvent d-flex">
      <i class="fa-regular fa-trash-can mr-20 delete-elementWebhook item-iconWebhook" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete it"></i>
    </div>
`;
      optionDiv.innerHTML = div;

      // text area add options

      return optionDiv;
    }

    function textareaWebhook(optionCount) {
      // text area
      $("textarea.webhookLink")
        .each(function () {
          this.setAttribute(
            "style",
            "height:" + this.scrollHeight + "px;overflow-y:hidden;"
          );
        })
        .on("input", function () {
          this.style.height = "auto";
          this.style.height = this.scrollHeight + "px";
          var result = 0;
        });
    }
    // function deleteElement(element) {
    //   element.remove();
    // }
  });
}
addWebhokLink();
// color picker

const colorPicker = $("#colorPicker-profile");

// Menambahkan event listener ke color picker untuk mendengarkan perubahan warna
colorPicker.spectrum({
  showPalette: true,
  showInput: true,
  showAlpha: true,
  allowEmpty: true,
  preferredFormat: "hex",
  color: "#DFF8FF",
  palette: [
    ["#000", "#444", "#666", "#999", "#ccc", "#fff"],
    ["#f00", "#f90", "#ff0", "#0f0", "#0ff", "#00f"],
    ["#f4cccc", "#fce5cd", "#fff2cc", "#d9ead3", "#d0e0e3", "#cfe2f3"],
    ["#ea9999", "#f9cb9c", "#ffe599", "#b6d7a8", "#a2c4c9", "#9fc5e8"],
    ["#e06666", "#f6b26b", "#ffd966", "#93c47d", "#76a5af", "#6fa8dc"],
    ["#c00", "#e69138", "#f1c232", "#6aa84f", "#45818e", "#3d85c6"],
    ["#900", "#b45f06", "#bf9000", "#38761d", "#134f5c", "#0b5394"],
    ["#600", "#783f04", "#7f6000", "#274e13", "#0c343d", "#073763"],
  ],
  move: function (color) {
    // Saat warna diubah di color picker, perbarui warna tombol
    const selectedColor = color.toHexString();
    // const alpha = color.getAlpha(); // Dapatkan nilai alpha

    // // Gunakan nilai alpha saat mengatur warna
    // setButtonColor(selectedColor, alpha);

    // /* setButtonColor(selectedColor); */
    // setHoverDarkenEffect(buttonContoh, 0.8); // Sesuaikan faktor kegelapan dengan nilai antara 0 hingga 1
  },
});
$("#btn-color-btn").click(function () {
  // Tampilkan pemilih warna saat teks diklik
  $("#colorPicker-profile").spectrum("toggle");
  return false;
});

$("#colorPicker-text").spectrum({
  showPalette: true,
  showInput: true,
  showAlpha: true,
  allowEmpty: true,
  preferredFormat: "hex",
  // color: response.data.profile_icon_color,
  color: "#40ABFA",
  palette: [
    ["#000", "#444", "#666", "#999", "#ccc", "#fff"],
    ["#f00", "#f90", "#ff0", "#0f0", "#0ff", "#00f"],
    ["#f4cccc", "#fce5cd", "#fff2cc", "#d9ead3", "#d0e0e3", "#cfe2f3"],
    ["#ea9999", "#f9cb9c", "#ffe599", "#b6d7a8", "#a2c4c9", "#9fc5e8"],
    ["#e06666", "#f6b26b", "#ffd966", "#93c47d", "#76a5af", "#6fa8dc"],
    ["#c00", "#e69138", "#f1c232", "#6aa84f", "#45818e", "#3d85c6"],
    ["#900", "#b45f06", "#bf9000", "#38761d", "#134f5c", "#0b5394"],
    ["#600", "#783f04", "#7f6000", "#274e13", "#0c343d", "#073763"],
  ],
  move: function (color) {
    // Saat warna diubah di color picker, perbarui warna tombol
    const selectedColor = color.toHexString();

    // Sesuaikan faktor kegelapan dengan nilai antara 0 hingga 1
  },
});
$("#btn-color-txt").click(function () {
  $("#colorPicker-text").spectrum("toggle");
  return false;
});

// cover image
function uploadThumbnail() {
  var fileInput = document.getElementById("uploadFileImageThumbnail");
  var profileImage = document.getElementById("upload-imageThumbnail");

  fileInput.addEventListener("change", function () {
    var file = fileInput.files[0];

    if (file) {
      // Validasi format file
      var fileName = file.name;
      var allowedFormats = ["image/jpeg", "image/jpg", "image/png"];
      if (allowedFormats.indexOf(file.type) === -1) {
        alert("Hanya file JPG, JPEG, atau PNG yang diizinkan.");
        fileInput.value = ""; // Reset input file
        return;
      }

      // Validasi ukuran file (maksimum 2MB)
      if (file.size > 2 * 1024 * 1024) {
        alert("Ukuran file maksimum adalah 2MB.");
        fileInput.value = ""; // Reset input file
        return;
      }

      // Tampilkan gambar dalam elemen dengan ID 'profile-image'
      var reader = new FileReader();
      reader.onload = function (e) {
        var cover = document.getElementById("wrapper-cover-imageThumbnail");

        profileImage.src = e.target.result;

        var btn = document.getElementById("wrapper-deleteThumbnail");
        btn.style.display = "block";
        cover.style.display = "block";
        cover.setAttribute("data-tooltip", "tooltip");
        cover.setAttribute("data-placement", "top");
        cover.setAttribute("title", `${fileName}`);
      };
      reader.readAsDataURL(file);
    } else {
      // Reset gambar saat tidak ada file yang dipilih
      profileImage.src = "";
    }
  });

  function deleteImageItem() {
    // Ambil element gambar
    // const image = document.getElementById("item-image");
    $("#upload-imageThumbnail").attr("src", "");
    // Hapus element gambar
    var item = document.getElementById("wrapper-cover-imageThumbnail");
    var btn = document.getElementById("wrapper-deleteThumbnail");
    btn.style.display = "none";

    // image.parentNode.removeChild(image);
    item.style.display = "none";
  }

  // // Event listener untuk menghapus image ketika tombol hapus diklik
  const deleteButton = document.getElementById("confirm-delete-btnThumbnail");
  deleteButton.addEventListener("click", function () {
    deleteImageItem();
  });
}

uploadThumbnail();

function addDiscount() {
  const sortableContainer = document.getElementById("wrapper-addDiscount");

  sortableContainer.addEventListener("click", (event) => {
    const clickedIcon = event.target;
    if (clickedIcon.classList.contains("item-iconDeleteDiscount")) {
      const item = clickedIcon.closest(".wrapper-form__discount");

      if (clickedIcon.classList.contains("delete-elementDiscount")) {
        item.remove();
      }
    }
  });

  document.addEventListener("DOMContentLoaded", function () {
    const addButton = document.getElementById("button-AddDiscount");
    const container = document.getElementById("wrapper-addDiscount");
    let optionCount = 2;
    let amountCount1 = 100;
    let amountCount2 = 200;
    addButton.addEventListener("click", () => {
      const optionDiv = createOptionDiv();
      container.appendChild(optionDiv);
      $(".item-iconDeleteDiscount").tooltip();

      $(".item-iconDeleteDiscount").on("click", function () {
        $(this).tooltip("hide");
      });
      changeDiscount(optionCount, amountCount1, amountCount2);
      $(`.discount${optionCount}`).select2({
        minimumResultsForSearch: -1,
        dropdownCssClass: "discount-dropdown",
      });

      optionCount++;
      amountCount1++;
      amountCount2++;
    });

    function changeDiscount(optionCount, amountCount1, amountCount2) {
      // Dapatkan nilai terpilih saat ada perubahan
      $(`.discount${optionCount}`).on("change", function () {
        var selectedValue = $(this).val();
        console.log(selectedValue);
        if (selectedValue === "Percentage") {
          $(`#amoundDiscount${amountCount1}`).addClass("d-block");
          $(`#amoundDiscount${amountCount2}`).removeClass("d-block");
        } else if (selectedValue === "Specific amount") {
          $(`#amoundDiscount${amountCount1}`).removeClass("d-block");
          $(`#amoundDiscount${amountCount1}`).addClass("display-none");
          $(`#amoundDiscount${amountCount2}`).addClass("d-block");
          console.log("oke2");
        }
      });
    }
    function createOptionDiv() {
      const optionDiv = document.createElement("div");
      optionDiv.className = `wrapper-form wrapper-form__discount  mt-15`;

      const div = `
    
      <div class="wrapper-oneShiping mb-14">
        <p class="f-size16 font-weight-bold lh-140 mb-1">When buying more than this amount</p>
        <div class="input-group ">
         
          <input type="text" class="quantity" id="inputExpandDiscount">
        </div>
      </div>
      <div class="wrapper-form  mb-14" >
        <p class="f-size16 font-weight-bold lh-140 mb-1">Give this type of discount</p>
        <div class="select-container select-container-discount ml-0 ">
          <select class="discount${optionCount}">
              <option value="Percentage">Percentage</option>
              <option value="Specific amount">Specific amount</option>
          </select>
          <span class="arrow-icon">
              <i class="fas fa-chevron-down"></i>
          </span>
      </div>
       
      </div>

      <div class="wrapper-oneShiping d-block" id="amoundDiscount${amountCount1}">

        <p class="f-size16 font-weight-bold lh-140 mb-1">Amount of discount</p>
        <div class="input-group ">
        
          <input type="number" class="form-control mt-9 messageInput border-discount" id="inlineFormInputGroup" style="height:0px;overflow-y:hidden;">
          <div class="input-group-prepend ">
            <div class="input-group-text border-custom-discount">%</div>
          </div>
        </div>
      </div>
    <div class="wrapper-oneShiping display-none" id="amoundDiscount${amountCount2}">

      <p class="f-size16 font-weight-bold lh-140 mb-1">Amount of discount</p>
      <div class="input-group ">
        <div class="input-group-prepend ">
          <div class="input-group-text border-custom-currency">SGD</div>
        </div>
        <input type="number" class="form-control mt-9 messageInput border-currency" id="inlineFormInputGroup" style="height:0px;overflow-y:hidden;">
      </div>
    </div>
    
    <div class="wrapperEvent d-flex mt-14">
   
      <i class="fa-regular fa-trash-can mr-20 delete-elementDiscount item-iconDeleteDiscount" data-toggle="tooltip" data-placement="top" title="Delete it"></i>
    </div>
   
`;
      optionDiv.innerHTML = div;

      // text area add options

      return optionDiv;
    }

    // function deleteElement(element) {
    //   element.remove();
    // }
  });
}
addDiscount();

// function rearrangeHandlerVideo() {
//   //for input form
//   let inputFormContainer = document.querySelector("#wrapper-container-video");
//   new Sortable(inputFormContainer, {
//     animation: 150,
//     handle: ".wrapper-video",
//     ghostClass: "ghost",
//     forceFallback: true,
//     onStart: function (evt) {
//       document.documentElement.classList.add("draggable-cursor");
//       $("[data-toggle=tooltip]").tooltip("hide");
//       $("[data-toggle=tooltip]").tooltip("disable");
//     },
//     // Restores default page cursor
//     onEnd: function (evt) {
//       document.documentElement.classList.remove("draggable-cursor");
//       $("[data-toggle=tooltip]").tooltip("enable");
//     },
//   });
// }
