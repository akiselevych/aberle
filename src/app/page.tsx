import Hero from "@/components/Hero/Hero";
import TrustCompanies from "@/components/TrustCompanies/TrustCompanies";
import DreamComeTrue from "@/components/DreamComeTrue/DreamComeTrue";
import CareOfFinances from "@/components/CareOfFinances/CareOfFinances";
import ReasonsWhy from "@/components/ReasonsWhy/ReasonsWhy";
import AboutMe from "@/components/AboutMe/AboutMe";
import Faq from "@/components/Faq/Faq";
import ReviewsSlider from "@/components/ReviewsSlider/ReviewsSlider";
import Calendly from "@/components/Calendly/Calendly";

const faq = [
    {
        text: "Welche Finanzdienstleistungen bieten Sie an?",
        answer: "Wir bieten eine umfassende Palette von Finanzlösungen an, darunter ganzheitliche Finanzplanung, Anlagestrategien, Planung für die Altersvorsorge, Beratung zur Immobilieninvestition, Photovoltaikberatung und selbstverständlich Versicherungsdienstleistungen."
    },
    {
        text: "Bieten Sie Finanzdienstleistungen außerhalb von Bietigheim-Bissingen an?",
        answer: "Ja, unsere Dienstleistungen erstrecken sich über ganz Deutschland und bieten kompetente finanzielle Beratung, unabhängig von Ihrem Standort."
    },
    {
        text: "Wie erhalte ich personalisierte finanzielle Beratung?",
        answer: "Wie erhalte ich personalisierte finanzielle Beratung?"
    },
    {
        text: "Was macht Ihre Anlagestrategien einzigartig?",
        answer: "Unsere Anlagestrategien zeichnen sich durch die Kombination von greifbaren, physischen Anlageoptionen und einer ganzheitlichen, umfassenden Finanzplanung aus. Wir legen großen Wert darauf, dass unsere Kunden direkten Zugang zu ihren Anlagen haben und diese spürbar erleben können."
    },
    {
        text: "Kann ich Unterstützung bei Versicherungen und Photovoltaikberatung an einem Ort erhalten?",
        answer: "Absolut, wir bieten einen ganzheitlichen Ansatz für Finanzlösungen, der es Ihnen ermöglicht, Versicherungsbedürfnisse zu verwalten und nahtlos mit unseren Expertenberatern in Photovoltaikinvestitionen einzusteigen."
    },
]
export default function Home() {

    return (
        <>
            <Hero/>
            <TrustCompanies/>
            <DreamComeTrue/>
            <ReviewsSlider/>
            <CareOfFinances/>
            <ReasonsWhy/>
            <AboutMe/>
            <Calendly/>
            <Faq questions={faq}/>
        </>
    )
}
