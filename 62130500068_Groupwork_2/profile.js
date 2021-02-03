const app = {
    data() {
        return {
            firstname: 'Phichitphol',
            lastname: 'Bunyakanok',
            image: './img/Dark Exile.png',
            career: 'Sophomore at SIT, KMUTT'
        }
    },
    created() {
        console.log('message is ' + this.msg);
    },
    updated() {
        console.log('message changed to ' + this.msg);
    },
}
var mountedApp = Vue.createApp(app).mount('#app');