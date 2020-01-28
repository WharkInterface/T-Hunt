/*
    Projet : T-Hunt
    Détails : BB-8
    Auteur : Alexandre Pintrand / Grégoire Pean / Killiany Lecosseck
    Version du : 28/01/2020
*/

var isFleeing = true;
var isChased = false;


async function startProgram() {
	isFleeing = false;
	while (!isChased) {
		await Animation.BB8.play();
		await delay(0.30);
	}
	while (true) {
		if (getSpeed() < 10 && isFleeing === false) {
			isFleeing = true;
			await roll(getRandomInt(0, 359), 255, 1);
			isFleeing = false;
		}
		await delay(0.025);
	}
}

async function onCollision() {
	isChased = true;
	if (true && isFleeing === false) {
		isFleeing = true;
		await roll(getRandomInt(0, 359), 255, 10);
		isFleeing = false;
	} else {
	}
}
registerEvent(EventType.onCollision, onCollision);