import Vue from 'vue';
import Vuex from 'vuex';
import {defaultExpenseTags} from '@/contants/defaultTags';

Vue.use(Vuex);


const store=new Vuex.Store({
  state: {
    tagList: JSON.parse(window.localStorage.getItem('tag-list') || '0') || defaultExpenseTags,   //设置 defaultExpenseTags 保底值；
    recordList: JSON.parse(window.localStorage.getItem('record-list') || '[]'),
    tagListError: '',
    currentRecord: undefined,
    recordListError: ''
  }  as storeState,
  mutations: {
    /*tag-list相关操作*/
    insertTag(state,tag: TagItem){   //传入的参数为tag类型，
      state.tagListError="";
      const names=state.tagList.map(i=>i.name);
      if(names.indexOf(tag.name)>=0){
        state.tagListError='depulicate';
        return;    //插入的标签如果重名，则返回
      }else{
        state.tagList.push(tag);
        store.commit('saveTag');
      }
    },

    saveTag(state) {
      window.localStorage.setItem('tag-list',JSON.stringify(state.tagList))
    }  
    
  }
})


export default store;