
import React from "react";
import Navbar from "../Navebar/Navbar";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="mx-auto lg:w-[95%] md:w-[98%] p-2 lg:px-8">
            {/* Header Components */}
            <div>
                <Navbar></Navbar>
            </div>

            {/* Main content */}
            <main>
                {children}
            </main>

            {/* Footer Components */}
            <p>This is footer</p>
        </div>
    );
};

export default CommonLayout;
