<template>
    <div>
    <b-row align-h="center" class="mt-3">
        <b-col cols="4">
    <b-list-group>
    <b-list-group-item v-bind:name="name">{{name}}</b-list-group-item>
    </b-list-group>
        </b-col>
    </b-row>
    
    </div>
</template>

<script>
export default {
    props: ['name']
}
</script>

<style lang="stylus" scoped>

</style>