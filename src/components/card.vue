<template>
  <div>
    <p class="card">
      {{text}}
    </p>
  </div>
</template>

<script>
export default {
  props: ['text','datas'],
  // data(){
  //   console.log(this.datas)
  //   return {
  //     datam: this.datas
  //   }
  // },
  mounted(){
    // console.log(this.datam)
    this.datas['test'] = 123
  }
}
</script>

<style>
.card {
  padding: 10px;
}
</style>
