<template>
  <div class="m-page">
    <el-pagination
        class='el-pagination-box'
        v-show="total > 0"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="curPage"
        :page-sizes="pageSizes"
        :page-size="pageSize"
        :data-id ='id'
        layout="slot, prev, pager, next, slot, total, jumper, sizes, slot"
        :total="total"
    >
      <h1 class="pageTitle" @click="goFirLas($event)">显示第{{(curPage-1)*pageSize+1}}到第{{((curPage-1)*pageSize+pageSize)>total?total:(curPage-1)*pageSize+pageSize}}条的记录，总共{{total}}条记录</h1>
    </el-pagination>
  </div>


</template>
<script>

    export default {
        name:"mPage",
        props: {
            curr_page: {
                type: Number,
                default: 1
            },
            total: {
                type: Number,
                default: 0
            },
            page_size: {
                type: Number,
                default: 10
            },
            // 针对一个页面有多个分页需传递不同的id
            id: {
                type: String,
                default: 'defaultId'
            },
            pageSizes: {
                type: Array,
                default: function () {
                    return [5, 10, 20, 30, 40, 50]
                }
            }
        },
        data () {
            return {
                // pageSizes: [5, 10, 20, 30, 40, 50],
                // 当前页数据操作需要传到父组件，直接操作传过来的curr_page，vue会警告，所以在这里转一下
                pageSize: this.page_size,
                curPage: this.curr_page
            }
        },
        mounted() {
            this.setTotalPage();
        },
        methods: {
            handleSizeChange(val) {
                this.pageSize = val;
                // 给第一页添加状态
                this.curPage = 1
                this.$emit('change', 1, this.pageSize);
            },
            handleCurrentChange(val) {
                this.curPage = val;
                this.$emit('change', this.curPage, this.pageSize);
            },
            // 首尾页事件
            goFirLas(event) {
                var evt = window.event||event;
                var target = evt.srcElement ? evt.srcElement : evt.target
                if(target.offsetLeft==0&&target.offsetHeight>23) {
                    // 当前页处于第一页不触发首页事件
                    if(!(this.curPage==1)) {
                        this.handleCurrentChange(1)
                    }
                } else if (target.offsetLeft>0&&target.offsetHeight>23) {
                    // 当前页处于最后一页不触发尾页事件
                    if(!(this.curPage==Math.ceil(this.total/this.pageSize))) {
                        this.handleCurrentChange(Math.ceil(this.total/this.pageSize))
                    }
                }
            },
            // 总共页数事件
            setTotalPage(){
                var pagination = document.querySelector(`[data-id="${this.id}"]`);
                var total = pagination.getElementsByClassName('el-pagination__total')[0];
                total.innerHTML = `共${Math.ceil(this.total/this.pageSize)}页，`;
                // var pagination = document.getElementsByClassName('el-pagination-box')[0];
                // var total = pagination.getElementsByClassName('el-pagination__total')[0];
                // total.innerHTML = `共${Math.ceil(this.total/this.pageSize)}页，`;
            }
        },
        watch: {
            // 监听总页数，可以获取到请求回来的total，在mounted获取执行一次并且获取的是刚出入的total
            total:function() {
                this.setTotalPage();
            },
            // 当pageSize改变的时候，总共多少页改变，监听pageSize能成功不是因为父组件穿过来的时候改变触发的，而是在组件里面就能触发
            // handleSizeChange方法里this.pageSize = val的改变
            pageSize:function() {
                this.setTotalPage();
            },
            // 点击非第一页，再次请求数据（查询）total不会改变不会重新渲染dom，这里点击查询不会触发事件让this.curPage改变，
            // 状态会停留在非第一页，这里监听（注意要监听传过来的值），监听转的值监听不到，因为父组件传过来值变化，data里面转的不会变化
            curr_page: function(val){
                this.curPage = val;
            }
        }
    }
</script>
