---
layout: single
title: "Tags"
date: 2020-10-18 20:00
excerpt: "Under Construction"
tags: jekyll
toc: true
series: "Creating this blog"
permalink: /tags/
---

{% for tag in site.tags %}
  <h3>{{ tag[0] }}</h3>
  <ul>
    {% for post in tag[1] %}
      <li><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
  </ul>
{% endfor %}