## Como Inicializar a Aplicação?

Para executar localmente a aplicação, basta executar **npm install**, e depois **npm run start** na linha de comando dentro da pasta do projeto(ambos os comandos).

## Do que se trata?

Trata-se de um exemplo de implementação da biblioteca ***react-i18next***, muito utilizada para fazer internacionalização de aplicações front-end. Basicamente, essa ferramenta faz o chaveamento das mensagens da aplicação de acordo com os idiomas definidos, possibilitando que o usuário altere o idioma da aplicação inteira em tempo real. Há também "plugins" dessa biblioteca, como é o caso do ***languageDetector***, utilizado para reconhecer o idioma padrão do navegador do usuário, permitindo assim a renderização das mensagens naquele idioma.

O ideal é que os arquivos contendo as mensagens da aplicação se encontrem em uma API separada e sejam consumidos sob demanda, permitindo assim que textos renderizados no Front-end sejam alterados em tempo real, sem ter a necessidade de subir novamente o Front-end(o que aconteceria caso os textos estivessem "hardcoded"). Como alternativa, pode-se guardar os arquivos das mensagens na pasta pública da aplicação, como sugerido pela documentação da biblioteca.

Nessa implementação, o usuário tem a possibilidade de trocar de idiomas e navegar em páginas diferentes permanecendo com o idioma escolhido.

## O que foi consumido?

Biblioteca ***react-i18next***.
