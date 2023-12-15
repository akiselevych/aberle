//images
import hero from '../../../public/assets/images/hero3.webp'
//components
import NestedBanner from "@/components/NestedBanner/NestedBanner";
import user from "../../../public/assets/icons/user.svg";
import battery from "../../../public/assets/icons/battery-charging.svg";
import check from "../../../public/assets/icons/check-circle.svg";
import heart from "../../../public/assets/icons/heart.svg";
import Advantages from "@/components/Advantages/Advantages";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import GoodHands from "@/components/GoodHands/GoodHands";
import Faq from "@/components/Faq/Faq";
import Calendly from "@/components/Calendly/Calendly";



const advCards = [
    {
        title: "Individuell angepasste Lösungen",
        text: "Unsere maßgeschneiderten Immobilienlösungen werden sorgfältig an Ihre individuellen Investitionsprofile und Möglichkeiten angepasst.",
        icon: user
    },
    {
        title: "Finanzielle Zielsetzung ",
        text: "Wir helfen Ihnen Schritt für Schritt bei dieser Zielsetzung, angefangen bei Ihrem ersten Beratungstermin bis hin zum Immobilienfinanzierung Vergleich.",
        icon: battery
    },
    {
        title: "Investitionsstrategie",
        text: "Unsere strategische Herangehensweise a zielt darauf ab, langfristiges Wachstum und gleichzeitig kurzfristige Renditen zu optimieren.",
        icon: check
    },
    {
        title: "Steueroptimierung",
        text: "Um Ihre Einnahmen zu maximieren, integrieren wir effektive Steueroptimierungsstrategien in Ihren individuellen Immobilieninvestmentplan.",
        icon: heart
    },
]
const questions = [
    {
        text: "Warum sind Immobilien eine wertvolle Anlageklasse?",
        answer: "Immobilien bieten nicht nur Stabilität, sondern auch Wertsteigerungspotenzial und Mieteinnahmen. Bei Immobilien Bietigheim-Bissingen, sowie in der ganzen Republik, können wir Ihnen dabei helfen, Ihren Traum Ihrer eigenen Immobilie durch maßgeschneiderte Immobilienfinanzierung zu verwirklichen."
    },
    {
        text: "Wie geht Aberle Solutions an die Immobilienfinanzierung heran?",
        answer: "Wir bieten maßgeschneiderte Finanzierungslösungen, die exakt auf Ihre Bedürfnisse zugeschnitten sind."
    },
    {
        text: "Wie können Immobilieninvestments Wohlstand aufbauen?",
        answer: "Immobilien investitionen bieten Wertsteigerung und Einnahmen aus Vermietungen. Unsere Experten helfen Ihnen, erfolgreiche Strategien umzusetzen."
    },
    {
        text: "Bietet Aberle Solutions andere Dienstleistungen an?",
        answer: "Ja, wir bieten Ihnen umfassende Dienstleistungen an, um Ihnen das perfekte Finanzpaket zu liefern.Darunter befinden sich unter anderem Ganzheitliche Finanzberatung, ein Versicherungscheck oder auch die Beratung rund um das Thema Edelmetalle."
    },
    {
        text: "Wie kann man mit Immobilieninvestitionen bei Aberle Solutions beginnen?",
        answer: "Nehmen Sie Kontakt mit uns über das Kontaktformular auf, um ein kostenloses und unverbindliches" +
            " Kennenlerngespräch vereinbaren zu können. So können wir gemeinsam den Grundstein für Ihre finanzielle Zukunft legen."
    }
]
const Page = () => {
    return (
        <>
            <NestedBanner
                title={"Immobilien:"}
                text={"Möchten Sie Investitionen in Immobilien tätigen? Bei Aberle Solutions bieten wir Ihnen unsere Expertise in diesem Bereich an. Unser Schwerpunkt liegt auf den vielfältigen Chancen, die sich in Bietigheim-Bissingen und ganz Deutschland bieten. Unsere Möglichkeiten in dem Bereich der Immobilien erstrecken sich über das gesamte Bundesgebiet."}
                image={hero}
                />
            <Advantages cards={advCards}/>
            <HowItWorks
                text1={"Bedarfsanalyse: In der Erstberatung analysieren wir Ihre Immobilienziele, finanzielle Situation und Bedürfnisse."}
                text2={"Risikoanalyse: Wir führen eine Risikoanalyse durch, klären über Versicherungsoptionen auf und optimieren Ihre finanzielle Planung im Immobilienkontext."}
                text3={"Finanzstrategie: Basierend auf der Analyse entwickeln wir eine maßgeschneiderte Finanzstrategie für Ihre Immobilienpläne, berücksichtigen Finanzierungsoptionen und Fördermittel."}
                text4={"Umsetzungsbegleitung: Nach Festlegung der Strategie begleiten wir unterstützen bei Finanzierungsfragen und sichern eine erfolgreiche Integration Ihrer Immobilienziele in Ihre Gesamtfinanzplanung."}
            />
            <GoodHands/>
            <Faq questions={questions}/>
            <Calendly/>
        </>
    );
};

export default Page;
