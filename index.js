const canvas = document.getElementById('tutorial');
if (canvas.getContext) {
	const context = canvas.getContext('2d');
	context.fillStyle = 'red';
	context.fillRect(10, 10, 50, 50);
	context.fillStyle = 'rgba(0,0,200,0.5)';
	context.fillRect(30, 30, 50, 50);
}
