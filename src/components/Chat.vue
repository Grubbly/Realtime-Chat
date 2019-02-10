<template>
    <div class="chat container">
        <!-- this.name is the prop not the attribute in default -->
        <h2 class="cyan-text center">Chatting as {{this.name}}</h2>
        <div class="card">
            
            <!-- Sender Data -->
            <div class="card-content left-align">
                <!-- Messages are stored in an unordered list -->
                <!-- Each message is a list item -->
                <ul class="messages">
                    <li>
                        <span class="green-text">Name</span> 
                        <span class="grey-text text-darken-3">Message</span>
                        <span class="grey-text time">Time</span>
                    </li>
                </ul>
            </div>

            <!-- New Message -->
            <div class="card-action">
                <NewMessage :name="name"/>
            </div>

        </div>
    </div>
</template>

<script>
import NewMessage from '@/components/NewMessage'
import db from '@/firebase/init'

export default {
    name: 'Chat',
    data() {
        return {
            messages: []
        }
    },
    props: ['name'],
    components: {
        NewMessage,
    },
    created() {
        let reference = db.collection('messages')

        // Listen for changes in the messages collection
        // Every CUD operation on the database calls this function
        // docChanges() returns a snapshot of the whole database
        reference.onSnapshot(snapshot => {
            snapshot.docChanges().forEach(change => {
                if(change.type == 'added') {
                    let doc = change.doc
                    this.messages.push({
                        id: doc.id,
                        name: doc.data().name,
                        content: doc.data().content,
                        timestamp: doc.data().timestamp
                    })
                }
            });
        })
    }
}
</script>

<style>
.chat h2 {
    font-size: 2.6em;
    margin-bottom: 40px;
}

.chat span {
    font-size: 1.4em;
}

.chat .time {
    /* Same line */
    display: block;
    font-size: 1.2em;
}
</style>


