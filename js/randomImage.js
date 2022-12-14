document.querySelector('button').onclick = function() { 
	const imageCollection = ['images/pic1.jpg', 'images/pic2.jpg', 'images/pic3.jpg', 'images/pic4.jpg']; 
	const randomIndex = Math.floor(Math.random() * imageCollection.length); 
	document.querySelector('img').src = imageCollection[randomIndex]; 
} 