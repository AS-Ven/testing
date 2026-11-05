import { describe, expect, it } from 'vitest'
import Jeu from '../src/jeu'

const JEU = new Jeu()

describe("JeuTest", () => {

  it("Les points s'ajoutent correctement", () => {
    JEU.resetScore()
    JEU.pointPour("Alice")
    expect(JEU.getScore()).toBe("Quinze - Zéro")
  })

  it("getScore() renvoie une Egalité", () => {
    JEU.resetScore()
    JEU.pointPour("Alice")
    JEU.pointPour("Bob")
    expect(JEU.getScore()).toBe("Quinze - A")
  })

  it("getScore() renvoie Egalité", () => {
    JEU.resetScore()
    JEU.pointPour("Alice")
    JEU.pointPour("Alice")
    JEU.pointPour("Alice")
    JEU.pointPour("Bob")
    JEU.pointPour("Bob")
    JEU.pointPour("Bob")
    expect(JEU.getScore()).toBe("Egalité")
  })

  it("Alice gagne le match", () => {
    JEU.resetScore()
    JEU.pointPour("Alice")
    JEU.pointPour("Alice")
    JEU.pointPour("Alice")
    JEU.pointPour("Alice")
    expect(JEU.getScore()).toBe("Victoire Alice")
  })

})