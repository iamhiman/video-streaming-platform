import "./styles.css";

export const Navbar = ({ buttonText, onNavButtonClick = () => {} }) => {
  return (
    <nav className="navbar">
      <div>Video Streaming Platform</div>
      <button onClick={onNavButtonClick}>{buttonText}</button>
    </nav>
  );
};
