import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "Cocktail Search",
    description: "Cocktail Search es una aplicación que te permite buscar la receta de tus bebidas favoritas. Esta aplicación consume una API para obtener los datos de las bebidas y mostrarlas en pantalla. Además, permite filtrar las bebidas por nombre, por ingrediente y por tipo de bebida. La app está construida utilizando React, React Router, Tailwindcss, Zustand, Zod y mas.",
    image: "https://storage.cloud.google.com/gb_project_images/bebidas.jpg",
    link: "https://serene-dieffenbachia-f185f7.netlify.app"
  },
  {
    title: "Calorie Tracker",
    description: "Un contador de calorias donde el usuario puede llevar un registro de las calorias consumidas en cada alimento y las calorias quemadas por alguna actividad fisica. La aplicación está construida utilizando TypeScript, React y Tailwindcss.",
    image: "https://storage.cloud.google.com/gb_project_images/calorie-tracker.webp",
    link: "https://clinquant-crumble-2384a3.netlify.app/"
  },
  {
    title: "GuitarLA",
    description: "Una tienda online de guitarras. Los usuarios pueden navegar por una selección de guitarras, añadirlas a su carrito de compras, ajustar las cantidades y proceder a la compra. La aplicación está construida utilizando TypeScript y React.",
    image: "https://storage.cloud.google.com/gb_project_images/guitarla.jpg",
    link: "https://unrivaled-parfait-7d6338.netlify.app/"
  }
];


export default function ProjectsPage() {
  return (
    <>
      <div className="container mx-auto text-center py-32 px-11 ">
        <h1 className="text-4xl font-extrabold mb-4">Proyectos</h1>

        <p className="text-lg mb-8">
          Aquí puedes encontrar algunos de los proyectos en los que he trabajado.
        </p>

        <div className="grid grid-cols-1 gap-6 md:px-32">
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
