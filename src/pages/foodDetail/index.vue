<template>
  <div class="weui-article">
    <div class="weui-article__h1 title-opt">
      <span>{{food.name}}</span>
      <div class="opt">
        <Button size="mini" type="primary" @click="editeFood">编辑</Button>
        <Button size="mini" type="primary" @click="deleteFood">删除</Button>
      </div>
    </div>
    <div class="weui-article__section">
      <!-- <div class="weui-article__title">章标题</div> -->
      <div class="weui-article__section">
        <!-- <div class="weui-article__h3">1.1 节标题</div> -->
        <div class="weui-article__p">
            {{food.desc}}
        </div>
        <div class="weui-article__p">
          <image class="weui-article__img" :src="food.img_url" mode="aspectFit" style="height: 180px" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {getService} from '../../common/service'
export default {
  data() {
    return {
      id:'',
      food:{
        name:'xx',
        desc:'暂无'
      }
    };
  },
  computed: {},
  async onLoad(options) {
    let id = options.id
    this.id = id
    getService('/index/detail',{id:id},'post').then((d)=>{
      this.food = d
    })
  },
  methods: {
    editeFood(){
      const url = "/pages/foodEdit/index"
      wx.navigateTo({ url })
    },
    deleteFood(){}
  }
};
</script>

<style scoped>
.title-opt{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>

