import  Nav  from '@/components/Nav';
import  Footer  from '@/components/Footer';
import { type BreadcrumbItem } from '@/types';
import { type ReactNode } from 'react';

interface GuestLayoutProps {
    children: ReactNode;
    breadcrumbs?: BreadcrumbItem[];
}

export default ({ children, breadcrumbs, ...props }: GuestLayoutProps) => (
    <>
    <Nav/>
    {children}
    <Footer/>
    </>
);