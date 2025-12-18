import { ExternalLink, UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ciaLogo from '@/assets/cia-logo.png';

// ============================================
// 🔗 CONFIGURE SEUS LINKS AQUI
// ============================================
const CIA_CONFIG = {
  // Link do servidor Discord da CIA
  DISCORD_SERVER_LINK: "https://discord.gg/ac2xz2tv",

  // Link do OAuth do Bot CIA
  BOT_OAUTH_LINK: "https://discord.com/oauth2/authorize?client_id=SEU-CLIENT-ID",
};
// ============================================

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />

        {/* Logo */}
        <div className="relative z-10 mb-8 animate-fade-in">
          <img
            src={ciaLogo}
            alt="CIA Logo"
            className="w-40 h-40 md:w-56 md:h-56 object-contain"
          />
        </div>

        {/* Title */}
        <div className="relative z-10 text-center mb-8 animate-fade-in-delay">
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-wider mb-4">
            CENTER INTELLIGENCE AGENCY
          </h1>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-muted-foreground to-transparent mx-auto" />
        </div>

        {/* Quote */}
        <p className="relative z-10 text-muted-foreground text-lg md:text-xl italic text-center max-w-2xl mb-12 animate-slide-up">
          "Em meio ao caos, nós somos a ordem invisível."
        </p>

        {/* Action Buttons */}
        <div className="relative z-10 flex flex-col sm:flex-row gap-4 animate-slide-up">
          <Button
            variant="default"
            size="lg"
            onClick={() => window.open(CIA_CONFIG.DISCORD_SERVER_LINK, '_blank')}
            className="min-w-[200px]"
          >
            <ExternalLink className="w-4 h-4" />
            Entrar no Servidor
          </Button>

          <Button
            variant="outline"
            size="lg"
            onClick={() => window.open(CIA_CONFIG.BOT_OAUTH_LINK, '_blank')}
            className="min-w-[200px]"
          >
            <UserPlus className="w-4 h-4" />
            Adicionar Bot
          </Button>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="relative py-24 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-muted-foreground text-sm uppercase tracking-[0.3em] mb-4 block">
              🎯 Propósito Oficial
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              CIA
            </h2>
          </div>

          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <p className="text-lg md:text-xl text-center font-medium text-foreground/90">
              A Center Intelligence Agency nasceu para atuar onde a linha entre civilização e colapso se torna tênue.
            </p>

            <p>
              Em um mundo fragmentado por conflitos silenciosos, rivalidades políticas, organizações clandestinas e ameaças que se expandem na escuridão, a CIA existe para garantir que o mundo continue em pé — mesmo quando tudo ao redor parece prestes a ruir.
            </p>

            <div className="py-8 border-y border-border/50 space-y-3">
              <p className="text-foreground font-medium">Nós operamos antes que a crise comece.</p>
              <p className="text-foreground font-medium">Nós agimos onde ninguém mais consegue.</p>
              <p className="text-foreground font-medium">Nós enxergamos o que outros ignoram.</p>
            </div>

            <p>
              Enquanto nações discutem, governos hesitam e outras organizações lutam por poder, a CIA se move de forma precisa e silenciosa:
            </p>

            <div className="grid md:grid-cols-3 gap-4 py-6">
              <div className="text-center p-4 bg-card/50 border border-border rounded">
                <p className="text-foreground font-semibold">Sempre um passo à frente.</p>
              </div>
              <div className="text-center p-4 bg-card/50 border border-border rounded">
                <p className="text-foreground font-semibold">Sempre onde é necessário.</p>
              </div>
              <div className="text-center p-4 bg-card/50 border border-border rounded">
                <p className="text-foreground font-semibold">Sempre no momento exato.</p>
              </div>
            </div>

            <p>
              Nosso propósito é preservar o equilíbrio global, neutralizar ameaças emergentes e responder ao caos com disciplina, estratégia e precisão absoluta.
            </p>

            <p>
              Não buscamos reconhecimento, glória ou aplausos — buscamos resultados. O mundo pode nunca conhecer os nomes de nossos agentes, mas sentirá as consequências de nossas vitórias.
            </p>

            <p>
              Mesmo em meio à desordem, à guerra silenciosa e à ascensão de outros grupos, a CIA mantém seu compromisso:
            </p>

            <div className="space-y-4 py-6 pl-6 border-l-2 border-muted">
              <p className="text-foreground">Ser a primeira linha de defesa que ninguém vê.</p>
              <p className="text-foreground">Ser a voz que guia no meio do caos.</p>
              <p className="text-foreground">Ser a força que age quando o impossível se torna necessário.</p>
            </div>

            <div className="text-center py-8 space-y-2">
              <p className="text-foreground font-medium">Nós não competimos.</p>
              <p className="text-foreground font-medium">Nós não tememos.</p>
              <p className="text-foreground font-medium">Nós não falhamos.</p>
            </div>

            <p className="text-center italic">
              Enquanto outras organizações correm atrás da crise, a CIA já está lá — observando, calculando e executando.
            </p>

            <div className="text-center pt-8">
              <p className="font-display text-2xl md:text-3xl font-bold text-foreground">
                Avante CIA!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <img
            src={ciaLogo}
            alt="CIA Logo"
            className="w-24 h-24 object-contain mx-auto mb-8 opacity-60"
          />

          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
            Junte-se à CIA
          </h2>

          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Entre para uma organização que opera nas sombras para garantir a ordem no caos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="default"
              size="lg"
              onClick={() => window.open(CIA_CONFIG.DISCORD_SERVER_LINK, '_blank')}
            >
              <ExternalLink className="w-4 h-4" />
              Servidor Discord
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.open(CIA_CONFIG.BOT_OAUTH_LINK, '_blank')}
            >
              <UserPlus className="w-4 h-4" />
              Convidar Bot
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-display text-lg font-semibold text-foreground">
            CIA
          </div>
          <p className="text-muted-foreground text-sm">
            © 2024 Center Intelligence Agency. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
