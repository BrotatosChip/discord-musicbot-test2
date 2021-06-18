module.exports = async client => {
	console.log(`[API] Logged in as ${client.user.username}`);
	await client.user.setActivity('Brotatos Chip videos', {
		type: 'WATCHING' //can be LISTENING, WATCHING, PLAYING, STREAMING
	});
};
