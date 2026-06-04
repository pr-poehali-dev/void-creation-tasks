import { useEffect, useRef, useState } from "react"
import Icon from "@/components/ui/icon"

const stages = [
  {
    week: "Неделя 1–2",
    icon: "Search",
    title: "Диагностика и аудит",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    border: "border-blue-500/30",
    tasks: [
      "Интервью с юристами и руководителем договорного отдела",
      "Анализ типовых договоров: НДА, поставки, аренда, услуги",
      "Выявление узких мест: где теряется время, где возникают ошибки",
      "Определение критериев риска для конкретной компании",
    ],
    result: "Техническое задание и карта рисков",
  },
  {
    week: "Неделя 3–4",
    icon: "Database",
    title: "Подготовка данных",
    color: "text-violet-500",
    bg: "bg-violet-500/10",
    border: "border-violet-500/30",
    tasks: [
      "Сбор и обезличивание архива договоров (от 500 документов)",
      "Разметка примеров рисков: условия, санкции, нарушения законодательства",
      "Подготовка эталонных формулировок для сравнения",
      "Настройка защищённого хранилища данных",
    ],
    result: "Обучающий датасет и инфраструктура",
  },
  {
    week: "Неделя 5–6",
    icon: "BrainCircuit",
    title: "Разработка MVP",
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/30",
    tasks: [
      "Дообучение языковой модели на документах компании",
      "Разработка модуля выверки: соответствие шаблону и нормам",
      "Разработка модуля поиска рисков с классификацией по уровням",
      "Первичное тестирование на 50 реальных договорах",
    ],
    result: "Рабочий прототип ИИ-агента",
  },
  {
    week: "Неделя 7–8",
    icon: "FlaskConical",
    title: "Пилот в отделе",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
    border: "border-amber-500/30",
    tasks: [
      "Запуск параллельной проверки: юрист + ИИ на реальных задачах",
      "Сбор обратной связи от команды, фиксация расхождений",
      "Дообучение модели по результатам пилота",
      "Интеграция с системой документооборота (1С, SharePoint, и др.)",
    ],
    result: "Верифицированная модель с метриками точности",
  },
  {
    week: "Неделя 9–10",
    icon: "GitMerge",
    title: "Интеграция и обучение",
    color: "text-teal-500",
    bg: "bg-teal-500/10",
    border: "border-teal-500/30",
    tasks: [
      "Полная интеграция с корпоративными системами компании",
      "Настройка ролей: юрист, согласующий, руководитель",
      "Обучение сотрудников работе с интерфейсом ИИ-агента",
      "Настройка уведомлений и журнала проверок",
    ],
    result: "Система готова к боевой эксплуатации",
  },
  {
    week: "Неделя 11–12",
    icon: "BarChart2",
    title: "Запуск и сопровождение",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/30",
    tasks: [
      "Перевод всего потока договоров на обработку через ИИ",
      "Мониторинг KPI: скорость проверки, количество найденных рисков",
      "Ежемесячное дообучение модели на новых данных",
      "Отчёт об экономическом эффекте для руководства",
    ],
    result: "Снижение времени проверки в 15–20 раз",
  },
]

export function Roadmap() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.05 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="roadmap"
      className="px-6 lg:px-12 py-12 bg-sand/60"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2
            className={`font-serif text-3xl md:text-4xl font-semibold text-foreground transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Дорожная карта внедрения
          </h2>
          <p
            className={`text-muted-foreground text-sm mt-3 max-w-xl mx-auto leading-relaxed transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Пример для корпоративной компании — внедрение ИИ-агента в договорной отдел. Срок: 12 недель.
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-border -translate-x-1/2" />

          <div className="space-y-6">
            {stages.map((stage, index) => {
              const isLeft = index % 2 === 0
              return (
                <div
                  key={stage.title}
                  className={`relative md:flex ${isLeft ? "md:justify-start" : "md:justify-end"} transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                  }`}
                  style={{ transitionDelay: `${200 + index * 120}ms` }}
                >
                  <div className="hidden md:flex absolute left-[50%] -translate-x-1/2 top-6 w-4 h-4 rounded-full border-2 border-primary bg-background z-10" />

                  <div className={`md:w-[46%] rounded-2xl border bg-card p-6 ${stage.border} hover:shadow-md transition-shadow duration-300`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 rounded-xl ${stage.bg} ${stage.color} flex items-center justify-center shrink-0`}>
                        <Icon name={stage.icon} fallback="Cpu" size={20} />
                      </div>
                      <div>
                        <p className={`text-xs font-medium tracking-widest uppercase ${stage.color}`}>{stage.week}</p>
                        <h3 className="font-serif text-base font-semibold text-foreground leading-snug">{stage.title}</h3>
                      </div>
                    </div>

                    <ul className="space-y-1.5 mb-4">
                      {stage.tasks.map((task) => (
                        <li key={task} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <Icon name="ChevronRight" fallback="ChevronRight" size={13} className={`${stage.color} shrink-0 mt-0.5`} />
                          {task}
                        </li>
                      ))}
                    </ul>

                    <div className={`flex items-center gap-2 pt-3 border-t ${stage.border}`}>
                      <Icon name="CheckCircle" fallback="CheckCircle" size={14} className={stage.color} />
                      <span className="text-xs font-medium text-foreground">{stage.result}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
