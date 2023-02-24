---
layout: page
title: Courses
eleventyNavigation:
  key: courses
  parent: main
---
# {{title}}
<div class="container mt-4">
  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
  {% for course in courses %}
  <div class="col mb-4">
    <div class="card h-100" >
      <img src="{{course.thumbnail | safe}}" alt="{{course.title | safe}}" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title my-0"></h5>
        <time class="item-date small d-block text-muted mb-2" datetime="">{{course.date}}</time>
        <p class="card-text">{{course.summary}}</p>
        <a href="{{course.url}}" class="btn btn-secondary stretched-link" target="_blank">Watch course</a>
      </div>
    </div>
  </div>
  {% endfor %}
  </div>