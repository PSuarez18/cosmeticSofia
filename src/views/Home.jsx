import SectionAppointment from "../components/SectionAppointment/SectionAppointment";
import SectionExperience from "../components/SectionLoopExperience/SectionExperience";
import SectionSkills from "../components/SectionSkills/SectionSkills";
import SectionZillinails from "../components/SectionZillinails/SectionInfoZilinail";
import SectionPrincipal from "../components/SectionPrincipal/SectionPrincipal";


function Home() {
    return (
        <div className="home-page">
            <header>
                

            </header>
            <main>
                <SectionPrincipal/>
                <SectionExperience/>
                <SectionSkills/>
                <SectionZillinails/>
                <SectionAppointment/>

            </main>
            <footer>
                
            </footer>
        </div>
    );
}

export default Home;
