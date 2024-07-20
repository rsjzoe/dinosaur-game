export class Obstacle {
  right = 0;
  static id = 0;
  idObstacle = 0;
  static intervals = []
  static isGameOver = false

  constructor() {
    this.idObstacle = Obstacle.id;
  }

  deplacer = (player) => {
    if(Obstacle.isGameOver) return
    this.afficher()
    let interval = setInterval(() => {
      if (this.right >= 550) {
        clearInterval(interval);
      }
      // verification collision
      if(player.bottom <= 50 && player.right == (this.right + 58)){
        Obstacle.gameOver()
        console.log("collision");
      } 
      this.right++;
      this.miseAjourRight();
    }, 8);
    Obstacle.intervals.push(interval)
  };

  miseAjourRight = () => {
    let obstacle = document.querySelector(`.o-${this.idObstacle}`);
    obstacle.style.right = `${this.right}px`;
  };

  afficher() {
    let tableGame = document.querySelector(".table-game");
    tableGame.insertAdjacentHTML(
      "beforeend",
      `
            <div class="obstacle o-${Obstacle.id}">
              <img src="hazo.png"/>
            </div>    
        `
    );
    Obstacle.id++;
  }

  static gameOver = ()=>{
    for(let interval of Obstacle.intervals){
        clearInterval(interval)
    }
    this.isGameOver = true
  }
}
