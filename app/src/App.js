import 'bulma/css/bulma.min.css';
import { BrowserRouter ,Routes, Route, useParams } from "react-router-dom";
import { HomePage } from './pages/HomePage';
import { AnalysisPage } from './pages/AnalysisPage';
import { ThankYouPage } from './pages/ThankYouPage';
import Navbar from './components/Navbar';
import { DashboardPage } from './pages/DashboardPage';
import { APITestPage } from './pages/APITestPage';

const App = () => {
  return (
    <div>
    <Navbar/>
    <BrowserRouter>
      <Routes>
        <Route  path = '/thank-you' element = {<ThankYouPage/>}/>
        <Route  path = "/:checkpoint" element = {<HomePage/>}/>
        <Route  path = "/" element = {<HomePage/>}/>
        <Route path = "/dashboard" element = {<DashboardPage/>}/>
        <Route path = "/test" element = {<APITestPage/>}/>
      </Routes>
    </BrowserRouter>
    </div>
    
  )
}

export default App;


