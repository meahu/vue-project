<template>
    <div class="a" v-show="visible">{{content}} </div>
</template>
<script>
export default {
    data () {
        return {
            content: '',
            visible: true
        }
    },
    methods: {
        hideDom() {
            setTimeout(() => {
                this.visible = false;
            this.$el.parentNode.removeChild(this.$el);
            }, 3000)
        }
    },
    mounted(){
        this.hideDom();
    }
}
</script>
