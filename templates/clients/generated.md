---
pagination:
  data: clients
  size: 1
  alias: client
permalink: 'clients/{{client.name | slug}}/'
layout: page
tag: clients
---
<h1 class="mt-0">{{client.name}}</h1>
<p>{{client.title}}, <span class="font-weight-bold text-secondary">{{client.company}}</span></p>

<img src="{{client.profile_photo}}" class="w-50 d-block mb-3" alt="{{client.name}}">

<h2 class="mb-0">Friends</h2>

<p class="mt-1"> 
{% for friend in client.friends %}{% clientFriendTag friend.name | slug %}{% endfor %}
</p>

<h2 class="mb-0">Posts</h2>

{% for post in client.posts %}

---

#### {{post.title}} - {{pagination.pageNumber}}

<time class="item-date small d-block text-muted mb-2"
  datetime="{{ post.date_created | safe }}">{{ post.date_created | safe }}</time>
{% FriendPairedPostTag client.id, post.id %}
<i class="fas fa-heart mt-1"></i><p>{{post.text}}</p>
{% endFriendPairedPostTag %}
{% endfor %}