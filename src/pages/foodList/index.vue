<template>
  <div class="list-container">
    <div>
      <div class="weui-cells__title">
        <span>如下為已存在菜單（或店名）</span>
      </div>
      <div class="weui-cells weui-cells_after-title">
        <navigator
          v-for="(food,index) in foods"
          :key="index"
          :url="'/pages/foodDetail/index?id='+food.id"
          class="weui-cell weui-cell_access"
          hover-class="weui-cell_active"
        >
          <div class="weui-cell__hd">
            <image
              :src="food.img_url||icon"
              style="margin-right: 5px;vertical-align: middle;width:20px; height: 20px;"
            ></image>
          </div>
          <div class="weui-cell__bd">{{food.name}}</div>
          <div class="weui-cell__ft weui-cell__ft_in-access"></div>
        </navigator>
      </div>
      <picker
        class="weui-btn"
        mode="date"
        :value="date"
        start="2015-09-01"
        end="2017-09-01"
        @change="bindDateChange"
      >
        <button type="default">日期选择器</button>
      </picker>

      <div class="weui-footer weui-footer_fixed-bottom">
        <div class="weui-footer__links">
          <button
            bindtap="setLoading"
            @click="goFoodMenu"
          >新增菜品</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Use Vuex
import store from "./store";
import { getService } from "../../common/service";
export default {
  data() {
    return {
      openSimple: false,
      icon: require("../../../static/image/list-flag.png"),
      foods: []
    };
  },
  computed: {
    count() {
      return store.state.count;
    }
  },
  mounted() {
    this.getFoodListService();
  },
  onPullDownRefresh() {
    this.getFoodListService().then(()=>{
      wx.stopPullDownRefresh()
    });
  },
  methods: {
    getFoodListService() {
      return new Promise((resolve,reject)=>{
        getService("/index").then(d => {
          resolve()
          this.foods = d;
        });
      })
    },
    increment() {
      store.commit("increment");
    },
    decrement() {
      store.commit("decrement");
    },
    bindDateChange() {
      this.openSimple = true;
    },
    goFoodMenu() {
      const url = "/pages/foodEdit/index";
      wx.navigateTo({ url });
    }
  }
};
</script>

<style>
.list-container {
  background-color: #ffffff;
  height: 100%;
  padding:10px 0;
}
page {
  background-color: #e6e6e6;
}
</style>
