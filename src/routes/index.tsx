import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  FileText,
  Landmark,
  Users,
  ScrollText,
  Home,
  Building2,
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ofício Único de Areia Branca — Você pode contar conosco" },
      {
        name: "description",
        content:
          "Cartório de notas, registro civil, imóveis, protesto e títulos em Areia Branca/RN. Solicite sua certidão eletrônica.",
      },
    ],
  }),
  component: Index,
});

const services = [
  { icon: Users, title: "Registro Civil", desc: "Nascimentos, casamentos e óbitos." },
  { icon: ScrollText, title: "Notas", desc: "Escrituras, procurações e reconhecimento de firma." },
  { icon: Home, title: "Registro de Imóveis", desc: "Matrículas, averbações e transferências." },
  { icon: FileText, title: "Protesto de Títulos", desc: "Apresentação, protesto e cancelamento." },
  { icon: Building2, title: "Registro de Pessoas Jurídicas", desc: "Constituição e alterações societárias." },
  { icon: Landmark, title: "Títulos e Documentos", desc: "Registro e conservação de documentos." },
];

function Index() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 opacity-[0.06]" style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, var(--accent) 0, transparent 40%), radial-gradient(circle at 80% 60%, var(--accent) 0, transparent 40%)",
        }} />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-20 md:grid-cols-[1.2fr_1fr] md:py-28">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-accent">
              <ShieldCheck className="h-3.5 w-3.5" />
              Serviço notarial e de registro
            </div>
            <h1 className="font-display text-4xl font-bold leading-tight md:text-6xl">
              Bem-vindo ao Ofício Único de <span className="text-accent">Areia Branca</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-primary-foreground/80">
              Você pode contar conosco. Seriedade, credibilidade e atendimento
              cuidadoso para todos os atos notariais e de registro do município.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://ridigital.org.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-sm bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-sm transition-transform hover:scale-[1.02]"
              >
                Solicitar Certidão Eletrônica
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                to="/equipe"
                className="inline-flex items-center gap-2 rounded-sm border border-primary-foreground/30 px-6 py-3 text-sm font-semibold text-primary-foreground/90 transition-colors hover:bg-primary-foreground/10"
              >
                Conheça nossa equipe
              </Link>
            </div>
          </div>

          {/* Quote card */}
          <aside className="relative flex items-center">
            <blockquote className="relative rounded-sm border-l-4 border-accent bg-primary-foreground/[0.04] p-8 backdrop-blur">
              <div className="mb-4 font-display text-4xl leading-none text-accent">“</div>
              <p className="font-display text-xl italic leading-snug text-primary-foreground">
                Com trabalho honesto se conquista o mundo, garantindo-lhe no
                tabelionato da vida o direito de possuir e usufruir de seus
                frutos com o devido mérito.
              </p>
              <footer className="mt-4 text-sm font-medium tracking-wide text-accent">
                — Márcio Antônio
              </footer>
            </blockquote>
          </aside>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="mb-10 max-w-2xl">
          <div className="mb-3 h-1 w-16 bg-accent" />
          <h2 className="font-display text-3xl font-bold md:text-4xl">Nossos Serviços</h2>
          <p className="mt-3 text-muted-foreground">
            Estabelecimento cartorário de segunda entrância com atribuições
            plenas nos serviços notariais e de registro.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative overflow-hidden rounded-sm border border-border bg-card p-6 transition-all hover:border-accent hover:shadow-md"
            >
              <div className="absolute inset-y-0 left-0 w-1 bg-accent opacity-0 transition-opacity group-hover:opacity-100" />
              <s.icon className="mb-4 h-8 w-8 text-foreground" />
              <h3 className="font-display text-lg font-semibold">{s.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* QUEM SOMOS */}
      <section className="border-y border-border bg-secondary">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 md:grid-cols-2">
          <div>
            <div className="mb-3 h-1 w-16 bg-accent" />
            <h2 className="font-display text-3xl font-bold md:text-4xl">Quem Somos</h2>
          </div>
          <div className="text-base leading-relaxed text-foreground/85">
            <p>
              Estabelecimento cartorário de <strong>segunda entrância</strong>,
              possui atribuições para prestar serviços e expedir certidões e
              documentos em geral como cartório civil, nascimentos, casamentos,
              óbitos, cartório de notas, cartório de protesto de títulos,
              cartório de registro de imóveis, registro de títulos e documentos,
              registro civil de pessoas jurídicas.
            </p>
            <p className="mt-4">
              Sua abrangência é no Município de <strong>Areia Branca — RN</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* INSTITUCIONAL / NOTÍCIAS */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <div className="mb-3 h-1 w-16 bg-accent" />
            <h2 className="font-display text-3xl font-bold md:text-4xl">Institucional</h2>
            <p className="mt-3 max-w-xl text-muted-foreground">
              Últimas informações e comunicados oficiais do cartório.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              tag: "Atendimento",
              title: "Horário de funcionamento",
              body: "Atendimento de segunda a sexta-feira, das 08:00 às 17:00, presencial e eletrônico.",
            },
            {
              tag: "Certidões",
              title: "Central de Certidões Eletrônicas",
              body: "Solicite certidões de forma prática e segura através da plataforma nacional RI Digital.",
            },
            {
              tag: "Transparência",
              title: "Balanço anual disponível",
              body: "Consulte na aba Transparência os relatórios anuais e demais informações institucionais.",
            },
          ].map((n) => (
            <article key={n.title} className="rounded-sm border border-border bg-card p-6">
              <span className="inline-block rounded-sm bg-accent px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent-foreground">
                {n.tag}
              </span>
              <h3 className="mt-3 font-display text-lg font-semibold">{n.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{n.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* LOCALIZAÇÃO */}
      <section className="border-t border-border bg-secondary">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 md:grid-cols-2">
          <div>
            <div className="mb-3 h-1 w-16 bg-accent" />
            <h2 className="font-display text-3xl font-bold md:text-4xl">Onde Estamos</h2>
            <p className="mt-3 text-muted-foreground">
              Venha nos visitar ou entre em contato pelos canais abaixo.
            </p>
            <ul className="mt-6 space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <span>Rua Coronel Liberalino, 134, Centro<br />Areia Branca — RN, 59655-000</span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-5 w-5 shrink-0 text-accent" />
                <a href="tel:+558431901724" className="hover:underline">(84) 3190-1724</a>
              </li>
              <li className="flex gap-3">
                <Mail className="h-5 w-5 shrink-0 text-accent" />
                <a href="mailto:oficiounicoareiabranca@gmail.com" className="hover:underline">
                  oficiounicoareiabranca@gmail.com
                </a>
              </li>
            </ul>
          </div>
          <div className="overflow-hidden rounded-sm border border-border shadow-sm">
            <iframe
              title="Mapa — Ofício Único de Areia Branca"
              src="https://www.google.com/maps?q=Rua+Coronel+Liberalino,+134,+Centro,+Areia+Branca+-+RN,+59655-000&output=embed"
              width="100%"
              height="360"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block h-[360px] w-full border-0"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
