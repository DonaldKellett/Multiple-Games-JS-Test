var halcyonic = {
	init: function() {
		console.log("%cHalcyonic","font-family: 'Yanone Kaffeesatz'; background-color: #3B4346; color: #fff; font-size: 5em; padding: 10px; border-radius: 10px;");
		console.log("%cDeveloper's Console","font-family: 'Yanone Kaffeesatz'; font-size: 3em;");
		console.log("%cThis console is for Halcyonic developers only.  Please do not mess with the console.","font-family: 'Yanone Kaffeesatz'; font-size: 16px;");
		console.log("--------------------------------------------------------------------------------------");
	},
	widgets: null,
	vip: {
		playerCode: undefined,
		confirmCode: function() {
			halcyonic.vip.playerCode = document.getElementById("secretCode").value;
			if (halcyonic.vip.playerCode === halcyonic.vip.oneShare.code) {
				halcyonic.vip.oneShare.draw();
			} else if (halcyonic.vip.playerCode === halcyonic.vip.twoShares.code) {
				halcyonic.vip.twoShares.draw();
			} else {
				document.getElementById("secretCodeError").style.display = "block";
			}
		},
		oneShare: {
			code: "one",
			draw: function() {
				document.getElementById("oneShare").style.display = "block";
				document.getElementById("secretCodeForm").style.display = "none";
				document.getElementById("secretCodeError").style.display = "none";
			},
			seconds: 60,
			questionsCorrect: 0,
			totalQuestions: 0,
			numOne: Math.round(12 * Math.random()),
			numTwo: Math.round(12 * Math.random()),
			playerAnswer: undefined,
			answer: undefined,
			init: function() {
				document.getElementById("oneShareStartGame").style.display = "none";
				document.getElementById("oneShareCountdownTimer").style.display = "block";
				document.getElementById("oneShareQuestion").style.display = "block";
				document.getElementById("oneShareResponse").style.display = "block";
				document.getElementById("oneShareNumOne").innerHTML = halcyonic.vip.oneShare.numOne;
				document.getElementById("oneShareNumTwo").innerHTML = halcyonic.vip.oneShare.numTwo;
				halcyonic.vip.oneShare.timer();
				halcyonic.vip.oneShare.detectKey();
			},
			timer: function() {
				halcyonic.vip.oneShare.seconds--;
				if (halcyonic.vip.oneShare.seconds < 0) {
					document.getElementById("oneShareCountdownTimer").style.display = "none";
					document.getElementById("oneShareQuestion").style.display = "none";
					document.getElementById("oneShareResponse").style.display = "none";
					document.getElementById("oneShareResults").style.display = "block";
					document.getElementById("oneShareQuestionsCorrect").innerHTML = halcyonic.vip.oneShare.questionsCorrect;
					document.getElementById("oneShareTotalQuestions").innerHTML = halcyonic.vip.oneShare.totalQuestions;
				}
				document.getElementById("oneShareCountdownTimer").innerHTML = "Time Remaining: " + halcyonic.vip.oneShare.seconds + " seconds";
				setTimeout("halcyonic.vip.oneShare.timer()",1000);
			},
			submit: function() {
				if (halcyonic.vip.oneShare.seconds >= 0) {
					halcyonic.vip.oneShare.answer = halcyonic.vip.oneShare.numOne * halcyonic.vip.oneShare.numTwo;
					halcyonic.vip.oneShare.playerAnswer = document.getElementById("oneShareAnswerBox").value;
					halcyonic.vip.oneShare.totalQuestions++;
					if (halcyonic.vip.oneShare.playerAnswer === halcyonic.vip.oneShare.answer.toString()) {halcyonic.vip.oneShare.questionsCorrect++;}
					halcyonic.vip.oneShare.numOne = Math.round(12 * Math.random());
					halcyonic.vip.oneShare.numTwo = Math.round(12 * Math.random());
					document.getElementById("oneShareNumOne").innerHTML = halcyonic.vip.oneShare.numOne;
					document.getElementById("oneShareNumTwo").innerHTML = halcyonic.vip.oneShare.numTwo;
					document.getElementById("oneShareAnswerBox").value = "";
				} else {
					console.log("%cSorry, the game is over.  You cannot answer anymore.","font-family: 'Yanone Kaffeesatz'; font-size: 16px;");
				}
			},
			detectKey: function() {
				document.onkeydown = function(event) {
					if (event.keyCode == 13) {halcyonic.vip.oneShare.submit();}
				}
			}
		},
		twoShares: {
			code: "9Zx7nN53pO",
			draw: function() {
				document.getElementById("twoShares").style.display = "block";
				document.getElementById("secretCodeForm").style.display = "none";
				document.getElementById("secretCodeError").style.display = "none";
			},
			difficulty: 3,
			seconds: 60,
			questionsCorrect: 0,
			totalQuestions: 0,
			numOne: undefined,
			numTwo: undefined,
			playerAnswer: undefined,
			answer: undefined,
			init: function() {
				document.getElementById("twoSharesStartGame").style.display = "none";
				document.getElementById("twoSharesCountdownTimer").style.display = "block";
				document.getElementById("twoSharesQuestion").style.display = "block";
				document.getElementById("twoSharesResponse").style.display = "block";
				document.getElementById("twoSharesDecreaseDifficulty").style.display = "none";
				document.getElementById("twoSharesIncreaseDifficulty").style.display = "none";
				switch(halcyonic.vip.twoShares.difficulty) {
					case 1: halcyonic.vip.twoShares.numOne = Math.round(5 * Math.random()); halcyonic.vip.twoShares.numTwo = Math.round(5 * Math.random()); break;
					case 2: halcyonic.vip.twoShares.numOne = Math.round(7 * Math.random()); halcyonic.vip.twoShares.numTwo = Math.round(7 * Math.random()); break;
					case 3: halcyonic.vip.twoShares.numOne = Math.round(9 * Math.random()); halcyonic.vip.twoShares.numTwo = Math.round(9 * Math.random()); break;
					case 4: halcyonic.vip.twoShares.numOne = Math.round(7 * Math.random()) + 5; halcyonic.vip.twoShares.numTwo = Math.round(7 * Math.random()) + 5; break;
					case 5: halcyonic.vip.twoShares.numOne = Math.round(10 * Math.random()) + 10; halcyonic.vip.twoShares.numTwo = Math.round(10 * Math.random()) + 10; break;
				}
				halcyonic.vip.twoShares.answer = halcyonic.vip.twoShares.numOne * halcyonic.vip.twoShares.numTwo;
				document.getElementById("twoSharesNumOne").innerHTML = halcyonic.vip.twoShares.numOne;
				document.getElementById("twoSharesNumTwo").innerHTML = halcyonic.vip.twoShares.numTwo;
				halcyonic.vip.twoShares.timer();
				halcyonic.vip.twoShares.detectKey();
			},
			increaseDifficulty: function() {
				if (halcyonic.vip.twoShares.seconds >= 60) {
					if (halcyonic.vip.twoShares.difficulty >= 5) {halcyonic.vip.twoShares.difficulty = 5;} else {halcyonic.vip.twoShares.difficulty++;}
					halcyonic.vip.twoShares.displayDifficulty();
				} else {
					console.log("%cSorry, the game has already started.  You can no longer increase the difficulty.","font-family: 'Yanone Kaffeesatz'; font-size: 16px;");
				}
			},
			decreaseDifficulty: function() {
				if (halcyonic.vip.twoShares.seconds >= 60) {
					if (halcyonic.vip.twoShares.difficulty <= 1) {halcyonic.vip.twoShares.difficulty = 1;} else {halcyonic.vip.twoShares.difficulty--;}
					halcyonic.vip.twoShares.displayDifficulty();
				} else {
					console.log("%cSorry, the game has already started.  You can no longer decrease the difficulty.","font-family: 'Yanone Kaffeesatz'; font-size: 16px;");
				}
			},
			displayDifficulty: function() {
				switch(halcyonic.vip.twoShares.difficulty) {
					case 1: document.getElementById("twoSharesDifficulty").innerHTML = "Novice"; document.getElementById("twoSharesDecreaseDifficulty").style.display = "none"; break;
					case 2: document.getElementById("twoSharesDifficulty").innerHTML = "Easy"; document.getElementById("twoSharesDecreaseDifficulty").style.display = "inline-block"; break;
					case 3: document.getElementById("twoSharesDifficulty").innerHTML = "Normal"; break;
					case 4: document.getElementById("twoSharesDifficulty").innerHTML = "Hard"; document.getElementById("twoSharesIncreaseDifficulty").style.display = "inline-block"; break;
					case 5: document.getElementById("twoSharesDifficulty").innerHTML = "Expert"; document.getElementById("twoSharesIncreaseDifficulty").style.display = "none"; break;
				}
			},
			timer: function() {
				halcyonic.vip.twoShares.seconds--;
				if (halcyonic.vip.twoShares.seconds < 0) {
					document.getElementById("twoSharesCountdownTimer").style.display = "none";
					document.getElementById("twoSharesQuestion").style.display = "none";
					document.getElementById("twoSharesResponse").style.display = "none";
					document.getElementById("twoSharesResults").style.display = "block";
					document.getElementById("twoSharesQuestionsCorrect").innerHTML = halcyonic.vip.twoShares.questionsCorrect;
					document.getElementById("twoSharesTotalQuestions").innerHTML = halcyonic.vip.twoShares.totalQuestions;
					switch(halcyonic.vip.twoShares.difficulty) {
						case 1: document.getElementById("twoSharesGameMode").innerHTML = "Novice"; break;
						case 2: document.getElementById("twoSharesGameMode").innerHTML = "Easy"; break;
						case 3: document.getElementById("twoSharesGameMode").innerHTML = "Normal"; break;
						case 4: document.getElementById("twoSharesGameMode").innerHTML = "Hard"; break;
						case 5: document.getElementById("twoSharesGameMode").innerHTML = "Expert"; break;
					}
				}
				document.getElementById("twoSharesCountdownTimer").innerHTML = "Time Remaining: " + halcyonic.vip.twoShares.seconds + " seconds";
				setTimeout("halcyonic.vip.twoShares.timer()",1000);
			},
			submit: function() {
				if (halcyonic.vip.twoShares.seconds >= 0) {
					halcyonic.vip.twoShares.playerAnswer = document.getElementById("twoSharesAnswerBox").value;
					halcyonic.vip.twoShares.totalQuestions++;
					if (halcyonic.vip.twoShares.playerAnswer === halcyonic.vip.twoShares.answer.toString()) {halcyonic.vip.twoShares.questionsCorrect++;}
					switch(halcyonic.vip.twoShares.difficulty) {
						case 1: halcyonic.vip.twoShares.numOne = Math.round(5 * Math.random()); halcyonic.vip.twoShares.numTwo = Math.round(5 * Math.random()); break;
						case 2: halcyonic.vip.twoShares.numOne = Math.round(7 * Math.random()); halcyonic.vip.twoShares.numTwo = Math.round(7 * Math.random()); break;
						case 3: halcyonic.vip.twoShares.numOne = Math.round(9 * Math.random()); halcyonic.vip.twoShares.numTwo = Math.round(9 * Math.random()); break;
						case 4: halcyonic.vip.twoShares.numOne = Math.round(7 * Math.random()) + 5; halcyonic.vip.twoShares.numTwo = Math.round(7 * Math.random()) + 5; break;
						case 5: halcyonic.vip.twoShares.numOne = Math.round(10 * Math.random()) + 10; halcyonic.vip.twoShares.numTwo = Math.round(10 * Math.random()) + 10; break;
					}
					halcyonic.vip.twoShares.answer = halcyonic.vip.twoShares.numOne * halcyonic.vip.twoShares.numTwo;
					document.getElementById("twoSharesNumOne").innerHTML = halcyonic.vip.twoShares.numOne;
					document.getElementById("twoSharesNumTwo").innerHTML = halcyonic.vip.twoShares.numTwo;
					document.getElementById("twoSharesAnswerBox").value = "";
				} else {
					console.log("%cSorry, the game is over.  You cannot answer anymore.","font-family: 'Yanone Kaffeesatz'; font-size: 16px;");
				}
			},
			detectKey: function() {
				document.onkeydown = function(event) {
					switch(event.keyCode) {
						case 13: halcyonic.vip.twoShares.submit(); break;
						case 37: halcyonic.vip.twoShares.decreaseDifficulty(); break;
						case 39: halcyonic.vip.twoShares.increaseDifficulty(); break;
					}
				}
			}
		}
	}
};