import { Section, SectionTitle } from "./Section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "O que é uma linha de vida e quando ela é obrigatória?",
    a: "Linha de vida é um sistema de ancoragem (horizontal ou vertical) usado para conectar o cinturão de segurança do trabalhador, evitando quedas em altura. É obrigatória sempre que houver atividade acima de 2 metros do nível inferior, conforme a NR-35.",
  },
  {
    q: "Vocês emitem ART do projeto e da instalação?",
    a: "Sim. Todo projeto contratado já inclui a Anotação de Responsabilidade Técnica (ART) do engenheiro responsável, tanto do projeto quanto da execução — documento exigido em auditorias e fiscalizações do MTE.",
  },
  {
    q: "Qual a diferença entre linha de vida temporária e permanente?",
    a: "A temporária é usada durante uma obra ou serviço específico e depois removida. A permanente é fixada definitivamente à estrutura (telhado, viga, fachada) e exige projeto, ART e inspeção anual.",
  },
  {
    q: "Com que frequência o sistema precisa ser inspecionado?",
    a: "A NBR 16325 e a NR-35 exigem inspeção visual antes de cada uso e uma inspeção técnica anual por profissional habilitado, com emissão de laudo. Realizamos esse serviço com agenda preventiva.",
  },
  {
    q: "Vocês atendem todo o Brasil?",
    a: "Sim. Atendemos projetos em todo o território nacional, com equipe própria nas principais regiões e parceiros homologados para deslocamentos. Solicite uma proposta informando a cidade do empreendimento.",
  },
  {
    q: "Quanto tempo leva entre a visita e a entrega do sistema?",
    a: "O prazo médio varia de 15 a 30 dias, dependendo do porte e da complexidade. Após a visita técnica, enviamos cronograma detalhado com datas de projeto, fabricação e instalação.",
  },
];

export function Faq() {
  return (
    <Section id="faq" tone="gray">
      <SectionTitle
        eyebrow="Dúvidas frequentes"
        title="Perguntas que recebemos com frequência"
        subtitle="Se a sua dúvida não estiver aqui, fale com nossa engenharia — respondemos em até 1 dia útil."
      />
      <div className="mx-auto mt-12 max-w-3xl">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-base font-semibold text-primary">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}
