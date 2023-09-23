<template>
  <div class="settings">
    <div
      class="cbtn cbtn-green cbtn-shadow mx-2 my-4"
      @click="$router.push('/settings/menu')"
    >
      Einstellungen Karte
    </div>
    <div
      class="cbtn cbtn-green cbtn-shadow mx-2 my-4"
      @click="$router.push('/settings/places')"
    >
      Einstellungen Tisch
    </div>
    <div
      class="cbtn cbtn-green cbtn-shadow mx-2 my-4"
      @click="$router.push('/reports')"
    >
      Reports
    </div>
    <div class="cbtn cbtn-red cbtn-shadow mx-2 my-4">Logout</div>
    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped>
.settings {
  width: 100vw;
  height: 94vh;
  overflow: auto;
}
</style>
