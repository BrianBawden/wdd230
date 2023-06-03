document.querySelector("header").innerHTML =
`
  <section class="banner">
  <h3>Wednesday Meeting this week</h3>
  <p>
    Come join us for the chamber meet and greet Wednesday at 7:00 p.m.
  </p>
</section>
<div class="logo">
  <picture
    ><img
      class="icon"
      src="images/logo.webp"
      alt="icon image of mountain top"
    />
  </picture>
  <h1>Timp Chamber of Commerce</h1>
</div>
<ul class="nav response">
  <li><a href="#" onclick="toggleMenu()">&#9776;</a></li>
  <li><a href="#">Home</a></li>
  <li><a href="#">Discover</a></li>
  <li><a href="#">Directory</a></li>
  <li><a href="#">Join</a></li>
  <li><a href="#">Contact</a></li>
</ul>

<div class="date">
  <p class="curr-date"></p>
</div>
  `;


  document.querySelector("footer").innerHTML =
`
  <div class="logo footer-logo">
  <img
    class="icon"
    src="images/logo.webp"
    alt="icon image of mountain top"
  />
  <h3>Timp Chamber of Commerce</h3>
</div>
<div class="address">
  <p>
    <a
      target="_blank"
      href="https://www.google.com/maps/place/Pleasant+Grove+City+Hall/@40.3627991,-111.7391808,15z/data=!4m6!3m5!1s0x874d851288be0165:0xb5b04f62b15e9990!8m2!3d40.3627991!4d-111.7391808!16s%2Fm%2F0nd4zb7"
      >70 S 100 E</a
    >
  </p>
  <p>Pleasant Grove, UT 84062</p>
</div>
<div class="footer-contact">
  <p>info@timp-chamber.org</p>
  <p>(801)555-1234</p>
  <div class="social">
    <a href="#">Facebook</a>
    <a href="#">Linked In</a>
  </div>
</div>
<div class="footer-copyright">
  <p id="copyright">
    &copy; <span id="copyYear"></span> .:|:.Brian Bawden.:|:. Canton, GA
  </p>
  <p id="update">Last updated: <span id="modDate"></span></p>
</div>
  `