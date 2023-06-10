const vm= Vue.createApp({
    data () {
        return {
         product: 'barbie dresses',
         images: 'https://m.media-amazon.com/images/I/71fbIcV4PLL.jpg',
         stock: false,
         details: ['50% cotton', '30% wool', '20% polyster'],
       
         cart: 0
        }
    },
    methods: {
        addToCart() {
            return this.cart= this.cart+=1
        },
        removeFromCart(){
            return this.cart=this.cart -=1
        }
    },
    computed: {
        availability() {
            // return this.stock ? 'In Stock' : 'Out of Stock';
            return this.product
        }
    }
}).mount('#app')