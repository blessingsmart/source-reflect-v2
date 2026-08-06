// resources/js/pages/Home.jsx
import ContactForm from '@/components/ContactForm';
import Services from '@/components/Services';         // <-- new import
import DirectionSelector from '@/components/DirectionSelector';
import FAQ from '@/components/FAQ';
import BlogPreview from '@/components/BlogPreview';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Packages from '@/components/Packages';
import PainPoints from '@/components/PainPoints';
import Testimonials from '@/components/Testimonials';
import GuestLayout from '@/layouts/guest-layout';
import { Head, usePage } from '@inertiajs/react';

export default function Home() {
    const { component } = usePage();

    return (
        <GuestLayout>
            <Head>
                <title>Setudown | Relocation & Settlement Services in Nigeria and Abroad</title>
                <meta name="description" content="Professional relocation and settlement services for individuals, families and organisations moving abroad, moving to Nigeria or relocating within Nigeria." />
            </Head>
            <Hero />
            <DirectionSelector />
            <PainPoints />
            <HowItWorks />
            <Packages />
            <Services />                       
            <Testimonials />
            <BlogPreview />
            <FAQ />
            <ContactForm />
        </GuestLayout>
    );
}