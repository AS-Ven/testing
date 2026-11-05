export default class Jeu {
  private joueurs: [string, string] = ["Alice", "Bob"]
  private score: [number, number] = [0 , 0]

  public getScore(): string {
    let classement = ""
    let i = 0
    this.score.forEach(e => {
      if (i === 1 && e === this.score[0]) {
        e === 3 ? classement = "Egalité" : classement += "A"
        return(classement)
      }
      switch (e) {
        case 0:
          classement += "Zéro"
          break;
        case 1:
          classement += "Quinze"
          break;
        case 2:
          classement += "Trente"
          break;
        case 3:
          classement += "Quarante"
          break;
      
        default:
          break;
      }
      i === 0 ? classement += " - " : ""
      i += 1
    });
    
    return classement
  }

  public getJoueurs() {
    return this.joueurs
  }

  public resetScore() {
    this.score = [0, 0]
  }

  public pointPour(joueur: string): void {
    const id_player = this.joueurs.findIndex((e) => e === joueur)
    this.score[id_player] += 1
  } 
}