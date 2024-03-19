import { useContext } from "react";
// import { Link } from "react-router-dom";
import { CredentialsContext } from "../App";
import Login from "./Login";
import Header from "../components/Header";
import Note from "../components/Notes/Notes";
// import Todos from "../components/Todos";

export default function Welcome() {
  const [credentials, setCredentials] = useContext(CredentialsContext);
  const logout = () => {
    setCredentials(null);
  };


  return (
    <div>
      {/* <Header logout={logout} credentials={credentials}/> */}
      {/* {credentials && <button onClick={logout}>Logout</button>} */}
      {credentials &&  <Header logout={logout} credentials={credentials}/>}
      {/* <h1>{credentials && credentials.email}</h1> */}
      <div>
      {credentials && credentials.email ? (
        <Note/>
      ) : (
        // !credentials &&
          // <Link to="/login"><Login/></Link>
          <Login/>
      )}
      </div>
      
    </div>
  );
}