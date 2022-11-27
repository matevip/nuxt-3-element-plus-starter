<template>
  <div>
    <Header />
    <el-card>
      <div class="card-header p-4">
        <span class="text-large font-600 mr-3">日期组件演示</span>
      </div>
      <!-- 组件1 -->
      <div class="text-center">
        <el-date-picker
          v-model="value1"
          type="datetimerange"
          range-separator="To"
          start-placeholder="Start date"
          end-placeholder="End date"
        />
      </div>
    </el-card>
    <el-card>
      <div class="card-header p-4">
        <span class="text-large font-600 mr-3">Pinia演示</span>
        <!-- 组件2 -->
      </div>
      <div class="text-center">
        <count />
      </div>
    </el-card>
    <el-card>
      <div class="card-header p-4">
        <span class="text-large font-600 mr-3">Message组件演示</span>
        <!-- 组件3 -->
      </div>
      <div class="text-center">
        <Message />
      </div>
    </el-card>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import Count from "@/components/Count/index.vue";
import Message from "@/components/Message/index.vue";
import Header from "@/components/Header/index.vue";
const value1 = ref();
</script>
<style></style>
