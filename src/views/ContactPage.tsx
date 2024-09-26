import contactbg from '../assets/contact-bg.mp4'

export default function ContactPage() {
  return (
    <>
    <div className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center">
    <video
          autoPlay
          loop
          muted
          className="absolute z-0 w-full h-full object-cover opacity-90"
        >
          <source src={contactbg} type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>
    </div>
    </>
  )
}
