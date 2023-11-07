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
        } else if (this.id === "titleNOS") {
          $("#countTitleNOS").text(this.value.length + " " + " / 100");
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
        }
      });
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
var quill2 = new Quill("#editorQuillAmount", {
  theme: "bubble",

  bounds: "#editorQuillAmount",
  scrollingContainer: "#editorQuillAmount",
  modules: {
    toolbar: toolbarOptions,
  },
  // modules: {
  //   toolbar: toolbarOptions
  // }
});
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
var quill = new Quill("#editorContainer", {
  theme: "bubble",
  bounds: "#editorContainer",
  scrollingContainer: "#editorContainer",
  modules: {
    toolbar: toolbarOptions,
  },
});
var quill = new Quill("#editorContainer2", {
  theme: "bubble",
  bounds: "#editorContainer2",
  scrollingContainer: "#editorContainer2",
  modules: {
    toolbar: toolbarOptions,
  },
});

var quill = new Quill("#editorContainer199", {
  theme: "bubble",
  bounds: "#editorContainer199",
  scrollingContainer: "#editorContainer199",
  modules: {
    toolbar: toolbarOptions,
  },
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
        item.remove();
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
      var quill = new Quill(`#editorContainer${optionCount}`, {
        theme: "bubble",
        bounds: `#editorContainer${optionCount}`,
        scrollingContainer: `#editorContainer${optionCount}`,
        modules: {
          toolbar: toolbarOptions,
        },
      });
      optionCount++;
      descriptionCount++;
    });

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
                 
      
                  <textarea type="text" id="titleMultiplePrice${optionCount}" rows="1" class="form-control mt-9 messageInput" maxlength="200" style="height:84px;overflow-y:hidden;">Lorem ipsum dolor sit amet consectetur adipis Lorem ipsum dolor sit amet consectetur adipisLorem ipsum dolor sit </textarea>
                  <div class="d-flex align-items-start flex  justify-content-between">
                    <p class="error-textarea">Cannot be empty</p>
                    <p class="countNumber" id="counttitleMultiplePrice${optionCount}">0  / 200</p>
                </div>
                </div>

                <!-- multiple prices editor -->
                <div class="wrapper-form mb-0" id="heading-element${optionCount}">
                  <div class="collapse-text form-title mb-2 FSize collapsed" data-toggle="collapse" data-target="#collapse-element${optionCount}" aria-expanded="false" aria-controls="collapse-element${optionCount}">
                  
                      Description
                  
                  </div>
                  <div class="collapse" id="collapse-element${optionCount}" aria-labelledby="heading-element${optionCount}" data-parent="#heading-element${optionCount}">
                <div id="editorContainer${descriptionCount}"></div>
                
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

    function deleteElement(element) {
      element.remove();
    }
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
        item.remove();
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
      var quill = new Quill(`#editorContainer${optionCount}`, {
        theme: "bubble",
        bounds: `#editorContainer${optionCount}`,
        scrollingContainer: `#editorContainer${optionCount}`,
        modules: {
          toolbar: toolbarOptions,
        },
      });
      optionCount++;
      descriptionCount++;
      console.log("oke");
    });

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
                 
      
                  <textarea type="text" id="titleMultiplePrices${optionCount}" rows="1" class="form-control mt-9 messageInput" maxlength="200" style="height:84px;overflow-y:hidden;">Lorem ipsum dolor sit amet consectetur adipis Lorem ipsum dolor sit amet consectetur adipisLorem ipsum dolor sit </textarea>
                  <div class="d-flex align-items-start flex  justify-content-between">
                    <p class="error-textarea">Cannot be empty</p>
                    <p class="countNumber" id="counttitleMultiplePrices${optionCount}">0  / 200</p>
                </div>
                </div>

                <!-- multiple prices editor -->
                <div class="wrapper-form mb-0" id="heading-element${optionCount}">
                  <div class="collapse-text form-title mb-2 FSize collapsed" data-toggle="collapse" data-target="#collapse-element${optionCount}" aria-expanded="false" aria-controls="collapse-element${optionCount}">
                  
                      Description
                  
                  </div>
                  <div class="collapse" id="collapse-element${optionCount}" aria-labelledby="heading-element${optionCount}" data-parent="#heading-element${optionCount}">
                <div id="editorContainer${descriptionCount}"></div>
                
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

    function deleteElement(element) {
      element.remove();
    }
  });
}
addOption2();

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

// add file

const fileInput = document.getElementById("uploadFile");
const fileInputLabel = document.getElementById("uploadFileLabel");
const uploadedFilesContainer = document.getElementById("wrapper-uploadFile");

