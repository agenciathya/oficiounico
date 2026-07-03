import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/site-chrome";
import { ShieldCheck, Lock, Eye, UserCheck, Mail, FileText, Download, BadgeCheck } from "lucide-react";
import certificadoAsset from "../assets/certificado-lgpd.pdf.asset.json";

export const Route = createFileRoute("/lgpd")({
  head: () => ({
    meta: [
      { title: "LGPD — Ofício Único de Areia Branca" },
      { name: "description", content: "Política de proteção de dados pessoais em conformidade com a LGPD." },
      { property: "og:title", content: "LGPD — Ofício Único de Areia Branca" },
      { property: "og:description", content: "Como tratamos e protegemos os seus dados pessoais." },
    ],
  }),
  component: LgpdPage,
});

const pillars = [
  { icon: ShieldCheck, title: "Finalidade", desc: "Tratamento de dados apenas para finalidades legítimas e determinadas." },
  { icon: Lock, title: "Segurança", desc: "Medidas técnicas e administrativas para proteção dos dados." },
  { icon: Eye, title: "Transparência", desc: "Informações claras sobre o tratamento de dados pessoais." },
  { icon: UserCheck, title: "Direitos do Titular", desc: "Acesso, correção, portabilidade e eliminação, conforme a lei." },
];

