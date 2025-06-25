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
          link="https://www.instagram.com/jacintosupermercados/"
          cargo="Operador(a) de Caixa"
          salario="R$700,00"
          requisitos={[
            "Ensino médio completo",
            "Boa comunicação",
            "Disponibilidade para turnos"
          ]}
        />

        <CardEmpresa
          logo="/atacarejo-logo.jpg"
          nome="Seu Atacarejo Amontada"
          vagas={6}
          corTexto="text-yellow-600"
          link="https://www.instagram.com/seuatacarejoamontadaofc/"
          cargo="Repositor(a) de Estoque"
          salario="R$800,00"
          requisitos={[
            "Responsável e organizado",
            "Ensino fundamental completo",
            "Proatividade e espírito de equipe"
          ]}
        />

        <CardEmpresa
          logo="/amontadaValley-logo.jpg"
          nome="Amontada Valley"
          vagas={7}
          corTexto="text-yellow-600"
          link="https://www.instagram.com/amontada.valley/"
          cargo="Desenvolvedor(a) Front-End"
          salario="R$ 1.500,00"
          requisitos={[
            "Conhecimento em HTML, CSS e JavaScript",
            "Noções básicas de React.js",
            "Habilidade para trabalhar em equipe"
          ]}
        />

        <CardEmpresa
          logo="/grills-logo.png"
          nome="Grills Burguer"
          vagas={3}
          corTexto="text-red-600"
          link="https://www.instagram.com/gri_lls_burger/"
          cargo="Chapeiro(a)"
          salario="R$ 700,00"
          requisitos={[
            "Experiência em cozinha",
            "Agilidade e organização",
            "Responsabilidade com higiene"
          ]}
        />

      </main>
    </div>
  )
}
