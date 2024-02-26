import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
 
function App() {
  return (
    <div>
      <Router>
        <nav className="navbar align-content-center " style={{ display: "flex", backgroundColor: "white", }} >
        <div className="homeimage"></div>
          <Link to='/signIn'><button type="button" style={{ margin: "10px", color:"green", borderBlockColor:"green", borderStyle:"dashed"}}>Sign In</button></Link>
          <Link to='/basket'><button type="button" style={{ margin: "10px", color:"green", borderBlockColor:"green", borderStyle:"dotted"}}>Basket</button></Link>
        </nav>
        <Routes>
          <Route path='/basket'/>
          <Route path='/signIn'/>
        </Routes>
      </Router>
 
    </div>
  );
}
 
export default App;
 