import Footer from "../components/Footer/Footer";
import SectionExperience from "../components/SectionLoopExperience/SectionExperience";
import SectionSkills from "../components/SectionSkills/SectionSkills";
import SectionZillinails from "../components/SectionZillinails/SectionInfoZilinail";


function Home() {
    return (
        <div className="home-page">
            <header>


            </header>
            <main>
                <SectionExperience/>
                <SectionSkills/>
                <SectionZillinails/>

            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default Home;
