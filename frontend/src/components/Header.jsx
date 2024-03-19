// Header.js
import logo from '../assets/logo1.png'

const Header = (prop) => {
   const {logout, credentials} = prop
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-8 mr-2" />
        <h1 className="text-lg font-bold">Hi Notes</h1>
      </div>
      {credentials &&  <button onClick={logout} className="bg-indigo-800 hover:bg-indigo-600 px-4 py-2 rounded-md">
        Logout
      </button>}
     
    </header>
  );
};

export default Header;
