// Mobile navigation
    const menuBtn = document.getElementById("menuBtn");
    const navLinks = document.getElementById("navLinks");

    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("open");
      menuBtn.textContent = navLinks.classList.contains("open") ? "✕" : "☰";
    });

    // Close mobile menu after clicking a link
    document.querySelectorAll(".nav-links a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuBtn.textContent = "☰";
      });
    });

    // Active navigation link while scrolling
    const sections = document.querySelectorAll("main section");
    const navItems = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {
      let current = "home";

      sections.forEach(section => {
        const top = section.offsetTop - 120;
        if (window.scrollY >= top) current = section.id;
      });

      navItems.forEach(item => {
        item.classList.toggle("active", item.getAttribute("href") === "#" + current);
      });
    });

    // Back-to-top button
    const topBtn = document.getElementById("topBtn");

    window.addEventListener("scroll", () => {
      topBtn.classList.toggle("show", window.scrollY > 500);
    });

    topBtn.addEventListener("click", () => {
      window.scrollTo({top:0, behavior:"smooth"});
    });

    // Current year
    document.getElementById("year").textContent = new Date().getFullYear();

    // Simple project message
    function showMessage(message){
      alert(message);
    }