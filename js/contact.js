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

    $("#submit").on("click", function () {
      $(".thxmes").text("Failed to send a message. Please try again.");
    });

  });
