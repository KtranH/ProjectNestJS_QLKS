<template>
    <div class="w-12 h-12 bg-black rounded-2xl flex items-center justify-center shadow-lg">
        <Hotel class="w-7 h-7 text-white" />
    </div>
</template>

<script>
import { Hotel, Mail, Lock, LogIn } from 'lucide-vue-next'

export default {
    components: {
        Hotel,
        Mail,
        Lock,
        LogIn
    },
    setup() {
        return {
            Hotel,
            Mail,
            Lock,
            LogIn
        }
    },
}
</script>