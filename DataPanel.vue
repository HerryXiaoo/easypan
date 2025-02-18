<template>
  <div class="data-panel">
    <div class="text" id="vercount_container_site_pv">
      <div>本站总访问量</div>
      <span id="vercount_value_site_pv" class="font-bold">--</span>次
    </div>
    <div class="text" id="vercount_container_site_uv">
      <div>本站访客数</div>
      <span id="vercount_value_site_uv" class="font-bold">--</span>人次
    </div>
  </div>
</template>

<style scoped>
.data-panel {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 20px 0;
}

.text {
  text-align: center;
  color: var(--vp-c-text-1);
}

.font-bold {
  font-weight: bold;
  color: var(--vp-c-brand-1);
  margin: 0 5px;
}
</style>
