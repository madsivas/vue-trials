var app = new Vue({
	el:'#app',
	data: {
        message: 'Hello Vue!',
		product: 'Flowers',
		image: 'images/Hydrangeas.jpg',
		altText: 'hydrangeas',
		link: 'https://www.google.com/search?q=flowers&rlz=1C1GCEA_enNL800NL800&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjYzsego97fAhWlXhUIHYfzAoUQ_AUIDigB&biw=1536&bih=724',
		month: 'apr',
		details: [
			'Purple',
			'Seasonal',
			'Hydrangea chloriflora'
		],
		likes: 0
	},
	methods: {
		markLike: function() {
			this.likes += 1
		}
	}
})
