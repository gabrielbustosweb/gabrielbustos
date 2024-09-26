import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const icons = [
    { src: "/icons/react.svg", alt: "React" },
    { src: "/icons/nodejs.svg", alt: "Node.js" },
    { src: "/icons/postgresql.svg", alt: "PostgreSQL" },
    { src: "/icons/typescript.svg", alt: "TypeScript" },
    { src: "/icons/tailwindcss.svg", alt: "Tailwind CSS" },
    { src: "/icons/mongodb.svg", alt: "MongoDB" },
    { src: "/icons/NextJs.svg", alt: "Next.js" },
    { src: "/icons/HTML5.svg", alt: "HTML5" },
    { src: "/icons/CSS3.svg", alt: "CSS3" },
    { src: "/icons/JavaScript.svg", alt: "JavaScript" },
];

export default function Carrusel() {
    const [duplicatedIcons, setDuplicatedIcons] = useState(icons);

    useEffect(() => {
        setDuplicatedIcons([...icons, ...icons]);
    }, []);

    return (
        <div className="overflow-hidden">
            <motion.div 
                className="flex items-center space-x-4"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ 
                    x: { 
                        repeat: Infinity, 
                        repeatType: "loop", 
                        duration: 20, 
                        ease: "linear" 
                    },
                }}
            >
                {duplicatedIcons.map((icon, index) => (
                    <img
                        key={index}
                        src={icon.src}
                        alt={icon.alt}
                        className="h-16 w-16 object-contain mx-2"
                    />
                ))}
            </motion.div>
        </div>
    );
}



