import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className="fusion-layout-background" style={{ padding: 24, minHeight: 1360 }}>
      <main>
        <h2>Welcome!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/login">Login</Link>
      </nav>
    </div>
  );
}

export default Welcome;
