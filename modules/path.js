const path = require('path');

// O módulo 'path' é uma parte integrante do Node.js que fornece utilitários para trabalhar com caminhos de arquivos e diretórios de forma consistente, independente do sistema operacional.

// __filename representa o caminho absoluto do arquivo atual, incluindo o nome do arquivo.
console.log(path.basename(__filename));

// dirname retorna o diretório do arquivo atual.
console.log(path.dirname(__filename));

// extname retorna a extensão do nome do arquivo.
console.log(path.extname(__filename));

// parse analisa um caminho de arquivo em um objeto com várias partes, incluindo o diretório, nome do arquivo e extensão.
console.log(path.parse(__filename));

// join concatena vários segmentos de caminho para formar um caminho completo.
console.log(path.join(__dirname, "test", "test.html"));
