
document.querySelector("header").innerHTML = `

<div class="logo">
  <picture
    ><img
      class="icon"
      src="images/socialMedia/logo.png"
      alt="Carlsbad Fruit Stand logo"
    />
  </picture>
</div>
<div>
<a href="https://www.facebook.com/"><img src="/images/socialMedia/facebook.png" alt="facebook logo"></a>
<a href="https://www.instagram.com/"><img src="/images/socialMedia/instagram.png" alt="instagram logo"></a>
<a href="https://twitter.com/"><img src="/images/socialMedia/twitter.png" alt="twitter logo"></a>
    
</div>
<div>
    <ul class="nav response">
    <li><a href="#" onclick="toggleMenu()">&#9776;</a></li>
    <li><a href="index.html">Home</a></li>
    <li><a href="fresh.html">Fresh</a></li>
    <li><a href="about.html">About Us</a></li>    
    </ul>
</div>

  `;

  document.querySelector("footer").innerHTML = `
  <div id="footerAddress">
    <h3>Address</h3>
    <p><a href="https://www.google.com/maps/place/1921+Palomar+Oaks+Way,+Carlsbad,+CA+92008/@33.1211061,-117.2952398,17z/data=!3m1!4b1!4m15!1m8!3m7!1s0x80dc73453f3bee59:0xa4cb5592fcf65d2f!2sCarlsbad,+CA!3b1!8m2!3d33.1580933!4d-117.3505939!16zL20vMHI0d24!3m5!1s0x80dc73400cf16241:0x302b2613ec1f502f!8m2!3d33.1211062!4d-117.2906264!16s%2Fg%2F11c1xzbzml?entry=ttu">1921 Palomar Oaks Way</a><br>Carlsbad, CA 92008</p>
  </div>
  <div id="footerHours">
    <h3>Hours</h3>
    <p>Wednesday-Friday: 8:00am-6:00pm</p>
    <p>Saturday, Sunday: 7:00am-1:00pm</p>
  </div>

  <div id="footerContact">
    <h3>Contact Us</h3>
    <p>(760)555-9393</p>
    <p>info@carlsbadfruitstand.com</p>
  </div>
  <div class="footer-copyright">
    <p id="copyright">
        &copy; <span id="copyYear"></span> .:|:.Brian Bawden.:|:. Canton, GA
    </p>
    <p id="update">Last updated: <span id="modDate"></span></p>
    <p id="weatherAPI">Weather data provided by OpenWeatherMap <span><a href="https://openweathermap.org" target="_blank">https://openweathermap.org</a></span></p>
    <p id="attributes">Other information resources: <a href="attribute.html">Attributes</a></p>
    </div>
  

  `;
