import { Section, SectionTitle } from "./Section";
import { CtaButton } from "./CtaButton";

export function ContactForm() {
  return (
    <Section id="contato" tone="gray">
      <div className="mx-auto max-w-4xl rounded-3xl border border-border bg-card p-10 sm:p-14 text-center shadow-xl">
        <SectionTitle
          eyebrow="Solicite uma proposta"
          title="Solicite Seu Projeto de Linha de Vida"
          subtitle="Nossa equipe está pronta para desenvolver uma solução segura, eficiente e totalmente adequada à sua operação."
        />
        <div className="mt-10">
          <CtaButton size="lg">Quero solicitar um orçamento</CtaButton>
        </div>
      </div>
    </Section>
  );
}