// resources/js/pages/Home.jsx
import ContactForm from '@/components/ContactForm';
import CulturalOrientation from '@/components/CulturalOrientation';
import FAQ from '@/components/FAQ';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Packages from '@/components/Packages';
import PainPoints from '@/components/PainPoints';
// import Partners from '@/components/Partners';
import Testimonials from '@/components/Testimonials';
import WhoWeHelp from '@/components/WhoWeHelp';
import GuestLayout from '@/layouts/guest-layout';
import { Head, usePage } from '@inertiajs/react';

export default function Home() {
    const { component } = usePage();

    return (
        <GuestLayout>
            <Head title={component} />
            <Hero />
            <PainPoints />
            <HowItWorks />
            <Packages />
            <WhoWeHelp />
            <CulturalOrientation />
            <Testimonials />
            <FAQ />
            <ContactForm />
            {/* <Partners /> */}
        </GuestLayout>
    );
}
