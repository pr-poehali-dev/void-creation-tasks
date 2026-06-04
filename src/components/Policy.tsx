import { useEffect, useRef, useState } from "react"
import Icon from "@/components/ui/icon"

const documents = [
  {
    year: "2019",
    tag: "Национальная стратегия",
    icon: "ScrollText",
    title: "Указ Президента РФ № 490",
    date: "10 октября 2019 г.",
    formulation:
      "О развитии искусственного интеллекта в Российской Федерации",
    description:
      "Утверждена Национальная стратегия развития ИИ до 2030 года. Определены приоритетные направления: здравоохранение, транспорт, государственное управление, финансы и промышленность. Поставлена задача войти в число мировых лидеров в области ИИ.",
  },
  {
    year: "2019",
    tag: "Федеральный проект",
    icon: "Landmark",
    title: "Федеральный проект «Искусственный интеллект»",
    date: "Декабрь 2019 г.",
    formulation:
      "В рамках национальной программы «Цифровая экономика Российской Федерации»",
    description:
      "Предусмотрено финансирование исследований и разработок в области ИИ, создание центров компетенций, поддержка отечественных ИИ-стартапов и формирование нормативной базы для применения ИИ-технологий в коммерческой деятельности.",
  },
  {
    year: "2020",
    tag: "Регуляторный эксперимент",
    icon: "FlaskConical",
    title: "Федеральный закон № 258-ФЗ",
    date: "24 апреля 2020 г.",
    formulation:
      "Об экспериментальных правовых режимах в сфере цифровых инноваций в Российской Федерации",
    description:
      "Введён механизм «регуляторных песочниц»: компании получили право применять ИИ-решения без соблюдения ряда действующих ограничений в рамках контролируемого эксперимента. Первая «песочница» запущена в Москве для технологий компьютерного зрения и обработки данных.",
  },
  {
    year: "2021",
    tag: "Концепция",
    icon: "BookOpen",
    title: "Концепция регулирования ИИ и робототехники",
    date: "Утверждена Правительством РФ, 2021 г.",
    formulation:
      "Концепция развития регулирования отношений в сфере технологий искусственного интеллекта и робототехники до 2024 года",
    description:
      "Определены принципы этичного ИИ: прозрачность, безопасность, недискриминационность. Установлен план формирования законодательной базы для применения ИИ в медицине, транспорте, промышленности и госуправлении.",
  },
  {
    year: "2023",
    tag: "Кодекс этики",
    icon: "ShieldCheck",
    title: "Национальный кодекс этики в сфере ИИ",
    date: "Октябрь 2023 г.",
    formulation:
      "Национальный кодекс этики в области искусственного интеллекта (обновлённая редакция)",
    description:
      "Добровольный отраслевой стандарт, подписанный ведущими российскими компаниями (Сбер, Яндекс, Mail.ru и др.). Закрепляет принципы ответственного применения ИИ: объяснимость решений, защита персональных данных, недопустимость дискриминации и обязательный контроль человека над критически важными решениями.",
  },
  {
    year: "2024",
    tag: "Стратегия до 2030",
    icon: "Target",
    title: "Обновлённая Национальная стратегия ИИ",
    date: "2024 г.",
    formulation:
      "Актуализация Национальной стратегии развития искусственного интеллекта на период до 2030 года",
    description:
      "Расширены целевые показатели: увеличение числа компаний, применяющих ИИ, до 50% в ключевых отраслях к 2030 году. Введены меры стимулирования: налоговые льготы на R&D в области ИИ, субсидии на закупку отечественных ИИ-решений, программы переобучения кадров.",
  },
]

export function Policy() {
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
      id="policy"
      className="px-6 lg:px-12 py-12 bg-sand/60"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2
            className={`font-serif text-3xl md:text-4xl font-semibold text-foreground transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Государственная политика
          </h2>
          <p
            className={`text-muted-foreground text-sm mt-3 max-w-xl mx-auto leading-relaxed transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Ключевые указы и директивы Российской Федерации в области искусственного интеллекта с 2019 года
          </p>
        </div>

        <div className="space-y-4">
          {documents.map((doc, index) => (
            <div
              key={doc.title}
              className={`rounded-2xl border border-border bg-card p-6 hover:border-primary/30 hover:shadow-md hover:shadow-primary/10 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="flex items-center gap-3 md:w-64 shrink-0">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Icon name={doc.icon} fallback="FileText" size={20} />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-primary tracking-wide uppercase">{doc.year} · {doc.tag}</span>
                    <p className="text-xs text-muted-foreground mt-0.5">{doc.date}</p>
                  </div>
                </div>

                <div className="flex-1 border-t md:border-t-0 md:border-l border-border pt-4 md:pt-0 md:pl-6">
                  <h3 className="font-serif text-base font-semibold text-foreground mb-1">{doc.title}</h3>
                  <p className="text-xs text-primary/80 italic mb-3 leading-relaxed">«{doc.formulation}»</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{doc.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
