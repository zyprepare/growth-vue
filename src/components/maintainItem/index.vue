<template>
  <div class="maintain-item">
    <div class="maintain-item-header">
      <div class="maintain-item-header-left" v-if="maintainList.checked==1">
        <input type="checkbox" class="goods-check" checked="checked" :maintianitemid="maintainList.id">
        <span class="goods-check-icon"> </span>
      </div>
      <div class="maintain-item-header-left" v-else>
        <input type="checkbox" class="goods-check" :maintianitemid="maintainList.id">
        <span class="goods-check-icon"> </span>
      </div>
      <div class="maintain-item-header-middle">
        <div class="maintain-item-header-middle-top">
          <span class="maintain-item-title">{{maintainList.name}}</span>
        </div>
        <div class="maintain-item-header-middle-bottom">
          <span class="maintain-item-describe">{{maintainList.intervalStr}}</span>
        </div>
      </div>
      <div class="maintain-item-header-right">
        <span v-if="maintainList.showType==0" class="edit"></span>
        <span v-else-if="maintainList.showType==1" class="editing"></span>
        <span v-else class="down"></span>
      </div>
    </div>
    <div v-if="maintainList.showType==0" class="maintain-item-content" v-for="relateService in maintainList.relateService">
      <div class="maintain-item-goods" v-for="goods in relateService.maintenanceBSkus">
        <div class="maintain-item-goods-img" :skuid="goods.carBSku.sku">
          <img v-lazy='"//m.360buyimg.com/tcar/s240x240_"+goods.carBSku.mainImage+"!q60"' style="display: inline;">
          <div class="tag" v-if="goods.carBSku.mark==1">原厂件</div>
        </div>
        <div class="maintain-item-goods-detail" :skuid="goods.carBSku.sku">
          <div class="maintain-item-goods-detail-title">
            <span class="goods-title">{{goods.carBSku.name}}</span>
          </div>
          <div class="maintain-item-goods-tag">
            <div class="warp" v-if="goods.name">
              <span class="maintain-item-type">{{goods.name}}</span>
            </div>
            <div class="warp" v-if="goods.carBSku.engineOilType">
              <span class="maintain-item-type">{{goods.carBSku.engineOilType}}</span>
            </div>
            <div class="warp" v-if="goods.carBSku.engineOilSpec">
              <span class="maintain-item-type">{{goods.carBSku.engineOilSpec}}</span>
            </div>
          </div>
          <div class="maintain-item-goods-number-show">
            <span class="maintain-item-goods-price-flag">¥</span>
            <span class="maintain-item-goods-price">144.00</span>
            <div class="maintain-item-goods-num-flag" :maintianitemid="maintainList.id" :skuid="goods.carBSku.sku">
              X
              <span class="maintain-item-goods-num">{{goods.skuNumber}}</span>
            </div>
          </div>
          <div class="oil-quantity">
            参考用量：
            <span class="oil">1.5L</span>
          </div>
        </div>
      </div>
      <div class="maintain-item-server">
        所需服务：
        <span class="maintain-item-server-name">{{maintainList.relateService[0].serviceName}}</span>
      </div>
      <div class="maintain-item-footer">
        <img src="../../assets/Group 7 Copy.png" alt="" class="up">
      </div>
    </div>
    <div v-if="maintainList.showType==1" class="maintain-item-content" v-for="relateService in maintainList.relateService">
      <div class="maintain-item-goods" v-for="goods in relateService.maintenanceBSkus">
        <div class="maintain-item-goods-img" :skuid="goods.carBSku.sku">
          <img v-lazy='"//m.360buyimg.com/tcar/s240x240_"+goods.carBSku.mainImage+"!q60"' style="display: inline;">
          <div class="tag" v-if="goods.carBSku.mark==1">原厂件</div>
        </div>
        <div class="maintain-item-goods-change">
          <div class="goods-change">
            <span class="change-tag"></span>
            <span class="change-text">更换商品</span>
          </div>
          <div class="maintain-item-goods-number-change">
            <div class="number-change add-number" @click="add(goods.skuNumber)" :maintianitemid="maintainList.id" :skuid="goods.carBSku.sku">
              +
            </div>
            <span class="number-show">{{goods.skuNumber}}</span>
            <div class="number-change sub-number gray" @click="sub" :maintianitemid="maintainList.id" :skuid="goods.carBSku.sku">
              -
            </div>
          </div>
        </div>
      </div>
      <div class="maintain-item-server">
        所需服务：
        <span class="maintain-item-server-name">{{maintainList.relateService[0].serviceName}}</span>
      </div>
      <div class="maintain-item-footer">
        <img src="../../assets/Group 7 Copy.png" alt="" class="up">
      </div>
    </div>
    <div v-else class="maintain-item-content hide" v-for="relateService in maintainList.relateService"></div>
  </div>
</template>
<script>
import "./index.scss";
export default {
  props: {
    maintainList: {
      type: Object,
    },
    index: {
      type: Number
    }
  },
  methods: {
    add(data) {
      data++;
      console.log(data);
      this.$emit("goods.skuNumber", data);
    },
    sub(data) {
      data--;
      console.log(data);
      this.$emit("goods.skuNumber", data);
    }
  }
};
</script>
