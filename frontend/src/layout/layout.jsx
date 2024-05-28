
import Header from "../components/header/header";
import Routers from "../routes/Router.jsx";
import Footer from "../components/footer/footer.jsx";
const Layout=()=>{
    return <>
    <Header/>
    <main>
        <Routers/>
    </main>
    <Footer />

   
    </>
}
export default Layout;