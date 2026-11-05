import { describe, expect, it } from 'vitest'
import Jeu from '../src/jeu'

const JEU = new Jeu()

describe("JeuTest", () => {
  it("Les points s'ajoutent correctement", () => {
    JEU.pointPour("Alice")
    expect(JEU.getScore()).toBe("Quinze - Zéro")
  })
})