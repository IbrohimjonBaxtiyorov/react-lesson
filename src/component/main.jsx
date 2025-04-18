import "../component/main.css"
import hero from "../images/hero-bg.svg"
export default function Main() {
    return(
        <main className="main">
           <div>
            <h1 className="title">Learn Any Foreign Language</h1>
            <p className="desc">With our teachers who write a program for each student, you will be able to make your first sketch after the first lesson.</p>
            <button className="button-hero">Get started</button>
           </div>

           <div><img src={hero} alt="" /></div>
        </main>
    )
}