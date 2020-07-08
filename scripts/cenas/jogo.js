class Jogo{
  constructor(){
    this.indice = 0;
    this.mapa = fita.mapa;
    
  }
  
  setup(){
    somDoJogo.loop();
    cenario = new Cenario(imagemCenario, 3);
    pontuacao = new Pontuacao();
    
    vida = new Vida(fita.configuracoes.vidaMaxima, fita.configuracoes.vidaInicial);
  
    personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 30,110, 135, 220, 270);
  
    const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width, 30, 52, 52, 104, 104, 10);
  
    const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width, 200, 100, 75, 200, 150, 10);
  
    const inimigoTroll = new Inimigo(matrizInimigoTroll, imagemInimigoTroll, width, 0, 200, 200, 400, 400, 10);
  
    inimigos.push(inimigo);
    inimigos.push(inimigoVoador);
    inimigos.push(inimigoTroll);
  }

  keyPressed(key){
    if(key === 'ArrowUp'){
    personagem.pular();
    somDoPulo.play();
    }
  }
  
  draw(){
    cenario.exibe();
    cenario.move();
  
    pontuacao.exibe();
    pontuacao.adicionarPonto();
    
    vida.draw();
  
    personagem.exibe();
    personagem.aplicaGravidade();
    
    const linhaAtual = this.mapa[this.indice];
    const inimigo = inimigos[linhaAtual.inimigo];
    const inimigoVisivel = inimigo.x < -inimigo.largura;
    
    inimigo.velocidade = linhaAtual.velocidade;
  
    inimigo.exibe();
    inimigo.move();
  
    if (inimigoVisivel){
      this.indice++;
      inimigo.reaparece();
      if (this.indice > this.mapa.length - 1){
        this.indice = 0;
      }
    }

    if(personagem.estaColidindo(inimigo)){
      vida._perdeVida();
      personagem.tornarInvencivel();
      if(vida.vidas === 0){
        vida._perdeVida();
        somDoJogo.stop();
        somDaMorte.play();
        noLoop();
        image(imagemGameOver, width/2 -200, height/2 -200);
      }
    }    
  }
}