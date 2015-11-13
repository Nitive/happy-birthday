function createTypeStack() {
	var time = 0;
	return function(cb, add) {
		time += add
		setTimeout(cb, time)
	}
}

document.addEventListener("DOMContentLoaded", function(event) {
	var textField = document.getElementById('text')
	var text = 'wake up Sergey...\nyou got older\nhappy birthday!'

	var typeWithInterval = createTypeStack();

	var lines = text.split('\n')

	for (var i = 0, l = lines.length; i < l; i++) {
		typeWithInterval(typeLine.bind(null, lines[i] + '\n'), i === 0 ? 0 : 500)
	}

	function typeLine(line) {
		var words = line.split(' ')
		for (var i = 0, l = words.length; i < l; i++) {
			typeWithInterval(typeWord.bind(null, words[i] + ' '), i * 300)
		}
	}

	function typeWord(word) {
		for (var i = 0, l = word.length; i < l; i++) {
			typeWithInterval(typeSymbol.bind(null, word[i]), i === 0 ? 0 : 100)
		}
	}

	function typeSymbol(symbol) {
		textField.innerHTML += symbol
	}
});

console.log('¯\_(ツ)_/¯')
