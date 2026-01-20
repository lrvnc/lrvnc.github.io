import { FileText, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { sectionVariant } from "@/lib/animations";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type PubItem = {
  type: "Conference Paper" | "Journal" | "Preprint" | "Workshop" | string;
  title: string;
  venue: string;
  description: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  url?: string;
};

const publicationsData: PubItem[] = [
  {
    type: "Conference Paper",
    title:
      "Scaling Properties for Artificial Neural Network Models of a Small Nervous System",
    venue: "IEEE SoutheastCon 2024",
    description:
      "Co-authored work on scaling laws for ANN models of the *C. elegans* nervous system—exploring how model size and data affect predictive performance and biological plausibility. Preprint available.",
    icon: FileText,
    url: "https://www.biorxiv.org/content/10.1101/2024.02.13.580186.full.pdf",
  },
];

const PublicationCard = ({ item }: { item: PubItem }) => {
  const Icon = item.icon ?? FileText;
  return (
    <Card className="h-full bg-white/90 backdrop-blur border border-gray-200 hover:shadow-xl transition-all duration-300">
      <CardHeader className="flex flex-row items-start gap-4 pb-2">
        <div className="p-3 bg-gradient-to-br from-violet-100 to-indigo-100 rounded-2xl mt-1 shadow-sm">
          <Icon className="w-6 h-6" />
        </div>
        <div className="flex-1">
          <CardTitle className="text-lg font-semibold leading-tight">
            {item.title}
          </CardTitle>
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <Badge variant="secondary" className="rounded-full">
              {item.type}
            </Badge>
            <span className="text-sm text-gray-500">{item.venue}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-2 pl-20">
        <p className="text-base text-gray-700">{item.description}</p>
        {item.url && (
          <div className="mt-4">
            <Button asChild variant="outline" className="gap-2">
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                View paper <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const Publications = () => {
  const ACTIVATE_FROM = 4;
  const count = publicationsData.length;
  const useCarousel = count >= ACTIVATE_FROM;

  return (
    <motion.section
      id="publications"
      className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-2xl lg:text-3xl md:text-3xl sm:text-3xl xl:text-3xl font-bold text-center mb-12 text-gray-900">
          Publications & Conferences
        </h2>

        <div className="max-w-6xl mx-auto">
          {count === 0 && (
            <div className="max-w-2xl mx-auto">
              <Card className="bg-white/80 border-dashed border-2">
                <CardContent className="py-10 text-center text-gray-600">
                  <p>No publications yet—coming soon.</p>
                </CardContent>
              </Card>
            </div>
          )}

          {count > 0 && !useCarousel && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {publicationsData.map((item, idx) => (
                <PublicationCard key={idx} item={item} />
              ))}
            </div>
          )}

          {useCarousel && (
            <Carousel
              opts={{ align: "start", loop: true, containScroll: "trimSnaps" }}
              className="w-full relative"
            >
              <CarouselContent className="-ml-4">
                {publicationsData.map((item, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                  >
                    <PublicationCard item={item} />
                  </CarouselItem>
                ))}
              </CarouselContent>

              <CarouselPrevious className="absolute left-[-1rem] top-1/2 -translate-y-1/2 z-10 hidden md:flex" />
              <CarouselNext className="absolute right-[-1rem] top-1/2 -translate-y-1/2 z-10 hidden md:flex" />
            </Carousel>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default Publications;
