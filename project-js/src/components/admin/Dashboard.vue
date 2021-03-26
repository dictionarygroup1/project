<template>
    <div></div>    
</template>

<script>
export default {
    data(){
        return {

        }
    },
    created(){
        let session = JSON.parse(localStorage.getItem('logged'))
        console.log(session);
        if(!session){
            this.$router.push('/console');
        }
    }
}
</script>
