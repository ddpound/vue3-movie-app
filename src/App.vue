<template>
  <Header />  
  <RouterView />
</template>

<script>
import Header from '~/components/Header'

export default {
    components:{
      Header
    }
      
    
        
    
}
</script>


<!-- scoped를 달면 유효범위가 현재 파일에 끝난다 -->
<style lang="scss">
@import "~/scss/main";
</style>
