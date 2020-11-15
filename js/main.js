        $(function () {
          $('#topBtn').on('click', function () {
            $('html,body').animate({
              scrollTop: 0
            }, 500);
            return false;
          });
        });
        $(window).on('load resize', function () {
          var pos01 = 0;
          var pos02 = $("#about").offset().top - 130;
          var pos03 = $("#skill").offset().top - 130;
          var pos04 = $("#works").offset().top - 130;
          var pos05 = $("#contact").offset().top - 130;

          //    console.log(pos03);
          $(window).on('load resize scroll', function () {
            var posScroll = $(window).scrollTop();
            if (pos01 <= posScroll && posScroll < pos02) {
              $("#list01").addClass('current').siblings('li').removeClass('current');
            } else if (pos02 <= posScroll && posScroll < pos03) {
              $("#list02").addClass('current').siblings('li').removeClass('current');
            } else if (pos03 <= posScroll && posScroll < pos04) {
              $("#list03").addClass('current').siblings('li').removeClass('current');
            } else if (pos04 <= posScroll && posScroll < pos05) {
              $("#list04").addClass('current').siblings('li').removeClass('current');
            } else if (pos05 <= posScroll) {
              $("#list05").addClass('current').siblings('li').removeClass('current');
            }
          });

          $(window).on('load resize scroll', function () {
            var posScroll = $(window).scrollTop();
            if (pos02 <= posScroll) {
              $("#bg-wrapper").addClass('darker');
            } else if (pos01 <= posScroll && posScroll < pos02) {
              $("#bg-wrapper").removeClass('darker');
            }
          });
        });
