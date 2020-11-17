  /**
   * 到達したら要素を表示させる
   */
  function showElementAnimation() {

    var element = document.getElementsByClassName('js-anime');
    if (!element) return; // 要素がなかったら処理をキャンセル

    //要素が200px（768px以下のウィンドウサイズでは40px）分過ぎたら表示させるために指定
    var showTiming = window.innerHeight > 768 ? 200 : 40; // 要素が出てくるタイミングはここで調整
    var scrollY = window.pageYOffset;
    var windowH = window.innerHeight;

    for (var i = 0; i < element.length; i++) {
      var elemClientRect = element[i].getBoundingClientRect();
      var elemY = scrollY + elemClientRect.top;
      if (scrollY + windowH - showTiming > elemY) {
        element[i].classList.add('is-show');
      } else if (scrollY + windowH < elemY) {
        // 上にスクロールして再度非表示にする場合はこちらを記述
        element[i].classList.remove('is-show');
      }
    }
  }
  showElementAnimation();
  window.addEventListener('scroll', showElementAnimation);


  $(function () {
    $('#topBtn').on('click', function () {
      $('html,body').animate({
        scrollTop: 0
      }, 500);
      return false;
    });
  });

  $(function () {
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

  $(function () {
    $('#submit').on('click', function () {

      //        名前とメールは必須
      var name = $('#name').val();
      var mail = $('#mail').val();
      var textArea = $('#textArea').val();

      if (name === "" || mail === "" || textArea === "") {
        if (name === "") {
          $('#name').val('名前入力は必須です').addClass('errorText');
        }

        if (mail === "") {
          $('#mail').val('メールアドレス入力は必須です').addClass('errorText');
        }
        if (textArea === "") {
          $('#textArea').val('お問い合わせ入力は必須です').addClass('errorText');
        }
        return false;
      }

      //        メールアドレスが正しいか確認する
      var regex = new RegExp(/^([a-z0-9A-Z])+([a-z0-9A-Z-_\.])*@([a-z0-9A-Z-_])+([a-z0-9A-Z\.-_])*$/);
      //        var regex = new RegExp(/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/);
      var result = regex.test(mail);
      if (result === false) {
        $('#mail').val('メールアドレスの形式が違います').addClass('.errorText');
      }

      //        フォームを消す
      $('#form').addClass('myform');
      //        メッセージを表示する
      $('.thxMessage').show();
    });
    //inputタグにフォーカスを当てる
    $('input').on('focus', function () {
      //        文字を通常色に戻す
      $(this).removeClass('errorText').val('');
    });



  });
