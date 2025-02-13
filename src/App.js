import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

// pages import
import Home from "./pages/main_pages/Home/Home";
import SignUp from "./pages/main_pages/SignUp/SignUp";
import TheFleet from "./pages/main_pages/TheFleet/TheFleet";
import Sponsors from "./pages/main_pages/Sponsors/Sponsors";
import Members from "./pages/main_pages/Members/Members";
import Resources from "./pages/main_pages/Resources/Resources";
import Events from "./pages/main_pages/Events/Events";

// sub pages import
import Lanturn from "./pages/subpages/Lanturn/Lanturn";
import Donphan from "./pages/subpages/Donphan/Donphan";
import Gyarados from "./pages/subpages/Gyarados/Gyarados";
import Magikarp from "./pages/subpages/Magikarp/Magikarp";
import ThisYear from "./pages/subpages/ThisYear/ThisYear";
import ThisYear1 from "./pages/subpages/ThisYear1/ThisYear1";
import Report2022 from "./pages/subpages/DesignReport/Report2022";
import Report2019 from "./pages/subpages/DesignReport/Report2019";
import Report2020 from "./pages/subpages/DesignReport/Report2020";
import Lanturn2020 from "./pages/subpages/Lanturn/Lanturn2020";
import Lanturn22 from "./pages/subpages/Lanturn22/Lanturn22";
import Wailord from "./pages/subpages/Wailord/Wailord";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/TheFleet" component={TheFleet} />
          <Route path="/Sponsors" component={Sponsors} />
          <Route path="/Members" component={Members} />
          <Route path="/Resources" component={Resources} />
          <Route path="/Events" component={Events} />
          <Route path="/sign-up" component={SignUp} />
          {/* routes to sub pages */}
          <Route path="/Lanturn" component={Lanturn} />
          <Route path="/Donphan" component={Donphan} />
          <Route path="/Gyarados" component={Gyarados} />
          <Route path="/Magikarp" component={Magikarp} />
          <Route path="/Lanturn2020" component={Lanturn2020} />
          <Route path="/Lanturn22" component={Lanturn22} />
          <Route path="/Wailord" component={Wailord} />

          <Route path="/ThisYear" component={ThisYear} />
          <Route path="/ThisYear1" component={ThisYear1} />
          <Route path="/Report2022" component={Report2022} />
          <Route path="/Report2019" component={Report2019} />
          <Route path="/Report2020" component={Report2020} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}
export default App;
