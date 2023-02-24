---
title: Clients
layout: page
eleventyNavigation:
  key: clients
  parent: main
---
# {{title}}
<div class="container mt-4">
  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
 {% for client in clients %}
  <div class="col mb-4">
    <div class="card h-100">
      <h5 class="card-header text-white bg-secondary mb-0">{{client.company}}</h5>
      <img src="{{client.profile_photo}}" class="w-50 d-block mb-3 card-image" alt="{{client.name}}">
      <div class="card-body">
        <h6 class="card-title text-muted my-0">{{client.name}}</h6>
        <h7 class="card-title text-muted my-0">{{client.title}}</h7>
        <div class="card-text font-italic my-0">{{client.address}}</div>
        <a class ="btn btn-sm btn-outline-secondary btn-link mt-2 stretched-link" href="{{client.name | slug}}">
        More Info </a>
      </div>
    </div>
  </div>
  {% endfor %}  
  </div>
</div>