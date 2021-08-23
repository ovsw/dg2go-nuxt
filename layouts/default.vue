<template>
  <div>
    <client-only>
      <!-- v-if="$store.state.showDrafPreviewBanner" -->
      <button class="refreshPreview" @click="$nuxt.refresh()">
        Draft Preview. Click here to refresh
      </button>
    </client-only>

    <div class="site-wrap">
      <SiteHeader />
      <main id="main-content" tabindex="-1">
        <Nuxt />
      </main>
      <SiteFooter />
    </div>
  </div>
</template>

<style>
:focus {
  outline: 2px dashed #2d8262 !important;
  outline-offset: 0.5em !important;
}
</style>
