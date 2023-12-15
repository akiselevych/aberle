//libs

//components
import NestedBanner from "@/components/NestedBanner/NestedBanner";

//images
import hero from '../../../public/assets/images/hero2.webp'
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
        title: "Diversifizierte Anlagestrategien",
        text: "Die Diversifikation ist ein Eckpfeiler in jedem erfolgreichen Finanzplan, um Risiken zu minimieren und Renditen zu steigern.",
        icon: user
    },
    {
        title: "Langfristige vs. Kurzfristige Anlageansätze",
        text: "Langfristige Investitionen bieten Stabilität und kontinuierlichen Kapitalaufbau, während kurzfristige Investitionen schnelle Renditen ermöglichen können.",
        icon: battery
    },
    {
        title: "Einschätzung der Risikotoleranz",
        text: "Die Bewertung Ihrer Risikotoleranz ist der Ausgangspunkt für erfolgreiche Investitionstrategien.",
        icon: check
    },
    {
        title: "Anpassung von Strategien an Ihre Ziele",
        text: "Für Sie entscheidend ist eine maßgeschneiderte Strategie, welche individuell an Ihre Ziele und finanzielle Situation angepasst ist.",
        icon: heart
    },
]
const questions = [
    {
        text: "Was sind 'Investitionsstrategien' und warum sind sie wichtig?",
        answer: "Investitionsstrategien Definition: Ausgearbeitete Pläne, die helfen, Ihr Geld gezielt und gewinnbringend anzulegen. Sie sind von zentraler Bedeutung für langfristigen finanziellen Erfolg und schaffen Stabilität."
    },
    {
        text: "Wie stimmen sich Investitionsstrategien mit meinem Risikoprofil ab?",
        answer: "Unsere Experten bei Aberle Solutions passen die Investitionsstrategien individuell an Ihr Risikoprofil an, um optimale finanzielle Ergebnisse zu erzielen. Ihre Sicherheit und Zufriedenheit stehen dabei im Mittelpunkt."
    },
    {
        text: "Bietet Aberle Solutions andere Finanzienstleistungen an?",
        answer: "Ja, wir bieten Ihnen umfassende Dienstleistungen an, um Ihnen das perfekte Finanzpaket zu liefern.Darunter befinden sich unter anderem Ganzheitliche Finanzberatung, ein Versicherungscheck oder auch die Beratung rund um das Thema Edelmetalle, so wie Immobilieninvestments oder auch Photovoltaikinvestments."
    },
    {
        text: "Welchen Ansatz verfolgt Aberle Solutions bei der Entwicklung von Investitionsstrategien?",
        answer: "Bei Aberle Solutions setzen wir auf unser umfassendes Fachwissen, um Ihnen Ihr maßgeschneiderte Investitionsstrategie Portfolio zu erstellen. Maßgeschneidert für Ihre Ziele und Bedürfnisse."
    },
    {
        text: "Wie kann ich mit Investitionsstrategien bei Aberle Solutions beginnen?",
        answer: "Wie kann ich mit Investitionsstrategien bei Aberle Solutions beginnen?Nehmen Sie Kontakt mit uns über das Kontaktformular auf, um ein kostenloses und unverbindliches Kennenlerngespräch vereinbaren zu können." +
            "So können wir gemeinsam den Grundstein für Ihre finanzielle Zukunft legen."
    },
]
const Page = () => {
    return (
        <>
            <NestedBanner
                title={"Investitionsstrategien:"}
                text={"Investitionsstrategien spielen bei Aberle Solutions eine zentrale Rolle, wenn es darum geht, Ihre finanziellen Ziele zu erreichen. Wir stehen Ihnen dabei zur Seite, um sicherzustellen, dass Sie auf dem richtigen Weg sind."}
                image={hero}
            />
            <Advantages cards={advCards}/>
            <HowItWorks
                text1={"Zieldefinition: In unserer Erstberatung erfassen wir Ihre finanziellen Ziele, Risikobereitschaft und Investitionsziele."}
                text2={"Portfolio-Optimierung: Wir verfeinern Ihr Finanzportfolio strategisch, indem wir Diversifikation und Liquidität berücksichtigen. Diese Optimierung maximiert nicht nur die Rendite, sondern minimiert auch Risiken, um langfristigen Erfolg sicherzustellen."}
                text3={"Individuelle Strategie: Basierend auf der Analyse entwickeln wir eine maßgeschneiderte Investitionsstrategie, die Ihre finanziellen Ziele unterstützt und dabei Risiken und Chancen optimiert."}
                text4={"Begleitung und Anpassung: Nach Festlegung der Strategie begleiten wir Sie aktiv, passen die Strategie bei Bedarf an und sichern eine erfolgreiche Umsetzung Ihrer Investitionspläne."}
            />
            <GoodHands/>
            <Faq questions={questions}/>
            <Calendly/>
        </>
    );
};

export default Page;
