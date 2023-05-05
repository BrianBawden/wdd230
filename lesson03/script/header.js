document.querySelector("header").innerHTML =
  `
   <h1><img src="images/logo.png" alt="mountain top logo">Timpanogas Chamber of Commerce</h1>
  <div class="links">
      <h2><a href="index.html"> Home </a></h2>
      <h2><a href="target-audience.html"> Target Audience </a></h2>
      <h2><a href="design.html"> Design </a></h2>
  </div>
  `;


  document.querySelector("footer").innerHTML =
  `
  <footer class="content">
      <p id="copyright">
        &copy; <span id="copyYear"></span> .:|:.Brian Bawden.:|:. Canton, GA
      </p>
      <p id="update">Last updated: <span id="modDate"></span></p>
    </footer>
  `