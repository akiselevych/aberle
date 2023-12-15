"use client"
//libs
//@ts-ignore
import {Splide, SplideSlide,SplideTrack} from '@splidejs/react-splide';
import Image from "next/image";
//styles
import styles from './styles.module.scss'
import global from '@/styles/global.module.scss'
import '@splidejs/react-splide/css/core';
import './sliderStyles.scss'
//components
import SlideCard from "@/components/ReviewsSlider/SlideCard/SlideCard";
//images
// import person1 from '../../../public/assets/images/reviewsPerson.png'
import person3 from '../../../public/assets/images/reviewsPerson3.png'
import person4 from '../../../public/assets/images/ibrahim.png'
import left from '../../../public/assets/icons/chevron-left.svg'
import right from '../../../public/assets/icons/chevron-right.svg'

const REVIEWS = [
    {
        text: "Tim Aberle hat mir hervorragend bei der Beantragung meiner Versicherung geholfen. Seine Fachkenntnisse und seine schnelle Reaktion waren beeindruckend. Die Abwicklung verlief reibungslos, und ich bin mit dem Service mehr als zufrieden!!",
        name: "Yana",
        position: "Schülerin",
        image: person3
    },
    {
        text: "Hervorragende Erfahrung mit Aberle Solutions! Die erhaltene Beratung war nicht nur erstklassig," +
            " sondern auch äußerst hilfreich für meine finanziellen Anliegen.  Ihre Professionalität und Hingabe für exzellenten Kundenservice haben mich wirklich beeindruckt. Herzlichen Dank an das gesamte Team!",
        name: "Ibrahim Omercic",
        position: "Market Manager",
        image: person4
    },
]
const ReviewsSlider = () => {
    const options = {
        type: "loop",
        rewind: true,
        gap: "26px",
        perMove:1,
        perPage: handlePerView() ? 1 : 2,
        resetProgress: false,
        hasTrack: false,
        pagination: false,
    };

    function handlePerView(){
        if (typeof window != "undefined") {
            return window.innerWidth < 1040
        }
    }
    return (
        <section className={styles.container}>
            <h2 className={`${global.h2} ${styles.title}`}>Kunden-Feedback</h2>
            <div className={styles.content}>
                <Splide hasTrack={false} className={styles.slider} options={options}>
                    <SplideTrack>
                        {REVIEWS.map(({text,name,position,image},i) => (
                            <SplideSlide className={styles.slide} key={i}>
                                <SlideCard text={text} name={name} position={position} image={image}/>
                            </SplideSlide>
                        ))}
                    </SplideTrack>
                    <div className={`splide__arrows ${styles.btnContainer}`}>
                        <button className="splide__arrow splide__arrow--prev"> <Image src={left} alt={"left"}/></button>
                        <button className="splide__arrow splide__arrow--next"> <Image src={right} alt={"left"}/></button>
                    </div>
                </Splide>
            </div>
        </section>
    );
};

export default ReviewsSlider;
