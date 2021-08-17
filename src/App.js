
import './App.css';
import About_us from './Components/About_Us/About_us';
import ContactUs from './Components/Contact_Us/ContactUs';
import LabNews from './Components/Lab_News/LabNews';
import BookChapters from './Components/Publications/Book_Chapters/BookChapters';
import Books from './Components/Publications/Books/Books';
import Journal from './Components/Publications/Journals/Journals';
import Others from './Components/Publications/Others/Others';
import Funding from './Components/Research/Funding/Funding';
import Overview from './Components/Research/Overview/Overview';
import Resources from './Components/Research/Resources/Resources';
import Gallery from './Components/Team/Gallery/Gallery';
import LabAlumini from './Components/Team/Lab_Alumini/LabAlumini';
import PrincipalInvestigator from './Components/Team/Principal_Investigator/PrincipalInvestigator';
import WhoWeAre from './Components/Team/Who_are_we/WhoWeAre';



function App() {
  return (
    <div className="App">
     
      < About_us />
      <ContactUs />
      <LabNews />
      <BookChapters />
      <Books />
      <Journal />
      <Others />
      <Funding />
      <Overview />
      <Resources />
      <Gallery />
      <LabAlumini />
      <PrincipalInvestigator />
      <WhoWeAre />
    </div>
  );
}

export default App;
