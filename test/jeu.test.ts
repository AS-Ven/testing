import { describe, expect, it, vi } from 'vitest'
import Jeu from '../src/jeu'
import { Classement } from '../src/classement'

let classement: Classement = { enregistrer: vi.fn() }
const JEU = new Jeu("Alice", "Bob", classement)

describe("JEUTest", () => {

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
  
  // J'utilise un spy car le vrai classement n'existe pas
  it("enregistre Alice comme vainqueur une seule fois", () => {
    JEU.resetScore()
    classement.enregistrer = vi.fn()
    JEU.pointPour("Alice")
    JEU.pointPour("Alice")
    JEU.pointPour("Alice")
    JEU.pointPour("Alice")
    JEU.pointPour("Alice")

    expect(classement.enregistrer).toHaveBeenCalledOnce()
    expect(classement.enregistrer).toHaveBeenCalledWith("Alice", "Bob")
  })

  // J'utilise un spy car le vrai classement n'existe pas et qu'un mock serait beaucoup pour si peu
  it("enregistre Bob comme vainqueur une seule fois", () => {
    JEU.resetScore()
    classement.enregistrer = vi.fn()
    JEU.pointPour("Bob")
    JEU.pointPour("Bob")
    JEU.pointPour("Bob")
    JEU.pointPour("Bob")
    JEU.pointPour("Bob")

    expect(classement.enregistrer).toHaveBeenCalledOnce()
    expect(classement.enregistrer).toHaveBeenCalledWith("Bob", "Alice")
})
})