
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ContactInfo from '@/components/sections/Contact';
import FuturisticBackground from '@/components/common/FuturisticBackground';

type PageLayoutProps = {
  children: React.ReactNode;
  showContact?: boolean;
};

const PageLayout = ({ children, showContact = true }: PageLayoutProps) => {
  const location = useLocation();

  // Effect to scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="bg-white/95 w-full overflow-x-hidden min-h-screen relative">
      <FuturisticBackground />
      <Navbar />
      {children}
      {showContact && <ContactInfo />}
      <Footer />
    </div>
  );
};

export default PageLayout;
