import { Section, SectionTitle } from "./Section";
import { ShieldCheck, FileCheck2, HardHat, BadgeCheck } from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "NR-35 — Trabalho em Altura",
    desc: "Todo projeto atende integralmente à Norma Regulamentadora 35 do Ministério do Trabalho, que define os requisitos mínimos de segurança para atividades acima de 2 metros do nível inferior.",
  },
  {
    icon: FileCheck2,
    title: "ABNT NBR 16325",
    desc: "Dimensionamento dos dispositivos de ancoragem conforme a norma brasileira vigente — tipos A, B, C e D — garantindo resistência testada e rastreabilidade dos componentes.",
  },
  {
    icon: HardHat,
    title: "ART de Engenharia",
    desc: "Emitimos a Anotação de Responsabilidade Técnica (ART) junto ao CREA, assegurando responsabilidade legal do engenheiro pelo projeto, instalação e inspeção.",
  },
  {
    icon: BadgeCheck,
    title: "Componentes certificados (CA)",
    desc: "Trabalhamos apenas com EPIs e equipamentos com Certificado de Aprovação (CA) emitido pelo Ministério do Trabalho, com lote, validade e nota fiscal rastreáveis.",
  },
];

export function Standards() {
  return (
    <Section id="normas" tone="gray">
      <SectionTitle
        eyebrow="Conformidade técnica"
        title="Normas e regulamentações que seguimos"
        subtitle="Mais do que instalar uma linha de vida, entregamos um sistema em conformidade com a legislação brasileira, pronto para auditorias e fiscalizações."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {items.map(({ icon: Icon, title, desc }) => (
          <article
            key={title}
            className="rounded-2xl border border-border bg-background p-6 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="text-lg font-semibold text-primary">{title}</h3>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{desc}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
