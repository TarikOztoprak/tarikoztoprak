import './App.css';
import profil from "./picture/profil.jpeg"
import github from "./picture/github.png"
import linkedin from "./picture/linkedin.png"

function SideBar() {
    return(
    <div className="Side-bar">
        <img src={profil} alt="profil" className="Profil"></img>
        <br/>
        Ben Muhammet Tarık Öztoprak Sakarya Üniversitesi Bilgisayar Mühendisliği 3.sınıf öğrencisiyim. Kendimi Frontend alanında geliştirmeye gayret ediyorum. Bildiğim teknolojiler: <br/> 
      <ul style={{textAlign: 'left'}}>
        <li>JavaScript</li>
        <li>React</li>
        <li>.NET CORE MVC</li>
        <li>C#</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Nesneye Dayalı Programlama(OOP)</li>
        <li>Veri Yapıları</li>
      </ul>
      <a href="https://github.com/TarikOztoprak"> <img src={github} alt="github" className="Social-media"></img></a>
      <a href="https://www.linkedin.com/in/muhammet-tar%C4%B1k-%C3%B6ztoprak-12b68a173/"><img src={linkedin} alt="linkedin" className="Social-media"></img></a>
      </div>
    );
}

export default SideBar;