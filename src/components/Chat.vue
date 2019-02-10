<template>
    <div class="chat container">
        <!-- this.name is the prop not the attribute in default -->
        <h2>Chat {{this.name}}</h2>
    </div>
</template>

<script>
export default {
    name: 'Chat',
    data() {
        return {

        }
    },
    props: ['name'],
}
</script>

<style>

</style>


