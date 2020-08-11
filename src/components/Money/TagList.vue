<template>
    <ul class="tags" :class="{[classPrefix+'-tags']:classPrefix}">
        <li v-for="(tag,index) in tagLit" :key="index" @click="select(tag)" class="tags-item" :class="{[classPrefix+'-tags-item']: classPrefix}">
            <div class="tags-item-icon" :class="{'selected': tag.name === selectedTag.name, [classPrefix+'-tags-item-icon']: classPrefix}">

                <Icon :name='tag.name' />
            </div>


        </li>
    </ul>
</template>

<script lang="ts">
 import Vue from 'vue';
 import {Component, Prop} from 'vue-property-decorator';


 @Component
    export default class TagList extends Vue {
        @Prop(String) classPrefix?: string;
        @Prop({required: true,type: Object}) selectedTag!: TagItem;
        @Prop({required: true,default: false}) dynamic!: boolean;
        @Prop({required: true,type: Array}) tagList!: TagItem[];

        select(tag: TagItem){
            this.$emit('update:selectedTag',tag);
        }

        add(){
            this.$router.replace('/tags');  //TODO
        }
    }
</script>

<style lang="scss" scoped>

</style>