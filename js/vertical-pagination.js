function pagination() {
  var offset = $(document).scrollTop();
  var windowHeight = $(window).height();
  var $body = $("body");
  var padding = 0.75;
  var pages = Object.keys($(".page"))
    .filter((section) => Number(section) + 1)
    .map((section) => Number(section) + 1);

  pages.map((page) => {
    if (offset > windowHeight * (page - 2 + padding)) {
      $body.removeClass().addClass("page-" + page);
    }
  });
}

pagination();

$(document).on("scroll", pagination);

$(document).on("click", 'a[href^="#"]', function (e) {
  e.preventDefault();
  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top,
    },
    500
  );
});
