import logo from "../images/logo.png";
export default function NavBar() {
  return (
    <div className="navbar">
      <img className="logo" src={logo} />
      <h1 className="heading"> Travel Journal </h1>
    </div>
  );
}
