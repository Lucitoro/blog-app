document.addEventListener("DOMContentLoaded", function () {
  const nav = `
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500&display=swap');

      /* Container sticky + glass + shadow 3D */
      #app-nav-container {
        position: sticky;
        top: 0;
        z-index: 9999;
        backdrop-filter: blur(12px);
        background: rgba(0, 0, 0, 0.55);
        border-bottom: 2px solid #d4af37;
        box-shadow: 0 4px 20px rgba(212, 175, 55, 0.25);
        padding: 12px 0;
        display: flex;
        justify-content: center;
        width: 100%;
        animation: fadeDown 0.8s ease-out;
      }

      @keyframes fadeDown {
        from { opacity: 0; transform: translateY(-20px); }
        to { opacity: 1; transform: translateY(0); }
      }

      /* Meniu desktop */
      #app-nav {
        display: flex;
        gap: 28px;
        font-family: 'Playfair Display', serif;
      }

      /* Gradient auriu metalic */
      .gold-gradient {
        background: linear-gradient(135deg, #d4af37, #f7e27c, #d4af37);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      /* Linkuri */
      #app-nav a {
        color: #d4af37;
        text-decoration: none;
        font-size: 22px;
        padding: 10px 16px;
        border: 1px solid #d4af37;
        border-radius: 10px;
        transition: 0.35s;
        display: flex;
        align-items: center;
        gap: 10px;
        position: relative;
        overflow: hidden;
      }

      /* Glow pulsant */
      @keyframes glowPulse {
        0% { box-shadow: 0 0 8px #d4af37; }
        50% { box-shadow: 0 0 18px #f7e27c; }
        100% { box-shadow: 0 0 8px #d4af37; }
      }

      #app-nav a:hover {
        background: #d4af37;
        color: #000;
        transform: translateY(-3px);
        animation: glowPulse 1.5s infinite;
      }

      /* Iconițe SVG aurii */
      .icon {
        width: 22px;
        height: 22px;
        fill: #d4af37;
        transition: 0.3s;
      }

      #app-nav a:hover .icon {
        fill: #000;
      }

      /* Hamburger */
      #hamburger {
        display: none;
        font-size: 34px;
        color: #d4af37;
        cursor: pointer;
        margin-right: 20px;
        transition: 0.3s;
      }

      #hamburger:hover {
        transform: scale(1.15);
      }

      /* Meniu mobil */
      @media (max-width: 768px) {
        #hamburger {
          display: block;
        }

        #app-nav {
          display: none;
          flex-direction: column;
          background: rgba(0, 0, 0, 0.85);
          padding: 20px;
          border-bottom: 2px solid #d4af37;
          animation: slideDown 0.4s ease-out;
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        #app-nav.show {
          display: flex;
        }
      }
    </style>

    <div id="app-nav-container">
      <div id="hamburger">☰</div>

      <nav id="app-nav">

        <a href="https://cartiduhovnicesti.blogspot.com/2025/03/calendarul-2026.html">
          <svg class="icon" viewBox="0 0 24 24">
            <path d="M7 2v2H5v2h14V4h-2V2h-2v2H9V2H7zm12 6H5v12h14V8z"/>
          </svg>
          <span class="gold-gradient">Calendar</span>
        </a>

        <a href="https://cartiduhovnicesti.blogspot.com/2025/03/resurse-duhovnicesti-si-pravila-de_27.html">
          <svg class="icon" viewBox="0 0 24 24">
            <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7z"/>
          </svg>
          <span class="gold-gradient">Rugăciuni</span>
        </a>

        <a href="https://cartiduhovnicesti.blogspot.com/2025/04/setari.html">
          <svg class="icon" viewBox="0 0 24 24">
            <path d="M12 8a4 4 0 100 8 4 4 0 000-8zm8.94 2.34l-1.42-.83.02-1.65-1.65-.02-.83-1.42-1.42.83-1.17-.68-.68-1.17-.83 1.42-1.65-.02-.02 1.65-1.42.83.83 1.42-.68 1.17 1.17.68-.83 1.42 1.42.83.02 1.65 1.65.02.83 1.42 1.42-.83 1.17.68.68 1.17.83-1.42 1.65.02.02-1.65 1.42-.83-.83-1.42.68-1.17-1.17-.68.83-1.42z"/>
          </svg>
          <span class="gold-gradient">Setări</span>
        </a>

      </nav>
    </div>

    <script>
      document.getElementById("hamburger").addEventListener("click", function () {
        document.getElementById("app-nav").classList.toggle("show");
      });
    </script>
  `;

  document.body.insertAdjacentHTML("afterbegin", nav);
});
