import JavaScriptImage from "/assets/images/skills/javascript.svg";
import TypeScriptImage from "/assets/images/skills/typescript.svg";
import AngularImage from "/assets/images/skills/angular.svg";
import MysqlImage from "/assets/images/skills/mysql.svg";
import JavaImage from "/assets/images/skills/java.svg"
import ReactImage from "/assets/images/skills/react.svg";
import SpringBootImage from "/assets/images/skills/springboot.svg"
import CssImage from "/assets/images/skills/css.svg";
import HtmlImage from "/assets/images/skills/html.svg";
import HBOImage from "../images/projects/hbomax.png"
import PokedexImage from "../images/projects/pokedex.png"
import LuxcarImage from "../images/projects/luxcar.png"
import MailIcon from "/assets/images/contacts/mail.svg"
import GitHubIcon from "/assets/images/contacts/githubWhite.svg"
import LinkedinIcon from "/assets/images/contacts/linkedin.svg"
import LocationIcon from "/assets/images/contacts/location.svg"

export const cardsConfigs = [
    {
        image: HtmlImage,
        alt: "Ícone do HTML",
        title: "HTML",
        text: "Avançado"
    },
    {
        image: CssImage,
        alt: "Ícone do CSS",
        title: "CSS",
        text: "Avançado"
    },
    {
        image: JavaScriptImage,
        alt: "Ícone do JavaScript",
        title: "JavaScript",
        text: "Intermediário"
    },
    {
        image: JavaImage,
        alt: "Ícone do Java",
        title: "Java",
        text: "Intermediário"
    },
    {
        image: SpringBootImage,
        alt: "Ícone do Spring Boot",
        title: "Spring Boot",
        text: "Básico"
    },
    {
        image: MysqlImage,
        alt: "Ícone do MySQL",
        title: "MySQL",
        text: "Intermediário"
    },
    {
        image: ReactImage,
        alt: "Ícone do React",
        title: "React",
        text: "Intermediário"
    },
    {
        image: AngularImage,
        alt: "Ícone do Angular",
        title: "Angular",
        text: "Intermediário"
    },
    {
        image: TypeScriptImage,
        alt: "Ícone do TypeScript",
        title: "TypeScript",
        text: "Básico"
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
    },
    {
        image: LuxcarImage,
        alt: "Imagem da Home do projeto Luxcar",
        title: "Luxcar - Locadora de luxo",
        description: "Projeto Integrador do 3º semestre de Análise e Desenvolvimento de Sistemas. Consiste em um sistema de gerenciamento e locação para uma locadora de luxo",
        tags: ["Angular", "Angular Material", "TypeScript", "API"],
        demoLink: "https://luxcar-pi3.web.app/",
        codeLink: "https://github.com/AlexeyFrens/luxcar"
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