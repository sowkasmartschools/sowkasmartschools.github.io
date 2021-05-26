import { Link } from 'react-router-dom';
function Nav() {
    return (
      <div>
        <nav>
            <h3>logo</h3>
            <ul>
            <Link to='/'>
                    <li>Home</li>
                </Link>
                <Link to='/about'>
                    <li>About Us</li>
                </Link>
                <Link to='/contact'>
                    <li>Contact Us</li>
                </Link>
            </ul>
        </nav>
      </div>
    );
  }
  
  export default Nav;
  