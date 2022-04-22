import React, { ReactNode } from 'react';
import Header from '../header/header';

interface LayoutProps {
    children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <div>
                <Header />
            </div>
            <main>{children}</main>
        </>
    )
}

export default Layout;