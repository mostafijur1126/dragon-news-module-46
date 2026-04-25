import React from 'react';
import NavbarSection from "@/components/shared/NavbarSection";
const authLayout = ({children}) => {
    return (
        <div>
            <NavbarSection></NavbarSection>
            {children}
        </div>
    );
};

export default authLayout;