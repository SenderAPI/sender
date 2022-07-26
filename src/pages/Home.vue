<template>
    <div>
        {{ user }}
    </div>
</template>

<script>
import store from "../store/store.js"
export default {
    data(){
        return{
            user:"hola",
        }
    },
    mounted() {
        this.axios.get('https://auth.backsoul.xyz/api/v1/me').then(({data}) => {
            this.$store.commit("setUser",data.data);
        })
    },
}
</script>