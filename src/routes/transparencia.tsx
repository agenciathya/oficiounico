import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/site-chrome";
import { FileText, Eye, Star, Calendar } from "lucide-react";
import balanco2021 from "../assets/transparencia/2021.pdf.asset.json";
import balanco2022 from "../assets/transparencia/2022.pdf.asset.json";
import balanco2023 from "../assets/transparencia/2023.pdf.asset.json";
import balanco2024 from "../assets/transparencia/2024.pdf.asset.json";

export const Route = createFileRoute("/transparencia")({
  head: () => ({
    meta: [
      { title: "Transparência — Ofício Único de Areia Branca" },
      { name: "description", content: "Balanço anual e relatórios de transparência do Ofício Único de Areia Branca." },
      { property: "og:title", content: "Transparência — Ofício Único de Areia Branca" },
      { property: "og:description", content: "Relatórios anuais e informações institucionais." },
    ],
  }),
  component: TransparenciaPage,
});

type Balanco = { year: number; url: string };

const balancos: Balanco[] = [
  { year: 2024, url: balanco2024.url },
  { year: 2023, url: balanco2023.url },
  { year: 2022, url: balanco2022.url },
  { year: 2021, url: balanco2021.url },
].sort((a, b) => b.year - a.year);

// Bloqueia o download via atributo do PDF.js/Chrome quando possível
const viewerParams = "#toolbar=0&navpanes=0";

function TransparenciaPage() {
  const [current, ...previous] = balancos;

  return (
    <>
      <PageHero
        title="Transparência"
        subtitle="Prestação de contas e balanço anual do Ofício Único de Areia Branca, em cumprimento aos princípios da publicidade e da moralidade administrativa."
      />

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-10 grid gap-4 md:grid-cols-3">
          {[
            { title: "Publicidade", body: "Todos os relatórios são disponibilizados para consulta pública." },
            { title: "Prestação de Contas", body: "Balanços anuais publicados de acordo com a legislação vigente." },
            { title: "Integridade", body: "Compromisso com a fé pública e a ética profissional." },
          ].map((c) => (
            <div key={c.title} className="rounded-sm border-l-4 border-accent bg-card p-5">
              <h3 className="font-display text-base font-semibold">{c.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{c.body}</p>
            </div>
          ))}
        </div>

        {/* Balanço vigente em destaque */}
        <div className="mb-12 overflow-hidden rounded-sm border border-accent bg-card shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border bg-accent/15 px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-sm bg-accent text-accent-foreground">
                <Star className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wide text-accent-foreground/80">
                  Balanço vigente
                </div>
                <h2 className="font-display text-2xl font-bold">Balanço Anual {current.year}</h2>
              </div>
            </div>
            <a
              href={`${current.url}${viewerParams}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
            >
              <Eye className="h-4 w-4" />
              Consultar em tela cheia
            </a>
          </div>
          <div className="bg-secondary">
            <iframe
              title={`Balanço Anual ${current.year}`}
              src={`${current.url}${viewerParams}`}
              className="h-[720px] w-full border-0"
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>
          <p className="px-6 py-3 text-xs text-muted-foreground">
            Documento disponibilizado apenas para conferência. A reprodução ou download não são permitidos.
          </p>
        </div>

        <h2 className="mb-4 font-display text-xl font-bold">Balanços de anos anteriores</h2>
        {previous.length === 0 ? (
          <div className="rounded-sm border border-border bg-card p-8 text-center text-muted-foreground">
            Nenhum balanço anterior disponível.
          </div>
        ) : (
          <ul className="divide-y divide-border rounded-sm border border-border bg-card">
            {previous.map((b) => (
              <li key={b.year} className="flex flex-wrap items-center justify-between gap-4 p-5">
                <div className="flex min-w-0 items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-secondary text-foreground">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="truncate font-medium">Balanço Anual {b.year}</div>
                    <div className="mt-0.5 inline-flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      Exercício {b.year}
                    </div>
                  </div>
                </div>
                <a
                  href={`${b.url}${viewerParams}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-sm border border-border px-3 py-2 text-sm font-medium hover:bg-secondary"
                >
                  <Eye className="h-4 w-4" />
                  Conferir
                </a>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}