fileInput.addEventListener("change", function () {
  if (fileInput.files.length > 0) {
    const fileName = fileInput.files[0].name;
    const uploadedFile = createUploadedFileElement(fileName);
    uploadedFilesContainer.appendChild(uploadedFile);
    fileInputLabel.textContent = "Upload File"; // Mengubah label setelah file dipilih
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
          
    <i class="fa-solid fa-download hover-tooltips"   data-tooltip="tooltip" data-placement="top" title="Download"></i>

  
    <i class="fas fa-trash-alt item-icon-delete hover-tooltips"  data-tooltip="tooltip" data-placement="top" title="Delete it"></i>    


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

function addLink() {
  document.addEventListener("DOMContentLoaded", function () {
    const uploadedFilesContainer =
      document.getElementById("wrapper-uploadFile");
    const btnAddLink = document.getElementById("button-AddLink");

    btnAddLink.addEventListener("click", () => {
      const optionDiv = createOptionDiv();
      uploadedFilesContainer.appendChild(optionDiv);

      console.log("oke");
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
  <p class="name-file color-a" data-tooltip="tooltip" data-placement="bottom" title="${inputValue}" > <a href="${inputValue}" target="_blank">${inputValue} </a></p>
</div>
<div class="btn-event d-flex">
<a href="${inputValue}" target="_blank" ><i class="fa-solid fa-up-right-from-square hover-tooltips "  data-tooltip="tooltip" data-placement="top" title="Open link"></i> </a>

<i class="fas fa-trash-alt item-icon-delete hover-tooltips"   data-tooltip="tooltip" data-placement="top" title="Delete it"></i>   
</div>
    `;

      // $('[data-toggle="tooltip"]').tooltip();
      uploadedFile.innerHTML = elementFile;

      clearinputValue.value = "";
      return uploadedFile;
    }

    $("body").tooltip({
      selector: ".hover-tooltips",
    });
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

      console.log("oke");
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
  <p class="name-file color-a" data-tooltip="tooltip" data-placement="bottom" title="${inputValue}" > <a href="${inputValue}" target="_blank">${inputValue} </a></p>
</div>
<div class="btn-event d-flex">
<a href="${inputValue}" target="_blank" ><i class="fa-solid fa-up-right-from-square hover-tooltips "  data-tooltip="tooltip" data-placement="top" title="Open link"></i> </a>

<i class="fas fa-trash-alt item-icon-delete hover-tooltips"   data-tooltip="tooltip" data-placement="top" title="Delete it"></i>   
</div>
    `;

      // $('[data-toggle="tooltip"]').tooltip();
      uploadedFile.innerHTML = elementFile;

      clearinputValue.value = "";
      return uploadedFile;
    }

    $("body").tooltip({
      selector: ".hover-tooltips",
    });
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

      console.log("oke");
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
  <p class="name-file color-a" data-tooltip="tooltip" data-placement="bottom" title="${inputValue}" > <a href="${inputValue}" target="_blank">${inputValue} </a></p>
</div>
<div class="btn-event d-flex">
<a href="${inputValue}" target="_blank" ><i class="fa-solid fa-up-right-from-square hover-tooltips "  data-tooltip="tooltip" data-placement="top" title="Open link"></i> </a>

<i class="fas fa-trash-alt item-icon-delete hover-tooltips"   data-tooltip="tooltip" data-placement="top" title="Delete it"></i>   
</div>
    `;

      // $('[data-toggle="tooltip"]').tooltip();
      uploadedFile.innerHTML = elementFile;

      clearinputValue.value = "";
      return uploadedFile;
    }

    $("body").tooltip({
      selector: ".hover-tooltips",
    });
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

const sortableContainer = document.getElementById("wrapper-uploadFile");

sortableContainer.addEventListener("click", (event) => {
  const clickedIcon = event.target;
  if (clickedIcon.classList.contains("item-icon-delete")) {
    const item = clickedIcon.closest(".wrapper-file");

    item.remove();
  }
});

// cover image
function uploadCover() {
  var fileInput = document.getElementById("uploadFileImage");
  var profileImage = document.getElementById("cover-image");

  fileInput.addEventListener("change", function () {
    var file = fileInput.files[0];

    if (file) {
      // Validasi format file
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
    console.log("oke");
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
        wrapperdivElement.className = "hover-tooltips  wrapperImg";
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
          "fas fa-trash-alt item-icon-delete hover-tooltips custom-position-icon";
        deleteIcon.setAttribute("data-tooltip", "tooltip");
        deleteIcon.setAttribute("data-placement", "top");
        deleteIcon.setAttribute("title", "Delete it");
        // deleteIcon.setAttribute("data-original-title", "Delete it");
        deleteIcon.setAttribute("data-toggle", "modal");
        deleteIcon.setAttribute("data-target", "#deleteModalItem");

        // // Bersihkan isi dari profileImageContainer
        // profileImageContainer.innerHTML = "";

        // Tambahkan elemen gambar dan ikon delete ke dalam profileImageContainer
        wrapperdivElement.appendChild(imageElement);
        divElement.appendChild(wrapperdivElement);
        divElement.appendChild(deleteIcon);
        profileImageContainer.appendChild(divElement);
        // }
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
  var imageContainer = document.querySelector(".profile-img-container2");

  // Tambahkan event listener ke elemen induk untuk menangani klik pada ikon delete
  imageContainer.addEventListener("click", function (event) {
    // Periksa apakah elemen yang diklik adalah ikon delete
    if (event.target.classList.contains("item-icon-delete")) {
      // Temukan elemen gambar yang bersesuaian dengan ikon delete yang diklik
      var imageElement = event.target.previousElementSibling;

      // var div = event.target.parentNode;
      // Hapus elemen gambar dan ikon delete
      imageElement.remove();
      event.target.remove();
      // div.remove();
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
      // $("[data-toggle=tooltip]").tooltip("enable");
    },
  });
}

rearrangeHandlerImgPreview();

// add video
function showVideoPreview() {
  var youtubeLink = document.getElementById("inputAddVideo").value;
  var videoId = extractVideoId(youtubeLink);

  if (videoId) {
    var videoPreview = document.querySelector(".wrapper-container-video");

    const wrapper = document.createElement("div");

    wrapper.className = "wrapper-video ";
    // Tambahkan video preview baru
    var wrapperVideo = `
     
                  <div class="profile-video-container  ">
                
                  <iframe src="https://www.youtube.com/embed/${videoId}" class="preview" id="yt-preview">
                    </iframe>
                         </div>
                         <i class="fas fa-trash-alt  item-icon-delete hover-tooltips custom-position-iconVideo " data-tooltip="tooltip" data-placement="top" title="" data-original-title="Delete it"></i>
                       
      
      `;
    wrapper.innerHTML = wrapperVideo;
    videoPreview.appendChild(wrapper);
  } else {
    alert("Tautan YouTube tidak valid.");
  }
}
function extractVideoId(url) {
  var regExp =
    /^(https?:\/\/)?(www\.)?(youtube|youtu|youtube-nocookie)\.(com|be)\/(watch\?v=|embed\/|v\/|.+\?v=)?([^&=%\?]{11})/;
  var match = url.match(regExp);

  if (match && match[6].length === 11) {
    return match[6];
  } else {
    return null;
  }
}

// audio
const audioFilesInput = document.getElementById("uploadFileAudio");
const audioPreviewContainer = document.getElementById("audio-preview");

audioFilesInput.addEventListener("change", function () {
  const files = audioFilesInput.files;

  if (files.length > 5) {
    alert("Maximum 5 audio files allowed.");
    return;
  }

  for (let i = 0; i < files.length; i++) {
    const file = files[i];

    // if (file.type !== "audio/mp3") {
    //   alert("Invalid audio format. Only MP3 files allowed.");
    //   return;
    // }

    if (file.size > 10000000) {
      alert("File size exceeds the limit of 10MB.");
      return;
    }

    const audioElement = document.createElement("audio");
    audioElement.controls = true;
    audioElement.className = "audio mr-10";
    const sourceElement = document.createElement("source");
    sourceElement.src = URL.createObjectURL(file);
    sourceElement.type = "audio/mpeg";
    audioElement.appendChild(sourceElement);

    const deleteButton = document.createElement("i");
    deleteButton.className = "fas fa-trash-alt item-delete-audio";
    deleteButton.setAttribute("data-tooltip", "tooltip");
    deleteButton.setAttribute("data-placement", "top");
    deleteButton.setAttribute("title", "Delete it");
    deleteButton.addEventListener("click", function () {
      audioPreviewContainer.removeChild(audioElement.parentElement);
    });

    const audioWrapper = document.createElement("div");
    audioWrapper.className = "wrapper-audio d-flex align-items-center mb-20";
    audioWrapper.appendChild(audioElement);
    audioWrapper.appendChild(deleteButton);

    audioPreviewContainer.appendChild(audioWrapper);
  }
});

$("#category").select2({
  tags: true,
  tokenSeparators: [",", " "],
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
