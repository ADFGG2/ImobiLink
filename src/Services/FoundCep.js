import React from 'react';

const consultarEnderecoViaCEP = (cep, setBairro, setCidade) => {
    const url = `https://viacep.com.br/ws/${cep}/json/`;
  
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao consultar o CEP');
        }
        return response.json();
      })
      .then(data => {
        const endereco = []
    
        const bairro = data.bairro;
        const cidade = data.localidade;
        setBairro(bairro);
        setCidade(cidade); 

        return endereco;
      })
      .catch(error => {
        console.error('Erro ao consultar o CEP:', error);
      });
  };

  function validarCEP(cep, setBairro, setCidade) {
    // Expressão regular para validar o formato do CEP (xxxxx-xxx)
    
  
    // Verifica se o CEP corresponde ao formato esperado
    if (cep.length < 8) {
      return; // Formato inválido
    }else{
        return consultarEnderecoViaCEP(cep, setBairro, setCidade );
    }
  
    // Aqui você pode adicionar outras regras de validação, como verificar se o CEP é válido em uma API de consulta de CEPs
     // CEP válido
    
  }

  export default validarCEP;