import { HeaderMainPage } from "./HeaderMainPage";
import { Footer } from "./Footer";
import { AdsListMainPage } from "./AdsListMainPage";
//import Ad from "./Ad";

import "../css/AdsMainPage.css";
import "../css/AdsListMainPage.css";
import "../css/Footer.css";
import "../css/Ad.css"


export function AdsMainPage() {
  return (
    <>
      <HeaderMainPage></HeaderMainPage>
      <p>Aquí va el listado de anuncios</p>
      <AdsListMainPage></AdsListMainPage>
      
      <Footer></Footer>
    </>
  );
}

export default AdsMainPage;
