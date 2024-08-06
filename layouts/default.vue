<template>
    <a-layout class="layout">
        <a-layout-sider class="top-16 h-full">
            <Sidebar />
        </a-layout-sider>
        <a-layout>
            <a-layout-header>
                <Navbar />
            </a-layout-header>
            <a-layout-content style="padding: 0 50px">
                <slot />
            </a-layout-content>
            <a-layout-footer style="text-align: center">
                Ant Design ©2018 Created by Ant UED
            </a-layout-footer>
        </a-layout>

    </a-layout>

</template>

<script setup>

</script>

<style lang="scss" scoped></style>