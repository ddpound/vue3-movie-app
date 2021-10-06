<template>
  <div class="container">
    <input
      v-model="title"
      class="form-control"
      type="text"
      placeholder="원하는 영화를 검색해주세요" 
      @keyup.enter="apply" />
    <button
      class="btn btn-primary"
      @click="apply">
      검색
    </button>
  </div>
</template>

<script>

export default {
    data(){
        return {
            
        }
    },
    methods: {
        apply(){
            // 여기에 api 요청하면 될듯
        }
    }
}
</script>


<style lang="scss" scoped>
.container{
    width: 60%;
    display: flex; // flex 수평 정렬
    > * {
        margin-right: 10px;//처음부터 각각의 마진 오른쪽은 10px여백을
        font-size: 15px;
        &:last-child{
            margin-right: 0; // &는 마지막 자식의 오른쪽마진을 어떻게할지 선택함
        }
    }
    .selects{
        display: flex;
        select{
            width: 120px;
            margin-right: 10px;//처음부터 각각의 마진 오른쪽은 10px여백을
            &:last-child{
            margin-right: 0; // &는 마지막 자식의 오른쪽마진을 어떻게할지 선택함
        }
        }
        
    }
    input{
        width: 80%;   
    }
    .btn{
        width: 120px;
        height: 50px;
        font-weight: 700;
        flex-shrink: 0; // 감소 비율을 없애야함 그래서 0
    }
}
</style>