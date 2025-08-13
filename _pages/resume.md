---
layout: single
classes: wide
title: "Resume and FAQ"
date: 2025-06-20 13:00
tags: jekyll
toc: true
toc_sticky: true
series: "Creating this blog"
permalink: /resume/
include_scripts: ["https://cdn.jsdelivr.net/npm/d3@7.9.0/dist/d3.min.js",
"/assets/js/viz/resume_bubble_map.js", "/assets/js/viz/example_d3.js"]
---

<script type="text/javascript">
  const dataset = {{ site.data.geography.ne_10m_admin_0_countries_SIMPLE | jsonify }};
</script>



#### Just give me a PDF

Alright!
#### Where have I lived and worked?
test image/canvas
<canvas id="test_image" width="400" height="400"></canvas>
map script/canvas
<canvas id="bubble_map" width="400" height="400"></canvas>

Click the map for some different views. I've lived in a few places, and jetted around a little for conference appearances.

#### Three major interests?

* viral genomics 
* molecular epidemiology 
* vaccine-preventable disease

#### Why is my Git handle "_Yellow-Fever_"?

I studied yellow fever vaccines in grad school. The virus has a special place in my heart, to the extent that a virus can do that.

#### Quickly now, what was my dissertation about? 

I researched _quasispecies_ of yellow fever virus. This means that viruses can exist as a cloud of sequence variants. We thought this sequence diversity would be a marker of vaccine function. We checked this out in the lab and it seems to be true (under certain conditions).

#### To what have I contributed?

##### Peer Reviewed

{% bibliography --file papers %}

##### Book Chapters

{% bibliography --file books %}

##### Selected Conference Appearances

{% bibliography --file conferences %}

#### How about some awards?

##### After Grad School

##### During School




