<template>
    <div class="home-check">
        <div class="home-check-title">
            {{title}}
        </div>
    </div>
</template>
<script>
/*eslint-disable */
    export default{
        props: {
            title: {
                type: String,
                default: '这是home 的标题'
            }
        },

    };
</script>
<style scoped lang="less">
    @homeColor: #f0f;
    .home-check{
        .home-check-title{
            color: @homeColor;
        }
    }
</style>