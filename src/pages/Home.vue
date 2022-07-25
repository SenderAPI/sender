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
        this.axios.get('http://localhost:8000/api/users/me ', {withCredentials: true}   ).then((response) => {
            this.user = response.data.data.user.name
        })
    },
}
</script>