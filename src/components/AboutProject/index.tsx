import { ShieldCheck, FileSearch, Cpu, Lock } from "lucide-react";
import { RouterLink } from "../RouterLink";
import { FeatureCard } from "../FeatureCard";

export function AboutProject() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block mb-4 text-sm font-semibold text-indigo-600 uppercase tracking-wide">
            Sobre o IAlerta
          </span>

          <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">
            Detecte conteúdo gerado por IA com mais confiança
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            O IAlerta analisa textos e documentos para identificar indícios de
            conteúdo gerado por Inteligência Artificial, ajudando você a tomar
            decisões mais seguras, rápidas e informadas.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={FileSearch}
            title="Análise de Textos e Arquivos"
            description="Envie textos ou documentos e receba uma análise automática baseada em modelos avançados de detecção de IA."
          />

          <FeatureCard
            icon={Cpu}
            title="Tecnologia Inteligente"
            description="Foram utilizados algoritmos modernos para avaliar padrões linguísticos e probabilidades de geração por IA."
          />

          <FeatureCard
            icon={ShieldCheck}
            title="Apoio à Tomada de Decisão"
            description="Os resultados auxiliam na verificação de autenticidade, sem substituir a análise humana."
          />

          <FeatureCard
            icon={Lock}
            title="Segurança e Privacidade"
            description="Seus dados são processados com segurança e não são utilizados para outros fins."
          />
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-slate-900">
            Pronto para analisar conteúdos com mais clareza?
          </h3>

          <p className="mt-4 text-slate-600">
            Comece agora a utilizar o IAlerta e tenha mais controle sobre seus
            conteúdos.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <RouterLink
              href="/"
              className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-6 py-3 text-white font-semibold shadow-lg hover:bg-indigo-700 transition"
            >
              Analisar conteúdo
            </RouterLink>
          </div>
        </div>
      </div>
    </section>
  );
}
