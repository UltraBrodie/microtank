radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Forward, 100)
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor4, Kitronik_Robotics_Board.MotorDirection.Forward, 100)
    }
    if (receivedNumber == 2) {
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Forward, 0)
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor4, Kitronik_Robotics_Board.MotorDirection.Forward, 0)
    }
    if (receivedNumber == 3) {
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Reverse, 100)
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor4, Kitronik_Robotics_Board.MotorDirection.Reverse, 100)
    }
    if (receivedNumber == 5) {
        Kitronik_Robotics_Board.motorOff(Kitronik_Robotics_Board.Motors.Motor4)
    }
    if (receivedNumber == 6) {
        Kitronik_Robotics_Board.motorOff(Kitronik_Robotics_Board.Motors.Motor1)
    }
    if (receivedNumber == 7) {
        music.play(music.tonePlayable(196, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    }
})
basic.forever(function () {
    if (Kitronik_Game_Controller.buttonIsPressed(Kitronik_Game_Controller.ControllerButtonPins.Fire1)) {
        radio.sendNumber(1)
    } else {
        radio.sendNumber(2)
    }
    if (Kitronik_Game_Controller.buttonIsPressed(Kitronik_Game_Controller.ControllerButtonPins.Fire2)) {
        radio.sendNumber(3)
    } else {
        radio.sendNumber(4)
    }
    if (Kitronik_Game_Controller.buttonIsPressed(Kitronik_Game_Controller.ControllerButtonPins.Left)) {
        radio.sendNumber(5)
    }
    if (Kitronik_Game_Controller.buttonIsPressed(Kitronik_Game_Controller.ControllerButtonPins.Right)) {
        radio.sendNumber(6)
    }
    if (input.buttonIsPressed(Button.A)) {
        radio.sendNumber(7)
    }
})
