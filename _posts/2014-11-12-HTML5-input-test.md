---
title: HTML5 Input Test
layout: post
time: null
author: Jodie Doubleday
twitter: jodiedoubleday
category: UX
avatar: "/assets/images/jodie-retina.jpg"
comments: true
published: true
---

A simple test for all HTML5 input types. Use this page as testing area across devices.

If you think any input types are missing or m missing some key bits on information, please <a href="http://twitter.com/?status=@{{ page.twitter }}" title="{{ page.author }}'s' Twitter">tweet me</a>

<form role="form">
    <div class="form-group">
      <label for="email">email</label>
      <input type="email" id="email" class="form-control" placeholder="Email">
    </div>
    <div class="form-group">
      <label for="password">password (not advised)</label>
      <input type="password" class="form-control" id="password" placeholder="Password">
    </div>
    <div class="form-group">
      <label for="url">url</label>
      <input type="url" id="url" class="form-control" placeholder="url">
    </div>
    <div class="form-group">
      <label for="tel">tel</label>
      <input type="tel" class="form-control" id="tel" placeholder="tel">
    </div> 
    <div class="form-group">
      <label for="datetime">datetime (depreciated)</label>
      <input type="datetime" id="datetime" class="form-control" placeholder="datetime">
    </div>
    <div class="form-group">
      <label for="date">date</label>
      <input type="date" class="form-control" id="date" placeholder="date">
    </div> 
    <div class="form-group">
      <label for="month">month</label>
      <input type="month" id="month" class="form-control" placeholder="month">
    </div>
    <div class="form-group">
      <label for="week">week</label>
      <input type="week" class="form-control" id="week" placeholder="week">
    </div> 
    <div class="form-group">
      <label for="time">time</label>
      <input type="time" id="time" class="form-control" placeholder="time">
    </div>
    <div class="form-group">
      <label for="datetime-local">datetime - Local</label>
      <input type="datetime-local" class="form-control" id="datetime-local" placeholder="datetime-local">
    </div>
    <div class="form-group">
      <label for="number">number</label>
      <input type="number" class="form-control" id="number" placeholder="number">
    </div>
    <div class="form-group">
      <label for="range">range</label>
      <input type="range" class="form-control" id="range" placeholder="range">
    </div> 
    <div class="form-group">
      <label for="color">color</label>
      <input type="color" class="form-control" id="color" placeholder="color">
    </div>
  </form>