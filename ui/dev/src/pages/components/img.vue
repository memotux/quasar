<template>
  <div class="q-layout-padding">
    <div class="q-gutter-lg row items-start">
      <q-img
        src="https://cdn.quasar.dev/img/image-src.png"
        srcset="https://cdn.quasar.dev/img/image-1x.png 300w, https://cdn.quasar.dev/img/image-2x.png 2x,
          https://cdn.quasar.dev/img/image-3x.png 3x, https://cdn.quasar.dev/img/image-4x.png 4x"
        height="280px"
        style="height: 280px; max-width: 300px"
        :no-native-menu="noNativeMenu"
        @click="onClick"
        gigi
      >
        <div class="absolute-bottom text-body1 text-center">
          With srcset
        </div>
      </q-img>

      <q-img
        src="https://cdn.quasar.dev/img/image-src.png"
        srcset="https://cdn.quasar.dev/img/image-1x.png 400w, https://cdn.quasar.dev/img/image-2x.png 800w,
          https://cdn.quasar.dev/img/image-3x.png 1200w, https://cdn.quasar.dev/img/image-4x.png 1600w"
        sizes="(max-width: 400px) 400w,
          (min-width: 400px) and (max-width: 800px) 800w,
          (min-width: 800px) and (max-width: 1200px) 1200w,
          (min-width: 1200px) 1600w"
        height="280px"
        style="max-width: 300px"
        :no-native-menu="noNativeMenu"
      >
        <div class="absolute-bottom text-body1 text-center">
          With srcset & sizes
        </div>
      </q-img>

      <q-img
        src="https://cdn.quasar.dev/img/image-src.png"
        height="220px"
        width="220px"
      >
        <div class="absolute-bottom text-body1 text-center">
          With forced width & height
        </div>
      </q-img>

    </div>

    <q-btn push color="teal" label="Refresh" @click="refresh" class="q-my-lg" />
    <q-toggle v-model="noNativeMenu" label="No native menu" />

    <div class="q-gutter-lg row items-start">
      <q-img
        :src="url"
        alt="Image"
        style="max-width: 400px"
        :no-native-menu="noNativeMenu"
        draggable
        loading-show-delay="500"
      >
        <template v-slot:loading>
          <div class="text-h2 text-white">
            Loading...
          </div>
        </template>
      </q-img>

      <q-img
        :src="url"
        alt="Image"
        style="max-width: 400px; border-radius: 50%"
        :no-native-menu="noNativeMenu"
        :loading-show-delay="500"
      >
        <div class="absolute-bottom text-subtitle1 text-center q-pa-xs">
          Radius 50%
        </div>
      </q-img>

      <q-img
        :src="url"
        alt="Image"
        style="max-width: 400px; border-radius: 15px"
        :no-native-menu="noNativeMenu"
      >
        <div class="absolute-bottom text-subtitle1 text-center q-pa-xs">
          Radius 15px
        </div>
      </q-img>

      <q-img
        :src="url"
        alt="Image"
        style="max-width: 400px"
        img-class="blurry"
        :no-native-menu="noNativeMenu"
      >
        <template v-slot:loading>
          <div class="text-h2 text-white">
            Loading...
          </div>
        </template>

        <div class="absolute-bottom text-subtitle1 text-center q-pa-xs">
          Caption
        </div>
      </q-img>

      <q-img
        :src="url"
        placeholder-src="https://picsum.photos/500/300/?blur"
        :ratio="16/9"
        spinner-color="white"
        style="max-width: 400px"
        :no-native-menu="noNativeMenu"
      >
        <div class="absolute-bottom text-subtitle1 text-center q-pa-xs">
          Caption 16/9
        </div>
      </q-img>

      <q-img
        :src="url"
        placeholder-src="https://picsum.photos/500/300/?blur"
        :ratio="16/9"
        spinner-color="white"
        style="max-width: 400px"
        :no-native-menu="noNativeMenu"
      />

      <q-img
        :src="url"
        basic
        placeholder-src="https://picsum.photos/500/300/?blur"
        ratio="1"
        class="rounded-borders"
        style="max-width: 225px"
        :no-native-menu="noNativeMenu"
      />

      <q-img
        :src="url"
        placeholder-src="https://picsum.photos/500/300/?blur"
        ratio="1"
        spinner-color="white"
        style="max-width: 225px"
        :no-native-menu="noNativeMenu"
      >
        <template v-slot:loading>
          <q-spinner-facebook color="white" />
        </template>
      </q-img>

      <q-img
        src="https://picsum.photos/300/300/"
        basic
        placeholder-src="https://picsum.photos/500/300/?blur"
        fit="contain"
        style="max-width: 400px; height: 200px"
        :no-native-menu="noNativeMenu"
      >
        <div class="absolute-bottom text-body1 text-center">
          Contain
        </div>
      </q-img>
    </div>

    <div class="q-mt-lg">
      <q-btn label="Set null src" @click="bogusSrc = null" />
      <q-btn label="Set good src" @click="bogusSrc = 'https://picsum.photos/500/300?t=' + Math.random()" />
      <q-btn label="Set bogus src" @click="bogusSrc = 'https://bogu.bogus'" />

      <q-img
        :src="bogusSrc"
        spinner-color="white"
        ratio="1"
        style="min-height: 100px; max-width: 225px"
        :no-native-menu="noNativeMenu"
      >
        <template v-slot:error>
          <div class="absolute-full bg-negative text-white flex flex-center">
            Error...
          </div>
        </template>
      </q-img>

      <q-img
        :src="bogusSrc"
        :placeholder-src="placeholderSrc"
        spinner-color="white"
        ratio="1"
        style="min-height: 100px; max-width: 225px"
        :no-native-menu="noNativeMenu"
      >
        <template v-slot:error>
          <div class="absolute-full bg-negative text-white flex flex-center">
            Error...
          </div>
        </template>
      </q-img>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      url: 'https://picsum.photos/500/300',
      bogusSrc: 'https://bogu.bogus',
      noNativeMenu: false,
      placeholderSrc: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbDpzcGFjZT0icHJlc2VydmUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDIzLjYxMiAyMy42MTIiIHZpZXdCb3g9IjAgMCAyMy42MTIgMjMuNjEyIj48cGF0aCBkPSJNMTYuMTkyIDUuMjI0di0uNzM3aC04Ljc3di43MzdzMS4zMzQgMy43MTMgMy44MzggNS40Mjh2MS43ODVzLTIuNzYxIDIuNjg2LTMuODM4IDUuNzc1di44NDJoOC43N3YtLjg0MmMtMS4zOTktMy40MS0zLjgzNy01Ljc3NS0zLjgzNy01Ljc3NXYtMS43ODVjMy40MDQtMi45MjYgMy44MzctNS40MjggMy44MzctNS40Mjh6IiBzdHlsZT0iZmlsbDojMDEwMDAyIi8+PHBhdGggZD0iTTE5LjM1MyAzLjg1NlYyLjUyOWgxLjI1OFYwSDMuMDAydjIuNTI5aDEuMjU5djEuMzI3YzAgMi4wMjUgMy42MzQgNy41NTUgMy44MDQgNy45NTUtLjE2Ny4zOTctMy44MDQgNS45MjktMy44MDQgNy45NDZ2MS4zMjVIMy4wMDJ2Mi41M2gxNy42MDl2LTIuNTNoLTEuMjU4di0xLjMyNWMwLTIuMDI1LTMuNjM1LTcuNTIxLTMuODI5LTcuOTUxLjE5NC0uNDMgMy44MjktNS45MjYgMy44MjktNy45NXptLTEuMjU3IDE1LjkwMXYxLjMyNUg1LjUxOXYtMS4zMjVjMC0xLjQ1NSAzLjg1NC03LjIyMiAzLjg1NC03Ljk1MXMtMy44NTQtNi40OTUtMy44NTQtNy45NVYyLjUyOWgxMi41Nzh2MS4zMjdjMCAxLjQ1NS0zLjg4NiA3LjIyMS0zLjg4NiA3Ljk1LS4wMDEuNzI5IDMuODg1IDYuNDk2IDMuODg1IDcuOTUxeiIgc3R5bGU9ImZpbGw6IzAxMDAwMiIvPjwvc3ZnPg=='
    }
  },

  methods: {
    refresh () {
      this.url = 'https://picsum.photos/500/300?t=' + Math.random()
    },

    onClick () {
      console.log('@click')
    }
  } // ,

  // async setup () {}
}
</script>

<style lang="sass">
.blurry
  filter: blur(3px) sepia()
</style>
