import React from 'react';
import HeaderSection from "@/components/shared/HeaderSection";
import NavbarSection from '@/components/shared/NavbarSection';
const mainLayout = ({children}) => {
    return (
        <div>
            <HeaderSection></HeaderSection>
            <NavbarSection></NavbarSection>
            {children}
        </div>
    );
};

export default mainLayout;