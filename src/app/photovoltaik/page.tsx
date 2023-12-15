import React from 'react';
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
import hero from "../../../public/assets/images/hero5.webp";


const advCards = [
    {
        title: "Ihre Immobilie, Ihre Energie",
        text: "Mit maßgeschneiderten Solarenergie Lösungen steigern Sie nicht nur den Wert Ihrer Immobilie, sondern optimieren auch die Energieeffizienz.",
        icon: user
    },
    {
        title: "Finanzielle Sicherheit und Rechtsberatung",
        text: "Erfahren Sie, wie wir Sie bei Themen wie Photovoltaik Kosten  und rechtlichen Anforderungen unterstützen können, inklusive Subventionen und Anreizen vom Bund.",
        icon: battery
    },
    {
        title: "Ganzheitliche Energieunabhängigkeit",
        text: "Wir zeigen Ihnen den Weg zu nachhaltiger Energieversorgung, der Senkung Ihrer Stromkosten und wie Sie die Umwelt schützen können.",
        icon: check
    },
    {
        title: "Rundum-Support",
        text: "Unsere Nachbetreuung  gewährleistet, dass Sie stets Hilfe bei Fragen rund um Ihre Photovoltaikanlage erhalten. Wir sind an Ihrer Seite, wenn Sie uns brauchen.",
        icon: heart
    },
]
const questions = [
    {
        text: "Welche Vorteile ergeben sich aus der Integration von Photovoltaikanlagen in meine Immobilie?",
        answer: "Die Integration von Photovoltaikanlagen verbessert die Energieeffizienz Ihrer Immobilie, reduziert Ihre Stromrechnungen erheblich und leistet einen wertvollen Beitrag zur Umweltschonung. Außerdem können Sie so selbst zum Versorger werden und in das Energienetz einspeisen.Dies macht sie zu einer langfristig nachhaltigen Investition."
    },
    {
        text: "Wie unterstützt Aberle Solutions bei der Installation und Wartung von Photovoltaikanlagen?",
        answer: "Aberle Solutions bietet einen ganzheitlichen Service, der von anfänglicher Beratung über maßgeschneiderte Installationspläne bis hin zur Finanzierung für Ihre Photovoltaikanlagen reicht."
    },
    {
        text: "Können Photovoltaikanlagen den Wert meiner Immobilie steigern?",
        answer: "Ja, die Installation von Photovoltaikanlagen kann nachweislich den Wert Ihrer Immobilie erhöhen und sie auf dem Immobilienmarkt insbesondere durch die Energieeffizienz und Nachhaltigkeit attraktiver machen."
    },
    {
        text: "Bietet Aberle Solutions neben Photovoltaik auch andere Dienstleistungen an?",
        answer: "Ja, wir bieten Ihnen umfassende Dienstleistungen an, um Ihnen das perfekte Finanzpaket zu liefern.Darunter befinden sich unter anderem Ganzheitliche Finanzberatung, ein Versicherungscheck oder auch die Beratung rund um das Thema Edelmetalle."
    },
    {
        text: "Wie kann ich mit der Photovoltaik-Beratung für meine Immobilie bei Aberle Solutions beginnen?",
        answer: "Nehmen Sie Kontakt mit uns über das Kontaktformular auf, um ein kostenloses und unverbindliches Kennenlerngespräch vereinbaren zu können. So können wir gemeinsam den Grundstein für Ihre Pläne in eine grünere- und energieeffizientere Zukunft legen."
    },
]
const Page = () => {
    return (
        <>
            <NestedBanner
                title={"Photovoltaik:"}
                text={"Entdecken Sie die Vorteile, die das Investieren in eine  Photovoltaik-Anlage für Ihr Haus mit sich bringen kann.Die steigende Nachfrage unter der deutschen mittleren Oberschicht zeigt, dass dies ein wachsender und sehr lukrativer Markt für die Zukunft istWir bieten Ihnen umfassende Photovoltaik-Beratung an. Wir sind Ihr Ansprechpartner für Photovoltaik Bietigheim-Bissingen und Region."}
                image={hero}
            />
            <Advantages cards={advCards}/>
            <HowItWorks
                text1={"Bedarfsermittlung: In der Erstberatung analysieren wir Ihren Energiebedarf, Ihre Finanzsituation und Ziele."}
                text2={"Investitionsstrategie: Wir erläutern verschiedene Finanzierungsoptionen, klären über Fördermittel auf und entwickeln eine Investitionsstrategie, die zu Ihren finanziellen Zielen passt."}
                text3={"Finanzplanung: Auf Basis der Analyse entwickeln wir ein maßgeschneidertes Photovoltaik-Konzept, berücksichtigen Fördermittel und erstellen eine detaillierte Finanzplanung."}
                text4={"Umsetzungsbegleitung: Nach Entscheidung begleiten wir sorgen für eine reibungslose Integration der Photovoltaikanlage in Ihre finanzielle Strategie."}
            />
            <GoodHands/>
            <Consultation/>
            <Faq questions={questions}/>
            <Calendly/>
        </>
    );
};

export default Page;
