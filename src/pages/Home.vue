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
    },
}
</script>