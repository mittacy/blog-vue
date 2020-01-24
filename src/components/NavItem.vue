<template>
    <div class="navbar-items-item">
        <a :target="theUrl">
            <i class="iconfont" :class="icon"></i>
            {{content}}
        </a>
    </div>
</template>

<script>
export default {
    name: 'nav-item',
    props: {
        theUrl: {
            type: String,
            default: "_self"
        },
        icon: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        // activeColor: {
        //     type: String,
        //     default: "#2d8cf0"
        // },
        
    }
}
</script>
<style scoped>
.navbar-items-item {
    display: -webkit-flex; /* Safari */
    display: flex;
    height: inherit;
    font-size: 14px;
    color: #515a6e;
    align-items: center;
    padding: 0 20px;
    cursor: pointer;
    transition: all .2s ease-in-out;
}
.navbar-items-item:hover {
    color: #2d8cf0;
    border-bottom: 2px solid #2d8cf0;;
}
</style>