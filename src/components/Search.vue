<template>
  <div class="container">
    <input
      v-model="title"
      class="form-control"
      type="text"
      placeholder="원하는 영화를 검색해주세요" />
  </div>
</template>

<script>

export default {
    data(){
        return {
            title: ''
        }
    }
}
</script>
