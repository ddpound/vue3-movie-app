<template>
  <header>
    <Logo />
    <Search />
    <div class="nav nav-pills">
      <div
        v-for="nav in navigations"
        :key="nav.name" 
        class="nav-item">
        <RouterLink
          :to="nav.href"
          active-class="active"
          class="nav-link">
          {{ nav.name }}
        </RouterLink>
      </div>
    </div>
    <Userimage />
  </header>
</template>

<script>
import Logo from '~/components/Logo'
import Search from '~/components/Search'
import Userimage from '~/components/UserImage'

export default {
  components: {
    Logo,
    Search,
    Userimage
  },
    data(){
        return{
            navigations: [
                {
                    name: 'Search',
                    href: '/'
                },
                {
                    name: 'Movie',
                    href: '/movie'
                },
                {
                    name: 'About',
                    href: '/about'
                },
            ]
        }
    }
}
</script>


<style lang="scss" scoped>
header{
  background-color: black;
  position: fixed;
  height: 70px;
  width: 100%;
  padding: 0 40px;
  display: flex; /* 수직정렬 */
  align-items: center; /* 아이템 가운데 정렬 */
  .logo{
    margin-right: 40px;
  }
  .nav{
    width: 20%;
  }
}

</style>