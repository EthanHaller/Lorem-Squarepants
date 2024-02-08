const sentences = require("./sentences.json")

const getRandomSentence = () => {
	const randomIndex = Math.floor(Math.random() * sentences.length)
	return sentences[randomIndex]
}

const generateParagraphs = (length = 3) => {
	const minWordCount = 150
	let paragraphs = ""

	for (let i = 0; i < length; i++) {
		let currentWordCount = 0
		let paragraph = ""
		while (currentWordCount < minWordCount) {
			const sentence = getRandomSentence()
			paragraph += sentence + " "

			currentWordCount = paragraph.split(/\s+/).length
		}
		paragraphs += paragraph.trim() + "\n\n"
	}

	return paragraphs.trim()
}

const generateSentences = (length = 3) => {
	let sentencesString = ""

	for (let i = 0; i < length; i++) {
		sentencesString += getRandomSentence() + " "
	}

	return sentencesString.trim()
}

const generateWords = (length = 10) => {
	const words = []

	while (words.length < length) {
		const sentence = getRandomSentence()
		const sentenceWords = sentence.split(/\s+/)

		if (sentenceWords.length > 0) {
			const randomWord = sentenceWords[Math.floor(Math.random() * sentenceWords.length)]
			const cleanWord = randomWord.replace(/[^\w\s]/g, "")
			words.push(cleanWord)
		}
	}

	return words.join(" ")
}

module.exports = {
	generateParagraphs,
	generateSentences,
	generateWords,
}