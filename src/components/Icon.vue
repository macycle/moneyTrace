<template>
    <svg>
        <use :xlink:href="`#${name}`" />
    </svg>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';


@Component
    export default class Icon extends Vue {
        @Prop({required: true, type: String}) name!: string;
    }
</script>

<style lang="scss" scoped>

</style>