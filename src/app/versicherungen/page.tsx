import React from 'react';
//images
import hero from "../../../public/assets/images/hero4.webp";
//comp
import NestedBanner from "@/components/NestedBanner/NestedBanner";
import Advantages from "@/components/Advantages/Advantages";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import GoodHands from "@/components/GoodHands/GoodHands";
import Consultation from "@/components/Consultation/Consultation";
import Faq from "@/components/Faq/Faq";
import Calendly from "@/components/Calendly/Calendly";
import user from "../../../public/assets/icons/user.svg";
import battery from "../../../public/assets/icons/battery-charging.svg";
import check from "../../../public/assets/icons/check-circle.svg";
import heart from "../../../public/assets/icons/heart.svg";


const advCards = [
    {
        title: "Versicherungscheck",
        text: "Ein regelmäßiger Versicherungscheck ist entscheidend, um sicherzustellen, dass die Preise der Policen auch auf deren Leistungen abgestimmt sind.",
        icon: user
    },
    {
        title: "Ganzheitlicher Überblick",
        text: "Wir präsentieren Ihnen das volle Angebotsspektrum und finden maßgeschneiderte Lösungen, um Ihnen eine umfassende finanzielle Sicherheit zu bieten.",
        icon: battery
    },
    {
        title: "Der richtige Plan für Sie",
        text: "Finden Sie mit professioneller Beratung den maßgeschneiderten Plan, der genau auf Ihre individuellen Bedürfnisse zugeschnitten ist.",
        icon: check
    },
    {
        title: "Langfristige Planungssicherheit",
        text: " Mit einer langfristigen Planung sichern Sie nicht nur Ihre Gegenwart, sondern auch die Zukunft. Investieren Sie in eine dauerhafte finanzielle Sicherheit.",
        icon: heart
    },
]
const questions = [
    {
        text: "Bietet Ihr einen Versicherungs-Check an?",
        answer: "Ja, wir bieten regelmäßige Versicherungs-Checks an, um sicherzustellen, dass Ihre Policen optimal auf Ihre Bedürfnisse abgestimmt sind und Sie vor unerwarteten Risiken schützen."
    },
    {
        text: "Warum ist eine private Rentenversicherung wichtig?",
        answer: "Eine private Rentenversicherung gewährleistet finanzielle Sicherheit im Alter. Sie schließt die" +
            " Versorgungslücke und sichert Ihren Lebensstandard, wenn Sie aus dem Berufsleben ausscheiden."
    },
    {
        text: "Was für Versicherungen bieten Sie an?",
        answer: "Wir bieten ein breites Spektrum an Versicherungen an, von Auto über Gesundheit bis hin zu Lebensversicherungen. Unser Portfolio umfasst maßgeschneiderte Lösungen für individuelle Bedürfnisse."
    },
    {
        text: "Warum Versicherungen bei Aberle Solutions?",
        answer: "Aberle Solutions steht für umfassende Beratung und maßgeschneiderte Lösungen. Wir bieten Transparenz, Verständlichkeit und individuelle Betreuung, um Ihren Schutz optimal zu gestalten."
    },
    {
        text: "Wie kann ich bei Ihnen Versicherungen abschließen?",
        answer: "Ihre Reise zu einer besseren finanziellen Zukunft beginnt hier. Buchen Sie sich einen" +
            " unverbindlichen Kennenlern-Termin und überzeugen Sie sich selbst von uns: Nutzen Sie unser Kontaktformular oder Terminierungstool. Wir freuen uns darauf, Teil Ihrer finanziellen Zukunft zu werden."
    }
]
const Page = () => {
    return (
        <>
            <NestedBanner
                title={"Versicherungen:"}
                text={"Versicherungen sind von entscheidender Bedeutung für Ihre persönliche Finanzplanung. Sie schützen vor unvorhersehbaren Risiken wie Unfällen oder Krankheiten. Vor allem in solch unsicheren Zeiten der gesetzlichen Rentenversicherung sind Versicherungen, wie die private Rentenversicherung, oder eine Lebensversicherung essentiell für Ihre finanzielle Stabilität im Alter."}
                image={hero}
            />
            <Advantages cards={advCards}/>
            <HowItWorks
                text1={"Wir analysieren Ihre Bedürfnisse und präsentieren maßgeschneiderte Optionen aus unserem breiten Versicherungsportfolio."}
                text2={"Wir überprüfen gemeinsam mit Ihnen das Angebot auf Transparenz und Verständlichkeit, um sicherzustellen, dass es Ihren Erwartungen entspricht."}
                text3={"Nach der Beratung wählen Sie die passende Versicherungslösung aus, die genau auf Ihre Anforderungen und Lebenssituation zugeschnitten ist."}
                text4={"Nach Ihrer Zustimmung schließen wir den Vertrag ab, sichern Sie umfassend ab und bieten Ihnen die gewünschte finanzielle Sicherheit für die Zukunft."}
            />
            <GoodHands/>
            <Consultation/>
            <Faq questions={questions}/>
            <Calendly/>
        </>
    );
};

export default Page;
