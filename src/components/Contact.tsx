import { useEffect, useRef, useState } from "react"
import Icon from "@/components/ui/icon"

const contacts = [
  { icon: "Mail", label: "Почта", value: "compay@plam-it.ru", href: "mailto:compay@plam-it.ru" },
  { icon: "MapPin", label: "Адрес", value: "Москва", href: null },
  { icon: "Send", label: "Telegram", value: "@plam_ai", href: "https://t.me/plam_ai" },
]

export function Contact() {
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
      id="contact"
      className="px-6 lg:px-12 py-12"
      style={{ minHeight: "25vh" }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2
            className={`font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Связаться с нами
          </h2>
          <p
            className={`text-muted-foreground max-w-md mx-auto text-sm leading-relaxed transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Готовы обсудить ваш проект — расскажите о задаче, и мы предложим подходящее решение.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          {contacts.map((item, index) => {
            const content = (
              <div
                key={item.label}
                className={`group flex flex-col items-center text-center gap-3 p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-md hover:shadow-primary/10 transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon name={item.icon} fallback="Info" size={22} />
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase text-muted-foreground mb-1">{item.label}</p>
                  <p className="text-sm font-medium text-foreground">{item.value}</p>
                </div>
              </div>
            )

            return item.href ? (
              <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                {content}
              </a>
            ) : (
              <div key={item.label}>{content}</div>
            )
          })}
        </div>
      </div>
    </section>
  )
}