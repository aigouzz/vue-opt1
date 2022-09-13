<template>
    <div class="about-container">
        <div class="about-title">
            欢迎来到about
        </div>
        <button @click="changeRoute">切换router</button>
        <router-view></router-view>
    </div>
</template>
<script>
/*eslint-disable */
    export default{
        data() {
            return {};
        },
        created() {
            console.log(this.$route)
        },
        methods: {
            changeRoute() {
                console.log(this.$route, this.$router);
                let from = this.$route.path.split('/')[2];
                let pathArr = ['/about/hot', '/about/inner', '/about/book/12902']
                let idx = 0;
                for(let i = 0;i < pathArr.length;i ++) {
                    if(pathArr[i].indexOf(from) > -1) {
                        idx = (i + 1) % pathArr.length;
                        break;
                    }
                }
                let path = pathArr[idx];
                this.$router.push({
                    path,
                    query: {
                        from
                    }
                });
            }
        },
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