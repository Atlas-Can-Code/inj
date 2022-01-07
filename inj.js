(async() => {
	await ModMenu.init();
	ModMenu.menu.arr.push(new ModMenu.MenuTree('glixzzy', [
		new ModMenu.MenuTree('Cafe', [
			new ModMenu.MenuButton('Get Coins', () => fetch("https://raw.githubusercontent.com/glixzzy/blooket-hack/main/cafe/getCoins.js").then((res) => res.text().then((t) => eval(t)))),
			new ModMenu.MenuButton('Infinite Food Level', () => fetch("https://raw.githubusercontent.com/glixzzy/blooket-hack/main/cafe/infiniteFoodLevel.js").then((res) => res.text().then((t) => eval(t)))),
			new ModMenu.MenuButton('Stock Infinite Food', () => fetch("https://raw.githubusercontent.com/glixzzy/blooket-hack/main/cafe/stockInfiniteFood.js").then((res) => res.text().then((t) => eval(t)))),
			new ModMenu.MenuButton('End Game', () => fetch("https://raw.githubusercontent.com/glixzzy/blooket-hack/main/cafe/endGame.js").then((res) => res.text().then((t) => eval(t)))),
		]),
		new ModMenu.MenuTree('Crypto', [
			new ModMenu.MenuButton('Get Crypto', () => fetch("https://raw.githubusercontent.com/glixzzy/blooket-hack/main/crypto/getCrypto.js").then((res) => res.text().then((t) => eval(t)))),
			new ModMenu.MenuButton('Hack Other Users Password', () => fetch("https://raw.githubusercontent.com/glixzzy/blooket-hack/main/crypto/hackOtherUsersPassword.js").then((res) => res.text().then((t) => eval(t)))),
		]),
		new ModMenu.MenuTree('Factory', [
			new ModMenu.MenuButton('Get Cash', () => fetch("https://raw.githubusercontent.com/glixzzy/blooket-hack/main/factory/getCash.js").then((res) => res.text().then((t) => eval(t)))),
			new ModMenu.MenuButton('Get Mega Bot', () => fetch("https://raw.githubusercontent.com/glixzzy/blooket-hack/main/factory/getMegaBot.js").then((res) => res.text().then((t) => eval(t)))),
		]),
		new ModMenu.MenuTree('Fishing Frenzy', [
			new ModMenu.MenuButton('Set Weight', () => fetch("https://raw.githubusercontent.com/glixzzy/blooket-hack/main/fishing-frenzy/setWeight.js").then((res) => res.text().then((t) => eval(t)))),
		]),
		new ModMenu.MenuTree('Global', [
			new ModMenu.MenuButton('Add Tokens', () => fetch("https://raw.githubusercontent.com/glixzzy/blooket-hack/main/global/addTokens.js").then((res) => res.text().then((t) => eval(t)))),
			new ModMenu.MenuButton('Bypass Random Name', () => fetch("https://raw.githubusercontent.com/glixzzy/blooket-hack/main/global/bypassRandomName.js").then((res) => res.text().then((t) => eval(t)))),
			new ModMenu.MenuButton('Flood Games', () => fetch("https://raw.githubusercontent.com/glixzzy/blooket-hack/main/global/floodGames.js").then((res) => res.text().then((t) => eval(t)))),
			new ModMenu.MenuButton('Get All Blooks in Game', () => fetch("https://raw.githubusercontent.com/glixzzy/blooket-hack/main/global/getAllBlooksInGame.js").then((res) => res.text().then((t) => eval(t)))),
			new ModMenu.MenuButton('Get Every Answer Correct', () => fetch("https://raw.githubusercontent.com/glixzzy/blooket-hack/main/global/getEveryCorrectAnswer.js").then((res) => res.text().then((t) => eval(t)))),
			new ModMenu.MenuButton('Spam Open Boxes', () => fetch("https://raw.githubusercontent.com/glixzzy/blooket-hack/main/global/spamOpenBoxes.js").then((res) => res.text().then((t) => eval(t)))),
		]),
		new ModMenu.MenuTree('Gold', [
			new ModMenu.MenuButton('Get Gold', () => fetch("https://raw.githubusercontent.com/glixzzy/blooket-hack/main/gold/getGold.js").then((res) => res.text().then((t) => eval(t)))),
			new ModMenu.MenuButton('Chest ESP', () => fetch("https://raw.githubusercontent.com/glixzzy/blooket-hack/main/gold/chest-ESP.js").then((res) => res.text().then((t) => eval(t)))),
		]),
		new ModMenu.MenuTree('Racing', [
			new ModMenu.MenuButton('Instant Win', () => fetch("https://raw.githubusercontent.com/glixzzy/blooket-hack/main/racing/instantWin.js").then((res) => res.text().then((t) => eval(t)))),
		]),
		new ModMenu.MenuTree('Tower Defense', [
			new ModMenu.MenuButton('All Free', () => fetch("https://raw.githubusercontent.com/glixzzy/blooket-hack/main/tower-defense/allFree.js").then((res) => res.text().then((t) => eval(t)))),
			new ModMenu.MenuButton('Change Game Round', () => fetch("https://raw.githubusercontent.com/glixzzy/blooket-hack/main/tower-defense/changeGameRound.js").then((res) => res.text().then((t) => eval(t)))),
			new ModMenu.MenuButton('Get Cash', () => fetch("https://raw.githubusercontent.com/glixzzy/blooket-hack/main/tower-defense/getCash.js").then((res) => res.text().then((t) => eval(t)))),
			new ModMenu.MenuButton('Get Damage', () => fetch("https://raw.githubusercontent.com/glixzzy/blooket-hack/main/tower-defense/getDamage.js").then((res) => res.text().then((t) => eval(t)))),
			new ModMenu.MenuButton('Remove Ducks', () => fetch("https://raw.githubusercontent.com/glixzzy/blooket-hack/main/tower-defense/removeDucks.js").then((res) => res.text().then((t) => eval(t)))),
			new ModMenu.MenuButton('Remove Enemies', () => fetch("https://raw.githubusercontent.com/glixzzy/blooket-hack/main/tower-defense/removeEnemies.js").then((res) => res.text().then((t) => eval(t)))),
			new ModMenu.MenuButton('Remove Obsticles', () => fetch("https://raw.githubusercontent.com/glixzzy/blooket-hack/main/tower-defense/removeObsticles.js").then((res) => res.text().then((t) => eval(t)))),
			new ModMenu.MenuButton('Sell for True Value', () => fetch("https://raw.githubusercontent.com/glixzzy/blooket-hack/main/tower-defense/sellForTrueValue.js").then((res) => res.text().then((t) => eval(t)))),
		]),
		new ModMenu.MenuTree('Tower of Doom', [
			new ModMenu.MenuButton('Add Coins', () => fetch("https://raw.githubusercontent.com/glixzzy/blooket-hack/main/tower-of-doom/addCoins.js").then((res) => res.text().then((t) => eval(t)))),
			new ModMenu.MenuButton('Lower Enemy Charisma', () => fetch("https://raw.githubusercontent.com/glixzzy/blooket-hack/main/tower-of-doom/lowerEnemyCharisma.js").then((res) => res.text().then((t) => eval(t)))),
			new ModMenu.MenuButton('Lower Enemy Strength', () => fetch("https://raw.githubusercontent.com/glixzzy/blooket-hack/main/tower-of-doom/lowerEnemyStrength.js").then((res) => res.text().then((t) => eval(t)))),
			new ModMenu.MenuButton('Lower Enemy Wisdom', () => fetch("https://raw.githubusercontent.com/glixzzy/blooket-hack/main/tower-of-doom/lowerEnemyWisdom.js").then((res) => res.text().then((t) => eval(t)))),
		]),
	]));
})(); 
