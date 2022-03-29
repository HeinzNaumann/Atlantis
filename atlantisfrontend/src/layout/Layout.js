//import Footer from "./Footer";
import Header from "./Header";
import Footer from "./Footer"

export function Layout({children} ) {
  return (
    <>
      <Header />
      <section className="reg-wrapper bg-grey">
        <div >{children}</div>      
      </section>
      <Footer />
    </>
  );
}

export default Layout;
