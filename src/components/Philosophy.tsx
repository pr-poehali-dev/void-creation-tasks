import { useEffect, useRef, useState } from "react"
import Icon from "@/components/ui/icon"

const solutions = [
  { icon: "FileSearch", title: "Агенты для выверки информации в договорах" },
  { icon: "ListChecks", title: "Решения по сверке номенклатурных позиций" },
  { icon: "PenLine", title: "Оцифровка рукописных заявлений" },
  { icon: "ScanLine", title: "Оцифровка фотографий и сканов" },
  { icon: "FileText", title: "Агенты для чтения договоров" },
  { icon: "Users", title: "Агенты для синхронизации кадровых документов" },
]

export function Philosophy() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.1 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="solutions"
      className="px-6 lg:px-12 py-12"
      style={{ minHeight: "25vh" }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <p
            className={`text-xs tracking-[0.25em] uppercase text-primary mb-3 font-medium transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Что мы автоматизируем
          </p>
          <h2
            className={`font-serif text-3xl md:text-4xl font-semibold text-foreground transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Список решений
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {solutions.map((item, index) => (
            <div
              key={item.title}
              className={`group flex items-start gap-4 p-5 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-md hover:shadow-primary/10 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${200 + index * 80}ms` }}
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors duration-300">
                <Icon name={item.icon} fallback="Cpu" size={20} />
              </div>
              <p className="text-sm font-medium text-foreground leading-snug pt-1.5">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}