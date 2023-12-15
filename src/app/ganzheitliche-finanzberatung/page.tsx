
//images
import hero from '../../../public/assets/images/hero1.webp'
import user from '../../../public/assets/icons/user.svg'
import check from '../../../public/assets/icons/check-circle.svg'
import heart from '../../../public/assets/icons/heart.svg'
import battery from '../../../public/assets/icons/battery-charging.svg'
//components
import NestedBanner from "@/components/NestedBanner/NestedBanner";
import Advantages from "@/components/Advantages/Advantages";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import GoodHands from "@/components/GoodHands/GoodHands";
import Consultation from "@/components/Consultation/Consultation";
import Faq from "@/components/Faq/Faq";
import Calendly from "@/components/Calendly/Calendly";

const advCards = [
    {
        title: "Verständnis unserer Beratungsphilosophie",
        text: "Unsere Finanzberatung und Philosophie ist eine maßgeschneiderte und individualisierte Herangehensweise an Ihre finanzielle Planung.",
        icon: user
    },
    {
        title: "Vorteile der Ganzheitlichen Finanzplanung",
        text: "Unsere Ganzheitliche Finanzplanung bietet Ihnen einzigartige Vorteile und langfristigen Nutzen, um diese Ziele zu verwirklichen.",
        icon: battery
    },
    {
        title: "Unser Ganzheitlicher Planungsprozess",
        text: "Unser Schritt-für-Schritt-Prozess von der Planung bis zur Umsetzung stellt sicher, dass Sie genau die auf Ihre Bedürfnisse abgestimmten finanziellen Strategien erhalten.",
        icon: check
    },
    {
        title: "Stetige Kundenbetreuung",
        text: "Wir betrachten Ihr gesamtes finanzielles Leben und schneiden unsere Strategie individuell auf Ihre Bedürfnisse zu anstatt Sie mit Produkten von der Stange abzufertigen.",
        icon: heart
    },
]
const questions = [
    {
        text: "Wie unterscheidet sich ganzheitliche finanzielle Beratung von herkömmlicher Finanzberatung?",
        answer: "Unsere ganzheitliche finanzielle Beratung bietet Ihnen einen entscheidenden Vorteil gegenüber herkömmlicher Finanzberatung. Wir betrachten Ihr gesamtes finanzielles Leben und schneiden unsere Strategie individuell auf Ihre Bedürfnisse zu anstatt Sie mit Produkten von der Stange abzufertigen. Mit uns erreichen Sie Ihre individuellen finanziellen Ziele."
    },
    {
        text: "Welche Dienstleistungen sind in der Ganzheitlichen Finanzberatung enthalten?",
        answer: "Unsere ganzheitliche Finanzplanung umfasst alles, von maßgeschneiderten Investitionsstrategien bis hin zur umfassenden Ruhestandsplanung. Sie können auf die spezifischen Seiten verlinkt werden, um einen tieferen Einblick in unsere Angebote zu erlangen."
    },
    {
        text: "Wie profitiere ich persönlich von ganzheitlicher Finanzplanung?",
        answer: "Lassen Sie uns Ihre persönlichen finanziellen Ziele und Träume gemeinsam näher betrachten. Durch Beispiele aus realen Kundenfällen können wir Ihnen genau zeigen, wie unsere ganzheitliche Planung individuell auf Sie zugeschnitten ist, kostenlos und unverbindlich."
    },
    {
        text: "Warum sollte ich Aberle Solutions für Ganzheitliche Finanzberatung wählen?",
        answer: "Unsere Geschichte, unser Fachwissen und die Zufriedenheit unserer Kunden sprechen für sich. Das breite und individuelle Produktspektrum, welches wir Ihnen maßschneidern und anbieten können, hebt uns von unserer Konkurrenz ab."
    },
    {
        text: "Kann ich andere Dienstleistungen mit Ganzheitlicher Finanzberatung integrieren?",
        answer: "Ja, wir ermutigen Sie, Ihr Beratungsspektrum zu erweitern, um ein abgerundetes Portfolio" +
            " anzustreben.Indem Sie zusätzliche von uns angebotene Dienstleistungen wie beispielsweise Immobilien-Investment oder Edelmetall-Investment integrieren. Wir bieten Ihnen gerne weitere Informationen."
    },
    {
        text: "Wie starte ich mit der ganzheitlichen Finanzplanung bei Aberle Solutions?",
        answer: "Ihre Reise zu einer besseren finanziellen Zukunft beginnt hier. Buchen Sie sich einen unverbindlichen Kennenlern-Termin und überzeugen Sie sich selbst von uns:\n" +
            "Nutzen Sie  unser Kontaktformular oder Terminierungstool. Wir freuen uns darauf, Teil Ihrer finanziellen Zukunft zu werden."
    },
]
const Page = () => {
    return (
        <>
            <NestedBanner
                title={"Ganzheitliche Finanzberatung:"}
                text={"Unsere Ganzheitliche Finanzberatung steht im Mittelpunkt unserer Finanzdienstleistungen. Unsere Experten arbeiten eng mit Ihnen zusammen, um Ihre finanzielle Situation zu verstehen und maßgeschneiderte Pläne zu entwickeln, die Ihren Bedürfnissen und Zielen entsprechen."}
                image={hero}
            />
            <Advantages cards={advCards}/>
            <HowItWorks
                text1={"Umfassende Analyse: In der Erstberatung verstehen wir Ihre finanziellen Ziele, Lebenssituation und Risikotoleranz."}
                text2={"Ganzheitliche Portfolio-Optimierung: Wir verfeinern Ihr Finanzportfolio, integrieren Versicherungsschutz, optimieren Finanzierungen und diversifizieren Anlagen für nachhaltige Rendite und Risikominderung."}
                text3={"Individuelle Strategie: Basierend auf der Analyse entwickeln wir eine maßgeschneiderte Finanzstrategie, die Versicherung, Finanzierung und diverse Anlagebereiche berücksichtigt."}
                text4={"Langfristige Begleitung: Nach Festlegung der Strategie begleiten wir Sie langfristig, passen die Planung bei Bedarf an und sichern einen ganzheitlichen finanziellen Erfolg."}
            />
            <GoodHands/>
            <Consultation/>
            <Faq questions={questions}/>
            <Calendly/>
        </>
    );
};

export default Page;
