import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link> | <Link to="/login">Login</Link> | <Link to="/signup">Sign Up</Link>
    </nav>
  );
}
