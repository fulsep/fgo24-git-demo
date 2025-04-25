/**
 * print triangle whose area is based on input
 * @param {number} input 
 */

function triangle(input) {
    for (let i = 1; i <= input; i++) {
        let margin = ""
        for (let m = input; m > i; m--) {
            margin += " "
        }
        let star = ""
        for (let s = 0; s < i; s++) {
            star += "* "
        }
        console.log(margin + star)
    }
}