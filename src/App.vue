<template>
  <v-app id="inspire">

    <drawer items="items"/>

    <toolbar/>

    <v-content>
      <v-container fluid fill-height>
       <router-view/>
      </v-container>
    </v-content>

    <v-btn
      fab
      bottom
      right
      color="pink"
      dark
      fixed
      @click="dialog = !dialog"
    >
      <v-icon>add</v-icon>
    </v-btn>

    <form-dialog/>

  </v-app>
</template>

<script>
  import drawer from './components/layout/Drawer'
  import toolbar from './components/layout/Toolbar'
  import formDialog from './components/layout/Dialog'
 
  export default {
    components: {
      drawer,
      toolbar,
      formDialog
    },
    data: () => ({
      dialog: false,
    }),
    props: {
      source: String
    }
  }
</script>
