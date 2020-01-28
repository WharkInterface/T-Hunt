/*
    Projet : T-Hunt
    Détails : QDEE
    Auteur : Alexandre Pintrand / Grégoire Pean / Killiany Lecosseck
    Version du : 28/01/2020
*/

qdee.qdee_Init()
qdee.qdee_init_colorSensor(qdee.colorSensorPort.port4)
qdee.qdee_setMotorSpeed(100, 98)
music.playTone(587, music.beat(BeatFraction.Whole))