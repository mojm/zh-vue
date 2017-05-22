<template>
  <div class="theme-link m1 pt1 pb1 pl1 rounded h5">
    {{title}}
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default() {
        return ''
      }
    }
  }
}
</script>

<style>
.theme-link {
  border-bottom: 1px solid #efefef;
}  
</style>