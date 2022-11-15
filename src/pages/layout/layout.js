import { Outlet, Link } from "react-router-dom";
import './layout.css';

const Layout = () => {
  return (
    <>
      <nav>
            <Link to="/" className="menu-item">All</Link>
            <Link to="/images" className="menu-item">Images</Link>
            <Link to="/videos" className="menu-item">Videos</Link>
            <Link to="/counterPage" className="menu-item">Counter Pages</Link>
            <Link to="/TodoPage" className="menu-item">Todo Pages</Link>
            <Link to="/TablePage" className="menu-item">Tabe Page</Link>
      </nav>

      <Outlet />
    </>
    
  )
};

export default Layout;