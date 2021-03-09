// Validasi email
function validasiEmail() {
    var rs = document.forms["formInput"]["email"].value;
    var atps=rs.indexOf("@");
    var dots=rs.lastIndexOf(".");
    if (atps<1 || dots<atps+2 || dots+2>=rs.length) {
      Swal.fire({
              title   : "Invalid",
              text    : "Masukkan dengan format email valid",
              icon    : "error",
              button  : "Ok",
            });  
      return false;
    } else {
      Swal.fire({
              title   : "Valid",
              text    : "Format email valid",
              icon    : "success",
              button  : "Ok",
            });  
    }
  }
  
  // validasi form input
  $(".tombol-simpan").click(function(){
    var nama = $("#nama"). val();
    var email = $("#email"). val();
    var hp = $("#hp"). val();
    var alamat = $("#alamat"). val();
    var pesan = $("#pesan"). val();
  
    if(nama == '' || email =='' || hp =='' || alamat == '' || pesan == '') {
  
      Swal.fire({
        title   : "Warning",
        text    : "Silahkan lengkapi form yang masih kosong !",
        icon    : "warning",
        button  : "Ok",
      });
    }else {
      var data = $('.form-user').serialize();
  $.ajax({
    type: 'POST',
    url: "kontak-act.php",
    data: data,
    success: function() {
    document.getElementById("nama").value = "";
    document.getElementById("email").value = "";
    document.getElementById("hp").value = "";
    document.getElementById("alamat").value = "";
    document.getElementById("pesan").value = "";
    Swal.fire({
            title   : "Success",
            text    : "Terima kasih, pesan anda telah terkirim",
            icon    : "success",
            button  : "Ok",
          });     
    }
  });
            
    }
  });
  
  
  // JS Materialize
  const sidenav = document.querySelectorAll('.sidenav');
  M.Sidenav.init(sidenav);
  
  const slider = document.querySelectorAll('.slider');
  M.Slider.init(slider, {
    indicators: false,
    height: 650,
    transition: 600,
    interval: 3000
  });
  
  const parallax = document.querySelectorAll('.parallax');
  M.Parallax.init(parallax);
  
  
  const materialbox = document.querySelectorAll('.materialboxed');
  M.Materialbox.init(materialbox);
  
  const scrollspy = document.querySelectorAll('.scrollspy');
  M.ScrollSpy.init(scrollspy, {
    scrollOffset: 50
  });
  
  // Get toast DOM Element, get instance, then call dismiss function
  var toastElement = document.querySelector('.toast');
  var toastInstance = M.Toast.getInstance(toastElement);
  toastInstance.dismiss();
  
  