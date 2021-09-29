<template>
  <RouterLink
    to="/" 
    class="logo">
    <span>POPCORN</span>.COM
  </RouterLink>
</template>


<style lang="scss"  scoped>
@import "~/scss/main";

.logo{
    font-family: "Oswald" sans-serif;
    font-size: 20px;
    color: $black;
    text-decoration: none;
    &:hover {
        color: $black;
    }
    /* 폰트 이름은 모두 "" 이렇게 묶는걸 추천*/
    span{
        color: $primary;
    }
}
</style>

<!-- RouterLink 는 a태그로 변환된다-->