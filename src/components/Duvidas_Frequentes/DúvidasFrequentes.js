import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, LayoutAnimation, Platform, UIManager } from 'react-native';
import SetaOpen from '../../assets/Svg/Diversos/Seta_Open';
import SetaClose from '../../assets/Svg/Diversos/Seta_Close';

// Ativar animações de layout no Android
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

// Dados das FAQs
const faqs = [
  {
    id: 1,
    question: 'Como me cadastrar?',
    answer: 'Para se cadastrar, clique no botão "Cadastre-se" no canto superior direito da página, preencha o formulário com seus dados e siga as instruções enviadas por e-mail.'
  },
  {
    id: 2,
    question: 'Meus dados estão seguros ?',
    answer: 'Sim, seus dados estão seguros. Utilizamos tecnologia de criptografia e seguimos as melhores práticas de segurança para proteger suas informações.'
  },
  {
    id: 3,
    question: 'Como entro em contato com proprietario ?',
    answer: 'Para entrar em contato com o proprietário, acesse o anúncio do imóvel e clique no botão "Contatar Proprietário". Você poderá enviar uma mensagem diretamente.'
  },
  {
    id: 4,
    question: 'Como redefino minha senha ?',
    answer: 'Para redefinir sua senha, clique em "Esqueci minha senha" na página de login, insira seu e-mail e siga as instruções enviadas para redefinir sua senha.'
  },
  {
    id: 5,
    question: 'Como  Desativo um Imóvel cadastrado ?',
    answer: 'Para desativar um imóvel cadastrado, acesse sua conta, vá até a seção "Meus Imóveis", selecione o imóvel que deseja desativar e clique em "Desativar".'
  },
  {
    id: 6,
    question: 'Quantos Imoveis posso cadastra ?',
    answer: 'Você pode cadastrar até 10 imóveis em nossa plataforma. Para mais imóveis, entre em contato com nosso suporte para opções de planos premium.'
  },
  // Adicione mais FAQs conforme necessário
];

// Componente FAQItem
const FAQItem = ({ question, answer }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  return (
    <View style={[styles.faqItem, expanded && styles.expanded]}>
      <TouchableOpacity onPress={toggleExpand}>
        <View style={styles.faqHeader}>
          <Text style={styles.question}>{question}</Text>
          <Text style={styles.icon}>{expanded ? <SetaOpen/> : <SetaClose/>}</Text>
        </View>
      </TouchableOpacity>
      <View style={[styles.faqContent, expanded ? styles.visible : styles.hidden]}>
        <Text style={styles.answer}>{answer}</Text>
      </View>
    </View>
  );
};

// Componente FAQList
const FAQList = () => {
  return (
    <ScrollView
    showsHorizontalScrollIndicator={false} 
    style={styles.container}>
      {faqs.map(faq => (
        <FAQItem key={faq.id} question={faq.question} answer={faq.answer} />
      ))}
    </ScrollView>
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  faqItem: {
    marginBottom: 5,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    height: 46, // Altura fixa para cada item do FAQ quando recolhido
    overflow: 'hidden',
    justifyContent:'center'
  },
  expanded: {
    height: 'auto', // Altura automática quando expandido
  },
  faqHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  question: {
    fontSize: 13,
    fontWeight: '600',
  },
  icon: {
    fontSize: 18,
  },
  faqContent: {
    paddingHorizontal: 15,
  },
  answer: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#666',
  },
  visible: {
    opacity: 1,
    height: 'auto', // Altura automática quando expandido
  },
  hidden: {
    opacity: 0,
    height: 0, // Altura zero quando recolhido
  },
});

export default FAQList;
