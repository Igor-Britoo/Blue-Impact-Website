import React, { forwardRef, useState } from 'react';
import { Answer, FAQContainer, FAQItem, FAQSection, FAQTitle, PlusMinusIcon, Question } from './styled/FAQComponents'

const FAQ = forwardRef((props, ref) => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'Que tipos de sites vocês desenvolvem?',
      answer: 'Desenvolvemos uma ampla gama de sites, incluindo e-commerce, blogs, portais corporativos, landing pages e sistemas web personalizados.',
    },
    {
      question: 'Como é o processo de desenvolvimento e quanto tempo leva?',
      answer: 'Iniciamos com uma reunião para entender suas necessidades e objetivos, definimos o escopo do projeto, desenvolvemos um plano detalhado '
            + 'com wireframes e designs visuais, construímos o site, realizamos testes rigorosos para garantir a funcionalidade e segurança, lançamos '
            + 'o site, e oferecemos suporte contínuo.',
    },
    {
      question: 'Qual é o custo médio de desenvolvimento, existem taxas adicionais além do preço cotado inicialmente?',
      answer: 'Os custos podem variar dependendo do tamanho e complexidade do projeto, mas nossos preços geralmente começam em torno de R$ 5.000,00. '
            + 'Todas as taxas são discutidas e acordadas antecipadamente, mas podem surgir custos adicionais se houver mudanças significativas no escopo do projeto.',
    },
    {
      question: 'Quais linguagens de programação e tecnologias vocês utilizam?',
      answer: 'Utilizamos uma variedade de tecnologias como HTML, CSS, JavaScript, React, Node.js e muito mais, dependendo das necessidades do projeto.'
            + ' Consideramos SEO(Search Engine Optimization) e responsividade em todos os nossos projetos.',
    },
    {
      question: 'Como vocês garantem a segurança dos sites que desenvolvem?',
      answer: 'Implementamos práticas recomendadas de segurança, como criptografia SSL, proteção contra SQL Injection e Cross-Site Scripting (XSS), '
            + 'além de manter nossos servidores e softwares atualizados.',
    },
    {
      question: 'Vocês oferecem manutenção contínua depois do desenvolvimento?',
      answer: 'Sim, oferecemos planos de manutenção contínua para garantir que seu site esteja sempre seguro, atualizado e funcionando perfeitamente.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <FAQSection ref={ref} {...props}>
      <FAQTitle>PERGUNTAS FREQUENTES</FAQTitle>

      <FAQContainer>
        {faqs.map((faq, index) => (
          <FAQItem key={index}>
            <Question onClick={() => toggleFAQ(index)}>
              {faq.question}
              <PlusMinusIcon isMinus={openIndex === index}>
                {openIndex === index ? '⎯' : '+'}
              </PlusMinusIcon>
            </Question>
            <Answer $isOpen={openIndex === index}>{faq.answer}</Answer>
          </FAQItem>
        ))}
      </FAQContainer>
    </FAQSection>
  );
});

export default FAQ;
