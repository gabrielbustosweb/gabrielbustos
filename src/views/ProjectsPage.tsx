import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "GuitarLA",
    description: "GuitarLA es una tienda de guitarras online.",
    image: "/gabrielbustos/guitarLA.jpg",
    link: "https://unrivaled-parfait-7d6338.netlify.app/"
  },
  {
    title: "Cocktail Search",
    description: "Cocktail Search es una aplicación que te permite buscar la receta de tus bebidas favoritas.",
    image: "/gabrielbustos/bebidas.jpg",
    link: "https://www.google.com"
  },
  {
    title: "Nombre del Proyecto 3",
    description: "Descripción del proyecto 3.",
    image: "https://via.placeholder.com/600x400",
    link: "https://www.google.com"
  },
  {
    title: "Nombre del Proyecto 4",
    description: "Descripción del proyecto 4.",
    image: "https://via.placeholder.com/600x400",
    link: "https://www.google.com"
  }
];


export default function ProjectsPage() {
  return (
    <>
      <div className="container mx-auto text-center py-16 px-11 bg-gray-200">
        <h1 className="text-4xl font-extrabold mb-4">Proyectos</h1>

        <p className="text-lg mb-8">
          Aquí puedes encontrar algunos de los proyectos en los que he trabajado.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </>
  )
}
