export default class Jeu {
  private joueurs: [string, string] = ["Alice", "Bob"]
  private score: [number, number] = [0 , 0]

  public getScore(): [number, number] {
    return this.score
  }

  public getJoueurs() {
    return this.joueurs
  }

  public pointPour(joueur: string): void {
    const id_player = this.joueurs.findIndex((e) => e === joueur)
    this.score[id_player] += 1
  } 
}