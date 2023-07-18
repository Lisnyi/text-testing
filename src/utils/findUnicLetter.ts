import type { UnicElement } from "../types"

export function findUnicLetter(letters: UnicElement[]) {
    for (let i = 0; i < letters.length; i ++) {
        const filtredArray = letters.filter(l => l === letters[i] && letters[i] !== undefined)
        if (filtredArray.length === 1) {
            return filtredArray[0]
        }
        
    }
}