<template>
  <div>
    <Hero2
      :title="siteHome.content.hero.title"
      :subtitle="siteHome.content.hero.subTitle"
      :button-text="siteHome.content.hero.button.text"
      :button-url="siteHome.content.hero.button.url"
      :image="siteHome.content.hero.image"
      :text="siteHome.content.hero.text"
    />

    <SectionsRenderer :sections="siteHome.content.sections" />
  </div>
</template>

<script>
const query = /* groq */ `{
  "siteHome": *[_type == 'siteHome'] {
    ...,
    content {
      ...,
      sections[] {
        ...,
        _type == "sponsorsSection" => {
          sponsorsList[]->{
            ...
          }
        },
        _type == "faqSection" => {
          faqItems[]->{
            ...
          }
        }
      }
    }
  }[0]
}
`

export default {
  name: 'SiteHome',
  asyncData({ $sanity }) {
    const sanityCall = $sanity.fetch(query)
    // console.log("🎈 asyncData: called", sanityCall);
    return sanityCall
  },

  head() {
    return {
      title: this.seoTitle,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.seoDescription,
        },
        {
          hid: 'ogtitle',
          name: 'og:title',
          content: this.seoTitle,
        },
        {
          hid: 'ogdescription',
          name: 'og:description',
          content: this.seoDescription,
        },
        {
          hid: 'ogimage',
          name: 'og:image',
          content: this.seoShareImage,
        },
        {
          hid: 'ogurl',
          name: 'og:url',
          content: this.seoPageUrl,
        },
      ],
      link: [{ rel: 'canonical', href: this.seoPageUrl }],
      __dangerouslyDisableSanitizersByTagID: {
        ogimage: ['content'],
      },
    }
  },

  computed: {
    seoTitle() {
      if (this.siteHome.content.seo && this.siteHome.content.seo.title)
        return this.siteHome.content.seo.title
      return undefined
    },
    seoDescription() {
      if (this.siteHome.content.seo && this.siteHome.content.seo.description)
        return this.siteHome.content.seo.description
      return undefined
    },
    seoImage() {
      return undefined
    },
    seoPageUrl() {
      return `https://www.dg2gofood.com/`
    },
    seoShareImage() {
      return undefined
    },
  },
}
</script>
