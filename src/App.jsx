import './App.css'
import myImage from "./assets/images/mypicture.jpg"
import {cardsConfigs, contactsConfigs, projectsConfigs} from "./assets/data/portfolioData.js"

import Navbar from "./components/Navbar/Navbar.jsx";
import SectionTitle from "./components/SectionTitle/SectionTitle.jsx";
import SkillsCard from "./components/SkillsCard/SkillsCard.jsx";
import RoundedBadge from "./components/RoundedBadge/RoundedBadge.jsx";
import ProjectsCard from "./components/ProjectsCard/ProjectsCard.jsx";
import ContactBlock from "./components/ContactBlock/ContactBlock.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {

    return (
        <>
            <div className="background"></div>

            <Navbar/>

            <main className="main-container">
                <section className={"introduction-section"}>
                    <img src={myImage} alt="Um homem pardo com uma camisa azul escura"/>

                    <div>
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
                    </div>
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

                <section id={"projects"} className={"projects-section"}>
                    <div className={"projects-section-content"}>
                        <SectionTitle title={"Meus Projetos"} />

                        <p className={"projects-text"}>
                            Alguns dos meus projetos que desenvolvi durante meu aprendizado, me ajudando a crescer
                            como desenvolverdor
                        </p>

                        <div className="projects-cards">
                            {projectsConfigs.map((config) => (
                                <ProjectsCard key={config.title} config={config} />
                            ))}
                        </div>

                        <a className={"direct-github"}
                           href="https://github.com/AlexeyFrens?tab=repositories"
                           target={"_blank"}>Veja todos os projetos no Github</a>
                    </div>
                </section>

                <section id={"contact"} className="contacts-section">
                    <div className={"contacts-section-content"}>
                        <SectionTitle title={"Contate-me"} />

                        <div className={"contacts-card"}>
                            {contactsConfigs.map((config) => (
                                <ContactBlock key={config.title} config={config} />
                            ))}
                        </div>
                    </div>
                </section>

                <section className="footer-container">
                    <div className={"footer-section-content"}>
                        <Footer/>
                    </div>
                </section>
            </main>
        </>
    )
}

export default App
