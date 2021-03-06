---
title: Using Wistia With Drupal
layout: post
description: See how to embed Wistia video using Drupal
category: Integrations
---

{% post_image hashed_id: '97d57d4890140c3e6f529e7e58fe7b7d3610d9b5', width: 200, class: 'integration_logo float_left' %}

Drupal is a very popular CMS among the business and serious blogger community.
There are some good resources floating around on using Wistia & Drupal, here is a 
solid "best of".

{{ "The guides below are for Drupal 6. Drupal 7 support is unconfirmed at this time." | note }}

## Using the Media: Wistia module

The first option is using the [Media: Wistia Module](http://drupal.org/project/media_wistia),
which was developed by [Evan Donavan](http://drupal.org/user/168664) and 
[Travis Carden](http://drupal.org/user/236758).

The Media: Wistia module allows for embedding videos in CCK fields. It also enables
[playlist]({{ '/playlists' | post_url }}) embedding with Drupal.

{% post_image hashed_id: 'bc75e39badfb3dff6380bdfe64e74299c7085b8e', class: 'post_image center' %}

### To Use

1. Add a "3rd Party Video" widget to your post
2. On the Field Settings Screen, enable and configure the *Wistia* provider.
3. Enter the Wistia URL or full embed code to the widget!

{% post_image hashed_id: 'be7c3ea994cb6404bf2262cfd60996f4b3f023e6', class: 'post_image center' %}

## Using the Video Filter Module

[Video Filter](http://drupal.org/project/video_filter) is a Drupal media 
module that has extended Wistia support. Once installed and enabled on a given 
input format, you can embed Wistia videos in posts using the syntax:

<code class="full_width">[video:http://subdomain.wistia.com/medias/hashed_id ratio:640x360 width: 640]</code>

The drawback to using `video_filter` is you must include the `ratio attribute` 
in the token, which can require additional work to determine.

{% post_image hashed_id: '1f11e08d675267808209beb3648417255004d677', class: 'post_image center' %}

## Drupal and Video SEO

The awesome folks at [s1L.org](http://s1l.org) have put together a 
[guide to using Drupal and Wistia for SEO](http://s1l.org/guide-rich-video-snippets-drupal-sites-using-wistia)
that is a great read!
