import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-80 h-screen flex  py-4">
      <nav className="px-4 py-4">
        <h2 className="text-4xl font-semibold mb-3">Sidebar</h2>
        <ul className="space-y-4">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/">Countries</Link>
          </li>
        </ul>
      </nav>
      <div className="gradient ms-auto border border-gray-100 h-full w-4 bg-stripe-pattern rounded-md"></div>
    </div>
  );
}

export default Sidebar;
