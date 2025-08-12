(function () {
    const styleId = "__theme_toggle_dark_style__";
    const existing = document.getElementById(styleId);

    if (existing) {
        existing.remove(); // Remove dark mode → back to light
        return;
    }

    const style = document.createElement("style");
    style.id = styleId;
    style.textContent = `
    html, body, * {
      background-color: #121212 !important;
      color: #e0e0e0 !important;
      border-color: #555 !important;
    }
    img, video, iframe {
      filter: brightness(0.8) contrast(1.2) !important;
    }
    a {
      color: #80cbc4 !important;
    }
  `;
    document.documentElement.appendChild(style);
})();
