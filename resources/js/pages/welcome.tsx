import { Head, Link, usePage } from "@inertiajs/react";
import { useRoute } from 'ziggy-js';
import logo from "../assets/logo.png";
import heroImage from "../assets/heroImage2.png";
import heroImage1 from "../assets/heroimage.png";
import { BsArrowRight } from "react-icons/bs";
import React, { useEffect } from "react";
import Splide from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";
import usman from "../assets/usman.jpg";
import teacher from "../assets/teacher.jpg";
import akiola from "../assets/akiola1.jpg";
import Slider from "../components/Gallery";
import SLIDER1 from "../assets/SLIDE1.jpeg";
import SLIDER2 from "../assets/SLIDE2.jpeg";
import SLIDER4 from "../assets/SLIDE4.jpeg";
import SLIDER5 from "../assets/SLIDE5.jpeg";
import SLIDER6 from "../assets/SLIDE6.jpeg";
import SLIDER7 from "../assets/SLIDE7.jpeg";
import SLIDER8 from "../assets/SLIDE8.jpeg";
import SLIDER9 from "../assets/SLIDE9.jpeg";
import SLIDER10 from "../assets/SLIDE10.jpeg";
import SLIDER11 from "../assets/SLIDE11.jpeg";
import SLIDER12 from "../assets/SLIDE12.jpeg";


