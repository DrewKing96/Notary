function loadBook(filename, displayName) {
	let currentBook = "";
	let url = "books/" + filename;

	document.getElementById("fileName").innerHTML = displayName;
	document.getElementById("searchstat").innerHTML = "";
	document.getElementById("keyword").value = "";

	//server request 
	var xhr = new XMLHttpRequest();
	xhr.open("GET", url, true);
	xhr.send();

	xhr.onreadystatechange = function() {
		if(xhr.readState == 4 && xhr.status == 200) {
			currentBook = xhr.responseText;

			//remove line breaks and carriage returns replacing with a <br>
			currentBook = currentBook.replace(/(?:\r\n|\r|\n)/g, '<br>');
			document.getElementById("fileContent").innerHTML = currentBook;

			var element = document.getElementById("fileContent");
			element.scrollTop = 0;
		}
	};
}
