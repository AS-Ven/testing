import { Classement } from "./classement"

export default class Jeu {
  private joueurs: [string, string]
  private score: [number, number] = [0 , 0]
  private matchTermine = false
  private classement: Classement

  public constructor(joueur1: string, joueur2: string, classement: Classement) {
    this.joueurs = [joueur1, joueur2]
    this.classement = classement
  }

  public getScore(): string {
    let classement = ""
    let i = 0
    this.score.forEach(e => {
      if (e >= 4) {
        classement = "Victoire " + this.joueurs[i]
        i = 2
        return (classement)
      }
      if (i === 1 && e === this.score[0]) {
        e === 3 ? classement = "Egalité" : classement += "A"
        return(classement)
      }
      if (i !== 2) {
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
            return;
        }
        i === 0 ? classement += " - " : ""
        i += 1
      }
    });
    
    return classement
  }

  public getJoueurs() {
    return this.joueurs
  }

  public resetScore() {
    this.score = [0, 0]
    this.matchTermine = false
  }

  public pointPour(joueur: string): void {
    const id_player = this.joueurs.findIndex((e) => e === joueur)
    this.score[id_player] += 1

    if (this.score[id_player] >= 4 && !this.matchTermine) {
      this.matchTermine = true
      this.classement.enregistrer(this.joueurs[id_player], this.joueurs[1 - id_player])
    }
  } 
}