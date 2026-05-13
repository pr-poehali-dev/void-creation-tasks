export function Footer() {
  return (
    <footer className="py-8 px-6 lg:px-12 border-t border-border">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-serif text-xl font-semibold text-primary">Плам</p>
        <p className="text-xs text-muted-foreground text-center">
          &copy; 2018 – {new Date().getFullYear()} Плам. Внедрение ИИ-решений.
        </p>
        <nav className="flex gap-6">
          <a href="#solutions" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Решения</a>
          <a href="#services" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Услуги</a>
          <a href="#contact" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Контакты</a>
        </nav>
      </div>
    </footer>
  )
}