import { ReactNode } from 'react';
import { Navbar } from '../components/Navbar';

type LayoutType = {
    children?: React.ReactNode;
  }

  
export const Layout = ({ children }: LayoutType) => {
    return (
        <div>
            <Navbar />
            <main>
                {children}
            </main>
            {/* You can include a footer here if needed */}
        </div>
    );
};
