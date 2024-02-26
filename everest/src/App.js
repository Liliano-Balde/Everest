import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
 
function App() {
  return (
    <div>
      <Router>
        <nav className="navbar align-content-center " style={{ display: "flex", backgroundColor: "#BDA62D", }} >
        <div className="homeimage"></div>
          <Link to='/signIn'><button type="button" className="btn btn-dark" style={{ margin: "10px" }}>Sign In</button></Link>
          <Link to='/basket'><button type="button" className="btn btn-dark" style={{ margin: "10px" }}>Basket</button></Link>
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
 