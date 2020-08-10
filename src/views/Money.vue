<template>
    <div class="money">
       <div class='types'>
            <TabBar class-prefix="types" :bars="[{name: '支出', value: '-'}, {name: '收入', value: '+'}]" :c-bar.sync="record.type"/>
       </div>
    </div>
</template>

<script>
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import TabBar from '@/components/TabBar.vue';
@Component({
    components:{TabBar}
})
    export default class Money extends Vue{
        

    }
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/style.scss";

</style>