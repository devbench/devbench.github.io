---
title: Contact us
heading: Get in touch,<br>send us a message.
link: Contact us
class: contact
weight: 4
---

# Contact us
<form id="contactForm" action="/mail" method="get" accept-charset="utf-8">
  <label>Your name</label><input name="name" type="text" required="required">
  <label>Your email address</label><input name="email" type="email" required="required">
  <label>Your message</label><textarea name="message" rows="10" required="required"></textarea>
  <button id="sendMessage" class="button-primary" type="submit"><i id="messageStatus" class="fa fa-envelope-o"></i>&nbsp;<span id="messageButtonText">Send</span></button>
</form>
