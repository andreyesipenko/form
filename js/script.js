$(document).ready(function () {

  function authorization(block1, block2) {
    $('.tab-form1').css('display', block1);
    $('.tab-form3').css('display', block2);
  }

  $('.tab').click(function() {
    $('.tab').removeClass('active');
    $(this).addClass('active');
    $('.tabs .tab-form').removeClass('active');
    $('.tabs .tab-form').eq($(this).index()).addClass('active');
    authorization('block', 'none');
  });
  
  $('.form').on('click', '#forgot-password-btn', function (e) {
    e.preventDefault();
    authorization('none', 'block');
  });

  $('input[name=reg_phone]').mask("+38 (999) 999-99-99");

  $('.tab-form1').validate({
    rules: {
      email: {
        required:true,
        email: true
      },
      password: {
        required:true,
      }
    },
    messages: {
      email: {
        required: "Поле 'Email' является обязательным!",
        email: "Введите валидный email адрес"
      },
      password: {
        required:"Поле 'Пароль' является обязательным!",
      }
    },
    submitHandler: function() {
      alert('valid');
      document.querySelector('.tab-form1').reset();
    }
  });

  $('.tab-form2').validate({
    rules: {
      reg_email: {
        required: true,
        email: true
      },
      reg_name: {
        required: true,
        minlength: 2
      },
      reg_phone: {
        required:true
      },
      reg_password: {
        required: true,
        minlength: 8
      }
    },
    messages: {
      reg_email: {
        required: "Поле 'Email' является обязательным!",
        email: "Введите валидный email адрес"
      },
      reg_name: {
        required:"Поле 'Имя' является обязательным!",
        minlength: jQuery.format("Имя должно состоять из не менее {0}-х символов")
      },
      reg_phone: {
        required:"Поле 'Номер телефона' является обязательным!"
      },
      reg_password: {
        required:"",
        minlength: jQuery.format("Минимальное число символов - {0}")
      }
    },
    submitHandler: function() {
      alert('Registration success');
      document.querySelector('.tab-form2').reset();
    }
  });

  $('.tab-form3').validate({
    rules: {
      email: {
        required:true,
        email: true
      }
    },
    messages: {
      email: {
        required: "Поле 'Email' является обязательным!",
        email: "Введите валидный email адрес"
      }
    },
    submitHandler: function() {
      alert('check your mail');
      location.reload();
    }
  });

  $("#reg-repeat-password").on("keyup", function() { 
	
		var value_input1 = $("#reg-password").val(); 
		var value_input2 = $(this).val();
		
		if(value_input1 != value_input2) {
			$("#error-password").html("Пароли не совпадают!");
		} else { 
			$("#error-password").html("");
		}
	});
});