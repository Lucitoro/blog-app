document.addEventListener("DOMContentLoaded", function() {
  const nav = `
    <style>
      #app-nav {
        background: #000;
        border-bottom: 2px solid #d4af37;
        padding: 10px 0;
        display: flex;
        justify-content: center;
        gap: 20px;
        font-family: Arial, sans-serif;
      }

      #app-nav a {
        color: #d4af37;
        text-decoration: none;
        font-size: 20px;
        padding: 8px 14px;
        border: 1px solid #d4af37;
        border-radius: 6px;
        transition: 0.3s;
      }

      #app-nav a:hover {
        background: #d4af37;
        color: #000;
      }
    </style>

    <nav id="app-nav">
      <a href="https://cartiduhovnicesti.blogspot.com/2025/03/calendarul-2026.html">Calendar</a>
      <a href="https://cartiduhovnicesti.blogspot.com/2025/03/resurse-duhovnicesti-si-pravila-de_27.html">Rugăciuni</a>
      <a href="https://cartiduhovnicesti.blogspot.com/2025/04/setari.html">Setări</a>
    </nav>
  `;

  document.body.insertAdjacentHTML("afterbegin", nav);
});
