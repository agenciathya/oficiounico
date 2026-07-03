import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/site-chrome";
import { User } from "lucide-react";

export const Route = createFileRoute("/equipe")({
  head: () => ({
    meta: [
      { title: "Equipe — Ofício Único de Areia Branca" },
      { name: "description", content: "Conheça a equipe do Ofício Único de Areia Branca." },
      { property: "og:title", content: "Equipe — Ofício Único de Areia Branca" },
      { property: "og:description", content: "Profissionais dedicados ao serviço notarial e de registro." },
    ],
  }),
  component: EquipePage,
});

const team = [
  { name: "Tabelião Titular", role: "Titular do Ofício Único" },
  { name: "Escrevente Substituto(a)", role: "Substituto(a) Legal" },
  { name: "Escrevente", role: "Registro Civil e Notas" },
  { name: "Auxiliar", role: "Atendimento e Protocolo" },
];

function EquipePage() {
  return (
    <>
      <PageHero
        title="Nossa Equipe"
        subtitle="Profissionais qualificados, comprometidos com a fé pública e o atendimento cuidadoso à comunidade de Areia Branca."
      />
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m) => (
            <div key={m.name} className="rounded-sm border border-border bg-card p-6 text-center">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-secondary">
                <User className="h-10 w-10 text-muted-foreground" />
              </div>
              <h3 className="font-display text-lg font-semibold">{m.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{m.role}</p>
              <div className="mx-auto mt-4 h-0.5 w-8 bg-accent" />
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-muted-foreground">
          A composição da equipe pode ser atualizada conforme designações internas do Ofício.
        </p>
      </section>
    </>
  );
}
