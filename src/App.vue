<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  .clear:after {
    content:"";
    display: block;
    height: 0;
    clear: both;
    visibility: visible;
  }
  html,body {
    margin: 0;
    height: 100%;
  }
  a {
    color: #333;
    text-decoration: none;
  }

  .select .el-input__inner {
    padding-left: 3px;
  }
    
    .el-form-item label {
        margin-bottom: 0;
    }
  .el-date-editor .el-range-separator {
      width: 8%;
  }
    .rule .el-checkbox {
        margin-right: 5px;
    }
.notice-list ol {
    width: 100%!important;
}

    .apply .part .el-form-item__label {
        width: 80px!important;
    }

    .center .el-drawer {
        width: 350px!important;
    }
</style>
