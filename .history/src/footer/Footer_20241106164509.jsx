import React from 'react'

const Footer = () => {
  return (
    <>
      <section class="footer">

        <div class="box-container">

          <div class="box">
            <h3>Jigar's Portfolio</h3>
            <p>Thank you for visiting my personal portfolio website. Connect with me over socials. <br /> <br /> Keep Rising 🚀. Connect with me over live chat!</p>
          </div>

          <div class="box">
            <h3>quick links</h3>
            <a href="/#home"><i class="fas fa-chevron-circle-right"></i> home</a>
            <a href="/#about"><i class="fas fa-chevron-circle-right"></i> about</a>
            <a href="/#skills"><i class="fas fa-chevron-circle-right"></i> skills</a>
            <a href="/#education"><i class="fas fa-chevron-circle-right"></i> education</a>
            <a href="/#work"><i class="fas fa-chevron-circle-right"></i> work</a>
            <a href="/#experience"><i class="fas fa-chevron-circle-right"></i> experience</a>
          </div>

          <div class="box">
            <h3>contact info</h3>
            <p> <i class="fas fa-phone"></i>+91 704-302-4736</p>
            <p> <i class="fas fa-envelope"></i>jigarsable21@gmail.com</p>
            <p> <i class="fas fa-map-marked-alt"></i>Pune, India-412206</p>
            <div class="share">

              <a href="https://www.linkedin.com/in/jigar-sable" class="fab fa-linkedin" target="_blank"></a>
              <a href="https://github.com/jigar-sable" class="fab fa-github" target="_blank"></a>
              <a href="mailto:jigarsable21@gmail.com" class="fas fa-envelope" target="_blank"></a>
              <a href="https://twitter.com/jigar_sable" class="fab fa-twitter" target="_blank"></a>
              <a href="https://t.me/lifecode5" class="fab fa-telegram-plane" target="_blank"></a>
            </div>
          </div>
        </div>

        <h1 class="credit">Designed with <i class="fa fa-heart pulse"></i> by <a href="https://www.linkedin.com/in/jigar-sable"> jigar sable</a></h1>

      </section>
    </>
  )
}

export default Footer