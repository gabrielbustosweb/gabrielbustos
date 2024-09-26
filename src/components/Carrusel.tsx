import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import reactIcon from '../assets/icons/react.svg';
import nodejsIcon from '../assets/icons/nodejs.svg';
import postgresqlIcon from '../assets/icons/postgresql.svg';
import typescriptIcon from '../assets/icons/typescript.svg';
import tailwindcssIcon from '../assets/icons/tailwindcss.svg';
import mongodbIcon from '../assets/icons/mongodb.svg';
import nextjsIcon from '../assets/icons/nextjs.svg';
import html5Icon from '../assets/icons/html5.svg';
import css3Icon from '../assets/icons/css3.svg';
import bitbucketIcon from '../assets/icons/bitbucket.svg';
import angularIcon from '../assets/icons/Angular.svg';
import gitHubIcon from '../assets/icons/GitHub.svg';
import kubernetesIcon from '../assets/icons/Kubernetes.svg';
import fastapiIcon from '../assets/icons/fastapi.svg';

const icons = [
    { src: reactIcon, alt: "React" },
    { src: nodejsIcon, alt: "Node.js" },
    { src: postgresqlIcon, alt: "PostgreSQL" },
    { src: typescriptIcon, alt: "TypeScript" },
    { src: tailwindcssIcon, alt: "Tailwind CSS" },
    { src: mongodbIcon, alt: "MongoDB" },
    { src: nextjsIcon, alt: "Next.js" },
    { src: html5Icon, alt: "HTML5" },
    { src: css3Icon, alt: "CSS3" },
    { src: bitbucketIcon, alt: "Bitbucket" },
    { src: angularIcon, alt: "Angular" },
    { src: gitHubIcon, alt: "GitHub" },
    { src: kubernetesIcon, alt: "Kubernetes" },
    { src: fastapiIcon, alt: "FastAPI" },
];

export default function Carrusel() {
    const [duplicatedIcons, setDuplicatedIcons] = useState(icons);

    useEffect(() => {
        setDuplicatedIcons([...icons, ...icons, ...icons]);
    }, []);

    return (
        <div className="overflow-hidden">
            <motion.div 
                className="flex items-center space-x-4"
                animate={{ x: ["100%", "-680%"] }}
                transition={{ 
                    x: { 
                        repeat: Infinity, 
                        repeatType: "loop", 
                        duration: 30, 
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