    $(function () {
      var headNav = $("header");
      //scrollだけだと読み込み時困るのでloadも追加
      $(window).on('load scroll', function () {
        //現在の位置が500px以上かつ、クラスfixedが付与されていない時
        if ($(this).scrollTop() > 500 && headNav.hasClass('fixed') == false) {
          //headerの高さ分上に設定
          headNav.css({
            "top": '-100px'
          });
          //クラスfixedを付与
          headNav.addClass('fixed');
          //位置を0に設定し、アニメーションのスピードを指定
          headNav.animate({
            "top": 0
          }, 600);
        }
        //現在の位置が300px以下かつ、クラスfixedが付与されている時にfixedを外す
        else if ($(this).scrollTop() < 300 && headNav.hasClass('fixed') == true) {
          headNav.removeClass('fixed');
        }
      });
//    });

//    $(function () {
      // #で始まるアンカーをクリックした場合に処理
      $('a[href^="#"]').on('click', function () {

        // 移動先を取得
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        // 移動先を数値で取得
        var position = target.offset().top - 100;
        // スムーススクロール
        $('body,html').animate({
          scrollTop: position
        }, 300, 'swing');
        return false;
      });

      $(window).on('load resize', function () {
        var pos01 = 0;
        var pos02 = $("#about").offset().top - 130;
        var pos03 = $("#skill").offset().top - 130;
        var pos04 = $("#works").offset().top - 130;
        var pos05 = $("#contact").offset().top - 130;

        console.log(pos03);
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
      });
    });
