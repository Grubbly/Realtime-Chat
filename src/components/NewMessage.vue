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
import db from '@/firebase/init'

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
                // This is asynchronous - it takes time to do
                // It returns a promise which we use with .then
                db.collection('messages').add({
                    content: this.newMessage,
                    name: this.name,
                    timestamp: Date.now()
                }).catch(err => {
                    console.log(err)
                })

                // Clear the input field
                this.newMessage = null
                this.feedback = null
            } else {
                this.feedback = "Message cannot be blank!"
            }
        }
    }
}
</script>
