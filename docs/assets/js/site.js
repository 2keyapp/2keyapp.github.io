(function () {
  var NAV_MQ = window.matchMedia("(min-width: 64rem)");
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".site-nav");
  var overlay = document.querySelector(".nav-overlay");
  var groupToggles = document.querySelectorAll(".nav-group-toggle");

  if (!toggle || !nav) return;

  function isDesktop() {
    return NAV_MQ.matches;
  }

  function closeAllGroups() {
    document.querySelectorAll(".nav-group.is-expanded").forEach(function (group) {
      group.classList.remove("is-expanded");
    });
    groupToggles.forEach(function (btn) {
      btn.setAttribute("aria-expanded", "false");
    });
  }

  function setNavOpen(open) {
    nav.classList.toggle("is-open", open);
    document.body.classList.toggle("nav-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    if (overlay) {
      overlay.setAttribute("aria-hidden", open ? "false" : "true");
    }
    if (!open) {
      closeAllGroups();
    }
  }

  function closeNav() {
    setNavOpen(false);
  }

  toggle.addEventListener("click", function () {
    setNavOpen(!nav.classList.contains("is-open"));
  });

  if (overlay) {
    overlay.addEventListener("click", closeNav);
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeNav();
    }
  });

  NAV_MQ.addEventListener("change", function () {
    closeNav();
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closeNav);
  });

  groupToggles.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      var group = btn.closest(".nav-group");
      if (!group) return;
      var expanded = group.classList.contains("is-expanded");

      if (!isDesktop()) {
        document.querySelectorAll(".nav-group.is-expanded").forEach(function (g) {
          if (g !== group) {
            g.classList.remove("is-expanded");
            var otherBtn = g.querySelector(".nav-group-toggle");
            if (otherBtn) otherBtn.setAttribute("aria-expanded", "false");
          }
        });
      }

      group.classList.toggle("is-expanded", !expanded);
      btn.setAttribute("aria-expanded", !expanded ? "true" : "false");
    });
  });

  document.addEventListener("click", function (e) {
    if (!isDesktop()) return;
    if (!e.target.closest(".nav-group")) {
      closeAllGroups();
    }
  });
})();
