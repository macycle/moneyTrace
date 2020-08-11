<template>
    <ul class="tab-bar" :class="{[classPrefix+'-tab-bar']:classPrefix}">
        <li class="tab-bar-item" :class="{[classPrefix+'-tab-bar-item']:classPrefix,'selected':cBar===bar.value}"
        v-for="(bar,index) in bars" :key="index" @click="toggle(bar.value)"
        >
            {{bar.name}}
        </li>
    </ul>
</template>

<script lang='ts'>
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

type TabBarItem = {
    name: string;
    value: string;
}

@Component
    export default class TabBar extends Vue {
        @Prop(String) classPrefix?: string;
        @Prop({required: true,type: Array}) bars!: TabBarItem[];
        @Prop({required: true,type: String}) cBar!: string;


        toggle(barValue: string){
            this.$emit('update:cBar',barValue)
        }
    }
</script>

<style lang="scss" scoped>
.tab-bar{
    display: flex;
    justify-content: center;
    align-items: center;

    .tab-bar-item{
        font-size: 20px;
        padding: 4px;
        border-bottom: 1px solid transparent;
       
        
       
        &.selected{
            color:white;
            font-weight: bold;
           
        }
    }
}

</style>