<template>
  <div class="home">
    <big-screen></big-screen>
    <posts-screen></posts-screen>
    <projects-screen></projects-screen>
    <sns-list></sns-list>
  </div>
</template>

<script>
import BigScreen from './BigScreen'
import PostsScreen from './PostsScreen'
import ProjectsScreen from './ProjectsScreen'
import SnsList from '../../components/SnsList'
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
