import Footer from "../components/Footer/Footer";
import SectionExperience from "../components/SectionLoopExperience/SectionExperience";
import SectionSkills from "../components/SectionSkills/SectionSkills";


function Home() {
    return (
        <div className="home-page">
            <header>


            </header>
            <main>
                <SectionExperience/>
                <SectionSkills/>

            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default Home;
