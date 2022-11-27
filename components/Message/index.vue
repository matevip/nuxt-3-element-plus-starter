<template>
  <el-space>
    <el-button type="primary" @click="success">Success</el-button>
    <el-button type="danger" danger @click="error">Error</el-button>
    <el-button type="warning" danger @click="warning">Warning</el-button>
  </el-space>
  <div>
    <el-row>
      <el-col :sm="12" :lg="6">
        <el-result
          icon="success"
          title="Success Tip"
          sub-title="Please follow the instructions"
        >
          <template #extra>
            <el-button type="primary">Back</el-button>
          </template>
        </el-result>
      </el-col>
      <el-col :sm="12" :lg="6">
        <el-result
          icon="warning"
          title="Warning Tip"
          sub-title="Please follow the instructions"
        >
          <template #extra>
            <el-button type="primary">Back</el-button>
          </template>
        </el-result>
      </el-col>
      <el-col :sm="12" :lg="6">
        <el-result
          icon="error"
          title="Error Tip"
          sub-title="Please follow the instructions"
        >
          <template #extra>
            <el-button type="primary">Back</el-button>
          </template>
        </el-result>
      </el-col>
      <el-col :sm="12" :lg="6">
        <el-result icon="info" title="Info Tip">
          <template #sub-title>
            <p>Using slot as subtitle</p>
          </template>
          <template #extra>
            <el-button type="primary">Back</el-button>
          </template>
        </el-result>
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts">
import { ElMessage } from "element-plus";
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    const success = () => {
      ElMessage.success("This is a success message");
    };
    const error = () => {
      ElMessage.error("This is an error message");
    };
    const warning = () => {
      ElMessage.warning("This is a warning message");
    };
    return {
      success,
      error,
      warning,
    };
  },
});
</script>
