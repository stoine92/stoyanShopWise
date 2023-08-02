import Header from './Header/Header';
import Footer from './Footer/Footer';

function Layout(props) {
  return (
    <>
      <div>
            <Header  />
            {props.children}
      </div>
      <Footer />
    </>
  );
}

export default Layout;