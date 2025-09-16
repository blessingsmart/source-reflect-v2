import  Nav  from '@/components/Nav';
import  Hero  from '@/components/Hero';
import  Footer  from '@/components/Footer';
import  Services  from '@/components/Services';
import  Whychooseus  from '@/components/WhyChooseUs';
import  Testimonial  from '@/components/Testimonials';
import  Partners  from '@/components/Partners';
import { type BreadcrumbItem } from '@/types';
import { type ReactNode } from 'react';

interface GuestLayoutProps {
    children: ReactNode;
    breadcrumbs?: BreadcrumbItem[];
}

export default ({ children, breadcrumbs, ...props }: GuestLayoutProps) => (
    <>
    <Nav/>
    <Hero/>
    <Services/>
    <Whychooseus/>
    <Testimonial/>
    <Partners/>
    <Footer/>
    </>
);