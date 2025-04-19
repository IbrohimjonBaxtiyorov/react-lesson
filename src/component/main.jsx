import "../component/main.css";
import navimg from "../images/hero-bg.svg";
export default function Main() {
  return (
    <main className="main">
      <div>
        <h1 className="title1">
          Learn <br /> Any Foreign Language
        </h1>
        <p className="desc">
          With our teachers who write a program for each student, you will be
          able to make your first sketch after the first lesson.
        </p>
        <button className="button-hero">Get started</button>
      </div>

      <div>
        <img src={navimg} alt="" />
      </div>
    </main>
  );
}
