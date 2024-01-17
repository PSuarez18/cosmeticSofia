import Footer from "../components/Footer/Footer";
import SectionExperience from "../components/SectionLoopExperience/SectionExperience";
import SectionPrincipal from "../components/SectionPrincipal/SectionPrincipal";
import NavBar from "../components/NavBar/NavBar";
import BannerComponent from "../components/BannerComponent/BannerComponent";

function Home() {
    return (
        <div className="home-page">
            <header>
                <NavBar/>

            </header>
            <main>
                {/* <BannerComponent/> */}
                <SectionPrincipal/>
                <SectionExperience/>
                
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default Home;
