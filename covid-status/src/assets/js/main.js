$(document).ready(function () {});

function initializeNavigation() {
  $(".js-loading-bar").modal({
    backdrop: "static",
    show: false,
  });
}

function showProgressBar() {
  var $modal = $(".js-loading-bar"),
    $bar = $modal.find(".progress-bar");

  $modal.modal("show");
  $bar.addClass("animate");
}

function hideProgressBar() {
  var $modal = $(".js-loading-bar"),
    $bar = $modal.find(".progress-bar");
  $bar.removeClass("animate");
  $modal.modal("hide");
}
