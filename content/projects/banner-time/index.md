---
posttype: "projects"
date: "2020-02-01"
title: "Banner Time"
description: "I created a JQuery plugin that injects sale or announcement banners for a scheduled time. Simply include the JavaScript file below your JQuery script tag, and the 'Banner' object will be available to initiate."
category: "Side Project"
cover: "./banner-time.jpg"
tags:
  - "JavaScript"
  - "WebPack"
  - "JQuery"
  - "Open Source"
repository: "https://github.com/SandyWyper/Banner-Time"
live: "https://codepen.io/SandyWyper/pen/yLLGzOx?editors=0010"
---

# Banner Time

> A JQuery plugin that injects a sale or announcement banner for a scheduled start and finish time.

### Objective

Lets say you have an e-commerce site, or for example a football team's website. There's a sale or game coming up and you want a banner across the top of the page to say, "Two days to go!!" or "Click here to buy tickets for tomorrow's game". However, you don't want to be editing the website everyday to update this banner. You need to be able to set it up once, so that banner changes everyday, and doesn't appear after the sale/match has finished. Requirements:

1. Need to be able to set up multiple instances. Different messages for different days.
2. You will want different messages for mobile and desktop screen sizes.
3. We want to style the banner to suit the style of the website.
4. We need to be able to declare a start and finish time for each instance.
5. The code must be self contained and not affect the rest of the site.

### Set the foundations

In the world of front-end development, most websites (huge sweeping generalisation) include JQuery. This code requires it as a dependency, so all you have to do is make sure this pluging is loaded after JQuery.

I took the stucture for this project from a [lesson by Ken Wheeler](https://scotch.io/tutorials/building-your-own-javascript-modal-plugin), that sets about writing your own pop-up modal plugin. Ken Wheeler also wrote [Slick Slider](https://kenwheeler.github.io/slick/) which is a widely used image carousel plugin, so I based the repository structure on that. I build this to be open-source, so others could contribute and improve the plugin (at the time of writing this..... no takers).

### Get going

Say you want to show some sale banners at the top of your site like [this](https://codepen.io/SandyWyper/full/yLLGzOx).

**First** include the script after JQuery

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="bannerTime.js"></script>
```

**Then** intiate your banners

```html
<script>
  const firstBanner = {
    startTme: [2019, 11, 22],
    endTime: [2019, 11, 23],
    bannerText: {
      desktop: ["3 Days Until Xmas", "Shop now"],
      mobile: ["3 Days To Go!", "Xmas time!"],
    },
  }
  const secondBanner = {
    startTime: [2019, 11, 23],
    endTime: [2019, 11, 24],
    bannerText: {
      desktop: ["2 Days Until Xmas", "Shop now"],
      mobile: ["2 Days To Go!", "Xmas time!"],
    },
  }
  const thirdBanner = {
    startTime: [2019, 11, 24],
    endTime: [2019, 11, 25],
    bannerText: {
      desktop: ["1 Day Until Xmas", "Shop now"],
      mobile: ["1 Day To Go!", "Delivery NOT guaranteed!"],
    },
  }

  const myXmasBanner = new Banner(firstBanner, secondBanner, thirdBanner)
</script>
```

That's it. The banners should appear on the correct day, fade transtion between each message slide, and stop showing on Christmas day. You can futher customise the slides by following the intructions in the [repo readme](https://github.com/SandyWyper/Banner-Time/blob/master/README.md). Change; the slide transition type, the transition speed and interval, the styles(CSS) of the banner, the timezone, and add a link to the banner element.

### Conclusion

While builing this..... something about timezones and daylight savings.... need to weigh up the benefits of the bloat, potentially use moment.js as a dependency for reliance on time zones and daylight savings.
