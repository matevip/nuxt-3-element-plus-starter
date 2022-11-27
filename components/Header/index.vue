<template>
  <el-page-header>
    <template #content>
      <div class="flex items-center">
        <el-avatar
          class="mr-3"
          :size="32"
          src="https://cdn.mate.vip/matecloud.svg"
        />
        <span class="text-large font-600 mr-3">迈特云</span>
      </div>
    </template>
    <template #extra>
      <div class="flex items-center">
        <el-menu mode="horizontal" :ellipsis="false" default-active="1">
          <el-menu-item index="1"
            ><House
              style="width: 1em; height: 1em; margin-right: 8px"
            /><NuxtLink to="/">首页</NuxtLink>
          </el-menu-item>
          <el-menu-item index="2"
            ><Document
              style="width: 1em; height: 1em; margin-right: 8px"
            /><NuxtLink to="https://doc.mate.vip" target="_blank"
              >文档</NuxtLink
            ></el-menu-item
          >
          <el-menu-item index="3"
            ><ElementPlus
              style="width: 1em; height: 1em; margin-right: 8px"
            /><NuxtLink to="https://github.com" target="_blank"
              >Github</NuxtLink
            ></el-menu-item
          >
        </el-menu>
      </div>
    </template>
  </el-page-header>
</template>
<script setup>
import { ref } from "vue";
import { House, Document, ElementPlus } from "@element-plus/icons-vue";

const current = ref(["index"]);
</script>
