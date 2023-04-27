<script setup>
// This starter template is using Vue 3 <script setup> SFCs
import { useUserStore } from '@/store/modules/user'
const user = useUserStore()

user.setToken('my token')
</script>

<template>
    <app-entry></app-entry>
</template>
