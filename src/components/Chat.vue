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
                    <li v-for="message in messages" :key="message.id">
                        <span class="green-text">{{message.name}}</span> 
                        <span class="grey-text text-darken-3">{{message.content}}</span>
                        <span class="grey-text time">{{message.timestamp}}</span>
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
import moment from 'moment'

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
        let reference = db.collection('messages').orderBy('timestamp')

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
                        timestamp: moment(doc.data().timestamp).format('LLL')
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
    font-size: 1em;
}

.messages{
    /* Scrollbar */
    max-height: 300px;
    overflow: auto;
}

.messages::-webkit-scrollbar {
    width: 3px;
}

.message::-webkit-scrollbar-track {
    background: #ddd;
}

.message::-webkit-scrollbar-thumb {
    background: #aaa;
}

</style>