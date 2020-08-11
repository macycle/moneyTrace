<template>
    <div>

    </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import {Component, Prop, Watch} from 'vue-property-decorator';
 import Icon from '@/components/Icon.vue';

@Component({
    components:{Icon}
})
    export default class Calculator extends Vue {
        @Prop(String) classPrefix?: string;
        @Prop({required:true,type: String}) note!: string;
        @Prop({required:true,type: Number})amount!: string;

        buttonList: string[]= ['1', '2', '3', '+', '4', '5', '6', '-',
            '7', '8', '9', 'ok', '.', '0'];
        
        output='0';
        dot=true;

        //有效数字最多为.前六位.后两位；
        validNumberBeforeDot = 6;
        validNumberAfterDot = 2;

        //记录运算；
        beforeNumber = 0;
        beforeIndex = 0;
        operator = '';

        writeNote(note: string){
            this.$emit('update:note',note);
        }

        handle(button: string){
            if(button!=='ok'){
                this.handleInput(button);
            }else{
                //this.complete();
            }
        }

        handleInput(button: string){
            
            if(this.output.length>=21){
                return;
            }

            if(this.output==='0'){
                if('0123456789'.indexOf(button)>=0){
                    this.output=button;
                    
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>