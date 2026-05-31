'use strict';

const i18n = {
  en: {
    nav: {
      about: 'About',
      services: 'Services',
      pricing: 'Pricing',
      gallery: 'Gallery',
      contact: 'Order'
    },
    header: { cta: 'Join Discord' },
    hero: {
      eyebrow: 'Roblox avatar GFX',
      h1: 'GFX renders made the way you actually want them.',
      sub: "Hey, we're Dan and Ori. We do custom Roblox GFX - real lighting, real poses, not a screenshot with a filter on it. 10 ILS per render. No subscriptions, no upsells.",
      cta_primary: 'Order now',
      cta_ghost: 'See our work'
    },
    about: {
      eyebrow: 'About',
      h2: 'Just Dan and Ori, making GFX we would want ourselves.',
      body_1: "We started this because we both got sick of how bad most Roblox GFX looks. Dan does the rendering and lighting setup. Ori handles the poses and how everything is framed. We both check the result before it goes out.",
      body_2: "Every order starts from your actual avatar, from scratch. Tell us what you need it for - profile pic, group banner, thumbnail, whatever - and we make something that actually looks good.",
      stat_1_label: 'Avatars made',
      stat_1_value: '500+',
      stat_2_label: 'Average delivery',
      stat_2_value: 'Under 24h'
    },
    pricing: {
      h2: 'One price. 10 ILS per render.',
      sub: 'No tiers, no hidden fees. Pay for one render, get the file, use it however you want.',
      cta: 'Place an order'
    },
    services: {
      eyebrow: 'What you get',
      h2: 'What we do for every order.',
      s1_title: 'Looks good for real',
      s1_body: "Good lighting, real depth, sharp at full size. We don't put a filter on a screenshot and call it GFX.",
      s2_title: 'Done fast',
      s2_body: "Most orders are ready within 24 hours. If yours will take longer we'll tell you before you pay.",
      s3_title: 'Made for your avatar',
      s3_body: "Your avatar, your pose, your background. We start from scratch every time.",
      sub: 'We make it right, send it quick, keep it yours.'
    },
    gallery: {
      eyebrow: 'Our work',
      h2: 'Recent work',
      sub: "Some stuff we've made recently."
    },
    contact: {
      eyebrow: 'Get in touch',
      h2: 'How to order from us.',
      paragraph: "All orders go through Discord. Join the server, open a ticket in the orders channel, and we'll reply pretty fast.",
      info_card: 'Join our Discord and drop a message in the orders channel. We reply pretty fast.',
      discord_cta: 'Join Discord',
      ticket_cta: 'Open a ticket'
    },
    footer: {
      tagline: 'Roblox GFX by Dan and Ori.',
      links_heading: 'Site',
      credit: 'Made by Dan and Ori - \u00A9 2026 D & O Shop.'
    },
    lang: { toggle_label: 'Language', en: 'EN', he: 'HE' }
  },

  he: {
    nav: {
      about: '\u05E2\u05DC\u05D9\u05E0\u05D5',
      services: '\u05E9\u05D9\u05E8\u05D5\u05EA\u05D9\u05DD',
      pricing: '\u05DE\u05D7\u05D9\u05E8',
      gallery: '\u05E2\u05D1\u05D5\u05D3\u05D5\u05EA',
      contact: '\u05E6\u05D5\u05E8 \u05E7\u05E9\u05E8'
    },
    header: { cta: '\u05D4\u05E6\u05D8\u05E8\u05E3 \u05DC\u05D3\u05D9\u05E1\u05E7\u05D5\u05E8\u05D3' },
    hero: {
      eyebrow: 'GFX \u05DC\u05D0\u05D5\u05D5\u05D8\u05D0\u05E8 \u05E8\u05D5\u05D1\u05DC\u05D5\u05E7\u05E1',
      h1: '\u05D0\u05D5\u05D5\u05D8\u05D0\u05E8\u05D9\u05DD \u05E9\u05E0\u05E8\u05D0\u05D9\u05DD \u05D1\u05D3\u05D9\u05D5\u05E7 \u05DB\u05DE\u05D5 \u05E9\u05D3\u05DE\u05D9\u05D9\u05E0\u05EA\u05DD.',
      sub: '\u05D0\u05E0\u05D7\u05E0\u05D5 \u05D3\u05DF \u05D5\u05D0\u05D5\u05E8\u05D9, \u05D5\u05D0\u05E0\u05D7\u05E0\u05D5 \u05E2\u05D5\u05E9\u05D9\u05DD GFX \u05DC\u05E8\u05D5\u05D1\u05DC\u05D5\u05E7\u05E1. \u05E8\u05D9\u05E0\u05D3\u05D5\u05E8\u05D9\u05DD \u05DE\u05D5\u05EA\u05D0\u05DE\u05D9\u05DD \u05D0\u05D9\u05E9\u05D9\u05EA \u05E9\u05E0\u05E8\u05D0\u05D9\u05DD \u05D0\u05D7\u05E8\u05EA \u05DC\u05D2\u05DE\u05E8\u05D9 \u05DE\u05D4\u05EA\u05DE\u05D5\u05E0\u05D4 \u05E9\u05D4\u05DE\u05E9\u05D7\u05E7 \u05E0\u05D5\u05EA\u05DF \u05DC\u05DB\u05DD \u05D1\u05D3\u05D9\u05E4\u05D5\u05DC\u05D8 - \u05EA\u05D0\u05D5\u05E8\u05D4 \u05D0\u05DE\u05D9\u05EA\u05D9\u05EA, \u05E4\u05D5\u05D6\u05D5\u05EA \u05E9\u05E2\u05D5\u05D1\u05D3\u05D5\u05EA, \u05D5\u05D2\u05D9\u05DE\u05D5\u05E8 \u05E9\u05DE\u05E8\u05D2\u05D9\u05E9 \u05E1\u05D2\u05D5\u05E8. 10 \u05E9\u05E7\u05DC\u05D9\u05DD \u05DC\u05E8\u05D9\u05E0\u05D3\u05D5\u05E8. \u05D1\u05DC\u05D9 \u05DE\u05E0\u05D5\u05D9\u05D9\u05DD, \u05D1\u05DC\u05D9 \u05E9\u05D3\u05E8\u05D5\u05D2\u05D9\u05DD.',
      cta_primary: '\u05D4\u05D6\u05DE\u05DF \u05E2\u05DB\u05E9\u05D9\u05D5',
      cta_ghost: '\u05DC\u05E2\u05D1\u05D5\u05D3\u05D5\u05EA \u05E9\u05DC\u05E0\u05D5'
    },
    about: {
      eyebrow: '\u05E2\u05DC\u05D9\u05E0\u05D5',
      h2: '\u05E9\u05E0\u05D9 \u05D0\u05E0\u05E9\u05D9\u05DD. \u05D0\u05D5\u05D1\u05E1\u05E1\u05D9\u05D4 \u05D0\u05D7\u05EA - \u05D0\u05D5\u05D5\u05D8\u05D0\u05E8\u05D9\u05DD \u05E9\u05E0\u05E8\u05D0\u05D9\u05DD \u05D8\u05D5\u05D1.',
      body_1: '\u05E4\u05EA\u05D7\u05E0\u05D5 \u05D0\u05EA D & O Shop \u05DB\u05D9 \u05E0\u05DE\u05D0\u05E1 \u05DC\u05E0\u05D5 \u05DC\u05E8\u05D0\u05D5\u05EA \u05D0\u05D5\u05D5\u05D8\u05D0\u05E8\u05D9\u05DD \u05DE\u05D2\u05E0\u05D9\u05D1\u05D9\u05DD \u05E0\u05EA\u05E7\u05E2\u05D9\u05DD \u05D1\u05EA\u05D5\u05DA \u05E6\u05D9\u05DC\u05D5\u05DE\u05D9 \u05DE\u05E1\u05DA \u05DE\u05E9\u05E2\u05DE\u05DE\u05D9\u05DD \u05E9\u05DC \u05D4\u05DE\u05E9\u05D7\u05E7 \u05E2\u05E6\u05DE\u05D5. \u05D3\u05DF \u05E2\u05DC \u05D4\u05E8\u05D9\u05E0\u05D3\u05D5\u05E8 \u05D5\u05D4\u05EA\u05D0\u05D5\u05E8\u05D4. \u05D0\u05D5\u05E8\u05D9 \u05E2\u05DC \u05D4\u05E4\u05D5\u05D6\u05D5\u05EA, \u05E2\u05DC \u05D4\u05E7\u05D5\u05DE\u05E4\u05D5\u05D6\u05D9\u05E6\u05D9\u05D4, \u05D5\u05E2\u05DC \u05D4\u05DC\u05D9\u05D8\u05D5\u05E9 \u05D4\u05E7\u05D8\u05DF \u05E9\u05D2\u05D5\u05E8\u05DD \u05DC\u05E8\u05D9\u05E0\u05D3\u05D5\u05E8 \u05DC\u05D4\u05E8\u05D2\u05D9\u05E9 \u05E1\u05D2\u05D5\u05E8, \u05D5\u05DC\u05D0 \u05E1\u05EA\u05DD \u05DE\u05E9\u05D4\u05D5 \u05E9\u05D9\u05E6\u05D0 \u05DB\u05DB\u05D4.',
      body_2: '\u05DB\u05DC \u05D4\u05D6\u05DE\u05E0\u05D4 \u05E0\u05D1\u05E0\u05D9\u05EA \u05DE\u05D0\u05E4\u05E1 \u05E1\u05D1\u05D9\u05D1 \u05D4\u05D0\u05D5\u05D5\u05D8\u05D0\u05E8 \u05E9\u05DC\u05DB\u05DD. \u05EA\u05D2\u05D9\u05D3\u05D5 \u05DC\u05E0\u05D5 \u05D0\u05EA \u05D4\u05D5\u05D5\u05D9\u05D1 - \u05EA\u05DE\u05D5\u05E0\u05EA \u05E4\u05E8\u05D5\u05E4\u05D9\u05DC, \u05D1\u05D0\u05E0\u05E8 \u05DC\u05E7\u05D1\u05D5\u05E6\u05D4, \u05EA\u05D0\u05DE\u05D1\u05E0\u05D9\u05D9\u05DC \u05DC\u05D9\u05D5\u05D8\u05D9\u05D5\u05D1, \u05DE\u05EA\u05E0\u05D4 \u05DC\u05D7\u05D1\u05E8 \u05DC\u05D9\u05D5\u05DD \u05D4\u05D5\u05DC\u05D3\u05EA - \u05D5\u05E0\u05D1\u05D9\u05D0 \u05DC\u05DB\u05DD \u05DE\u05E9\u05D4\u05D5 \u05E9\u05EA\u05E8\u05E6\u05D5 \u05D1\u05D0\u05DE\u05EA \u05DC\u05D4\u05E9\u05EA\u05DE\u05E9 \u05D1\u05D5.',
      stat_1_label: '\u05D0\u05D5\u05D5\u05D8\u05D0\u05E8\u05D9\u05DD \u05E9\u05E2\u05D9\u05E6\u05D1\u05E0\u05D5',
      stat_1_value: '500+',
      stat_2_label: '\u05D6\u05DE\u05DF \u05DE\u05DE\u05D5\u05E6\u05E2 \u05DC\u05D0\u05E1\u05E4\u05E7\u05D4',
      stat_2_value: '\u05E4\u05D7\u05D5\u05EA \u05DE-24 \u05E9\u05E2\u05D5\u05EA'
    },
    pricing: {
      h2: '\u05DE\u05D7\u05D9\u05E8 \u05D0\u05D7\u05D3. 10 \u05E9\u05E7\u05DC\u05D9\u05DD \u05DC\u05E8\u05D9\u05E0\u05D3\u05D5\u05E8.',
      sub: '\u05D1\u05DC\u05D9 \u05DE\u05D3\u05E8\u05D2\u05D5\u05EA, \u05D1\u05DC\u05D9 \u05EA\u05D5\u05E1\u05E4\u05D5\u05EA, \u05D1\u05DC\u05D9 \u05D2\u05E8\u05E1\u05EA \u05E4\u05E8\u05D9\u05DE\u05D9\u05D5\u05DD. \u05DE\u05E9\u05DC\u05DE\u05D9\u05DD \u05E4\u05E2\u05DD \u05D0\u05D7\u05EA, \u05DE\u05E7\u05D1\u05DC\u05D9\u05DD \u05D0\u05EA \u05D4\u05E7\u05D5\u05D1\u05E5, \u05D5\u05D6\u05D4 \u05E9\u05DC\u05DB\u05DD \u05DC\u05E2\u05E9\u05D5\u05EA \u05D0\u05D9\u05EA\u05D5 \u05DE\u05D4 \u05E9\u05D1\u05D0 \u05DC\u05DB\u05DD.',
      cta: '\u05DC\u05D4\u05D6\u05DE\u05D9\u05DF'
    },
    services: {
      eyebrow: '\u05DE\u05D4 \u05EA\u05E7\u05D1\u05DC',
      h2: '\u05E0\u05E2\u05E9\u05D4 \u05DB\u05DE\u05D5 \u05E9\u05E6\u05E8\u05D9\u05DA. \u05E0\u05E9\u05DC\u05D7 \u05DE\u05D4\u05E8. \u05DE\u05D5\u05EA\u05D0\u05DD \u05D0\u05DC\u05D9\u05DB\u05DD.',
      s1_title: '\u05D0\u05D9\u05DB\u05D5\u05EA \u05DE\u05E7\u05E6\u05D5\u05E2\u05D9\u05EA',
      s1_body: '\u05EA\u05D0\u05D5\u05E8\u05D4 \u05D0\u05DE\u05D9\u05EA\u05D9\u05EA, \u05E2\u05D5\u05DE\u05E7 \u05E9\u05DE\u05E8\u05D2\u05D9\u05E9, \u05D5\u05D2\u05D9\u05DE\u05D5\u05E8 \u05E9\u05E2\u05D5\u05D1\u05D3 \u05D2\u05DD \u05D1\u05E8\u05D6\u05D5\u05DC\u05D5\u05E6\u05D9\u05D4 \u05DE\u05DC\u05D0\u05D4. \u05D1\u05DC\u05D9 \u05E4\u05D9\u05DC\u05D8\u05E8\u05D9\u05DD \u05E9\u05DE\u05EA\u05D7\u05E4\u05E9\u05D9\u05DD \u05DC\u05DE\u05E7\u05E6\u05D5\u05E2\u05D9\u05D5\u05EA.',
      s2_title: '\u05D0\u05E1\u05E4\u05E7\u05D4 \u05DE\u05D4\u05D9\u05E8\u05D4',
      s2_body: '\u05E8\u05D5\u05D1 \u05D4\u05D4\u05D6\u05DE\u05E0\u05D5\u05EA \u05D9\u05D5\u05E6\u05D0\u05D5\u05EA \u05D1\u05EA\u05D5\u05DA 24 \u05E9\u05E2\u05D5\u05EA. \u05D0\u05DD \u05DE\u05E9\u05D4\u05D5 \u05D9\u05D9\u05E7\u05D7 \u05D9\u05D5\u05EA\u05E8 \u05D6\u05DE\u05DF, \u05E0\u05D2\u05D9\u05D3 \u05DC\u05DB\u05DD \u05DC\u05E4\u05E0\u05D9 \u05E9\u05D0\u05EA\u05DD \u05DE\u05E9\u05DC\u05DE\u05D9\u05DD.',
      s3_title: '\u05DE\u05D5\u05EA\u05D0\u05DD \u05D1\u05DB\u05DC \u05E4\u05E2\u05DD',
      s3_body: '\u05D4\u05D0\u05D5\u05D5\u05D8\u05D0\u05E8 \u05E9\u05DC\u05DB\u05DD, \u05D4\u05E4\u05D5\u05D6\u05D4 \u05E9\u05DC\u05DB\u05DD, \u05D4\u05E8\u05E7\u05E2 \u05E9\u05DC\u05DB\u05DD. \u05D1\u05DC\u05D9 \u05EA\u05D1\u05E0\u05D9\u05D5\u05EA \u05E9\u05D7\u05D5\u05D6\u05E8\u05D5\u05EA \u05E2\u05DC \u05E2\u05E6\u05DE\u05DF, \u05D5\u05D1\u05DC\u05D9 \u05E2\u05D1\u05D5\u05D3\u05D5\u05EA \u05DE\u05DE\u05D5\u05D7\u05D6\u05E8\u05D5\u05EA \u05E9\u05DC \u05D0\u05D7\u05E8\u05D9\u05DD.',
      sub: '\u05E8\u05D9\u05E0\u05D3\u05D5\u05E8\u05D9\u05DD \u05E0\u05E7\u05D9\u05D9\u05DD, \u05DE\u05E9\u05DC\u05D5\u05D7 \u05DE\u05D4\u05D9\u05E8, \u05D5\u05D4\u05D0\u05D5\u05D5\u05D8\u05D0\u05E8 \u05E9\u05DC\u05DB\u05DD \u05D1\u05DE\u05E8\u05DB\u05D6 - \u05DB\u05DC \u05E4\u05E2\u05DD.'
    },
    gallery: {
      eyebrow: '\u05D4\u05E2\u05D1\u05D5\u05D3\u05D5\u05EA \u05E9\u05DC\u05E0\u05D5',
      h2: '\u05E2\u05D1\u05D5\u05D3\u05D5\u05EA \u05D0\u05D7\u05E8\u05D5\u05E0\u05D5\u05EA',
      sub: '\u05DB\u05DE\u05D4 \u05E8\u05D9\u05E0\u05D3\u05D5\u05E8\u05D9\u05DD \u05DE\u05D4\u05D7\u05D5\u05D3\u05E9\u05D9\u05D9\u05DD \u05D4\u05D0\u05D7\u05E8\u05D5\u05E0\u05D9\u05DD.'
    },
    contact: {
      eyebrow: '\u05E6\u05D5\u05E8 \u05E7\u05E9\u05E8',
      h2: '\u05EA\u05D2\u05D9\u05D3\u05D5 \u05DC\u05E0\u05D5 \u05DE\u05D4 \u05D0\u05EA\u05DD \u05E8\u05D5\u05E6\u05D9\u05DD, \u05D5\u05D0\u05E0\u05D7\u05E0\u05D5 \u05E0\u05D3\u05D0\u05D2 \u05DC\u05E9\u05D0\u05E8.',
      paragraph: '\u05D0\u05E0\u05D7\u05E0\u05D5 \u05DC\u05D5\u05E7\u05D7\u05D9\u05DD \u05D4\u05D6\u05DE\u05E0\u05D5\u05EA \u05D3\u05E8\u05DA \u05D3\u05D9\u05E1\u05E7\u05D5\u05E8\u05D3. \u05EA\u05D9\u05DB\u05E0\u05E1\u05D5 \u05DC\u05E9\u05E8\u05EA, \u05EA\u05E4\u05EA\u05D7\u05D5 \u05D8\u05D9\u05E7\u05D8 \u05D1\u05E2\u05E8\u05D5\u05E5 \u05D4\u05D4\u05D6\u05DE\u05E0\u05D5\u05EA, \u05D5\u05DE\u05E9\u05DD \u05D0\u05E0\u05D7\u05E0\u05D5 \u05D3\u05D5\u05D0\u05D2\u05D9\u05DD \u05DC\u05DB\u05DC \u05D4\u05E9\u05D0\u05E8. \u05D1\u05D3\u05E8\u05DA \u05DB\u05DC\u05DC \u05E2\u05D5\u05E0\u05D9\u05DD \u05EA\u05D5\u05DA \u05DB\u05DE\u05D4 \u05E9\u05E2\u05D5\u05EA.',
      info_card: '\u05EA\u05D9\u05DB\u05E0\u05E1\u05D5 \u05DC\u05D3\u05D9\u05E1\u05E7\u05D5\u05E8\u05D3, \u05EA\u05E9\u05D0\u05D9\u05E8\u05D5 \u05D4\u05D5\u05D3\u05E2\u05D4 \u05D1\u05E2\u05E8\u05D5\u05E5 \u05D4\u05D4\u05D6\u05DE\u05E0\u05D5\u05EA, \u05D5\u05E0\u05D7\u05D6\u05D5\u05E8 \u05D0\u05DC\u05D9\u05DB\u05DD \u05EA\u05D5\u05DA \u05DB\u05DE\u05D4 \u05E9\u05E2\u05D5\u05EA.',
      discord_cta: '\u05D4\u05E6\u05D8\u05E8\u05E3 \u05DC\u05D3\u05D9\u05E1\u05E7\u05D5\u05E8\u05D3',
      ticket_cta: '\u05E4\u05EA\u05D7 \u05D8\u05D9\u05E7\u05D8'
    },
    footer: {
      tagline: '\u05E8\u05D9\u05E0\u05D3\u05D5\u05E8\u05D9\u05DD \u05DC\u05D0\u05D5\u05D5\u05D8\u05D0\u05E8\u05D9\u05DD \u05D1\u05E8\u05D5\u05D1\u05DC\u05D5\u05E7\u05E1, \u05E2\u05E9\u05D5\u05D9\u05D9\u05DD \u05D1\u05D9\u05D3.',
      links_heading: '\u05E0\u05D9\u05D5\u05D5\u05D8',
      credit: '\u05E0\u05E2\u05E9\u05D4 \u05E2\u05DC \u05D9\u05D3\u05D9 \u05D3\u05DF \u05D5\u05D0\u05D5\u05E8\u05D9 - \u00A9 2026 D & O Shop.'
    },
    lang: { toggle_label: '\u05E9\u05E4\u05D4', en: 'EN', he: 'HE' }
  }
};

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function clamp(v, lo, hi) {
  return Math.min(Math.max(v, lo), hi);
}

