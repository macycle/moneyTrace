<template>
    <div class="money">
       <div class='types'>
            <TabBar class-prefix="types" :bars="barsValue" :c-bar.sync="record.type"/>
            <button class="cancel" @click="cancel">取消</button>
       </div>
       <TagList v-if="record.type==='-'" class-prefix="money" :dynamic="true" :selected-tag.sync="record.tag" :tag-list="tagList" class="tag-list"/>
       <TagList v-else-if="record.type === '+'" class-prefix="money" :dynamic="true" :selected-tag.sync="record.tag" :tag-list="incomeTags" class="tag-list"/>

       <Calculator class-prefix='money' :note.sync='record.note' :amount.sync='record.amount' @complete="complete"/>
    </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import {Component, Watch} from 'vue-property-decorator';
import TabBar from '@/components/TabBar.vue';
import clone from '@/lib/clone';
import TagList from '@/components/Money/TagList.vue';
import {defaultIncomeTags} from '@/contants/defaultTags';
import Calculator from '@/components/Money/Calculator.vue';

@Component({
    components:{TabBar,TagList,Calculator}
})
    export default class Money extends Vue{
        barsValue=[{name: '支出', value: '-'}, {name: '收入', value: '+'}];
        record: RecordItem =this.initRecord();
        incomeTags=defaultIncomeTags;

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
            this.$router.replace('/bill')    
        }

        @Watch('record.type')
            onTypeChange(type: string){
                if(type==='+'){
                    this.record.tag={name:'salary',value:'工资'};
                }else if(type==='-'){
                    this.record.tag={name:"food",value:'饮食'};
                }
            }
        

        

    }
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/style.scss";

.types{
    background:#9563f1;
    display:flex;
    justify-content: center;
    position: relative;

    ::v-deep .types-tab-bar-item {
            padding: 24px 16px 8px 16px;
        }

    .cancel{
        position: absolute;
        top:40%;
        right:0;
        transform: translateY(-50%);
        font-size: 16px;
        padding: 24px 14px 8px 16px;
        color:white;
    }
}

.money{
    .tag-list{
        padding-bottom: 76+56*4+12px;
    }
}


::v-deep {
        .money-calculator {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100vw;
        }
    }

</style>