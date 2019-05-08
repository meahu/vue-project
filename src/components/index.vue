<template>
    <div @click="click1">
        哈哈1
    </div>
</template>
<script>
export default {
    name: 'App',
    props: ['click1'],
    data () {
        return {
            haha: 1
        }
    },
    watch: {
        click1() {
            this.haha++;
            console.log('haha', this.haha)
        }
    }
}
</script>
