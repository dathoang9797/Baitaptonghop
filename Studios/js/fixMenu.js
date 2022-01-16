const fixMenuHeader = () => {
<<<<<<< HEAD
    $(window).on("scroll", function () {
      const scroll = $(window).scrollTop();
      console.log(scroll)
      if (scroll >= 80) {
        $("#header__menu").addClass("header__menu__fixed--top ");
      } else {
        $("#header__menu").removeClass("header__menu__fixed--top ");
      }
    });
  };
  export default fixMenuHeader;
=======
  $(window).on('scroll', function () {
    const scroll = $(window).scrollTop();
    if (scroll >= 80) {
      $('#header__menu').addClass('header__menu__fixed--top ');
    } else {
      $('#header__menu').removeClass('header__menu__fixed--top ');
    }
  });
};
export default fixMenuHeader;
>>>>>>> 15d1837 (Delete console scroll)
