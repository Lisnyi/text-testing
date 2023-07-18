import { findUnicLetter } from "./findUnicLetter"
import type { UnicElement } from "../types"

export function splitText(text:string) {
    const wordsFromText = text.split(' ')
    const unicLetters: UnicElement[] = []
    wordsFromText.forEach((word) => {
        const letter = findUnicLetter(word.split(''))
        unicLetters.push(letter)
    })
    return findUnicLetter(unicLetters)
}