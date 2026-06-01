import { Section, SectionTitle } from "./Section";
import { Clock, Wrench, Users, TrendingDown, ScrollText, LifeBuoy } from "lucide-react";

const benefits = [
  {
    icon: ScrollText,
    title: "Projeto com ART inclusa",
    desc: "Memorial de cálculo, plantas e ART assinadas por engenheiro responsável — documentação completa para o seu SESMT e para fiscalizações.",
  },
  {
    icon: Wrench,
    title: "Instalação por equipe própria",
    desc: "Técnicos treinados em NR-35 e NR-18, com supervisão de engenharia em obra. Nada de terceirização sem rastreabilidade.",
  },
  {
    icon: TrendingDown,
    title: "Melhor custo-benefício",
    desc: "Dimensionamento otimizado evita superdimensionar a estrutura e reduz o investimento sem comprometer a segurança.",
  },
  {
    icon: Clock,
    title: "Prazo curto e previsível",
    desc: "Cronograma fechado por escrito: levantamento, projeto, fabricação e instalação com datas firmes.",
  },
  {
    icon: LifeBuoy,
    title: "Inspeção anual obrigatória",
    desc: "Acompanhamento pós-entrega com laudo técnico anual, exigido por norma para manter o sistema em uso.",
  },
  {
    icon: Users,
    title: "Treinamento da equipe",
    desc: "Capacitação dos usuários no uso correto do sistema, EPIs e procedimentos de resgate em altura.",
  },
];

export function Benefits() {
  return (
    <Section id="beneficios">
      <SectionTitle
        eyebrow="Por que contratar"
        title="O que está incluso no nosso serviço"
        subtitle="Entregamos um sistema de proteção contra quedas completo — do estudo de viabilidade à inspeção anual."
      />
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {benefits.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="rounded-2xl border border-border bg-background p-6 transition hover:border-accent hover:shadow-md"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent/15 text-accent-hover">
              <Icon className="h-5 w-5" />
            </span>
            <h3 className="mt-4 text-base font-semibold text-primary">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
