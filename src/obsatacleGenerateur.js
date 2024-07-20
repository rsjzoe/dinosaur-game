import { Obstacle } from "./obstacle";

export class Generateur {
  init = (player) => {
    let interval = setInterval(() => {
      if (Obstacle.isGameOver) {
        clearInterval(interval);
      }
      const obstacle = new Obstacle();
      obstacle.deplacer(player);
    }, 3000);
  };
}
