import  Nav  from '@/components/Nav';
import { NavMain } from '@/components/nav-main';
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
    </>
);