<template>
  <div class="welcome container">
    <img src="../assets/logo.png">
    <div class="class card">
      <div class="card-content center-align">
        <h2 class="cyan-text">Welcome</h2>
        <form @submit.prevent="enterChat">
          <label for="name">Enter your name:</label>
          <input type="text" name="name" v-model="name">
          <p class="red-text" v-if="feedback">{{ feedback }}</p>
          <button class="btn cyan">Enter Chat</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data () {
    return {
      name: null,
      feedback: null,
    }
  },
  methods: {
    enterChat() {
      if(this.name) {
        this.$router.push({name: 'Chat', params: {name: this.name}})
      } else {
        // Name has not been entered
        this.feedback = 'You must enter a name to join'
      }
    }
  }
}
</script>


<style>
.welcome {
  max-width: 400px;
}

.welcome h2{
  font-size: 3em;
}

.welcome button {
  margin: 30px auto;
}
</style>
