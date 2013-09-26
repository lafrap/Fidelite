FrapFlux = {
	
	id: 'sun',
	nom: 'Sun Radio',
	racine: 'http://www.lesonunique.com/',
	//http://80.82.229.202/sun.aac
	mp3_direct: {
	    hifi: 'http://80.82.229.202/sunhd.mp3',
	    lofi: 'http://80.82.229.202/sunhd.mp3'
	},	
	mp3_ts: 'http://80.82.229.202/.mp3?date=%HMS%',
	mp3_racine_podcast : '/home/www/lesonunique/sites/defaut/files/podcasts',
	
	ws_meta_direct: 'http://test.lafrap.fr/block_now/nodes.json',
	ws_podcasts: 'http://80.82.229.204/services/views/services.json',
	ws_video: 'https://api.dailymotion.com/playlist/x231ha_lesonunique_playlist-player/videos&fields=thumbnail_medium_url,id,title,channel,owner,embed_html,duration,views_total,url',
	
	facebook_url : 'https://www.facebook.com/lesonunique',
	twitter_msg: 'J\'écoute {url} #sunradio #sunapp',
	telephone_std: '0240133213',
	telephone_msg: '0240133212',
	email_contact: 'contact@lesonunique.com',
	url_like: '',
	
	url_dedicace: 'http://www.lesonunique.com/datasun/selection_auditeur/selection_date_jquery.php',
	url_contact: 'http://frap.jembe.fr/formulaire/send.php',

	destinataires : [
		{nom:'Thomas Martin',mail:'thomas@boceto.fr'},
		{nom:'Arnaud Decherf',mail:'arnaud@boceto.fr'},
		{nom:'Accueil',mail:'contact@boceto.fr'}
	]
}