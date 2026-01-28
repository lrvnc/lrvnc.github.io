import { FileText } from "lucide-react";

export type PubItem = {
    type: string;
    title: string;
    venue: string;
    description: string;
    url?: string;
    icon?: any; // Using any to avoid complex type dependencies for now
};

export const publicationsData: PubItem[] = [
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
