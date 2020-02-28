/*
    Projet : T-Hunt
    Détails : QDEE
    Auteur : Alexandre Pintrand / Grégoire Pean / Killiany Lecosseck
    Version du : 25/02/2020
*/

let vMotD = 0
let vMotG = 0
qdee.qdee_Init()
qdee.qdee_setBusServo(qdee.busServoPort.port10, 1, -120, 1000)
let vitesse = 50
let puissance = 1
basic.forever(function () {
    vMotG = vitesse + (qdee.qdee_ultrasonic(qdee.ultrasonicPort.port2) - qdee.qdee_ultrasonic(qdee.ultrasonicPort.port1)) / Math.max(qdee.qdee_ultrasonic(qdee.ultrasonicPort.port2), qdee.qdee_ultrasonic(qdee.ultrasonicPort.port1)) * vitesse
    vMotD = vitesse - (qdee.qdee_ultrasonic(qdee.ultrasonicPort.port2) - qdee.qdee_ultrasonic(qdee.ultrasonicPort.port1)) / Math.max(qdee.qdee_ultrasonic(qdee.ultrasonicPort.port2), qdee.qdee_ultrasonic(qdee.ultrasonicPort.port1)) * vitesse
    qdee.qdee_setMotorSpeed(vMotG, vMotD)
    qdee.qdee_setBusServo(qdee.busServoPort.port10, 1, 120, 1000)
    qdee.qdee_setBusServo(qdee.busServoPort.port10, 2, -120, 1000)
})
