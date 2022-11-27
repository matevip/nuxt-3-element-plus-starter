<template>
  <el-input-number v-model="count" :min="1" :max="10000" />
</template>

<script setup lang="ts">
const { count } = useCount();
</script>
