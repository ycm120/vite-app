<template>
    <div>
        {{ a }}
    </div>
    <div>
        {{ c }}
    </div>
    <div>
        {{ b.number }}
    </div>
    <div class="flex">
        <a-button @click="addData">点击a</a-button>
        <a-button @click="reset">重置</a-button>
        <a-button @click="addData2">点击b</a-button>
    </div>
</template>  
  
<script setup lang="ts">
import { computed, onMounted, watchEffect, watch, ref, reactive } from 'vue'
const a = ref(0)
const b = reactive({
    name: "",
    number: 0
})
onMounted(
    () => {

        a.value = 100
    }
)
const c = computed(() => a.value + b.number)
const addData = () => {
    a.value++
}
const reset = () => {
    a.value = 0
    b.number = 0
}
const addData2 = () => {
    b.number++
}
watchEffect(() => {
    if(a.value || b.number) {
        console.log(`a: ${a.value}, b: ${b.number}`)
    }
})
watch(
    () => b.number,
    () => {
        console.log(`b : ${b}`)
    }
)
</script>
<style lang="scss" scoped>



</style>