<template>
  <div class="home">
    <big-screen></big-screen>
    <posts-screen></posts-screen>
    <projects-screen></projects-screen>
    <sns-list></sns-list>
  </div>
</template>

<script>
import BigScreen from '@/components/home/BigScreen'
import PostsScreen from '@/components/home/PostsScreen'
import ProjectsScreen from '@/components/home/ProjectsScreen'
import SnsList from '@/components/public/SnsList.vue'

export default {
  name: 'home',
  components: {
    BigScreen,
    PostsScreen,
    ProjectsScreen,
    SnsList
  }
}
</script>

<style lang="less">

</style>
