import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/site-chrome";
import { FileText, ExternalLink, Star, Calendar } from "lucide-react";
import editais2023 from "../assets/editais/2023.pdf.asset.json";
import editais2024 from "../assets/editais/2024.pdf.asset.json";

export const Route = createFileRoute("/editais")({
  head: () => ({
    meta: [
      { title: "Editais — Ofício Único de Areia Branca" },
      { name: "description", content: "Editais de proclamas e demais publicações oficiais do Ofício Único de Areia Branca." },
      { property: "og:title", content: "Editais — Ofício Único de Areia Branca" },
      { property: "og:description", content: "Publicações oficiais e editais de proclamas." },
    ],
  }),
  component: EditaisPage,
});

type Edital = { label: string; period: string; url: string; sortKey: number };

const current: Edital = {
  label: "Editais de Proclamas — 2025/2026",
  period: "Exercício vigente",
  url: editais2024.url,
  sortKey: 2025,
};

const previous: Edital[] = [
  { label: "Editais de Proclamas — 2023", period: "Exercício 2023", url: editais2023.url, sortKey: 2023 },
].sort((a, b) => b.sortKey - a.sortKey);

const viewerParams = "#toolbar=1&navpanes=0";

function EditaisPage() {
  return (
    <>
      <PageHero
        title="Editais"
        subtitle="Publicações oficiais e editais de proclamas do Ofício Único de Areia Branca."
      />

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-10 grid gap-4 md:grid-cols-3">
          {[
            { title: "Publicidade Legal", body: "Editais publicados em cumprimento à legislação vigente." },
            { title: "Consulta Pública", body: "Acesso livre aos editais para conferência dos interessados." },
            { title: "Atualização", body: "Documentos atualizados conforme a produção da serventia." },
          ].map((c) => (
            <div key={c.title} className="rounded-sm border-l-4 border-accent bg-card p-5">
              <h3 className="font-display text-base font-semibold">{c.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{c.body}</p>
            </div>
          ))}
        </div>

        {/* Edital vigente em destaque */}
        <div className="mb-12 overflow-hidden rounded-sm border border-accent bg-card shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border bg-accent/15 px-6 py-5">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-sm bg-accent text-accent-foreground">
                <Star className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wide text-accent-foreground/80">
                  Edital vigente
                </div>
                <h2 className="font-display text-2xl font-bold">{current.label}</h2>
              </div>
            </div>
            <a
              href={`${current.url}${viewerParams}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
            >
              <ExternalLink className="h-4 w-4" />
              Visualizar em tela cheia
            </a>
          </div>
          <div className="px-6 py-5 text-sm text-muted-foreground">
            <p>
              Devido à extensão deste documento (mais de 100 páginas), a pré-visualização
              embutida foi desativada para preservar o desempenho da página. Utilize o botão
              acima para abrir o edital em uma nova aba e realizar a conferência em tela cheia.
            </p>
            <p className="mt-2 text-xs italic">
              Observação: por limitação do sistema anterior, os exercícios de 2025 e 2026 estão
              disponibilizados em um único arquivo consolidado.
            </p>
          </div>
        </div>

        <h2 className="mb-4 font-display text-xl font-bold">Editais de anos anteriores</h2>
        {previous.length === 0 ? (
          <div className="rounded-sm border border-border bg-card p-8 text-center text-muted-foreground">
            Nenhum edital anterior disponível.
          </div>
        ) : (
          <ul className="divide-y divide-border rounded-sm border border-border bg-card">
            {previous.map((e) => (
              <li key={e.sortKey} className="flex flex-wrap items-center justify-between gap-4 p-5">
                <div className="flex min-w-0 items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-secondary text-foreground">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="truncate font-medium">{e.label}</div>
                    <div className="mt-0.5 inline-flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {e.period}
                    </div>
                  </div>
                </div>
                <a
                  href={`${e.url}${viewerParams}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-sm border border-border px-3 py-2 text-sm font-medium hover:bg-secondary"
                >
                  <ExternalLink className="h-4 w-4" />
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
