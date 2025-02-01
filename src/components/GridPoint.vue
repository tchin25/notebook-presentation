<script setup lang="ts">
const { dataId, gridArea, gridRow, gridCol, bgColor } = defineProps<{
  dataId?: string | number;
  gridArea?: string;
  gridRow?: string;
  gridCol?: string;
  bgColor?: string;
}>();
</script>

<template>
  <div
    :data-id="dataId"
    :style="
      gridArea
        ? `grid-area: ${gridArea}; background-color: ${bgColor};`
        : `grid-row: ${gridRow};
        grid-column: ${gridCol};
        background-color: ${bgColor};`
    "
    style="border-radius: 5px"
  ></div>
</template>
