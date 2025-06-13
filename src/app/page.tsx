import { NavBar } from '../components/NavBar'
import { CardEmpresa } from '../components/CardEmpresa'

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen pt-[64px] px-4">
      <NavBar />
      <main className="mt-4">
        <h2 className="text-xl font-bold mb-4">Empresas locais</h2>

        <CardEmpresa
          logo="/jacinto-logo.png"
          nome="Jacinto Supermercado"
          vagas={14}
          corTexto="text-green-600"
        />
        <CardEmpresa
          logo="/seuatacarejo-logo.png"
          nome="Seu atacarejo Amontada"
          vagas={6}
          corTexto="text-yellow-600"
        />
      </main>
    </div>
  )
}
