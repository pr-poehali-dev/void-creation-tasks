import { useEffect, useRef, useState } from "react"
import Icon from "@/components/ui/icon"

const directions = [
  {
    icon: "FileText",
    title: "Обработка документов",
    tasks: "Выверка договоров, поиск рисков, сверка закрывающих документов",
    mvp: "4–6 недель",
    metrics: [
      "Сокращение времени проверки договора с 2 ч до 5 мин",
      "Снижение числа пропущенных рисков на 85%",
      "Экономия 1–3 FTE на юридический отдел",
    ],
  },
  {
    icon: "Video",
    title: "Видеоаналитика",
    tasks: "Соблюдение пром. безопасности, фиксация краж, эффективное время сотрудника, работа с маркировкой",
    mvp: "6–8 недель",
    metrics: [
      "Снижение инцидентов по охране труда на 60%",
      "Сокращение потерь от краж на 40–70%",
      "Рост полезного рабочего времени на 15–25%",
    ],
  },
  {
    icon: "ShoppingCart",
    title: "Ритейл",
    tasks: "Аналитика витрин и покупателей, маркировка, условия хранения, фиксация краж",
    mvp: "6–8 недель",
    metrics: [
      "Рост конверсии выкладки на 10–20%",
      "Снижение потерь от краж и списаний на 30–50%",
      "Экономия на инвентаризации до 40%",
    ],
  },
  {
    icon: "Stethoscope",
    title: "Медицина",
    tasks: "Обработка страховых случаев ОМС/ДМС, голосовой анамнез, работа со снимками",
    mvp: "8–12 недель",
    metrics: [
      "Сокращение времени оформления случая с 20 до 3 мин",
      "Снижение отказов страховщика на 25–35%",
      "Рост пропускной способности врача на 30%",
    ],
  },
  {
    icon: "Factory",
    title: "Производство",
    tasks: "Машинный контроль качества, пропускной режим, роботизация, работа с дронами",
    mvp: "8–12 недель",
    metrics: [
      "Снижение брака на выходе на 50–80%",
      "Сокращение затрат на ручной контроль качества на 60%",
      "Окупаемость решения за 6–18 месяцев",
    ],
  },
]

export function Directions() {
  const [isVisible, setIsVisible] = useState(false)
  const [active, setActive] = useState<number | null>(null)
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
      id="directions"
      className="px-6 lg:px-12 py-12"
      style={{ minHeight: "25vh" }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2
            className={`font-serif text-3xl md:text-4xl font-semibold text-foreground transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Наши направления
          </h2>
          <p
            className={`text-muted-foreground text-sm mt-3 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Нажмите на карточку, чтобы увидеть сроки и экономический эффект
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {directions.map((dir, index) => (
            <div
              key={dir.title}
              onClick={() => setActive(active === index ? null : index)}
              className={`group cursor-pointer rounded-2xl border transition-all duration-500 overflow-hidden ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              } ${
                active === index
                  ? "border-primary/50 shadow-lg shadow-primary/10 bg-card"
                  : "border-border bg-card hover:border-primary/30 hover:shadow-md hover:shadow-primary/10"
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className="p-6">
                <div className="flex items-start gap-4 mb-3">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 ${
                    active === index ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary group-hover:bg-primary/20"
                  }`}>
                    <Icon name={dir.icon} fallback="Cpu" size={22} />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-foreground leading-snug">{dir.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{dir.tasks}</p>
                  </div>
                </div>

                <div className={`transition-all duration-500 overflow-hidden ${active === index ? "max-h-64 opacity-100 mt-4" : "max-h-0 opacity-0"}`}>
                  <div className="pt-4 border-t border-border space-y-3">
                    <div className="flex items-center gap-2">
                      <Icon name="Clock" fallback="Clock" size={14} className="text-primary shrink-0" />
                      <span className="text-xs text-muted-foreground">MVP за <span className="font-semibold text-foreground">{dir.mvp}</span></span>
                    </div>
                    <ul className="space-y-1.5">
                      {dir.metrics.map((m) => (
                        <li key={m} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <Icon name="TrendingUp" fallback="TrendingUp" size={13} className="text-primary shrink-0 mt-0.5" />
                          {m}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
