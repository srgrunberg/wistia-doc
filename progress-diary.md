
**Start Date:** July 2 2012
<br/>
**Goal:** Create a Jekyll-based static site for the Wistia Doc to live on. 
<br/>
*For customers*: will provide a more seamless experience between multiple Wistia web presence(s). 
<br/>
*For internal Wistians*: will make doc easier to update, both style and content-wise.

## july 2 ##

* Established the Jekyll base for future Jekyll projects.
* Used a Dokuwiki-to-markdown converter to get text ready for the big time
* Started basic styling

## july 3 ##

* Experimented with several Jekyll forks to find good support for HAML.  Still no good ones.
* More styling

## july 5 ##

* Installed Foreman to handle Jekyll server and Compass updates.  Still need to add HAML updates.  Foreman is SICK (adding 'foreman start' to rake task 'jekyll preview').
* (-) TODO: get a permalink icon for the left of the H2 (perhaps using a :before CSS3) emulating Campaign Monitor ( http://www.campaignmonitor.com/api/account/ )
* (X) TODO: get Joe to look at it and start thinking about design / platform for this / resource center

## july 7 ##

* got the highlight of current section working with One Page Nav jQuery plug-in ( http://trevordavis.net/blog/jquery-one-page-navigation-plugin/ ). Similar to what I put together in the Data API page but prob better :)
* TODO: add search in the upper right of the page
* inspiration: http://popcornjs.org/popcorn-docs/index.html
* need to figure out YAML -- think it's worked out.
* added the 'footer' section - currently used for 'developers' vs 'non-developers' but could also be for different difficulty ratings.

## july 13 ##

* been working on the design and some javascript to make the layout more consistent and easy to do.  Still needs some work.
* majority of work has been converting the content (moving the images over, updating embeds, etc.)
* big project next is implementation of search - seems like plugin may be the answer
* search resources:
  * http://pradeepnayak.in/technology/2012/06/20/search-for-your-jekyll-site/
  * http://developmentseed.org/blog/2011/09/09/jekyll-github-pages/

## july 14 ##

* added (back) a glossary, for simplifying the explainers in the doc pages...perhaps to move to 'asides' later?
* wrote the js to handle the title height positioning
* TODO: get the shadow around the video embeds right
* removed media stats page and heatmaps page, merged with analytics
* removed "for marketers" guide
* TODO: re-grab lots of images

## july 16 ##

* TODO: something be wrong with the js related to p tags - see 'private-analytics.html'
* TODO: emulate GitHub help with 'bootcamp', 'breadcrumbs'
* TODO: Github also has sweet 'drawers' - use the "help bubble" for these!!!!

## july 17 ##

* drawer ideas: 'don't have a video?', 'what is embedding?', 'what are heatmaps?'
* holy crap, finally finished first pass of the content
* TODO: run through images and start pulling new ones
* TODO: get on the main page

## july 25 ##

* major break for Customer Champion interviews. need to devote more time to this projie to get it out the door!
* main page is looking much better, still not there but close
* Tentatively chosen Sphinx as the search - based on a Brendan recommendation, using client-side queries to a Sphinx+Sinatra app and then assembling the results on the client-side will work pretty well
  * basically, the downsides of Sphinx (not being able to extend it, not being able to query files like word docs, etc.) don't apply here.
  * I'd like long-term to be able to use Sphinx with AJAX for auto-complete, so that still needs to be researched
    * UPDATE: yep, we can: http://www.ivinco.com/blog/sphinx-in-action-autocomplete/
    * http://stackoverflow.com/questions/9772114/autocomplete-search-with-sphinx
* More search resources:
  * http://sphinxsearch.com/docs/2.0.4/
  * http://www.slideshare.net/hayesdavis/quick-introduction-to-sphinx-and-thinking-sphinx
  * https://devcenter.heroku.com/articles/flying_sphinx

## july 26 ##

* installing sphinx locally 
  - 'brew install sphinx'.  Since we use mysql for everything else, I plan to continue this (use mysql w Sphinx). ( http://chopmode.wordpress.com/2010/06/20/thinking-sphinx-with-postgres-support-on-osx/ )
  - now working on translating text documents into mysql db

## july 27 ##

* lots of text parsing, to build a mysql table of the posts
* OMG are we using elasticsearch now?
  - elasticsearch -f -D es.config=/usr/local/Cellar/elasticsearch/0.18.3/config/elasticsearch.yml
* the challenge right now is to determine how to 'index' the site content (and when), and then which tool to use.
  - for simplicity, I'm researching a method that would index content on site build (aka could be set to exclude files, would index the built HTML, etc.) this would be based on the IndexTank implementation: https://github.com/PascalW/jekyll_indextank/blob/master/indexer.rb put possibly translated for ElasticSearch etc.
  - the trouble with this approach is it does not use Mysql, which would rule out Sphinx
  - using Tire and Elasticsearch seems to be done before: http://jaysoo.ca/2012/02/02/added-search-to-website/

## july 31 ##

* got search queries working using Elasticsearch and Tire:
  - http://karmi.github.com/tire/
  - https://github.com/karmi/tire/
* idea from all this came from Jay Soo site http://jaysoo.ca/2012/02/02/added-search-to-website/
* Next project is setting up search app (Sinatra?)
  - will searches be passed in URL (yes) and if so, how?
* working around haml issues. haml haml haml.
* had to revert to old jekyll (not henrik's haml-sickness) because of issues.  May try implementing henrik's haml stuff in current jekyll. This means still running old rake task to convert haml to html, etc.
* now on to Sinatra, which is pretty sick

## aug 1 ##

* worked for a while on getting the Sinatra app to return a HAML page, should I iframe, should I generate layouts on the app side, etc.
* that was dumb. Now going to have Sinatra app return JSON & JSONP, which will be interpreted on the doc side by js
* tried to add in prism.js quickly ( http://prismjs.com/ ) but failed.  Will revisit.
* added search boxes across the doc. attempting to style it Joe-style :)
* added in the generate_categories plugin, which needs some work/customization.  Will be using the category pages as the breadcrumbs.
* speaking of categories, might come back to tackle something like this in the future: http://www.brousalis.com/blog/2012/07/08/jekyll-category-list-plugin/

## aug 3 ##
* Added compass ellipsis to the title to make sure it stays clean. Damn compass is good.
* Built in breadcrumbs & category pages.  Starting to look slick.
* customized the categories plugin, which used to have ugly URL (base/categories/category_name/index.html) and now has pretty URL (base/categories/category_name.html)
* Spent a lot of time getting the breadcrumbs right - added a layout for non-post pages (utilities) and fought w Liquid to get it to show custom breadcrumbs even for those pages.  The key was to put everything on one line!!
* I know this is probably early, but also put in keyboard shortcuts to get to search ('/') and to enter search query.
* TODO: the footers for each post, and perhaps an overall footer?

## aug 6 ##
* got Max Kohl set up running the new doc locally. He handled it no problem, except for all the errors it threw at him.  Ended up having to remove the Indexer plugin - no way to get it running in production only at this point. Will need to find another way 'round that issue.

## aug 17 ##
* Fell a bit behind here, quick updates: 
  * updated SASS with mixins (some limited refactoring)
  * updated styling to better reflect doc per Joe's feedback
  * Max K went through and added descriptions to each post - gonna be awesome for search results.
  * Will be using the Bakery to serve images for the doc.  Pulling new images page-by-page (fun!) uploading them to Bakery, and then placing delivery URLs in as img src.  
  * Added javascript to re-size images dynamically based on class.

## Sep 7 ##
* Fell behind again - will have to check the commit logs to catch this document up.  Has been mostly image stuff.
* Brendan did some awesome work on the technical backbone of the doc - still need to comb through his updates more closely.
* Images have been pulled, moved to the bakery, and inserted.
* Data API page is next

## Sep 9 ##
* Data API is done - in one brilliant explosion of light, energy, and caffeine. Moved over, hundreds of lines of markup removed, it was great.
* Attacking 'Quickstart' Guide and Randor Pages next, TODO: get Joe on main page?
* UPDATE: no quickstart guide - it would be too long, and I don't think anyone would use it. Instead, Github style 'bootcamp' quickstart (group of pages up top).
* Got some work done on that tonight

## Sep 10 ##
* All images were moved to the bakery. Damn this took a long time. Removed 'images' directory.
* Started moving 'bootcamp' posts to the top of the index page (Github inspired)

## Sep 17 ##
* Updates on the footer for each post. Three groups: beginners, intermediates, and for developers.
* RANDOR! Updated the individual and group Randor pages.

## Sep 18
* Updated Player API page, move examples to the [demobin](http://wistia.github.com/demobin). Move 'advanced embeds' to just popover customization.
* Scrunched other stuff down to player API page - like HTML5-only embed codes.

## Sep 25
* Really struggling with cross-domain posting issue - how to work across ports, etc.
* Removed all non-relative urls...lots of work to do on this in the future.
* Created no_index category, which is removed from search index

## Oct 2
* Moving dev and prod environments to Sinatra (to solve cross-domain issue)

## Oct 3
* Started playing with Jekyll filters - added link generator plugin and filter, to make building proper links easier w/ relative urls
* Mega-Clean Up (@Brendan)
* Added global Ruby config file for basepath - so we can update easily

## Oct 5
* Added javascript and stylesheet url filters
* Updated category and search pages to use correct relative URLs
* Began #newbox testing (@Jason)
* Style updates to reflect @Joe recommendations
* [SIDENOTE] first pass at a wistia iframe embed tag for Jekyll

## Oct 9
* Upload API page is created (@Jason)
* Added font-awesome support - started out broken (UPDATE: was just a bad path, @brendan fixed later)
* Added font-awesome icons to export page, general nav, tips & notes

## Oct 17
* Just got back from vacation (woot)
* Simplify the layouts, so everything will point to BASE
* Move some stuff to includes (DRY)
* MEGA @brendan style updates

## Oct 18
* Style tweakin'
* Create post_img tag, use across doc
* post_intro style updates - finally looking great (@brendan)
* Add in Casey Henry Video SEO tips
* Created 404 Page
* Updates to post_callout boxes style

## Oct 19
* IE fixes for inline-block content (check with @schnur on what else can be done)
* move basepath from newdoc to doc
* LAUNCH :rocket:
* BUG FIX: remove index page JS for iOS devices
* **TODO**: post-commit hook not working post-launch...[fixed]

## Oct 20
* Added Agency Main Page - only one doc so far, so not pushed
* Added Agency FAQ page

## Oct 21
* Did some style re-tweaking to post navigation, to reflect Squarespace Style ( http://www.squarespace.com/press )
  * Perhaps we could do more pictures on the doc pages, Hero/Header style like the new Squarespace re-design?
  * Once we consolidate the doc into fewer pages, to make this easier :wink2:
* Also, started squashing the separate Integrations pages into one page...easier for folks to read over (so easy to get run over with too many pages!)
  * **Note to self**, don't ever remove live pages again until we have re-write rules in place (ie Wordpress page dummy)

## Oct 23
* Updates to Video SEO page ( to make Casey look good! )
* Installed embedly plugin, using it for pulling Wistia SEO embed codes over oEmbed
* Troubleshooting: if you add a new gem to the project, things get f'ed on the server (because it needs to bundle install...perhaps we need to make this part of the nuclear_update?).  To fix:
  ssh wistia-docbox
  screen -d -r
  [new tab] cd /opt/apps/wistia-doc
  rake nuclear_upate or bundle install, etc.

## Oct 25
* Added 'back to top' button for API pages
* Squarespace integration in the hizzy
