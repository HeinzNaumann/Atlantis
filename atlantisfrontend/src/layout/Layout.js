//import Footer from "./Footer";
import Header from "./Header";
import Footer from "./Footer"

export function Layout({children} ) {
  return (
    <>
      <Header />
      <section className="reg-wrapper bg-grey py-5">
        <div >{children}</div>      
      </section>
      <Footer />
    </>
  );
}

export default Layout;