function applyLang(lang) {
  const dict = i18n[lang];
  if (!dict) return;

  const root = document.documentElement;
  root.lang = lang;
  root.dir  = lang === 'he' ? 'rtl' : 'ltr';

document.querySelectorAll('[data-i18n]').forEach(function (el) {
    const key = el.getAttribute('data-i18n');
    const parts = key.split('.');
    let val = dict;
    for (const p of parts) { val = val && val[p]; }
    if (typeof val === 'string') { el.textContent = val; }
  });

document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
    const key = el.getAttribute('data-i18n-placeholder');
    const parts = key.split('.');
    let val = dict;
    for (const p of parts) { val = val && val[p]; }
    if (typeof val === 'string') { el.placeholder = val; }
  });

document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
    const key = el.getAttribute('data-i18n-aria');
    const parts = key.split('.');
    let val = dict;
    for (const p of parts) { val = val && val[p]; }
    if (typeof val === 'string') { el.setAttribute('aria-label', val); }
  });

document.querySelectorAll('[data-lang]').forEach(function (btn) {
    btn.setAttribute('aria-pressed', String(btn.getAttribute('data-lang') === lang));
  });

const url = new URL(window.location.href);
  url.hash = 'lang=' + lang;
  history.replaceState(null, '', url.toString());
}

