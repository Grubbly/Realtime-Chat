<template>
    <div class="chat container">
        <!-- this.name is the prop not the attribute in default -->
        <h2 class="center cyan-text">Chatting as {{this.name}}</h2>
        <div class="card">
            
            <!-- Sender Data -->
            <div class="card-content">
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
                <input type="text">
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'Chat',
    data() {
        return {

        }
    },
    props: ['name'],
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


