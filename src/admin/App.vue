<template>
  <div class="page-container md-layout-column">

    <div class="loading-bar">
      <md-progress-bar v-show="$root.isLoading" md-mode="indeterminate"></md-progress-bar>
    </div>

    <router-view />

    <md-snackbar md-position="center" :md-active.sync="$root.showSnackbar" md-persistent>
      <span>{{$root.snackBarMessage}}</span>
      <md-button class="md-primary" @click="$root.showSnackbar = false">Close</md-button>
    </md-snackbar>

  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>
<style>
	body, html {
	  overflow-x: hidden;
	}
  a {
    cursor: pointer;
  }
	#wpwrap, #wpcontent, #wpbody, #wpbody-content, .wrap {
		display: flex;
		flex-direction: column;
		flex: 2;
	}
  #adminmenumain {
    position: absolute;
  }
  #wpcontent {
		height: 100%;
  	padding-left: 0px;
  }
  #wpbody-content {
		height: 100%;
  }
  .wrap {
  	margin: 0px;
  }
  .md-table + .md-table {
    margin-top: 16px
  }
  .page-container {
  	padding: 1em;
  	flex: 2;
  }
  .md-drawer {
    width: 50% !important;
    max-width: calc(100vw - 125px);
    height: 100%;
    position:absolute;
  }
  .md-content {
    padding: 16px;
  }
  .md-card {
  	overflow: hidden;
  	padding: 2em;
  }
  a:hover {
  	text-decoration: none;
  }
  .loading-bar {
    height: 5px;
  }
  .md-field .md-input:focus, .md-field .md-textarea:focus{
    box-shadow: none;
  }
</style>