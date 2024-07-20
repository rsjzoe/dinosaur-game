export class Player {
  bottom = 0;
  right = 473;

  saute = async () => {
    for (let i = 0; i < 120; i++) {
      this.bottom++;
      this.miseAjourBottom();
      await this.stop();
      0;
    }

    for (let i = 0; i < 120; i++) {
      this.bottom--;
      this.miseAjourBottom();
      await this.stop();
    }
  };

  miseAjourBottom = () => {
    let joueur = document.querySelector(".player");
    joueur.style.bottom = `${this.bottom}px`;
  };

  affiche() {
    let tableGame = document.querySelector(".table-game");
    tableGame.insertAdjacentHTML(
      "beforeend",
      `
        <div class="player">
          <img src="dino.png"/>
        </div>
        
        `
    );
  }

  getBottom() {
    return this.bottom;
  }

  stop = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("");
      }, 3);
    });
  };
}
