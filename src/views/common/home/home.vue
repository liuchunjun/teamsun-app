<script setup>
import Apis from '@/apis/modules/common/account'
console.log(
    Apis.login({
        user_name: 'admin',
        pwd: 'YWRta2W4'
    })
)
</script>

<template>
    <div>home</div>
</template>

<style lang="scss" scoped></style>
