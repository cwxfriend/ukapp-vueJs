<template>
    <div class="bl_balance_view">
        <div v-show="showTable">
          <table class="bl_balance_detail">
            <thead>
            <tr>
              <th v-for="d in showDatas.parton" v-text="showDatas.lanObj[d]" title="showDatas.lanObj[d]"></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="trd in showDatas.data">
              <td v-for="d in showDatas.parton" title="{{trd[d]}}" v-text="trd[d]"></td>
            </tr>
          </table>
          <div id="pager" class="clear">
            <span class="fl">
              <span>每页</span>
              <select @change="changePageSize()" v-model="perPageTableSet">
                <option value="10">10</option>
                <option value="30">30</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
              <span>条</span>
            </span>
            <span class="fr">共{{showDatas.totalPage}}页，{{showDatas.totalRecord}}条记录</span>
            <ul class="pages">
              <li class="pgNext" @click="first()">&lt;&lt;</li>
              <li class="pgNext" @click="prev()">&lt;</li>
              <li class="page-number pgNext" v-for="d in showDatas.pages"  @click="nums(d)" v-text="d" title="{{d}}"></li>
              <li class="pgNext" @click="next()">&gt;</li>
              <li class="pgNext" @click="last()">&gt;&gt;</li>
            </ul>
          </div><!-- 分页 -->
        </div>
        <div v-show="showTips">没有数据！</div>
    </div>
</template>
<script>

    import table from '../libs/glocalme/table'
    import $ from '../libs/jquery.min'
    export default {
        data (){
            return {
                lan:{},
                showDatas:{},
                perPageTableSet:'10',
                showTips:false,
                showTable:true
            }
        },
        watch:{
            'datas':{
                handler:function(nval,oval) {
                    let tb = new table();
                    let that = this;
                    tb.getDuceData(nval).then(function(m){
                        if(m.data.length>0) {
                          that.showDatas = m;
                          setTimeout(function () {
                            $('#pager').find('li').removeClass('pgCurrent').end().find('.page-number[title=' + that.showDatas.pageNow + ']').addClass('pgCurrent');
                          }, 30);
                          that.showTips = false;
                          that.showTable = true;
                        }else{
                          that.showTips = true;
                          that.showTable = false;
                        }
                    },function(d){
                        console.log(d);
                    });
                },
                deep:true
            }
        },
        props:['datas'],
        ready(){

        },
        methods:{
            prev(){
              if(this.showDatas.pageNow > 1){
                this.datas.currPage = this.showDatas.pageNow - 1;
              }else{
                this.datas.currPage = 1;
              }
            },
            next(){
              if(this.showDatas.pageNow < this.showDatas.totalPage){
                this.datas.currPage = this.showDatas.pageNow + 1;
              }else{
                this.datas.currPage = this.showDatas.totalPage;
              }
            },
            first(){
              this.datas.currPage = 1;
            },
            last(){
              this.datas.currPage = this.showDatas.totalPage;
            },
            nums(d){
              this.datas.currPage = d;
            },
            getTableData(opt){

            },
            changePageSize(){
              this.datas.perPage = this.perPageTableSet;
            }
        }
    }
</script>
<style>
    .pgNext,.page-number{
        cursor: pointer;
    }
    table tbody tr td{
        text-align: center;
    }


</style>