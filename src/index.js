import { Generateur } from "./obsatacleGenerateur";

import { Player } from "./player";
import { PlayerControleur } from "./playerControleur";

export function init() {
  let player = new Player();
  let control = new PlayerControleur();
  let obstacleGenerateur = new Generateur();
  player.affiche();
  control.controle(player);
  obstacleGenerateur.init(player);
}
