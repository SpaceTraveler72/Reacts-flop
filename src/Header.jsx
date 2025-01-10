import icik from "./assets/icik-claw.jpg"; // Adjust the path to your image

function Header() {
  return (
    <header className="header">
      <img src={icik} alt="Icik Claw" className="nav-logo" />
      <nav>
        <ul className="nav-list">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
