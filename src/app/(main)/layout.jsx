import React from 'react';
import HeaderSection from "@/components/shared/HeaderSection";
import NavbarSection from '@/components/shared/NavbarSection';
import BrakingNews from '@/components/shared/BrakingNews';
// import Header from '@/components/shared/header';
const mainLayout = ({children}) => {
    return (
        <div>
            <HeaderSection></HeaderSection>
            <BrakingNews></BrakingNews>
            {/* <Header></Header> */}
            <NavbarSection></NavbarSection>
            {children}
        </div>
    );
};

export default mainLayout;