input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    servos.P2.run(15)
    basic.showString("continuo 15 rpm")
})
input.onButtonPressed(Button.A, function () {
    servos.P0.setAngle(45)
    basic.showNumber(45)
})
input.onButtonPressed(Button.AB, function () {
    servos.P0.setAngle(90)
    basic.showNumber(90)
})
input.onButtonPressed(Button.B, function () {
    servos.P0.setAngle(135)
    basic.showNumber(135)
})
basic.showString("tarea 2 - servomotores SG90")
