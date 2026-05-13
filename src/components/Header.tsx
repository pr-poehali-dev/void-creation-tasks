import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-md border-b border-border/50">
      <nav className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex h-16 items-center justify-between">
          <a href="/" className="font-serif text-2xl font-semibold tracking-wide text-primary">
            Плам
          </a>

          <div className="hidden md:flex items-center gap-10">
            <a href="#solutions" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
              Решения
            </a>
            <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
              Услуги
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
              Контакты
            </a>
            <a
              href="https://ai.plam-it.ru/"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2 bg-primary text-primary-foreground text-sm rounded-full hover:bg-primary/90 transition-all duration-300"
            >
              Демо стенд
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Открыть меню"
          >
            <span className={`block w-6 h-px bg-foreground transition-transform duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-px bg-foreground transition-opacity duration-300 ${isMenuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-px bg-foreground transition-transform duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${isMenuOpen ? "max-h-64 pb-8" : "max-h-0"}`}>
          <div className="flex flex-col gap-6 pt-4">
            <a href="#solutions" onClick={() => setIsMenuOpen(false)} className="text-sm text-muted-foreground hover:text-foreground transition-colors">Решения</a>
            <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-sm text-muted-foreground hover:text-foreground transition-colors">Услуги</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-sm text-muted-foreground hover:text-foreground transition-colors">Контакты</a>
          </div>
        </div>
      </nav>
    </header>
  )
}