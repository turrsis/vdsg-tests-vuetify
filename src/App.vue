<template>
    <v-app v-designer.true :full-height="true" DESIGNER_ROOT_APP_NODE="DESIGNER_ROOT_APP_NODE">
        <v-app-bar flat virt-attr-test="q3" absolute color="#ADD8E6" dark shrink-on-scroll src="https://picsum.photos/1920/1080?random" scroll-target="#scrolling-techniques-2">
            <template v-slot:img="{ props }">
                <v-img v-bind="props" gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"></v-img>
            </template>
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
            <v-app-bar-title>
                Title
            </v-app-bar-title>
            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon icon="mdi-magnify"></v-icon>
            </v-btn>
            <v-btn>
                <span>
                    heart
                </span>
                <v-icon icon="mdi-heart"></v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon icon="mdi-numeric-1-box-multiple"></v-icon>
            </v-btn>
            <v-btn>
                dots
                <v-icon icon="mdi-dots-vertical"></v-icon>
            </v-btn>
        </v-app-bar>
        <v-main>
            <router-view/>
        </v-main>
        <v-footer max-height="60px">
            <v-col class="text-center" cols="12">
                {{ new Date().getFullYear() }}
                —
                <strong>
                    Turrsis
                </strong>
            </v-col>
        </v-footer>
    </v-app>
</template>
<script>
export default {
    name: 'App',
    data: () => ({
        appStr: '***app***',
        appNum: 222,
        appBool: true,
        appObj: {
            'ao_Str-1': 'v-aa1',
            'ao_Num': 333,
            'ao_Bool': true
        },
        appArr: ['aa-1', 'aa-2']
    })
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  //padding: 50px;
}

#nav {
  //padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
