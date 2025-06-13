interface CardEmpresaProps {
  logo: string
  nome: string
  vagas: number
  corTexto: string
}

export function CardEmpresa({ logo, nome, vagas, corTexto }: CardEmpresaProps) {
  return (
    <div className="bg-white rounded-xl p-4 mb-4 shadow-md max-w-full">
      <div className="flex items-center gap-3 mb-2">
        <img src={logo} alt={nome} className="w-12 h-12 object-contain" />
        <h3 className="text-lg font-bold leading-tight break-words">
          {nome.split(' ').map((linha, index) => (
            <div key={index}>{linha}</div>
          ))}
        </h3>
      </div>
      <div className={`flex items-center gap-2 mb-3 ${corTexto}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 ${corTexto}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <span>{vagas} vagas disponíveis</span>
      </div>
      <div className="flex flex-col sm:flex-row gap-2">
        <button className="bg-blue-500 text-white w-full sm:w-auto px-4 py-2 rounded-lg text-center">
          🔍 Saber mais
        </button>
        <button className="bg-green-500 text-white w-full sm:w-auto px-4 py-2 rounded-lg text-center">
          📤 Enviar currículo
        </button>
      </div>
    </div>
  )
}
