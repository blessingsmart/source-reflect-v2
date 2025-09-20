import Hero from '@/components/Hero';
// import Partners from '@/components/Partners';
import Services from '@/components/Services';
import Testimonial from '@/components/Testimonials';
import Whychooseus from '@/components/WhyChooseUs';
import GuestLayout from '@/layouts/guest-layout';
import { Head, usePage } from '@inertiajs/react';

export default function Home() {
    const { component } = usePage();

    return (
        <GuestLayout>
            <Head title={component} />
            <Hero />
            <Services />
            <Whychooseus />
            <Testimonial />
            {/* <Partners /> */}
        </GuestLayout>
    );
}
