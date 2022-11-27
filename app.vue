<template>
  <div>
    <NuxtLayout>
      <NuxtLoadingIndicator :height="5" :duration="3000" :throttle="400" />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { ID_INJECTION_KEY } from 'element-plus'

provide(ID_INJECTION_KEY, {
  prefix: 100,
  current: 0,
})
</script>
