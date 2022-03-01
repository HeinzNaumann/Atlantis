import { HeaderMainPage } from "./HeaderMainPage";
import { Layout } from "../layout/Layout";
import { AdsListMainPage } from "./AdsListMainPage";
//import Ad from "./Ad";

import "../css/AdsMainPage.css";
import "../css/AdsListMainPage.css";
import "../css/Ad.css";

export function AdsMainPage() {
  return (
    <Layout>
      <HeaderMainPage></HeaderMainPage>
      <p>Aquí va el listado de anuncios</p>
      <AdsListMainPage></AdsListMainPage>
    </Layout>
  );
}

export default AdsMainPage;
