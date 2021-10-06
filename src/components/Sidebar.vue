<template>
  <aside>
    <h4 style="margin-top: 12px;">
      홈
    </h4>
    <hr />
    <div>
      <h4>영화랭킹</h4>
      <RouterLink 
        class="sidebarLink"
        to="/ReservationR">
        예매순위
      </RouterLink><br />
      박스오피스<br />
    </div>
    <hr />
    <div>
      <h4>상영/예정작</h4>
      영화관<br />
      넷플릭스 <br />
      왓챠 <br />
      영화제 영화 <br />
    </div>
    <hr />
    <div>
      <h4>예매</h4>
      빠른예매 <br />
      상영시간표 <br />
    </div>
    <hr />
    <div>
      <h4>극장</h4>
      영화관 <br />
      자동차 극장 <br />
      온라인 - 팝콘각 <br />
    </div>
    <hr />
    <div>
      <h4>콘텐츠</h4>
      영화뉴스 <br />
      매거진 <br />
      블로그 <br />
      시사회 <br />
    </div>
  </aside>
</template>


<style lang="scss" scoped>
@import "~/scss/main";

aside{
  display: list-item;
  background-color: rgb(94, 0, 0);
  color: white;
  margin-top: 70px;
  width: 9%;
  height: 100%;
  position: fixed;
  text-align: center;
  h4{
    color: $primary;
    font-weight: bold;
  }

  .sidebarLink{
    color: white;
    text-decoration: none;
     &:hover {
        color: $primary;
    }
  }
}
</style>