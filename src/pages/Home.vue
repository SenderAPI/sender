<template>
    <div>
        {{ user }}
    </div>
</template>

<script>
export default {
    data(){
        return{
            user:"hola",
        }
    },
    mounted() {
        this.axios.get('http://localhost:8000/api/v1/me').then((response) => {
            console.log(response)
        })
    },
}
</script>