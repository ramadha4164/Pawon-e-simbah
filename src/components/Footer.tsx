import { CircleArrowUp } from "lucide-react";
import "./style.css";

export default function Footer() {
  return (
    <footer>
      <a href="#top" className="brand">
        <span>P</span>
        <span className="brand-name">
          Pawon'e
          <br />
          Simbah
        </span>
      </a>

      <div className="footer-info">
        <span>© 2024 Pawon'e Simbah</span>
        <span className="footer-address">
          Jl. Nama Jalan No. 00, Surakarta, ID 57100
        </span>
      </div>

      <span> r.mdhn studio </span>

      <a href="#top" className="back-top">
        Back to top <CircleArrowUp size={18} />
      </a>
    </footer>
  );
}
