
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");

  // MENU MOBILE
  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      mainNav.classList.toggle("active");
      menuToggle.setAttribute(
        "aria-expanded",
        mainNav.classList.contains("active")
      );
    });

    mainNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });

    document.addEventListener("click", (event) => {
      const clickedInsideMenu = mainNav.contains(event.target);
      const clickedToggle = menuToggle.contains(event.target);

      if (!clickedInsideMenu && !clickedToggle) {
        mainNav.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // TAHUN OTOMATIS DI FOOTER
  const yearElement = document.getElementById("year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // NOMOR WHATSAPP RESMI DIISI SETELAH DIKONFIRMASI
  // Format: kode negara + nomor, tanpa tanda +, spasi, atau strip.
  // Contoh format: 628xxxxxxxxxx
  const WHATSAPP_NUMBER = "";

  const whatsappLinks = document.querySelectorAll(".whatsapp-link");

  whatsappLinks.forEach((link) => {
    if (WHATSAPP_NUMBER.trim() !== "") {
      const message = encodeURIComponent(
        "Halo, saya ingin konsultasi mengenai kemitraan Cuanki Cep Bewok Express."
      );

      link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    } else {
      link.href = "#";

      link.addEventListener("click", (event) => {
        event.preventDefault();
        alert("Nomor WhatsApp resmi belum diatur. Silakan hubungi pengelola website.");
      });
    }
  });
});


/* =========================================
   DROPDOWN KONSULTASI NAVBAR
========================================= */

const consultationToggle = document.getElementById("consultationToggle");
const consultationDropdown = document.getElementById("consultationDropdown");

if (consultationToggle && consultationDropdown) {

    consultationToggle.addEventListener("click", function (event) {
        event.stopPropagation();
        consultationDropdown.classList.toggle("active");
    });

    document.addEventListener("click", function (event) {
        if (!event.target.closest(".consultation-menu")) {
            consultationDropdown.classList.remove("active");
        }
    });

}
