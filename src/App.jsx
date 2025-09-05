import './App.css'
import Navbar from "./components/Navbar/Navbar.jsx";
import myImage from "./assets/images/mypicture.jpg"
import SectionTitle from "./components/SectionTitle/SectionTitle.jsx";
import SkillsCard from "./components/SkillsCard/SkillsCard.jsx";

import JavaScriptImage from "./assets/images/skills/javascript.svg";
import CssImage from "./assets/images/skills/css.svg";
import RoundedBadge from "./components/RoundedBadge/RoundedBadge.jsx";

function App() {

    const cardsConfigs = [
        {
            image: JavaScriptImage,
            alt: "JavaScript Icon",
            title: "JavaScript",
            text: "Aprendendo"
        },
        {
            image: CssImage,
            alt: "CSS Icon",
            title: "CSS",
            text: "Confortável"
        }
    ]

    return (
        <>
            <div className="background"></div>

            <Navbar/>

            <main className="main-container">
                <section className={"introduction-section"}>
                    <img src={myImage} alt="Um homem pardo com uma camisa azul escura"/>

                    <h1>Olá,<br/> eu sou <br/> <span>João Cláudio</span></h1>

                    <p>
                        Comecei minha jornada com HTML, CSS e JavaScript, onde descobri minha paixão pelo
                        desenvolvimento. Com o tempo, mergulhei em Java (Spring Boot), TypeScript e React, explorando
                        tanto o backend quanto o frontend.
                        <br/><br/>
                        Atualmente curso Análise e Desenvolvimento de Sistemas no Senac Nações Unidas, onde também
                        concluí o Técnico em TI. Tenho experiência em MySQL e contato inicial com PostgreSQL.
                        <br/><br/>
                        Mais do que escrever código, o que me move é a oportunidade de aprender, criar e dar vida a
                        soluções que impactam pessoas.
                    </p>
                </section>

                <section id={"skills"} className={"skills-section"}>
                    <div className={"skills-section-content"}>
                        <SectionTitle title={"Habilidades & Tecnologias"} />

                        <p className={"skills-text"}>
                            Aqui estão as tecnologias que atualmente estou estudando/trabalhando. Estou sempre interessado
                            em expandir meus conhecimentos e enfrentar novos desafios.
                        </p>

                        <div className={"skills-cards"}>
                            {cardsConfigs.map((config) => (
                                <SkillsCard key={config.title} config={config}/>
                            ))}
                        </div>

                        <p className={"language-title"}>Idiomas:</p>

                        <div className={"languages-container"}>
                            <RoundedBadge text={"Inglês - Básico"} />
                            <RoundedBadge text={"Espanhol - Básico"} />
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default App
