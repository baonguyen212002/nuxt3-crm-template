<template>

    <a-button @click="() => openNotificationWithIcon('success', 'bottomRight')">Success</a-button>

</template>

<script setup lang="ts">
import { notification } from 'ant-design-vue';
import type { NotificationPlacement } from 'ant-design-vue';

//Todo: dùng khi gắn api
// const showSuccess = () => {
//   openNotificationWithIcon('success', 'topRight');
// };

const openNotificationWithIcon = (type: string, placement: NotificationPlacement) => {
    notification[type]({
        message: 'Notification Title',
        description:
            'This is the content of the notification. This is the content of the notification. This is the content of the notification.', placement,
    });
};
</script>

<style lang="scss" scoped></style>