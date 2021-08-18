
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
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
import Home from './Components/Home/Home'
import NavBarComponent from './Navbar';

import { BrowserRouter, NavLink, Switch, Route } from 'react-router-dom';
import Journals from './Components/Publications/Journals/Journals';



function App() {
  return (
    <div className="App">


      <BrowserRouter>

        <NavBarComponent className="navbar" />
     

      

        <Switch>
         
        {/* <Route path="/" component={Home}  /> */}
        <Route path="/aboutus" component={About_us} exact />
        <Route path="/contactus" component={ContactUs} />
        <Route path="/labnews" component={LabNews} exact />
        <Route path="/bookchapters" component={BookChapters} exact />
        <Route path="/books" component={Books} exact />
        <Route path="/journals" component={Journals} exact />
        <Route path="/others" component={Others} exact />
        <Route path="/funding" component={Funding} exact />
        <Route path="/overview" component={Overview} exact />
        <Route path="/resources" component={Resources} exact />
        <Route path="/gallery" component={Gallery} exact />
        <Route path="/labalumini" component={LabAlumini} exact />
        <Route path="/pi" component={PrincipalInvestigator} exact />
        <Route path="/whoarewe" component={WhoWeAre} exact />

   
        </Switch>
        
      </BrowserRouter>
      {/*      
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
      <WhoWeAre /> */}


    </div>
  );
}

export default App;
