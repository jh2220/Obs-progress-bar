# Obs-progress-bar

Eu senti vontade em criar uma barra de progresso para usar de overlay de espera em [meu canal da twitch](https://www.twitch.tv/web_last_wolf) com integração ao OBS.

Pensei porque não disponibilizar o código para todo mundo?

## Como usar

1. Instale o software [Open Broadcast](https://obsproject.com/pt-br/download) (versão que está sendo utilizada: 29.0.0)

2. Crie uma cena ou utilize uma existente → Fontes → Adicionar Fonte → Navegador

3. Ative arquivo local → explore até o arquivo ./index.html

4. Botão direito a fonte recém-adicionada → Interagir → Pressione a tecla P para carregar até 100%

## Como configurar

1. Tenha instalado bloco de notas, [Sublime](https://www.sublimetext.com/download), [Vscode](https://visualstudio.microsoft.com/pt-br/vs/community/) ou algum editor de texto a sua preferência

2. Navegue até o arquivo ./src/javaScript/config.js

3. Altere os valores de acordo com a descrição

| Valor        | Descrição                                                                                              | Exemplo    |
| ------------ | ------------------------------------------------------------------------------------------------------ | ---------- |
| timeInterval | Tempo que a barra demora a carregar, valor em mili segundos                                            | 9000       |
| itemIndex    | Tempo texto da lista que começa a ser apresentado 0 vale como se fosse 1                               | 0          |
| itemText     | Uma [array](https://www.w3schools.com/js/js_arrays.asp) de itens contendo texto do que quer apresentar | ["A", "B"] |
