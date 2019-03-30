var books = [ "Genesis", "Exodus", "Leviticus", "Numbers", "Deuteronomy", "Joshua", "Judges", "Ruth", "1st Samuel", "2nd Samuel", "1st Kings", "2nd Kings", "1st Chronicles", "2nd Chronicles", "Ezra", "Nehemiah", "Esther", "Job", "Psalms", "Proverbs", "Ecclesiastes", "Song of Solomon", "Isaiah", "Jeremiah", "Lamentations", "Ezekiel", "Daniel", "Hosea", "Joel", "Amos", "Obadiah", "Jonah", "Micah", "Nahum", "Habakkuk", "Zephaniah", "Haggai", "Zechariah", "Malachi", "Matthew", "Mark", "Luke", "John", "Acts", "Romans", "1st Corinthians", "2nd Corinthians", "Galatians", "Ephesians", "Philippians", "Colossians", "1st Thessalonians", "2nd Thessalonians", "1st Timothy", "2nd Timothy", "Titus", "Philemon", "Hebrews", "James", "1st Peter", "2nd Peter", "1st John", "2nd John", "3rd John", "Jude", "Revelation" ];
function update() {
	var book = document.getElementById('book').value;
	var chapter = Number(document.getElementById('chapter').value) - 1;

	var bookNum = 0;
	for (var i = 0; i < books.length; i++) {
		if (books[i] == book) {
			bookNum = i;
		}
	}

	var page = "";
	for (var i = 0; i < bbe[bookNum].chapters[chapter].length; i++) {
		page += "<b>" + (i + 1) + "</b> " + bbe[bookNum].chapters[chapter][i] + "<br>";
	}

	document.getElementById('content').innerHTML = page;
}

window.onload = function() {
	document.getElementById('loading').style.display = "none";
	update();
}