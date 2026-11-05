import { beforeEach, describe, expect, it, vi } from 'vitest'
import Jeu from '../src/jeu'
import { Classement } from '../src/classement'

let classement: Classement = { enregistrer: vi.fn() }
const JEU = new Jeu("Alice", "Bob", classement)

describe("JEUTest", () => {

  beforeEach(() => {
    classement.enregistrer = vi.fn()
    JEU.resetScore()
  })

  const setScore = (player: string, score: number) => {
    for (let i = 0; i < score; i++) {
      JEU.pointPour(player)
    }
  }

  it("Les points s'ajoutent correctement", () => {
    JEU.pointPour("Alice")
    expect(JEU.getScore()).toBe("Quinze - Zéro")
  })

  it("getScore() renvoie une Egalité", () => {
    JEU.pointPour("Alice")
    JEU.pointPour("Bob")
    expect(JEU.getScore()).toBe("Quinze - A")
  })

  it("getScore() renvoie Egalité", () => {
    setScore("Alice", 3)
    setScore("Bob", 3)
    expect(JEU.getScore()).toBe("Egalité")
  })

  it("Alice gagne le match", () => {
    setScore("Alice", 4)
    expect(JEU.getScore()).toBe("Victoire Alice")
  })
  
  // J'utilise un spy car le vrai classement n'existe pas
  it("enregistre Alice comme vainqueur une seule fois", () => {
    setScore("Alice", 4)
    JEU.pointPour("Alice")

    expect(classement.enregistrer).toHaveBeenCalledOnce()
    expect(classement.enregistrer).toHaveBeenCalledWith("Alice", "Bob")
  })

  // J'utilise un spy car le vrai classement n'existe pas et qu'un mock serait beaucoup pour si peu
  it("enregistre Bob comme vainqueur une seule fois", () => {
    setScore("Bob", 4)
    JEU.pointPour("Bob")

    expect(classement.enregistrer).toHaveBeenCalledOnce()
    expect(classement.enregistrer).toHaveBeenCalledWith("Bob", "Alice")
})
})