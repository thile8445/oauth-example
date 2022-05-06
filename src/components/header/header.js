import "./header.css";
import imgHeader from "../../assets/images/white_hitseriescloud.png";

export default function Header() {
  return (
    <>
      <header className="header">
        <img className="header-title" src={imgHeader} alt="header" />
      </header>
    </>
  );
}
