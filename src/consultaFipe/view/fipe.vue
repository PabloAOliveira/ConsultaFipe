<template>
    <home :controller="controller" />
    <dialog-form :controller="controller" />
</template>

<script setup>
import { consultaFipeControllerImpl } from "../di/di";
import Home from "../components/home.vue";
import DialogForm from "../components/dialog-form.vue"

const controller = consultaFipeControllerImpl();
console.log(controller);
</script>