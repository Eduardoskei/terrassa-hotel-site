import { NavBar } from '../components/NavBar'
import { CardEmpresa } from '../components/CardEmpresa'

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen pt-[64px] px-4">
      <NavBar />
      <main className="mt-4">
        <h2 className="flex justify-center text-xl font-bold mb-4 text-center sm:text-left">Empresas locais</h2>

        <CardEmpresa
          logo="/jacinto-logo.jpg"
          nome="Jacinto Supermercado"
          vagas={14}
          corTexto="text-green-600"
          link='https://www.instagram.com/jacintosupermercados/'
        />
        <CardEmpresa
          logo="/atacarejo-logo.jpg"
          nome="Seu atacarejo Amontada"
          vagas={6}
          corTexto="text-yellow-600"
          link='https://www.instagram.com/seuatacarejoamontadaofc/'
        />
        <CardEmpresa
          logo='/amontadaValley-logo.jpg'
          nome='Amontada Valley'
          vagas={7}
          corTexto='text-yellow-600'
          link='https://www.instagram.com/amontada.valley/'
        />
        <CardEmpresa
          logo='/grills-logo.png'
          nome='Grills Burguer'
          vagas={3}
          corTexto='text-red-600'
          link='https://www.instagram.com/gri_lls_burger/'
        />

      </main>
    </div>
  )
}
