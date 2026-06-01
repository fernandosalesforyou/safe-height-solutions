import { Section, SectionTitle } from "./Section";

const pillars = [
  { title: "Excelência garantida", text: "Serviços com alto padrão técnico e certificações." },
  { title: "Soluções que transformam", text: "Projetos personalizados e eficazes." },
  { title: "Atendimento que conecta", text: "Relacionamento próximo, transparente e confiável." },
];

export function HowWeWork() {
  return (
    <Section tone="white">
      <SectionTitle
        eyebrow="Engenharia aplicada"
        title="Como Desenvolvemos Cada Projeto"
        subtitle="Cada projeto de linha de vida é elaborado por profissionais qualificados, garantindo soluções seguras, eficientes e economicamente viáveis para nossos clientes."
      />
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {pillars.map((p, i) => (
          <div
            key={p.title}
            className="rounded-xl bg-primary p-8 text-primary-foreground shadow-md hover:shadow-xl transition-shadow"
          >
            <div className="text-5xl font-bold text-accent">0{i + 1}</div>
            <h3 className="mt-4 text-xl font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm text-primary-foreground/80">{p.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}