function detectLang() {
  const hash = window.location.hash;
  if (hash.includes('lang=he')) return 'he';
  if (hash.includes('lang=en')) return 'en';

  const nav = (navigator.languages && navigator.languages[0]) || navigator.language || 'en';
  if (nav.toLowerCase().startsWith('he')) return 'he';
  return 'en';
}

function runBrandIntro() {
  const intro = document.querySelector('.brand-intro');
  if (!intro) return;

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) {
    intro.remove();
    return;
  }

requestAnimationFrame(function () {
    intro.classList.add('playing');
  });

setTimeout(function () {
    intro.classList.add('exit');
    setTimeout(function () {
      intro.remove();
    }, 400);
  }, 600);
}

function initScroll() {
  const bar  = document.querySelector('.progress-bar');
  const root = document.documentElement;
  let scheduled = false;

  function onScroll() {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(function () {
      scheduled = false;
      const scrollTop  = window.scrollY || document.documentElement.scrollTop;
      const docHeight  = document.documentElement.scrollHeight - root.clientHeight;
      const ratio      = docHeight > 0 ? scrollTop / docHeight : 0;

      if (bar) {
        bar.style.transform = 'scaleX(' + clamp(ratio, 0, 1) + ')';
      }

      root.classList.toggle('scrolled', scrollTop > 20);
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
}

function initMobileMenu() {
  const hamburger  = document.querySelector('.hamburger');
  const menu       = document.querySelector('.mobile-menu');
  const closeBtn   = document.querySelector('.mobile-close');

  if (!hamburger || !menu) return;

  let lastFocused = null;

function getFocusable() {
    return Array.from(
      menu.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')
    );
  }

  function openMenu() {
    menu.classList.add('open');
    menu.setAttribute('aria-hidden', 'false');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.classList.add('menu-open');
    lastFocused = document.activeElement;
    
    const items = getFocusable();
    if (items.length) { setTimeout(function () { items[0].focus(); }, 50); }
  }

  function closeMenu() {
    menu.classList.remove('open');
    menu.setAttribute('aria-hidden', 'true');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
    if (lastFocused) { lastFocused.focus(); }
  }

  hamburger.addEventListener('click', function () {
    if (menu.classList.contains('open')) { closeMenu(); } else { openMenu(); }
  });

if (closeBtn) { closeBtn.addEventListener('click', closeMenu); }

menu.querySelectorAll('a[href]').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && menu.classList.contains('open')) { closeMenu(); }
  });

menu.addEventListener('keydown', function (e) {
    if (e.key !== 'Tab') return;
    const items = getFocusable();
    if (!items.length) return;
    const first = items[0];
    const last  = items[items.length - 1];
    if (e.shiftKey) {
      if (document.activeElement === first) { e.preventDefault(); last.focus(); }
    } else {
      if (document.activeElement === last)  { e.preventDefault(); first.focus(); }
    }
  });

document.addEventListener('click', function (e) {
    if (menu.classList.contains('open') &&
        !menu.contains(e.target) &&
        !hamburger.contains(e.target)) {
      closeMenu();
    }
  });
}

