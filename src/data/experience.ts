export type WorkItem = {
    role: string;
    company: string;
    period: string;
    description: string;
};

export const workExperienceData: WorkItem[] = [
    {
        role: "Full Stack Developer",
        company: "Banco BTG Pactual",
        period: "Nov 2023 - Dec 2024",
        description:
            "Largest investment bank in Latin America. Developed automated systems for internal clients, gaining experience in both frontend and backend development, Amazon AWS, and DevOps. Estimated efficiency gains exceeded 220 hours per month.",
    },
    {
        role: "Research Intern in Computational Neurosciences",
        company: "MIT",
        period: "May 2023 - Nov 2023",
        description:
            "Worked in Prof. Guangyu Robert Yang's lab (now co-founder and CEO of Altera AI) as part of my Master’s degree placement, researching neural activity modeling in the small worm C. elegans using advanced neural networks.",
    },
    {
        role: "Research Intern",
        company: "LightOn",
        period: "Jul 2022 - Dec 2022",
        description:
            "Worked on the Qore Quantum Photonic Processor, a reconfigurable plug-and-play quantum circuit prototype, focusing on stabilization and calibration challenges.",
    },
];

export const teachingExperienceData: WorkItem[] = [
    {
        role: "TA in Experimental Physics II & Maths for Physicists",
        company: "University of Exeter",
        period: "Jan 2025 - Present",
        description: "Teaching Assistant in Experimental Physics II & Maths for Physicists.",
    },
    {
        role: "Math Tutor",
        company: "UFSCar (Peer Tutoring Program)",
        period: "Mar 2019 - Jul 2021",
        description:
            "Helped students build self-directed learning skills through peer tutoring, problem-set clinics, and exam preparation sessions.",
    },
];
