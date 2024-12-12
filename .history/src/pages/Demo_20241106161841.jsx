import React from 'react';

const Demo = () => {
  return (
    <div className='demo1'>
      {/* <nav> */}
        <div className="container">
          <div className="class1">
            <div className="class2">
              <ul>
                <li><a href="#">New</a></li>
                <li><a href="#">All Jewelry</a></li>
                <li><a href="#">Rings</a></li>
                <li><a href="#">Necklaces</a></li>
                <li><a href="#">Earrings</a></li>
                <li><a href="#">Bracelets</a></li>
                <li><a href="#">Wedding</a></li>
                <li><a href="#">Home & Gifts</a></li>
                <li><a href="#">Get Zapped</a></li>
                <i className="fa-solid fa-magnifying-glass"></i>
                <i className="fa-solid fa-user"></i>
                <i className="fa-solid fa-cart-shopping"></i>
              </ul>
            </div>
          </div>
        </div>
      {/* </nav> */}

      <div className="container2">
        <center><img src="photo_2024-05-31_11-51-49.jpg" alt="Jewelry" /></center>
        <p style={{ textAlign: 'center' }}>Ювелирные изделия</p>
      </div>

      <div className="idish">
        Chilonzor district of Tashkent city
        <div className="adress">
          <div className="tel-number"></div>
          <a href="tel:+998946804445"><b>+998 94 680-44-45</b></a>
        </div>
      </div>

      <div className="img">
        <img src="http://s.alicdn.com/@sc04/kf/H22bdf7b127414f56804ddea06e6633c2I.jpg_300x300.jpg" width="223px" height="340px" alt="Jewelry 1" />
        <img src="https://jewell.uz/thumb/2/22F2KQ9yO87fxeUJ2u1H_Q/940r340/d/img_3837.jpg" alt="Jewelry 2" />
        <img src="https://jewell.uz/thumb/2/1MByu56-tP4yDXGzd80Bsw/940r340/d/img_6455.jpg" alt="Jewelry 3" />
        <img src="https://jewell.uz/thumb/2/KtahpOI2zuJAvVWQn8WVow/940r340/d/img_6258.jpg" alt="Jewelry 4" />
        <img src="https://jewell.uz/thumb/2/C570EJ7VB3d2VtOlF4kTJQ/940r340/d/img_5700_2.jpg" alt="Jewelry 5" />
      </div>

      <div className="img">
        <img src="https://media.tiffany.com/is/image/tiffanydm/2024_MDAY_MWTS_988x988_Bracelets?$tile$&&fmt=webp" width="223px" height="340px" alt="Tiffany Bracelet 1" />
        <img src="https://media.tiffany.com/is/image/tiffanydm/2024_WATCHES_BG_QL-3?$tile$&&fmt=webp" width="223px" height="340px" alt="Tiffany Watch" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtYSaa_6g6luM__QpIs3kMTPWU6bYBH24FCQ&s" width="223px" height="340px" alt="Bracelet" />
        <img src="https://media.tiffany.com/is/image/tiffanydm/QuickLink_464x464_ChainBracelets?$tile$&&fmt=webp" width="223px" height="340px" alt="Chain Bracelet" />
        <img src="https://media.tiffany.com/is/image/Tiffany/EcomBrowseM/elsa-perettismall-bone-cuff-18384469_1012575_ED_M.jpg?defaultImage=NoImageAvailableInternal&fmt=webp" width="223px" height="340px" alt="Elsa Peretti Cuff" />
      </div>

      <div className="img">
        <img src="https://media.tiffany.com/is/image/tiffanydm/2024-Icons-BG-2x2-Onfig-T1?$tile$&wid=1488&hei=1488&defaultImage=NoImageAvailableInternal&fmt=webp" width="223px" height="340px" alt="Tiffany Icon 1" />
        <img src="https://www.pandorashop.si/files/watermark/files/images/proizvodi/slike_proizvoda/thumbs_w/169591C00_3_w_800_800px.jpg" width="223px" height="340px" alt="Pandora Jewelry" />
        <img src="https://lavivion.ru/upload/image/BDR2882-Koltso-iz-belogo-zolota-s-brilliantom_3.webp" width="223px" height="340px" alt="Ring" />
        <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEBIVFRUVFRYVFRUVEBAVFRUVFRUXFhUVFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGC0eHR8tLS8tLS0rLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKy0tLS0rK//AABEIALcBEwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAADAAECBAUGBwj/xAA8EAABAwIEAwYEBAQFBQAAAAABAAIRAyEEBRIxQVFhBiJxgZGhEzKxwUJS4fAHFCOCM2KS0fEVU6Kywv/EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBf/EACcRAAMBAAICAQQBBQEAAAAAAAABAhEDIRIxQRMyUWEiQlJxgZEE/9oADAMBAAIRAxEAPwDyauLPPj9FkuWriT3Xef1CzHiw8EkNkWJQnp7pyExEmD6okJmDZFIskMG1iVSwVimyyBWuegCBgqYWhkR/rN8VUY1XMqbFRp6hTfplR7R7BlB7q1AsbJnd0LZauJHYyQVmhVixVcKYTEaTHKRVKlUhWmuQAoSKeUxQBEqJUiolAESgvCMVCEAC0qL6LTuEYhQR6HpSrZa07Ku/LSFqyoko8jWeWkZH8i7kj0MG7iYV4lSY1LyNfr1hLDUGg3uukwT7QLLIw1Ba+GYqnTl5bdezUwe68c7eYwvx+LP4aIawX/EdJ/8Aley4MXXimbPFXFViBariXGLXDIbf0b6haW8kw41tFKnR/rUmc6hJ6BjXg+4Z6r2Ts+TSoUwd4BPn+q8v7PUG1MQ4gTpJY09TpaTHOGj1XrXwSABGwA9FHEtf+DoaT9lv/qY5JKl8NJdGsn6XH+D5SxvyHx/3WfV2HgtDGnujqfpKoP29FojhZCluESLqOHHeRQOKYD0RJ8EcNk3UKDIBKt4alqMenmk2NBRShpPRZ+lb7WtuSJa0QOp4ArG0KEy2gbWfvw/591cwNPvNPUfVBoyTpMwCSBwBMSR1MD0C08LSuPEKLouJPQ8oNgt2msDJvlC3aRXMjpYYKYUFIKiSaIx8IQUkgLbXp1Wa5Fa9AEimKkmhICEJQpJQmAMhRIRCExCABEKOlGhNCMGmC0otIJwFOmEsHpcoFaVByy2FXcI66tGdGrWrinRq1D+Bjj6BeKU6paHuEF7RoYOHxqsuA8BqJPIAL1Lt1j/g4PQPnqkV6j1QTxF/AG2tRHXbnUEf8jJtsXsVVxD5ovqvw0bBoLlnp1PrU1EqQLHY0XYqerS+TQFZ5OW0q6gq57xz47m3xwORzAFTN4aXto2XK0oBA8HbgDQgxg7rVg5aHlg4txkhZ8ITGk0tyKLXZ7xB4PPC2xSfHzF0zZ58+bgfwVrrc9ZAKmGpMDYMgkRxgYPn0JHXUL96s8UqSEhQeb1hqlgdbCttgmdpM7H20Er88iToBfpdJKFtrqhm10xvbmO89zmyy9A3m1xzk4/xq0tqV3e6cHxhYvzzwn3U4e4g/XFiKY5vE6g8w+QtmS2A=="></img>
      </div>

        <div className="footer-text">
          <div className="footer-text1">
            <h3><b>We Are Social</b></h3>
            <p><i className="fa-brands fa-instagram"></i></p>
            <p><i className="fa-brands fa-facebook"></i></p>
            <p><i className="fa-brands fa-pinterest"></i></p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Demo;
