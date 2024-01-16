import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import SectionPrincipal from "../components/SectionPrincipal/SectionPrincipal";


function Home() {
    return (
        <div className="home-page">
            <header>
                <NavBar/>

            </header>
            <main>
            <SectionPrincipal/>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default Home;