export default function Home() {
    // const route = useRoute();
    // const { flash } = usePage().props;
    const { component } = usePage();

    const sliderData = [
        {
            image: SLIDER1,
        },
        {
            image: SLIDER2,
        },
        {
            image: SLIDER4,
        },
        {
            image: SLIDER5,
        },
        {
            image: SLIDER6,
        },
        {
            image: SLIDER7,
        },
        {
            image: SLIDER8,
        },
        {
            image: SLIDER9,
        },
        {
            image: SLIDER10,
        },
        {
            image: SLIDER11,
        },
        {
            image: SLIDER12,
        },
    ];

    useEffect(() => {
        const splide = new Splide(".splide", {
            type: "loop",
            drag: "free",
            focus: "center",
            perPage: 2,
            breakpoints: {
                640: {
                    perPage: 1,
                },
            },
            autoScroll: {
                speed: 1,
            },
        });

        splide.mount({ AutoScroll });
    }, []);

    return (
        <>
            <Head title={component} />
            <div className="bg-white">
                <div className="relative w-screen h-full bg-gradient-to-r from-green-600 to-lime-600">
                    <div className=" absolute hidden md:block right-0  h-full ">
                        <img src={logo} alt="logo" className="opacity-25" />
                    </div>
                    <div className="z-20 w-full px-10 flex flex-col items-center justify-between pt-5 md:flex-row">
                        <div className=" z-20 flex flex-col justify-center h-full">
                            <h2 className="text-4xl sm:text-6xl font-bold text-white mt-20 md:mt-0">
                                Welcome to Sourcereflect
                            </h2>
                            <p className="text-white py-4 max-w-md">
                                Empowering Nigeria's Fisheries Sector for
                                Socio-Economic Development!
                            </p>
                            <div>
                                <Link href="/partner-with-us">
                                    <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md border-2 border-white cursor-pointer">
                                        PARTNER
                                    </button>
                                </Link>
                            </div>
                        </div>

                        <div className="z-20 flex flex-col sm:flex-row gap-10 mt-10 md:mt-40 md:pt-56">
                            <a
                                href={
                                    "https://www.linkedin.com/in/popoola-samson-343129b9"
                                }
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative"
                            >
                                <div className="bg-white h-60 w-60 p-4 rounded-lg">
                                    <img
                                        src={heroImage}
                                        alt="my profile"
                                        className="mx-auto mb-10"
                                    />
                                </div>
                                <button className="absolute bottom-1.5 translate-x-1/4 bg-white border border-blue-500 text-blue-500 px-4 py-2 mt-2 items-center rounded-md">
                                    Popoola Samson <br />
                                    <p className="font-bold">FOUNDER</p>
                                </button>
                            </a>
                            <a
                                href={
                                    "https://www.linkedin.com/in/adedoyin-solomon-3b596b19a"
                                }
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative"
                            >
                                <div className="bg-white h-60 w-60 p-4 rounded-lg">
                                    <img
                                        src={heroImage1}
                                        alt="my profile"
                                        className="mx-auto mb-10"
                                    />
                                </div>
                                <button className="absolute bottom-1.5 translate-x-1/4 bg-white border border-blue-500 text-blue-500 px-4 py-2 mt-2 items-center rounded-md">
                                    Segun Adedoyin <br />
                                    <p className="font-bold">CO-FOUNDER </p>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="h-full bg-white w-screen">
                    <div className="flex lg:flex-row flex-col m-10 sm:m-20  xl:gap-52 gap-10 items-center justify-between">
                        <Slider sliderData={sliderData} />
                        <div className="flex flex-col basis-1/2 xl:basis-3/2">
                            <div className="border-t-2 border-gray-500 w-8 p-1"></div>
                            <div className="text-3xl text-blue-300 inline ">
                                About us
                            </div>
                            <div>
                                <h1 className="my-5 text-2xl"> Mission</h1>
                                <p className=" text-gray-500">
                                    Our primary mission is to provide free
                                    training and education to schools,
                                    communities, and individuals across Nigeria,
                                    focusing on harnessing the country's
                                    resources for socio-economic development in
                                    the fisheries sector. With expertise in
                                    aquarium construction and design,
                                    aquaculture, fish feed formulation and
                                    production, as well as fish processing, we
                                    aim to equip participants with the knowledge
                                    and skills necessary to excel in these
                                    areas.
                                </p>
                            </div>
                            <Link
                                href="/about"
                                className="flex text-blue-300 cursor-pointer items-center justify-end"
                            >
                                See More <BsArrowRight />{" "}
                            </Link>
                        </div>
                    </div>
                </div>
                <div
                    className="splide p-16 w-screen bg-gradient-to-r from-green-600 to-lime-600 text-white font-medium text-xs md:text-sm"
                >
                    <div className="splide__track">
                        <ul className="splide__list">
                            <li className="splide__slide px-5">
                                <div className="flex flex-col gap-2">
                                    <p>
                                        I have been involved in the fishery
                                        class for years, but I had never had the
                                        opportunity to see an aquarium in
                                        person, let alone construct one myself.
                                        However, thanks to Sourcerflect. I had
                                        the privilege of building and decorating
                                        a small-scale aquarium with my own
                                        hands.{" "}
                                    </p>
                                    <p>
                                        My experience with the sourcereflect
                                        team was truly remarkable. They employs
                                        a unique teaching method where he
                                        consistently includes relevant content
                                        related to the topics he covers.
                                    </p>
                                    <p>
                                        Additionally, he ensures that we
                                        practice everything we learn, which
                                        helps us retain the knowledge we have
                                        gained till date.
                                    </p>
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={usman}
                                            alt="Image 1"
                                            className="rounded-full sm:h-20 sm:w-20 w-12 h-12"
                                        />
                                        <div className="flex flex-col text-xs">
                                            <p className="text-gray-200">
                                                Usman Abubakar
                                            </p>
                                            <p>Koramo secondary school</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="splide__slide px-5">
                                <div className="flex flex-col gap-2">
                                    <p>
                                        The teacher and the students of fishery
                                        unit in the Science department of Kuramo
                                        Senior College, Victoria Island, wish to
                                        express our profound gratitude to Mr
                                        Samson and his team for the assistance
                                        rendered in the past.{" "}
                                    </p>
                                    <p>
                                        We appreciate the skills and knowledge
                                        you impacted on us in the field of
                                        fishery as a trade subject as required
                                        by the scheme of work in the school.
                                    </p>
                                    <p>
                                        We are very grateful for all your
                                        efforts in the past two terms and look
                                        forward to more cordial practical
                                        sessions in the future
                                    </p>
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={teacher}
                                            alt="Image 1"
                                            className="rounded-full sm:h-20 sm:w-20 w-12 h-12"
                                        />
                                        <div className="flex flex-col text-xs">
                                            <p className="text-gray-200">
                                                Mr Orowale Clement
                                            </p>
                                            <p>Agricultural Teacher</p>
                                            <p>Koramo secondary school</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="splide__slide px-5">
                                <div className="flex flex-col gap-2">
                                    <p>
                                        Hands-on fishery involvement improved my
                                        academics. Excelling in most subjects at
                                        Kuramo Senior College, I struggled in
                                        fisheries until practical sessions with
                                        Mr. Samson. Activities like fish feed
                                        formulations, aquarium design, fish
                                        culturing, and habitat assessments
                                        provided insights textbooks couldn't.
                                        This practical experience deepened my
                                        understanding of fish behavior, habitat
                                        requirements, and industry challenges,
                                        bridging theory and practice.
                                    </p>
                                    <p>
                                        The experience also honed my
                                        problem-solving skills, critical
                                        thinking, and personal growth, laying a
                                        foundation for future success. Grateful
                                        for the opportunity.
                                    </p>
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={akiola}
                                            alt="Image 1"
                                            className="rounded-full sm:h-20 sm:w-20 w-12 h-12"
                                        />
                                        <div className="flex flex-col text-xs">
                                            <p className="text-gray-200">
                                                Akiola Modupe Summayyah
                                            </p>
                                            <p>Koramo secondary school</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
