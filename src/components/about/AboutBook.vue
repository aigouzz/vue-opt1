<template>
    <div class="about-hot-container">
        这是about的book page
        id:{{id}}
    </div>
</template>
<script>
/*eslint-disable */
    export default{
        data() {
            return {
                id: ''
            };
        },
        created() {
            this.id = this.$route.params.id;
        },
    }
</script>
<style scoped lang="less">
    @innerColor: #0f0;
    @border: 1px solid @innerColor;
    .about-hot-container{
        border: @border;
        font-size: 14px;
    }
</style>