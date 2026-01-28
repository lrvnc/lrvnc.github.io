export type ProjectItem = {
    title: string;
    description: string;
    image: string;
    tags: string[];
    liveUrl: string | null;
    sourceUrl: string;
};

export const portfolioData: ProjectItem[] = [
    {
        title: "Project SSim",
        description:
            "A full-featured e-commerce site with product listings, cart, and checkout.",
        image:
            "https://github.com/lrvnc/project-SSim/raw/master/draw_control_example.gif",
        tags: ["Python", "CoppeliaSim", "Robotics"],
        liveUrl: null,
        sourceUrl: "https://github.com/lrvnc/project-SSim",
    },
    {
        title: "Backprop Tutorial",
        description:
            "Implementing the famous backprop algorithm from scratch using only numpy!",
        image:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FaircAruvnKk%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=fbabe5714e059f5d18c938efe2c4229377bdc30ad5a3b8be5a9876e687bfb110",
        tags: ["Numpy", "Neural Networks"],
        liveUrl: null,
        sourceUrl: "https://github.com/lrvnc/backprop-tutorial",
    },
    {
        title: "Qiskit Tutorial",
        description:
            "An introductory tutorial to Qiskit developed during my masters at ESPCI in Quantum Engineering",
        image:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frepository-images.githubusercontent.com%2F83821669%2F9207357a-cf9b-45ed-9974-0abc3df14b95&f=1&nofb=1&ipt=bb53ed66c9a7c3f7b99e2f71b6a3b4a11dc5e63118d12cd71774e22b6819c304",
        tags: ["Qiskit", "Quantum Computing"],
        liveUrl: null,
        sourceUrl: "https://github.com/lrvnc/qiskit_espci",
    },
];
