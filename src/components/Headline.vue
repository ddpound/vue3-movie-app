<template>
  <div class="defaultPage">
    <h1>
      <span>
        POPCORN GAK
      </span><br />
    
      The Open<br /> 
      Movie Site.<br /> 
    </h1>

    <p>
      팝콘 각 사이트는 각각의 OPEN API와 스프링 부트, VUE 를 이용해 만든 사이트 입니다. <br />

      영화 시청, 영화 리뷰, 영화 예매 등등 다양한 서비스를 사용하실수 있습니다.

      사용하시다 불편하신 점 있으시면 QnA 남겨주세요.
    </p>
  </div>
</template>

<style lang="scss" scoped>
@import "~/scss/main";
.homePageMain{
  margin-top: 70px;
  float: right;
  width: 90%;
}
h1{
    line-height: 1.1; /* 1배 , 글자가 많이 커질꺼라서*/
    font-family: "Oswald", sans-serif;
    font-size: 80px;
    span{
        color: $primary;
    }
    p{
        margin: 30px 0;
        color: $gray-600;
    }
}
</style>