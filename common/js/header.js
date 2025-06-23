document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("header").innerHTML = `
    <header>
      <!-- Mobile Bamburger menu -->
      <div class="hamburger-menu" id="hamburgerMenu">☰</div>

      <!-- PC Navi (images) -->
      <nav>
        <ul class="nav-buttons">
          <li><a href="../index.html"><img src="../common/img/nav-toppage.png" alt="Top Page"></a></li>
          <li><a href="aboutme.html"><img src="../common/img/nav-about.png" alt="About"></a></li>
          <li><a href="concept.html"><img src="../common/img/nav-concept.png" alt="Concept"></a></li>
          <li><a href="projects.html"><img src="../common/img/nav-projects.png" alt="Projects"></a></li>
          <li><a href="../technical-docs/index.html"><img src="../common/img/nav-techdocs.png" alt="Docs"></a></li>
        </ul>
      </nav>

      <!-- Mobile Navi (images) -->
      <div class="mobile-nav" id="mobileNav">
        <a href="../index.html"><img src="../common/img/nav-toppage.png" alt="Top"></a>
        <a href="aboutme.html"><img src="../common/img/nav-about.png" alt="About"></a>
        <a href="concept.html"><img src="../common/img/nav-concept.png" alt="Concept"></a>
        <a href="projects.html"><img src="../common/img/nav-projects.png" alt="Projects"></a>
        <a href="../technical-docs/index.html"><img src="../common/img/nav-techdocs.png" alt="Docs"></a>
      </div>
    </header>
  `;

  const hamburger = document.getElementById("hamburgerMenu");
  const mobileNav = document.getElementById("mobileNav");

  if (hamburger && mobileNav) {
    hamburger.addEventListener("click", () => {
      mobileNav.classList.toggle("show");
    });
  }
});
