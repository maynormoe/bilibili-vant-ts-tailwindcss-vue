<template>
  <div class="detailCard">
    <div class="avatarDetail">
      <img src="src/assets/img/avatar.png">
    </div>
    <div class="rightCard">
      <div class="topInfo">
        <span class="pr-2">
          null
          <p>粉丝</p>
        </span>

        <span class="pr-2">
          null
          <p>关注</p>
        </span>

        <span>
          null
          <p>获赞</p>
        </span>
      </div>
      <div class="bottomInfo">
        <button class="editBtn">编辑资料</button>
      </div>
    </div>
    <div class="username">
      Maynormoe
    </div>
  </div>
  <div class="compsitionCard">
    <span class="pr-8">动态</span>
    <span>视频</span>
  </div>

</template>

<script setup lang="ts">

</script>

<style lang="css">
.detailCard {
  height: 47vw;
  background: white;
  position: relative;
}
.detailCard {

}
.avatarDetail img {
  flex: 1;
  width: 27vw;
  height: 27vw;
  border-radius: 50%;
  margin-left: 18px;
  margin-right: 45px ;
  margin-bottom: 30px;
  float: left;
}
.topInfo {
  float: right;
  display: flex;
  margin: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  right: 50px;
}
span {

}
p {
  color: #999;
  font-size: 2.93333vmin;
  padding: 5px 5px;
}
.editBtn {
  width: 200px;
  height: 31px;
  border:1px solid #fb7299;
  color: #fb7299;
  position: absolute;
  top:90px
}
.username {
  font-size: 4.8vmin;
  color: #212121;
  max-width: 62.66667vmin;
  display: inline-block;
  position: absolute;
  left: 20px;
  bottom: 30px;
}
.compsitionCard {
  height: 10.66667vmin;
  line-height: 10.66667vmin;
  padding-left: 3.2vmin;
  background: #fff;
  border-top: 1px solid #e7e7e7;
  border-bottom: 1px solid #e7e7e7;
  font-size: 15px;
  color: #999999;
}
</style>