document.querySelector("header").innerHTML =
  `
   <h1><img src="images/logo.png" alt="mountain top logo"> Chamber of Commerce</h1>
  <div class="links">
      <p><a href="index.html"> Home </a></p>
      <p><a href="target-audience.html"> Target Audience </a></p>
      <p><a href="design.html"> Design </a></p>
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