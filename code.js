const http = axios.create({
	baseURL: 'https://ptest.rentalho.com/ext-api'
});

(async () => {
	let res = await http.post(`login`, {
		'email': 'address@example.org',
		'password': '12345678'
	});

	const token = res.data.access_token;

	http.defaults.headers.common['Authorization'] = `Bearer ${token}`;

	res = await http.post(`services/fast-recharge`, {
		"phone": "55555558",
		"reference": "123456789",
		"price": 22,
		"success_url": "https://localhost:2121",
	    "failed_url": "https://localhost:2121",
	    "notification_url": "https://webhook.site/e88e74ac-fd57-4c57-a941-f4a8c5a5ecc1",
	    "client": {
	        "name": "Tio",
	        "email": "juana@jicotea.com",
	        "last_name": "Canilla",
	        "country_id": 0,
	        "phone": "55161572"
	    }
	});

	const url = res.data.url;

	const el = document.getElementById('iframe');
	el.src = url;
})();