function initSmoothScroll() {
  document.addEventListener('click', function (e) {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;
    const href = link.getAttribute('href');
    if (!href || href === '#') return;

    const target = document.querySelector(href);
    if (!target) return;

    e.preventDefault();

    const headerH = parseInt(
      getComputedStyle(document.documentElement).getPropertyValue('--header-h'),
      10
    ) || 68;

    const top = target.getBoundingClientRect().top + window.scrollY - headerH - 16;
    window.scrollTo({ top: top, behavior: 'smooth' });
  });
}

function initReveal() {
  
  const staggerParents = document.querySelectorAll('[data-reveal][data-stagger]');
  
  const groups = new Map();
  staggerParents.forEach(function (el) {
    const parent = el.parentElement;
    if (!groups.has(parent)) { groups.set(parent, []); }
    groups.get(parent).push(el);
  });
  groups.forEach(function (children) {
    children.forEach(function (child, i) {
      child.style.setProperty('--i', String(i));
    });
  });

  if (!('IntersectionObserver' in window)) {
    
    document.querySelectorAll('[data-reveal]').forEach(function (el) {
      el.classList.add('in');
    });
    return;
  }

  const io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('[data-reveal]').forEach(function (el) {
    io.observe(el);
  });
}

function attachTilt(el, maxDeg) {
  if (!window.matchMedia('(pointer: fine)').matches) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  let rx = 0, ry = 0;
  let trx = 0, try_ = 0;
  let rafId = null;

  function lerping() {
    rx  = lerp(rx, trx, 0.12);
    ry  = lerp(ry, try_, 0.12);
    el.style.transform = 'perspective(900px) rotateX(' + rx + 'deg) rotateY(' + ry + 'deg)';
    if (Math.abs(rx - trx) > 0.01 || Math.abs(ry - try_) > 0.01) {
      rafId = requestAnimationFrame(lerping);
    } else {
      rafId = null;
    }
  }

  el.addEventListener('mousemove', function (e) {
    const rect   = el.getBoundingClientRect();
    const px     = (e.clientX - rect.left) / rect.width  - 0.5;
    const py     = (e.clientY - rect.top)  / rect.height - 0.5;
    trx = clamp(-py * maxDeg * 2, -maxDeg, maxDeg);
    try_ = clamp(px * maxDeg * 2, -maxDeg, maxDeg);
    if (!rafId) { rafId = requestAnimationFrame(lerping); }
  });

  el.addEventListener('mouseleave', function () {
    trx = 0; try_ = 0;
    if (!rafId) { rafId = requestAnimationFrame(lerping); }
  });
}

