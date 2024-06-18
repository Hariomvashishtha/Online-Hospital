
import Header from "../components/header/header";
import Routers from "../routes/Router.jsx";
import Footer from "../components/footer/footer.jsx";
import { useEffect, useState } from 'react';
import AlertMessage from "../pages/Alert.jsx";
const Layout=()=>{
    const [alertMessage, setAlertMessage] = useState('');

  useEffect(() => {
    // Set the alert message when the component mounts
    setAlertMessage('Mobile View is under progress so open in desktop  !');
  }, []);
    return <>
    <AlertMessage message={alertMessage} />
    <Header/>
    <main>
        <Routers/>
    </main>
    <Footer />

   
    </>
}
export default Layout;