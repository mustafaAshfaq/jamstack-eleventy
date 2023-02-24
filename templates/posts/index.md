---
title: Posts
layout: page
---
## {{title}}
<div class="container">
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
        {%- if 'api-error' in posts -%}
        <div class="col danger">
         {{posts | safe}}
        </div>
        {%- else -%}
        {%- for post in posts -%}
        <div class="col mb-4">
          <div class="card h-100">
          <div class="card-body"> 
            <div class="card-text font-italic my-0">{{post.title}}</div>
          </div>
          </div>
        </div>
        {%- endfor -%}
        {%- endif -%}
    </div>
   
</div>