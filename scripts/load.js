function preload() {
  imagemCenario = loadImage('imagens/cenario/floresta.png');
  
  imagemTelaInicial = loadImage('imagens/assets/telaInicial.png');
  fonteTelaInicial = loadFont('imagens/assets/fonteTelaInicial.otf');
  
  imagemGameOver = loadImage('imagens/assets/game-over.png');
  
  imagemVida = loadImage('imagens/assets/coracao.png');
  
  imagemPersonagem = loadImage('imagens/personagem/correndo.png');
  
  imagemInimigo = loadImage('imagens/inimigos/gotinha.png');
  imagemInimigoTroll = loadImage('imagens/inimigos/troll.png');
  imagemInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png');
  
  fita = loadJSON('fita/fita.json');
  
  somDoInicio = loadSound('sons/somInicial.mp3');
  somDoFinal = loadSound('sons/somFinal.mp3');
  somDoJogo = loadSound('sons/trilha_jogo.mp3');
  somDoPulo = loadSound('sons/somPulo.mp3');
  somDaMorte = loadSound('sons/somMorte.mp3');
}