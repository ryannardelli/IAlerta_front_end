import { useState } from "react";
import { Plus } from "lucide-react";
import type { FAQ } from "../../types/faq";

const faqs: FAQ[] = [
  {
    question: "O que é o IAlerta e como ele funciona?",
    answer:
      "O IAlerta é uma plataforma que analisa textos, imagens e documentos para identificar possíveis indícios de conteúdo gerado por Inteligência Artificial. Basta enviar o texto ou arquivo, e o sistema realiza a análise automaticamente, retornando um resultado claro e objetivo.",
  },
  {
    question: "Quais tipos de conteúdo posso analisar no IAlerta?",
    answer:
      "Você pode analisar textos digitados diretamente na plataforma, imagens e documentos enviados em formato de arquivo. O IAlerta extrai o conteúdo, normaliza o texto e aplica modelos de detecção de IA para gerar o resultado.",
  },
  {
    question: "O resultado da análise é 100% preciso?",
    answer:
      "O IAlerta utiliza modelos avançados de detecção de IA, mas nenhum sistema é 100% preciso. Os resultados devem ser utilizados como apoio à decisão, e não como prova absoluta.",
  },
  {
    question: "Meus dados e documentos estão seguros?",
    answer:
      "Sim. A segurança e a privacidade dos dados são prioridades no IAlerta. Os textos e documentos enviados são processados de forma segura e não são utilizados para outros fins.",
  },
];

export function FaqSection() {

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(index: number) {
  setOpenIndex(openIndex === index ? null : index);
}

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Cabeçalho */}
        <div className="text-center mb-16">
        <h2 className="text-sm font-semibold text-indigo-600 tracking-wide uppercase mb-3">
          Dúvidas frequentes
        </h2>

        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
          Perguntas sobre o IAlerta
        </h1>

        <p className="mt-4 text-lg text-slate-600">
          Entenda como funciona a análise de textos e documentos, limites de uso e
          resultados da detecção de conteúdo gerado por IA.
        </p>
      </div>

        {/* Lista de FAQ */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const expanded = openIndex === index;

            return (
              <div
                key={index}
                className={`group border rounded-2xl transition-all duration-200 ${
                  expanded ? "border-indigo-200 bg-indigo-50/30" : "border-slate-200 hover:border-slate-300"
                }`}
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    aria-expanded={expanded}
                    className="flex items-center justify-between w-full text-left px-6 py-5 focus:outline-none cursor-pointer"
                  >
                    <span className={`text-base font-semibold transition-colors duration-200 ${
                      expanded ? "text-indigo-700" : "text-slate-900"
                    }`}>
                      {faq.question}
                    </span>

                    <div className={`flex-shrink-0 ml-4 transition-transform duration-300 ${
                      expanded ? "rotate-45" : "rotate-0"
                    }`}>
                      <Plus className={`h-5 w-5 ${expanded ? "text-indigo-600" : "text-slate-400"}`} />
                    </div>
                  </button>
                </h3>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 text-slate-600 leading-relaxed text-[15px]">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
