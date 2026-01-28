export type EduItem = {
    degree: string;
    university: string;
    period: string;
    location: string;
    description: string;
    highlights: string[];
};

export const educationData: EduItem[] = [
    {
        degree: "Joint PhD in Physics",
        university: "University of Queensland & University of Exeter",
        period: "Jan 2025 - Present",
        location: "Brisbane, AU & Exeter, UK",
        description:
            "Joint PhD between UQ (Go8) and the University of Exeter (Russell Group).",
        highlights: [
            "Thesis: Machine learning with optical wave propagation in disordered media",
            // "Topics: optical/photonic computing and reservoir computing",
        ],
    },
    {
        degree: "M.Sc. in Engineering",
        university: "ESPCI Paris - PSL",
        period: "Aug 2021 - Aug 2023",
        location: "Paris, France",
        description:
            "Grande École within Université PSL at the physics-chemistry interface, with extensive research training. Home to six Nobel Prizes; former directors include Marie Curie and Pierre-Gilles de Gennes. I chose to specialize in quantum and optical physics, and in scientific computing.",
        highlights: [
            "Awarded with the Excellence Scholarship from the ESPCI Fonds",
            // "GPA: 4.0/4.0",
        ],
    },
    {
        degree: "B.Sc. in Engineering Physics",
        university: "Federal University of São Carlos (UFSCar)",
        period: "Mar 2018 - Nov 2024",
        location: "São Carlos - SP, Brazil",
        description:
            "The Federal University of São Carlos is a leading Brazilian university and the first to offer an Engineering Physics program—establishing the course’s standards and tradition—with strong foundations in physics, mathematics, and computation.",
        highlights: [
            // "Extracurriculars: robotics team, junior enterprise, and tutoring",
            // "GPA: 8.46/10",
        ],
    },
    {
        degree: "Technical Certificate in Chemistry (Chemical Technician)",
        university: "ETEC Trajano Camargo",
        period: "Jan 2015 - Dec 2017",
        location: "Limeira - SP, Brazil",
        description:
            "Three-year technical program in chemistry with intensive laboratory practice for the chemical industry.",
        highlights: [
            "🏆 Prêmio Troféu Fumagalli — Outstanding Public High School Student (Limeira)",
        ],
    },
];
