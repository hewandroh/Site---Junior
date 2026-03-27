import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  TrendingUp, 
  ShieldCheck, 
  MapPin, 
  Coins, 
  CheckCircle2, 
  ArrowRight, 
  MessageCircle, 
  Mail, 
  User, 
  Phone,
  Quote,
  Building2,
  Gem,
  Handshake,
  Star
} from 'lucide-react';
import { cn } from './lib/utils';

// --- Components ---

const SectionTitle = ({ children, subtitle, className }: { children: React.ReactNode, subtitle?: string, className?: string }) => (
  <div className={cn("text-center mb-16", className)}>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-slate-600 max-w-2xl mx-auto"
      >
        {subtitle}
      </motion.p>
    )}
    <motion.div 
      initial={{ width: 0 }}
      whileInView={{ width: 80 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.8 }}
      className="h-1 bg-primary mx-auto mt-6"
    />
  </div>
);

const Button = ({ 
  children, 
  className, 
  variant = 'primary', 
  size = 'md',
  onClick,
  type = 'button',
  ...props 
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' | 'outline', size?: 'sm' | 'md' | 'lg' }) => {
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/20",
    secondary: "bg-luxury-gold text-white hover:brightness-110 shadow-lg shadow-luxury-gold/20",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-8 py-4 text-base font-semibold",
    lg: "px-10 py-5 text-lg font-bold"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      type={type}
      onClick={onClick}
      className={cn(
        "rounded-full transition-all duration-300 flex items-center justify-center gap-2",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
};

// --- Sections ---

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Parallax effect */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://colibrigroup.com.br/wp-content/uploads/2025/10/LIVING-AMPLIADO-DO-APTO-GARDEN-DE-141M.webp" 
          alt="Living Ampliado Apto Garden" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary-foreground text-sm font-medium mb-6 backdrop-blur-sm">
            Oportunidades Exclusivas de Investimento
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Invista em imóveis de alto Padrão com <br className="hidden md:block" />
            <span className="text-primary">segurança</span> e alto potencial de valorização
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-3xl mx-auto font-light">
            Acesse oportunidades exclusivas que não chegam ao mercado tradicional. 
            Curadoria especializada para o investidor exigente.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button size="lg" onClick={() => document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' })}>
              Quero conhecer as oportunidades
            </Button>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="flex flex-wrap items-center justify-center gap-8 text-sm md:text-base text-slate-300 border-t border-white/10 pt-8"
          >
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-luxury-gold fill-luxury-gold" />
              <span>+ de 500 clientes atendidos</span>
            </div>
            <div className="w-1 h-1 bg-white/30 rounded-full hidden md:block" />
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              <span>+ de R$ 120 milhões em negociações</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/50"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

const Benefits = () => {
  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Alto potencial de valorização",
      desc: "Imóveis selecionados em regiões com crescimento acelerado e demanda constante."
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Segurança patrimonial",
      desc: "Investimento sólido em ativos reais, protegendo seu capital contra a inflação."
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Localizações privilegiadas",
      desc: "Projetos situados nos endereços mais cobiçados e exclusivos do Brasil."
    },
    {
      icon: <Coins className="w-8 h-8" />,
      title: "Condições exclusivas",
      desc: "Negociações diretas com construtoras e acesso a tabelas de pré-lançamento."
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <SectionTitle subtitle="Por que investir no mercado de luxo conosco?">
          Benefícios Estratégicos
        </SectionTitle>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
              <p className="text-slate-600 leading-relaxed">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AnimatedImageSection = () => {
  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="rounded-[2rem] overflow-hidden shadow-2xl"
        >
          <img 
            src="https://lh3.googleusercontent.com/d/10qk98cwYIb61baLC_n5ZzdDD2_aO0pwY" 
            alt="Empreendimento de Luxo" 
            className="w-full h-auto object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Cadastro",
      desc: "Você preenche o formulário com seus interesses."
    },
    {
      number: "02",
      title: "Consultoria",
      desc: "Um especialista entra em contato para entender seu perfil."
    },
    {
      number: "03",
      title: "Curadoria",
      desc: "Apresentamos oportunidades sob medida para seu objetivo."
    },
    {
      number: "04",
      title: "Investimento",
      desc: "Você escolhe o melhor ativo e nós cuidamos de toda a negociação."
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <SectionTitle subtitle="Um processo transparente e focado em resultados">
          Como Funciona
        </SectionTitle>

        <div className="relative">
          {/* Connector Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 hidden lg:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-white border-4 border-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-2xl font-bold text-primary">{step.number}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Differentials = () => {
  const items = [
    { icon: <Building2 />, text: "Acesso a imóveis fora do mercado aberto (Off-market)" },
    { icon: <User />, text: "Atendimento consultivo personalizado e discreto" },
    { icon: <Gem />, text: "Curadoria rigorosa de oportunidades premium" },
    { icon: <Handshake />, text: "Parcerias estratégicas com as maiores construtoras do país" }
  ];

  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
              O que nos diferencia no <br />
              <span className="text-primary">mercado de alto padrão</span>
            </h2>
            <div className="space-y-6">
              {items.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    {item.icon}
                  </div>
                  <p className="text-lg text-slate-300 group-hover:text-white transition-colors duration-300">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://www.magnumconstrutora.com.br/galeria/empreendimentos-foto-de-capa-1027-ecco-capa.jpg" 
                alt="Empreendimento Ecco - Magnum Construtora" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
            </div>
            {/* Floating Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -bottom-6 -left-6 bg-luxury-gold p-6 rounded-2xl shadow-xl hidden md:block"
            >
              <p className="text-white font-bold text-xl">Exclusividade</p>
              <p className="text-white/80 text-sm">Garantida em cada detalhe</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ricardo Mendes",
      role: "Investidor",
      text: "Consegui adquirir um imóvel incrível com condições que não encontraria sozinho. A curadoria é impecável.",
      avatar: "https://picsum.photos/seed/user1/100/100"
    },
    {
      name: "Ana Paula Silva",
      role: "Empresária",
      text: "Atendimento direto, transparente e muito profissional. Encontraram exatamente o que eu buscava para minha família.",
      avatar: "https://picsum.photos/seed/user2/100/100"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle subtitle="A satisfação de quem já investe conosco">
          Prova Social
        </SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-slate-50 p-10 rounded-3xl relative"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-primary/10" />
              <p className="text-slate-700 text-lg italic mb-8 relative z-10">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-full border-2 border-primary/20" referrerPolicy="no-referrer" />
                <div>
                  <h4 className="font-bold text-slate-900">{t.name}</h4>
                  <p className="text-sm text-slate-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const LeadForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Simulate API call
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="form" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-luxury-gold/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-12 lg:p-16 bg-primary text-white flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Receba uma seleção exclusiva de imóveis</h2>
            <p className="text-primary-foreground/80 mb-8 text-lg">
              Deixe seus dados e um de nossos especialistas em alto padrão entrará em contato para apresentar oportunidades sob medida.
            </p>
            <ul className="space-y-4">
              {[
                "Acesso a pré-lançamentos",
                "Tabelas exclusivas para investidores",
                "Consultoria personalizada gratuita"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-luxury-gold" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="lg:w-1/2 p-12 lg:p-16">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                >
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Nome Completo</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input 
                        required
                        type="text" 
                        placeholder="Seu nome"
                        className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">WhatsApp</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input 
                        required
                        type="tel" 
                        placeholder="(00) 00000-0000"
                        className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">E-mail</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input 
                        required
                        type="email" 
                        placeholder="seu@email.com"
                        className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      />
                    </div>
                  </div>
                  <Button type="submit" variant="primary" className="w-full py-5 text-lg">
                    Quero receber as oportunidades
                  </Button>
                  <p className="text-center text-sm text-slate-400">
                    Seus dados estão seguros conosco. Um especialista entrará em contato rapidamente.
                  </p>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Solicitação Enviada!</h3>
                  <p className="text-slate-600">
                    Obrigado pelo interesse. Em breve um de nossos consultores entrará em contato com você.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img src="https://static.orulo.com.br/images/properties/large/1247995.jpg" alt="Luxury Property" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
      </div>
      <div className="container mx-auto px-6 relative z-10 text-center text-white">
        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Não perca oportunidades únicas no mercado <br className="hidden md:block" />
          imobiliário de alto padrão
        </h2>
        <Button 
          variant="secondary" 
          size="lg" 
          className="mx-auto"
          onClick={() => document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Falar com especialista <ArrowRight className="w-5 h-5" />
        </Button>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-b border-white/10 pb-12 mb-12">
          <div className="flex items-center gap-2">
            <img src="https://lh3.googleusercontent.com/d/1vioEAD-gBSdRVhRUsGh8OoB6EYv1dO4h" alt="Elite Imóveis Logo" className="h-12 w-auto" referrerPolicy="no-referrer" />
          </div>
          
          <div className="flex flex-wrap justify-center gap-8">
            <a href="#" className="text-slate-400 hover:text-white transition-colors">Início</a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">Benefícios</a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">Como Funciona</a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">Contato</a>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
              <MessageCircle className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>© 2026 Elite Imóveis - Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-300">Política de Privacidade</a>
            <a href="#" className="hover:text-slate-300">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <main className="min-h-screen">
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="https://lh3.googleusercontent.com/d/1w6RwYtEbjZk2BcSCUliJCS4JApKIRNT0" alt="Elite Imóveis Logo" className="h-10 w-auto" referrerPolicy="no-referrer" />
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            className="hidden md:flex"
            onClick={() => document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Falar com Especialista
          </Button>
        </div>
      </nav>

      <Hero />
      <Benefits />
      <AnimatedImageSection />
      <HowItWorks />
      <Differentials />
      <Testimonials />
      <LeadForm />
      <FinalCTA />
      <Footer />
    </main>
  );
}
