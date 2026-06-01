import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Types } from "@/components/site/Types";
import { Services } from "@/components/site/Services";
import { HowWeWork } from "@/components/site/HowWeWork";
import { ProjectPhase } from "@/components/site/ProjectPhase";
import { Installation } from "@/components/site/Installation";
import { Special } from "@/components/site/Special";
import { ProjectVideos, InspectionVideos } from "@/components/site/VideoBlock";
import { Inspections, Anchors, NR35 } from "@/components/site/Inspections";
import { Faq } from "@/components/site/Faq";
import { ContactForm } from "@/components/site/ContactForm";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { ContactDialogProvider } from "@/components/site/ContactDialog";

const TITLE = "Projeto de Linha de Vida | Engenharia e Dimensionamento NR-35 | Engenhar+";
const DESCRIPTION =
  "Projeto de linha de vida com cálculo estrutural, ART, dimensionamento técnico e conformidade com a NR-35. Engenharia especializada em proteção contra quedas.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "O que está incluso no projeto de linha de vida?", acceptedAnswer: { "@type": "Answer", text: "Análise de risco, levantamento técnico, dimensionamento, especificação dos componentes, ART e documentação técnica." } },
            { "@type": "Question", name: "O projeto precisa ter ART?", acceptedAnswer: { "@type": "Answer", text: "Sim. O projeto deve ser elaborado por profissional legalmente habilitado com emissão da documentação técnica necessária." } },
            { "@type": "Question", name: "Vocês fazem apenas o projeto?", acceptedAnswer: { "@type": "Answer", text: "Também realizamos instalação, inspeção e acompanhamento técnico da solução implementada." } },
            { "@type": "Question", name: "O projeto atende à NR-35?", acceptedAnswer: { "@type": "Answer", text: "Sim. Todos os projetos são desenvolvidos conforme os requisitos aplicáveis para trabalho em altura." } },
            { "@type": "Question", name: "Vocês vendem equipamentos?", acceptedAnswer: { "@type": "Answer", text: "Não. Atuamos exclusivamente com projetos, inspeção e instalação." } },
          ],
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <ContactDialogProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <ProjectPhase />
          <Services />
          <HowWeWork />
          <Types />
          <Anchors />
          <Installation />
          <ProjectVideos />
          <Special />
          <Inspections />
          <InspectionVideos />
          <NR35 />
          <Faq />
          <ContactForm />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </ContactDialogProvider>
  );
}