function initLightbox() {
  var lb        = document.getElementById('lightbox');
  var lbImg     = document.getElementById('lightbox-img');
  var lbClose   = document.getElementById('lightbox-close');
  var lbBackdrop = document.getElementById('lightbox-backdrop');
  if (!lb || !lbImg) return;

  var lastFocused = null;

  function openLightbox(src, alt) {
    lbImg.src = src;
    lbImg.alt = alt || '';
    lb.removeAttribute('hidden');
    document.body.classList.add('lightbox-open');
    lastFocused = document.activeElement;
    if (lbClose) {
      
      if (window.lucide) { window.lucide.createIcons({ nodes: [lbClose] }); }
      lbClose.focus();
    }
  }

  function closeLightbox() {
    lb.setAttribute('hidden', '');
    document.body.classList.remove('lightbox-open');
    lbImg.src = '';
    if (lastFocused) { lastFocused.focus(); }
  }

document.querySelectorAll('.gallery-tile').forEach(function (tile) {
    var img = tile.querySelector('img');
    tile.setAttribute('tabindex', '0');
    tile.setAttribute('role', 'button');
    tile.setAttribute('aria-label', img ? ('View: ' + img.alt) : 'View image');

    tile.addEventListener('click', function () {
      if (img) { openLightbox(img.src, img.alt); }
    });
    tile.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        if (img) { openLightbox(img.src, img.alt); }
      }
    });
  });

  if (lbClose)   { lbClose.addEventListener('click', closeLightbox); }
  if (lbBackdrop){ lbBackdrop.addEventListener('click', closeLightbox); }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !lb.hasAttribute('hidden')) { closeLightbox(); }
  });
}

function initIcons() {
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }
}

document.addEventListener('DOMContentLoaded', function () {
  
  initIcons();

const lang = detectLang();
  applyLang(lang);

runBrandIntro();

initScroll();

initMobileMenu();

initSmoothScroll();

initReveal();

initLightbox();

  document.querySelectorAll('.service-card').forEach(function (card) {
    attachTilt(card, 5);
  });

document.querySelectorAll('[data-lang]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      applyLang(btn.getAttribute('data-lang'));
    });
  });
});
