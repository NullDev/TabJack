# TabJack
Implementation of an interesting Tab-Jacking / Tab-Nabbing phishing attack

Blog post by <a href="https://twitter.com/aza">@aza</a> (archived version, post was deleted):

https://web.archive.org/web/20191121174508/http://www.azarask.in/blog/post/a-new-type-of-phishing-attack/

Live Version:

https://nulldev.github.io/TabJack/

## What happens:

1. You open up a normal looking website.
2. The script detects when the tab has lost focus and hasn’t been interacted with for a while.
3. Replace all content with a real looking phishing site.
4. As the victim scans their many open tabs, the favicon and title will lead them to think they left a Gmail tab open. 
5. When they click back to the fake Gmail tab, they’ll see the standard Gmail login page, assume they’ve been logged out, and provide their credentials to log in. 
6. After the victim entered all details, redirect them to Gmail Because they were never logged out. It will appears as if the login was successful.

**Disclaimer:** This is solely for education purpose only. It is just a <a href="https://en.wikipedia.org/wiki/Proof_of_concept">PoC (= Proof of Concept)</a>.
