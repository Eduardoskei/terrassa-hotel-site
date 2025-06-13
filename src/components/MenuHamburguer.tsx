interface MenuHamburguerProps {
  onClose: () => void
}

export function MenuHamburguer({ onClose }: MenuHamburguerProps) {
  return (
    <div className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 p-4 flex flex-col">
      <button onClick={onClose} className="text-right mb-6 text-gray-700 font-bold">✖ Fechar</button>
      <nav className="flex flex-col gap-6 text-gray-700 text-lg">
        <a href="#">🏠 Início</a>
        <a href="#">📄 Vagas</a>
        <a href="#">👤 Perfil</a>
      </nav>
    </div>
  )
}
