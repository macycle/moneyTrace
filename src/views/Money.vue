<template>
    <div class="money">
       <div class='types'>
            <TabBar class-prefix="types" :bars="barsValue" :c-bar.sync="record.type"/>
            <button class="cancel" @click="cancel">取消</button>
       </div>

       <TagList></TagList>
    </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import TabBar from '@/components/TabBar.vue';
import clone from '@/lib/clone';

@Component({
    components:{TabBar}
})
    export default class Money extends Vue{
        barsValue=[{name: '支出', value: '-'}, {name: '收入', value: '+'}];
        record: RecordItem =this.initRecord();

        get tagList(): TagItem[]{
            return this.$store.state.tagList;
        }

        initRecord(){
            return {tag: {name: 'food', value: '餐饮'}, 
                    type: '-',
                    note: '',
                    amount: 0};  //直接赋值不用声明；
        }

        cancel(){
            this.$router.replace('/bill');
        }

        complete(){
            this.$store.commit('insertRecord',clone<RecordItem>(this.record));
            this.record=this.initRecord();
            this.$router.replace('/bill')    //TODO
            }

    }
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/style.scss";

.types{
    background:#7C48DB;
    display:flex;
    justify-content: center;
    position: relative;

    ::v-deep .types-tab-bar-item {
            padding: 24px 16px 8px 16px;
        }

}



</style>