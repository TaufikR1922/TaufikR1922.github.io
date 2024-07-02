$(document).ready(function () {
  var w = window.innerWidth;

  if (w > 767) {
    $("#menu-jk").scrollToFixed();
  } else {
    $("#menu-jk").scrollToFixed();
  }
});

$(document).ready(function () {
  $(".filter-button").click(function () {
    var value = $(this).attr("data-filter");

    if (value == "all") {
      //$('.filter').removeClass('hidden');
      $(".filter").show("1000");
    } else {
      //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
      //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
      $(".filter")
        .not("." + value)
        .hide("3000");
      $(".filter")
        .filter("." + value)
        .show("3000");
    }
  });

  if ($(".filter-button").removeClass("active")) {
    $(this).removeClass("active");
  }
  $(this).addClass("active");
});

// bagian pengiriman pesan contact

function kirimPesanWhatsApp(nama, email, pesan) {
  // Ganti dengan URL endpoint atau fungsi pengiriman pesan WhatsApp Anda
  var endpoint = "https://api.whatsapp.com/send?phone=6283193030475&text=";
  var pesanWhatsApp =
    "Halo, saya " + nama + " (" + email + "). Pesan: " + pesan;
  var encodedMessage = encodeURIComponent(pesanWhatsApp);
  var fullURL = endpoint + encodedMessage;
  window.open(fullURL); // Membuka jendela baru ke aplikasi WhatsApp
}

// Fungsi untuk menangani pengiriman formulir
function submitForm(event) {
  event.preventDefault(); // Mencegah formulir dikirim secara default
  let nama = document.getElementById("nama").value;
  let email = document.getElementById("email").value;
  let pesan = document.getElementById("pesan").value;

  // Kirim pesan menggunakan fungsi kirimPesanWhatsApp
  kirimPesanWhatsApp(nama, email, pesan);
}

// Event listener untuk menangani pengiriman formulir saat tombol diklik
document.getElementById("contactForm").addEventListener("submit", submitForm);
