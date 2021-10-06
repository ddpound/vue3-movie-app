<template>
  <div>
    <Sidebar />
    <Headline />
  </div>
</template>

<script>
import Headline from '~/components/Headline'
import Sidebar from '~/components/Sidebar'


export default {
  components: {
    Headline,
    Sidebar
  }

}
</script>

<style lang="scss" scoped>
div{
  display: flex;
}
</style>

