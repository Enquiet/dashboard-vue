<template>
  <div>
    <TheHead/>
    <router-view/>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
import TheHead from '@/components/TheHead.vue'
export default {
  components: {
    TheHead
  },
  methods: {
    ...mapMutations('authentication', ['updateLoginUser']),
    ...mapMutations('project', ['updateProjectData'])
  },
  created () {
    const token = localStorage.getItem('token')
    const project = localStorage.getItem('project')
    if (token) {
      this.updateLoginUser(token)
    }
    if (project) {
      this.updateProjectData(JSON.parse(project))
    }
  }
}
</script>
