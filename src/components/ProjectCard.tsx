type ProjectCardProps = {
    title: string;
    description: string;
    image: string;
    link: string;
}

export default function ProjectCard({ title, description, image, link }: ProjectCardProps) {
    console.log(image)
    return (
        <div 
            className="p-6 rounded-lg shadow-md bg-cover bg-center"
            style={{ backgroundImage: `url('${image}')` }}
        >
            <div className="bg-white bg-opacity-80 p-4 rounded">
                <h2 className="text-2xl font-semibold mb-2">{title}</h2>
                <p className="text-gray-600">{description}</p>
                <div className="mt-4">
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        onClick={() => window.open(link, '_blank')}
                    >
                        Ver más
                    </button>
                </div>
            </div>
        </div>
    )
}
