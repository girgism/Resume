const mobileMenuButton = document.getElementById("mobile-menu-button");
      const mobileMenu = document.getElementById("mobile-menu");

      mobileMenuButton.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
      });

      // Close mobile menu when clicking on a link
      const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");
      mobileNavLinks.forEach((link) => {
        link.addEventListener("click", () => {
          mobileMenu.classList.add("hidden");
        });
      });

      // Smooth scrolling for navigation links
      const navLinks = document.querySelectorAll(".nav-link, .mobile-nav-link");
      navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
          e.preventDefault();
          const targetId = link.getAttribute("href");
          const targetSection = document.querySelector(targetId);
          if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
              top: offsetTop,
              behavior: "smooth",
            });
          }
        });
      });

      // Active navigation highlighting
      window.addEventListener("scroll", () => {
        const sections = document.querySelectorAll("section, header");
        const navLinks = document.querySelectorAll(".nav-link");

        let current = "";
        sections.forEach((section) => {
          const sectionTop = section.offsetTop - 100;
          const sectionHeight = section.clientHeight;
          if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
          ) {
            current = section.getAttribute("id");
          }
        });

        navLinks.forEach((link) => {
          link.classList.remove("text-cyan-300", "font-bold");
          if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("text-cyan-300", "font-bold");
          }
        });
      });