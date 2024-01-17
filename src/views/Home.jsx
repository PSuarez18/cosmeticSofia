import Footer from "../components/Footer/Footer";
import SectionAppointment from "../components/SectionAppointment/SectionAppointment";
import SectionExperience from "../components/SectionLoopExperience/SectionExperience";
import SectionSkills from "../components/SectionSkills/SectionSkills";
import SectionZillinails from "../components/SectionZillinails/SectionInfoZilinail";


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
                <SectionSkills/>
                <SectionZillinails/>
                <SectionAppointment/>

            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default Home;
