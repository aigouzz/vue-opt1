<script>
/*eslint-disable */
    export default{
        data() {
            return {};
        },
        render(h) {
            return h('div', {
                class: 'opt-home'
            }, [h('div', {
                class: 'opt-home-outer'
            }, ['这个是home页面', h('img', {
                class: 'img',
                attrs: {
                    src: require('../assets/logo.png')
                }
            }), h('input', {
                attrs: {
                    type: 'text',
                    value: '',
                    placeholder: '请输入'
                },
            })])]);
        },
    };
</script>
<style></style>
