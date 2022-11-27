let flg = false
let timer = 0
basic.forever(function () {
    timer = control.millis()
    for(let i = 5; i >= 3; i-- ) {
        while(control.millis()-timer < 1000) {
            basic.pause(1)
        }
        timer = control.millis()
        basic.showString(i+"")
    }
while (control.millis() - timer < 1000) {
        basic.pause(1)
    }
    timer = control.millis()
    basic.showString("")
    flg = true
    while (control.millis() - timer <= 5000) {
        if (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B)) {
            basic.showString("A: " + (control.millis() - timer - 2000) / 1000 + "")
            flg = false
            break;
        }
        basic.pause(1)
    }
    if (flg) {
        basic.showString("X")
        basic.showString("")
        basic.showString("X")
    }
    basic.showString("")
    basic.pause(500)
    basic.showString("Restart!!")
    basic.pause(3000)
})
