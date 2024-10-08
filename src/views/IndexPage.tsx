import Carousel from '../components/Carrusel';
import gabiAnime from '../assets/gabi-anime.svg';
import { Link } from 'react-router-dom';

export default function IndexPage() {

  return (
    <>
      <div className="relative flex flex-col lg:flex-row items-center justify-center">

        <div className=" w-full lg:w-1/2 pt-8 pl-0 lg:pl-12">
          <div className="bg-gray-200 bg-opacity-30 p-8 rounded-3xl backdrop-blur-sm">
            <h1 className="text-4xl font-bold mb-4 text-amber-50">Bienvenid@ a mi sitio web</h1>
            <p className="text-xl mb-6 text-amber-50">
              Soy Gabriel Bustos, desarrollador fullStack apasionado por crear experiencias digitales únicas.
              Te invito a que explores mis proyectos y conozcas un poco más sobre mí.
            </p>
            <div className="flex justify-center">
              <Link to="/projects" className="bg-indigo-500 text-white px-6 py-2 rounded-lg hover:bg-indigo-600 transition-colors">
                Explora mis proyectos
              </Link>
            </div>
          </div>
          <div className="mt-8 overflow-hidden">
            <div className="flex whitespace-nowrap">
              <Carousel />
            </div>
          </div>
        </div>
        <div className="relative z-10 w-full lg:w-1/4 py-16 px-6">
          <img src={gabiAnime} alt="Ilustración de Gabriel Bustos" className="w-full h-auto max-w-md mx-auto" />
        </div>
      </div>
    </>
  )
}
