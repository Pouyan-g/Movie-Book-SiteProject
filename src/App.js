import { Outlet, Link } from "react-router-dom";
function App() {
  return (
    <div>
      <h1>Welcome to this site:</h1>
      <Link to="/list">List</Link>
    </div>
  );
}

export default App;
