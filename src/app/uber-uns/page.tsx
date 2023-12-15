import React from 'react';
import AboutUsHero from "@/components/AboutUsHero/AboutUsHero";
import TrustCompanies from "@/components/TrustCompanies/TrustCompanies";
import Planning from "@/components/Planning/Planning";
import AboutMe from "@/components/AboutMe/AboutMe";

const Page = () => {
    return (
        <>
            <AboutUsHero/>
            <TrustCompanies/>
            <Planning/>
            <AboutMe/>
        </>
    );
};

export default Page;
