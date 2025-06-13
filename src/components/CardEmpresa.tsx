interface CardEmpresaProps {
  logo: string
  nome: string
  vagas: number
  corTexto: string
  link: string
}

export function CardEmpresa({ logo, nome, vagas, corTexto, link}: CardEmpresaProps) {
  return (
    <div className="bg-white rounded-xl p-4 mb-4 shadow-md w-full max-w-md mx-auto">
      <div className="flex items-center gap-3 mb-2">
        <a href={link} target="_blank">
          <img src={logo} alt={nome} className="w-20 h-20 object-contain" />
        </a>
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
      <div className="flex justify-evenly flex-col sm:flex-row gap-2">
        <button className="bg-blue-500 hover:bg-blue-700 transition-colors text-white w-full sm:w-auto px-4 py-2 rounded-lg text-center cursor-pointer">
          🔍 Saber mais
        </button>
        <button className="bg-green-500 hover:bg-green-700 transition-colors text-white w-full sm:w-auto px-4 py-2 rounded-lg text-center cursor-pointer">
          📤 Enviar currículo
        </button>
      </div>
    </div>
  )
}
