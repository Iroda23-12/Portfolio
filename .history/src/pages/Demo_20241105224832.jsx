import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUser, faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Demo = () => {
    return (
        <div>
            <NavBar />
            <Banner />
            <Location />
            <Gallery />
        </div>
    );
};

const NavBar = () => (
    <nav>
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
                        <li>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                            <FontAwesomeIcon icon={faUser} />
                            <FontAwesomeIcon icon={faCartShopping} />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
);

const Banner = () => (
    <div className="container2">
        <center><img src="photo_2024-05-31_11-51-49.jpg" alt="Banner" /></center>
        <p style={{ textAlign: "center" }}>ювелирные изделия</p>
    </div>
);

const Location = () => (
    <div className="idish">
        Chilonzor district of Tashkent city
        <div className="adress">
            <div className="tel-number"></div>
            <a href="tel:+998946804445"> <b>+998 94 680-44-45</b></a>
        </div>
    </div>
);

const Gallery = () => (
    <div>
        <div className="img">
            <img src="http://s.alicdn.com/@sc04/kf/H22bdf7b127414f56804ddea06e6633c2I.jpg_300x300.jpg" width="223px" height="340px" alt="" />
            <img src="https://jewell.uz/thumb/2/22F2KQ9yO87fxeUJ2u1H_Q/940r340/d/img_3837.jpg" alt="" />
            <img src="https://jewell.uz/thumb/2/1MByu56-tP4yDXGzd80Bsw/940r340/d/img_6455.jpg" alt="" />
            <img src="https://jewell.uz/thumb/2/KtahpOI2zuJAvVWQn8WVow/940r340/d/img_6258.jpg" alt="" />
            <img src="https://jewell.uz/thumb/2/C570EJ7VB3d2VtOlF4kTJQ/940r340/d/img_5700_2.jpg" alt="" />
        </div>
        <div className="img">
            <img src="https://media.tiffany.com/is/image/tiffanydm/2024_MDAY_MWTS_988x988_Bracelets?$tile$&&fmt=webp" width="223px" height="340px" alt="" />
            <img src="https://media.tiffany.com/is/image/tiffanydm/2024_WATCHES_BG_QL-3?$tile$&&fmt=webp" width="223px" height="340px" alt="" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtYSaa_6g6luM__QpIs3kMTPWU6bYBH24FCQ&s" width="223px" height="340px" alt="" />
            <img src="https://media.tiffany.com/is/image/tiffanydm/QuickLink_464x464_ChainBracelets?$tile$&&fmt=webp" width="223px" height="340px" alt="" />
            <img src="https://media.tiffany.com/is/image/Tiffany/EcomBrowseM/elsa-perettismall-bone-cuff-18384469_1012575_ED_M.jpg?defaultImage=NoImageAvailableInternal&fmt=webp" width="223px" height="340px" alt="" />
        </div>
        <div className="img">
            <img src="https://media.tiffany.com/is/image/tiffanydm/2024-Icons-BG-2x2-Onfig-T1?$tile$&wid=1488&hei=1488&defaultImage=NoImageAvailableInternal&fmt=webp" width="223px" height="340px" alt="" />
            <img src="https://www.pandorashop.si/files/watermark/files/images/proizvodi/slike_proizvoda/thumbs_w/169591C00_3_w_800_800px.jpg" width="223px" height="340px" alt="" />
            <img src="https://lavivion.ru/upload/image/BDR2882-Koltso-iz-belogo-zolota-s-brilliantom_3.webp" width="223px" height="340px" alt="" />
        </div>
    </div>
);

export default Demo;
