import JavaScriptImage from "../images/skills/javascript.svg";
import CssImage from "../images/skills/css.svg";
import HBOImage from "../images/projects/hbomax.png"
import PokedexImage from "../images/projects/pokedex.png"
import MailIcon from "../images/contacts/mail.svg"
import GitHubIcon from "../images/contacts/githubWhite.svg"
import LinkedinIcon from "../images/contacts/linkedin.svg"
import LocationIcon from "../images/contacts/location.svg"

export const cardsConfigs = [
    {
        image: JavaScriptImage,
        alt: "Ícone do JavaScript",
        title: "JavaScript",
        text: "Aprendendo"
    },
    {
        image: CssImage,
        alt: "Ícone do CSS",
        title: "CSS",
        text: "Confortável"
    }
]

export const projectsConfigs = [
    {
        image: HBOImage,
        alt: "Imagem da Home do projeto HBOMax",
        title: "Clone do HBOMax de 2022",
        description: "Projeto de desafio final para a Trilha de CSS da Digital Innovation One. Com HTML e CSS, foi realizado um site responsivo e com animações.",
        tags: ["HTML", "CSS"],
        demoLink: "https://alexeyfrens.github.io/hbomax-desafio-dio/",
        codeLink: "https://github.com/AlexeyFrens/hbomax-desafio-dio"
    },
    {
        image: PokedexImage,
        alt: "Imagem da Home do projeto PokeAPI",
        title: "Pokedex com PokeAPI",
        description: "Melhorando o projeto da Pokedex desenvolvida na formação JavaScript Developer da DIO. Site responsivo e dinâmico, utilizando a API PokeAPI",
        tags: ["HTML", "CSS", "JavaScript", "API"],
        demoLink: "https://alexeyfrens.github.io/js-developer-pokedex/",
        codeLink: "https://github.com/AlexeyFrens/js-developer-pokedex"
    }
]

export const contactsConfigs = [
    {
        icon: MailIcon,
        alt: "Ícone de carta de correio",
        title: "Email",
        content: "joaocontatos56@gmail.com",
        isEmail: true
    },
    {
        icon: GitHubIcon,
        alt: "Ícone do Github",
        title: "GitHub",
        link: "https://github.com/AlexeyFrens",
        content: "github.com/AlexeyFrens"
    },
    {
        icon: LinkedinIcon,
        alt: "Ícone do Linkedin",
        title: "Linkedin",
        link: "https://www.linkedin.com/in/joao-claudio-dos-santos-souza/",
        content: "linkedin.com/joao-claudio"
    },
    {
        isDefault: true,
        icon: LocationIcon,
        alt: "Ícone de ponto de localização",
        title: "Local",
        content: "São Paulo - SP"
    }
]