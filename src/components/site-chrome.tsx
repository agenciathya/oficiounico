import { Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=558431901724";

const navLinks = [
  { to: "/", label: "Início" },
  { to: "/equipe", label: "Equipe" },
  { to: "/editais", label: "Editais" },
  { to: "/transparencia", label: "Transparência" },
  { to: "/lgpd", label: "LGPD" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-primary text-primary-foreground shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-sm bg-accent text-accent-foreground font-display text-xl font-bold">
            OÚ
          </div>
          <div className="leading-tight">
            <div className="font-display text-lg font-semibold">Ofício Único</div>
            <div className="text-[11px] uppercase tracking-[0.18em] text-primary-foreground/70">
              Areia Branca — RN
            </div>
          </div>
        </Link>
        <nav className="hidden gap-1 md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-sm px-3 py-2 text-sm font-medium text-primary-foreground/85 transition-colors hover:bg-accent hover:text-accent-foreground"
              activeProps={{ className: "rounded-sm px-3 py-2 text-sm font-semibold bg-accent text-accent-foreground" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
      {/* Mobile nav */}
      <nav className="flex flex-wrap gap-1 border-t border-primary-foreground/10 px-2 py-2 md:hidden">
        {navLinks.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            className="rounded-sm px-3 py-1.5 text-xs font-medium text-primary-foreground/85 hover:bg-accent hover:text-accent-foreground"
            activeProps={{ className: "rounded-sm px-3 py-1.5 text-xs font-semibold bg-accent text-accent-foreground" }}
          >
            {l.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
        <div>
          <div className="font-display text-lg font-semibold">Ofício Único de Areia Branca</div>
          <p className="mt-2 text-sm text-primary-foreground/70">
            Serviço notarial e de registro de segunda entrância — Comarca de Areia Branca / RN.
          </p>
        </div>
        <div className="text-sm">
          <div className="mb-2 font-semibold text-accent">Contato</div>
          <p className="text-primary-foreground/80">Rua Coronel Liberalino, 134, Centro</p>
          <p className="text-primary-foreground/80">Areia Branca — RN, 59655-000</p>
          <p className="mt-2 text-primary-foreground/80">(84) 3190-1724</p>
          <a
            href="mailto:oficiounicoareiabranca@gmail.com"
            className="text-primary-foreground/80 underline-offset-4 hover:text-accent hover:underline"
          >
            oficiounicoareiabranca@gmail.com
          </a>
        </div>
        <div className="text-sm">
          <div className="mb-2 font-semibold text-accent">Horário de Atendimento</div>
          <p className="text-primary-foreground/80">Segunda a Sexta</p>
          <p className="text-primary-foreground/80">08:00 às 17:00</p>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 py-4 text-center text-xs text-primary-foreground/60">
        © {new Date().getFullYear()} Ofício Único de Areia Branca. Todos os direitos reservados.
      </div>
    </footer>
  );
}

export function WhatsAppFloating() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[color:var(--whatsapp)] px-4 py-3 text-white shadow-lg shadow-black/20 transition-transform hover:scale-105"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden text-sm font-semibold sm:inline">WhatsApp</span>
    </a>
  );
}

export function PageHero({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <section className="border-b border-border bg-secondary">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="mb-3 h-1 w-16 bg-accent" />
        <h1 className="font-display text-4xl font-bold text-foreground md:text-5xl">{title}</h1>
        {subtitle && (
          <p className="mt-3 max-w-2xl text-base text-muted-foreground">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
