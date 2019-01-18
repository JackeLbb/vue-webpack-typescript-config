<template>
  <div class="full-width center-content">
    <img src="../assets/images/logo.png">
    <WelcomeMessage name="World" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import WelcomeMessage from "./../components/Home/WelcomeMessage.vue";

@Component({
  components: {
    WelcomeMessage
  }
})
export default class App extends Vue {
  @Component({
    
  })
}
</script>
