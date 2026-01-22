// To adjust logo sizes, you can change the `className` for each entry.
// For example, you can use Tailwind CSS height classes like 'h-10', 'h-12', 'h-16', etc.
export const logoMap: { [key: string]: { src: string; className?: string } } = {
  UFSCAR: { src: "/me/logos/UFSCar.svg", className: "h-16" },
  "ESPCI Paris": { src: "/me/logos/espci.png", className: "h-20" },
  MIT: { src: "/me/logos/mit.svg", className: "h-14" },
  "University of Exeter": { src: "/me/logos/uoe.png", className: "h-24" },
  "University of Queensland": {
    src: "/me/logos/UQlogo.png",
    className: "h-20",
  },
};

// Country flags for education/work experiece section.
export const countryFlags = {
  "Federal University of São Carlos (UFSCar)": {
    country: "Brazil",
    flag: "https://flagcdn.com/w40/br.png",
    className: "w-6 h-auto",
  },
  "ESPCI Paris - PSL": {
    country: "France",
    flag: "https://flagcdn.com/w40/fr.png",
    className: "w-6 h-auto",
  },
  "University of Queensland & University of Exeter": {
    country: "Australia & UK",
    flag: ["https://flagcdn.com/w40/au.png", "https://flagcdn.com/w40/gb.png"],
    className: "w-6 h-auto",
  },
  "ETEC Trajano Camargo": {
    country: "Brazil",
    flag: "https://flagcdn.com/w40/br.png",
    className: "w-6 h-auto",
  },
  "Banco BTG Pactual": {
    country: "Brazil",
    flag: "https://flagcdn.com/w40/br.png",
    className: "w-6 h-auto",
  },
  MIT: {
    country: "USA",
    flag: "https://flagcdn.com/w40/us.png",
    className: "w-6 h-auto",
  },
  LightOn: {
    country: "France",
    flag: "https://flagcdn.com/w40/fr.png",
    className: "w-6 h-auto",
  },
  "University of Exeter": {
    country: "UK",
    flag: "https://flagcdn.com/w40/gb.png",
    className: "w-6 h-auto",
  },
  "UFSCar (Peer Tutoring Program)": {
    country: "Brazil",
    flag: "https://flagcdn.com/w40/br.png",
    className: "w-6 h-auto",
  },
};
