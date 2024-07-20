export class PlayerControleur {
  controle(player) {
    console.log(1);
    window.onkeydown = (e) => {
      if (e.code == "ArrowUp") {
        player.saute();
      }
    };
  }
}
