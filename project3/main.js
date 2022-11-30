const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            //inStock: true
            //inventory: 0   // 0 = out of stock
            //inventory: 5 // 5 = Almost sold out of stock
            inventory: 100 // 100 = in stock
        }
    }
})
