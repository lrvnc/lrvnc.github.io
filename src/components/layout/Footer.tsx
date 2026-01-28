
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 w-full">
      <div className="w-full container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Separator className="my-6 bg-gray-700" />
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Leandro R. Venâncio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
