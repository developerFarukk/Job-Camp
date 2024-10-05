
import React from "react";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="mx-auto w-[95%] p-6 lg:px-8">
            {/* Header Components */}
            <div>
                <p>This is Header</p>
            </div>

            {/* Main content */}
            <main>
                {children}
            </main>

            {/* Footer Components */}
        </div>
    );
};

export default CommonLayout;
