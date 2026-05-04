import { useEffect, useRef, useState } from "react"
import Icon from "@/components/ui/icon"

const services = [
  {
    icon: "BrainCircuit",
    title: "Разработка и внедрение ИИ-решений",
    description: "Создаём ИИ-агентов и модели под задачи вашего бизнеса. От прототипа до боевого внедрения — под ключ.",
  },
  {
    icon: "RefreshCw",
    title: "Обновление ИИ-моделей",
    description: "Регулярная переобучка и дообучение моделей на ваших данных. Качество растёт с каждой итерацией.",
  },
  {
    icon: "Plug",
    title: "Интеграция с Битрикс24 и 1С",
    description: "Подключаем ИИ-решения к вашим CRM и ERP-системам без остановки бизнес-процессов.",
  },
]

export function Services() {
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
      id="services"
      className="px-6 lg:px-12 py-12 bg-sand/60"
      style={{ minHeight: "25vh" }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <p
            className={`text-xs tracking-[0.25em] uppercase text-primary mb-3 font-medium transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Что мы делаем
          </p>
          <h2
            className={`font-serif text-3xl md:text-4xl font-semibold text-foreground transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Наши услуги
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group p-7 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${200 + index * 120}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                <Icon name={service.icon} fallback="Cpu" size={24} />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-3 leading-snug">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
