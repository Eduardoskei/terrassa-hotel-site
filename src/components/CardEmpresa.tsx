'use client'

import { useState } from 'react'

interface CardEmpresaProps {
  logo: string
  nome: string
  vagas: number
  corTexto: string
  link: string
  cargo: string
  salario: string
  requisitos: string[]
}

export function CardEmpresa({
  logo,
  nome,
  vagas,
  corTexto,
  link,
  cargo,
  salario,
  requisitos
}: CardEmpresaProps) {
  const [modalAberto, setModalAberto] = useState(false)
  const [curriculoAberto, setCurriculoAberto] = useState(false)
  const [arquivo, setArquivo] = useState<File | null>(null)

  function enviarCurriculo() {
    if (!arquivo) {
      alert('Selecione um arquivo antes de enviar!')
      return
    }

    alert(`Currículo enviado com sucesso para ${nome}!`)
    setCurriculoAberto(false)
    setArquivo(null)
  }

  return (
    <div className="bg-white rounded-xl p-4 mb-4 shadow-md w-full max-w-md mx-auto relative">

      <div className="flex items-center gap-3 mb-2">
        <a href={link} target="_blank" rel="noopener noreferrer">
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
        <button
          onClick={() => setModalAberto(true)}
          className="bg-blue-500 hover:bg-blue-700 transition-colors text-white w-full sm:w-auto px-4 py-2 rounded-lg text-center cursor-pointer"
        >
          🔍 Saber mais
        </button>
        <button
          onClick={() => setCurriculoAberto(true)}
          className="bg-green-500 hover:bg-green-700 transition-colors text-white w-full sm:w-auto px-4 py-2 rounded-lg text-center cursor-pointer"
        >
          📤 Enviar currículo
        </button>
      </div>

      {modalAberto && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-xl relative">
            <h2 className="text-xl font-bold mb-2">Vaga: {cargo}</h2>
            <p className="mb-2">
              <strong>Salário:</strong> {salario}
            </p>
            <p className="mb-2">
              <strong>Requisitos:</strong>
            </p>
            <ul className="list-disc list-inside mb-4">
              {requisitos.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
            <button
              onClick={() => setModalAberto(false)}
              className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
            >
              ✖ Fechar
            </button>
          </div>
        </div>
      )}

      {curriculoAberto && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-xl flex flex-col gap-4">
            <h2 className="text-xl font-bold">Envie seu currículo</h2>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={(e) => setArquivo(e.target.files?.[0] || null)}
              className="border border-gray-300 p-2 rounded cursor-pointer"
            />
            <div className="flex gap-2 justify-end">
              <button
                onClick={() => setCurriculoAberto(false)}
                className="bg-gray-500 hover:bg-gray-700 transition text-white px-4 py-2 rounded-lg cursor-pointer"
              >
                Cancelar
              </button>
              <button
                onClick={enviarCurriculo}
                className="bg-green-500 hover:bg-green-700 transition text-white px-4 py-2 rounded-lg cursor-pointer"
              >
                Enviar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