function LgpdPage() {
  return (
    <>
      <PageHero
        title="Política de Proteção de Dados"
        subtitle="Nosso compromisso com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018) e com a privacidade dos titulares."
      />

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <div key={p.title} className="rounded-sm border border-border bg-card p-5">
              <p.icon className="mb-3 h-6 w-6 text-accent" />
              <h3 className="font-display text-base font-semibold">{p.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>

        <article className="mx-auto mt-16 max-w-3xl space-y-8 text-foreground/85 leading-relaxed">
          <header>
            <h2 className="font-display text-3xl font-bold text-foreground">
              Política de Privacidade e Conformidade com a Lei Geral de Proteção de Dados Pessoais (LGPD)
            </h2>
            <p className="mt-4">
              <strong>POLÍTICA DE PRIVACIDADE E TRATAMENTO DE DADOS PESSOAIS</strong> — OFÍCIO
              ÚNICO CHAVES DE NOTAS E REGISTROS, localizada em Rua Coronel Liberalino, 134,
              Bairro Centro, inscrita sob o CNPJ nº 08.383.622/0001-58, no exercício de suas
              atribuições delegadas pelo Poder Público, torna pública sua Política de
              Privacidade e Proteção de Dados Pessoais, nos termos do art. 96 do Código
              Nacional de Normas da Corregedoria Nacional de Justiça (Provimento CNJ nº
              134/2022) e da Lei nº 13.709/2018 (LGPD).
            </p>
          </header>

          {/* Certificado de Conformidade */}
          <aside className="rounded-sm border-l-4 border-accent bg-secondary p-6">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-accent text-accent-foreground">
                  <BadgeCheck className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    Certificado de Conformidade LGPD
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Documento oficial que atesta a conformidade da serventia com a Lei
                    Geral de Proteção de Dados Pessoais.
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <a
                  href={certificadoAsset.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-sm border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground hover:bg-background"
                >
                  <FileText className="h-4 w-4" />
                  Visualizar
                </a>
                <a
                  href={certificadoAsset.url}
                  download="certificado-conformidade-lgpd.pdf"
                  className="inline-flex items-center gap-2 rounded-sm bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
                >
                  <Download className="h-4 w-4" />
                  Baixar PDF
                </a>
              </div>
            </div>
          </aside>

          <section>
            <h3 className="font-display text-2xl font-bold text-foreground">1. Finalidade do Tratamento de Dados</h3>
            <p className="mt-2">
              O Cartório realiza o tratamento de dados pessoais e dados pessoais sensíveis
              estritamente necessários ao desempenho de suas atividades notariais e
              registrais, com base na legislação vigente e na finalidade pública da
              delegação. Esses dados são tratados para:
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-6">
              <li>Lavratura e registro de atos notariais e registrais;</li>
              <li>Identificação e autenticação de usuários e partes envolvidas nos atos;</li>
              <li>Emissão de certidões e informações solicitadas por interessados legítimos;</li>
              <li>Cumprimento de obrigações legais e normativas impostas pela Corregedoria, CNJ, Receita Federal e demais órgãos públicos;</li>
              <li>Atendimento ao público e comunicações oficiais.</li>
            </ul>
          </section>

          <section>
            <h3 className="font-display text-2xl font-bold text-foreground">2. Dados Coletados</h3>
            <p className="mt-2">São tratados, conforme o tipo de serviço prestado:</p>
            <ul className="mt-3 list-disc space-y-1 pl-6">
              <li><strong>Dados de identificação:</strong> nome, CPF, RG, filiação, data de nascimento, estado civil, nacionalidade, endereço e assinatura;</li>
              <li><strong>Dados de contato:</strong> telefone, e-mail, endereço residencial ou profissional;</li>
              <li><strong>Dados patrimoniais e contratuais:</strong> informações sobre imóveis, veículos, documentos de propriedade e contratos;</li>
              <li><strong>Dados biométricos ou de imagem,</strong> quando necessários à identificação segura;</li>
              <li><strong>Dados sensíveis,</strong> como filiação religiosa ou condição de saúde, somente quando exigidos por lei ou necessários ao ato praticado.</li>
            </ul>
          </section>

          <section>
            <h3 className="font-display text-2xl font-bold text-foreground">3. Base Legal para o Tratamento</h3>
            <p className="mt-2">
              O tratamento dos dados é realizado com base nas hipóteses legais previstas
              nos arts. 7º e 23 da LGPD, especialmente:
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-6">
              <li>Cumprimento de obrigação legal ou regulatória;</li>
              <li>Execução de políticas públicas e exercício de função pública delegada;</li>
              <li>Execução de contratos e atos notariais/registrários;</li>
              <li>Legítimo interesse do titular no acesso a certidões e informações públicas.</li>
            </ul>
          </section>

          <section>
            <h3 className="font-display text-2xl font-bold text-foreground">4. Compartilhamento de Dados</h3>
            <p className="mt-2">Os dados pessoais poderão ser compartilhados apenas com:</p>
            <ul className="mt-3 list-disc space-y-1 pl-6">
              <li>Órgãos públicos e corregedorias do Poder Judiciário;</li>
              <li>Serviços eletrônicos interligados (como e-Notariado, SREI, CRC Nacional);</li>
              <li>Instituições financeiras e entes públicos, quando houver previsão legal;</li>
              <li>Demais cartórios e entidades para fins de cumprimento de atos jurídicos e averbações.</li>
            </ul>
            <p className="mt-3">
              O compartilhamento é feito de forma segura e controlada, com registro das operações.
            </p>
          </section>

          <section>
            <h3 className="font-display text-2xl font-bold text-foreground">5. Direitos dos Titulares de Dados</h3>
            <p className="mt-2">Nos termos da LGPD, os titulares de dados têm direito a:</p>
            <ul className="mt-3 list-disc space-y-1 pl-6">
              <li>Confirmar a existência de tratamento de seus dados;</li>
              <li>Acessar e solicitar cópia dos dados pessoais;</li>
              <li>Corrigir dados incompletos, inexatos ou desatualizados;</li>
              <li>Requerer anonimização, bloqueio ou eliminação de dados desnecessários, quando cabível;</li>
              <li>Solicitar informações sobre o compartilhamento e a finalidade do tratamento.</li>
            </ul>
          </section>

          <section>
            <h3 className="font-display text-2xl font-bold text-foreground">6. Canal de Atendimento ao Titular de Dados</h3>
            <p className="mt-2">
              Para exercer seus direitos ou esclarecer dúvidas sobre esta Política, o titular
              poderá entrar em contato com o Encarregado pelo Tratamento de Dados (DPO) da
              serventia:
            </p>
            <ul className="mt-3 space-y-1 pl-1">
              <li><strong>E-mail:</strong> <a href="mailto:oficiounicoareiabranca.dpo@gmail.com" className="underline-offset-4 hover:underline">oficiounicoareiabranca.dpo@gmail.com</a></li>
              <li><strong>Telefone:</strong> (84) 3190-1724</li>
              
              <li><strong>Atendimento:</strong> de segunda a sexta-feira, das 08:00 às 17:00.</li>
            </ul>
            <a
              href="mailto:oficiounicoareiabranca.dpo@gmail.com"
              className="mt-4 inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
            >
              <Mail className="h-4 w-4" />
              Falar com o Encarregado (DPO)
            </a>
          </section>

          <section>
            <h3 className="font-display text-2xl font-bold text-foreground">7. Segurança da Informação</h3>
            <p className="mt-2">
              A serventia adota medidas técnicas e administrativas adequadas para proteger
              os dados pessoais contra acessos não autorizados, destruição acidental, perda,
              alteração, comunicação ou qualquer forma de tratamento inadequado ou ilícito.
            </p>
          </section>

          <section>
            <h3 className="font-display text-2xl font-bold text-foreground">8. Divulgação e Transparência</h3>
            <p className="mt-2">
              Esta Política é divulgada de forma ostensiva e acessível ao público, conforme
              o art. 96 do Código Nacional de Normas, estando disponível:
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-6">
              <li>No site oficial da serventia;</li>
              <li>Em local visível no balcão de atendimento;</li>
              <li>E mediante solicitação ao canal de atendimento acima indicado.</li>
            </ul>
          </section>

          <footer className="border-t border-border pt-6 text-sm text-muted-foreground">
            <p><strong>Data da última atualização:</strong> 10/11/2025</p>
            <p className="mt-1"><strong>Responsável pela serventia:</strong> GISEUDA CHAVES BARRETO.</p>
          </footer>
        </article>
      </section>
    </>
  );
}
