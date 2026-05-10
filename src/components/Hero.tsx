import { useEffect, useState } from "react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center px-6 lg:px-12"
      style={{ minHeight: "25vh", paddingTop: "64px" }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('https://cdn.poehali.dev/projects/4ed45475-2907-45dc-a7ac-aa2ed4b44799/files/7161f89f-9360-4411-9235-ef7c1275d8bc.jpg')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90" />

      <div className="relative z-10 max-w-4xl mx-auto text-center py-12">
        <p
          className={`text-xs tracking-[0.25em] uppercase text-primary mb-4 font-medium transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Мякое внедрение ИИ-агантов в бизнес
        </p>

        <h1
          className={`font-serif text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight text-foreground mb-6 text-balance transition-all duration-700 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Внедрение решений
          <span className="block text-primary">на ИИ-моделях</span>
        </h1>

        <p
          className={`text-base md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed mb-8 transition-all duration-700 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Внедрение инструментов ИИ в текущие бизнес-процессы
        </p>

        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-700 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <a
            id="demo"
            href="https://ai.plam-it.ru/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground text-sm font-medium rounded-full hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/20"
          >
            Наш демо стенд решений
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}