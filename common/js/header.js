document.addEventListener("DOMContentLoaded", () => {
  const lang = localStorage.getItem("lang") || "en";
  const base = lang === "ja" ? "/ja" : "/en";

  const navHTML = `
    <header>
      <div class="hamburger-menu" id="hamburgerMenu">☰</div>

      <nav>
        <ul class="nav-buttons">
          <li><a href="/index.html"><img src="/common/img/nav-toppage.png" alt="Top Page"></a></li>
          <li><a href="${base}/aboutme.html"><img src="/common/img/nav-about.png" alt="About"></a></li>
          <li><a href="${base}/concept.html"><img src="/common/img/nav-concept.png" alt="Concept"></a></li>
          <li><a href="${base}/works.html"><img src="/common/img/nav-projects.png" alt="Projects"></a></li>
          <li><a href="/technical-docs/index.html"><img src="/common/img/nav-techdocs.png" alt="Docs"></a></li>
        </ul>
      </nav>

      <div class="mobile-nav" id="mobileNav">
        <a href="/index.html"><img src="/common/img/nav-toppage.png" alt="Top"></a>
        <a href="${base}/aboutme.html"><img src="/common/img/nav-about.png" alt="About"></a>
        <a href="${base}/concept.html"><img src="/common/img/nav-concept.png" alt="Concept"></a>
        <a href="${base}/works.html"><img src="/common/img/nav-projects.png" alt="Projects"></a>
        <a href="/technical-docs/index.html"><img src="/common/img/nav-techdocs.png" alt="Docs"></a>
      </div>
    </header>
  `;

  document.getElementById("header").innerHTML = navHTML;

  const hamburger = document.getElementById("hamburgerMenu");
  const mobileNav = document.getElementById("mobileNav");

  if (hamburger && mobileNav) {
    hamburger.addEventListener("click", () => {
      mobileNav.classList.toggle("show");
    });
  }
});
