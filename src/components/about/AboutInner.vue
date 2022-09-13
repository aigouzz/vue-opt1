<template>
    <div class="about-inner-container">
        这是about的inner page {{inner}}
    </div>
</template>
<script>
/*eslint-disable */
    export default{
        data() {
            return {
                inner: 0
            };
        },
        mounted() {
            setInterval(() => {
                this.inner ++;
            }, 1000);
        }
    }
</script>
<style scoped lang="less">
    @innerColor: #eee;
    @border: 1px solid @innerColor;
    .about-inner-container{
        border: @border;
        font-size: 14px;
    }
</style>