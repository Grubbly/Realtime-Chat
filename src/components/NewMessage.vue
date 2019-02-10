<template>
    <div class="new-message left-align">
        <form @submit.prevent="addMessage">
            <label for="new-message">New Message (enter to send):</label>
            <input type="text" name="new-message" v-model="newMessage">
            <p v-if="feedback" class="red-text"> {{feedback}} </p>
        </form>
    </div>
</template>

<script>
export default {
    name: 'NewMessage',
    props: ['name'],
    data() {
        return {
            newMessage: null,
            feedback: null,
        }
    },
    methods: {
        addMessage() {
            // If the user has typed a message...
            if(this.newMessage) {
                
            } else {
                this.feedback = "Message cannot be blank!"
            }
        }
    }
}
</script>
