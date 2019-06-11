# First Year University Project
Tasked in my first year of university, receiving a grade of 74%

This was my first delve into web development at university, I was tasked to create a responsive and accessible portfolio style website. <br/><br/>
Below is my report for the project that should explain my thought process and design choices during development

<hr/>

## State 3 things that have inspired you when creating your website. These could include guest speakers, other websites, artists, developers etc.

My three main inspiration were Airbnb, the MOOCS (as well as all the lectures/labs) and Amazon. Airbnb inspired me to make the scrolling div on the homepage. I noticed that Airbnb has scrollable selection on the home page of their site. This is good for three main reasons, one being it allows users to quickly gain access to content soon as they enter the site without any navigation needed. This is great as from the code review lab lesson I remember one of my lab group partners mentioning that humans have 3 second attention span before they start moving to different things. This avoids that problem as it allows users to get access to content immediately or at the very least allow them to know that the type of content they came looking for can be found on the site. The second reason is that it allows a large amount of content be condensed on a smaller screen, allowing the user to scroll through large amount content to get to the one's they want immediately from the get go is a great way to allow the user to have a good experience on the site. If the user had to navigate through many pages only to arrive at the conclusion that the site doesn't have what they're looking for it will leave them feeling like they had a bad experience and they may not return/recommend the site to their friends. The scrolling div allows them to quickly decide if a website has what they are looking for without wasting their time, so even if the site didn't have what they were looking for since they had a better experience they may recommend the site to their friends who are looking for what the site has. A third reason is that it is aesthetically pleasing on the eye and thus makes the design of the site stand out from the rest. Making the site more memorable and thus making it more likely the user will return to the site. 
The MOOCS, labs and lectures also inspired me as this was the first time I had ever used html to build a website. I wasn't aware of user accessibility/experience and the importance of having these in mind when building a site. Learning about this helped me better consider how a site would feel to users (disability or not) and ways I could go about assuring that they have the best possible time using the site. I will discuss more on what I did to make my site more accessible/usable later in this report. 
The final inspiration for me was Amazon. As this was an online portfolio I knew I would be show casing my work. Amazon pages also show case things, products. On the side of their pages they have a photo gallery of the product with information about said product underneath. I used this concept to create my own gallery showcasing my projects and information on these projects underneath the gallery. I think this really helps sell my past example as users can see images of all the angles on a project while reading up on what I have to say about it. This is helpful on a portfolio as the whole point of a portfolio is to sell yourself.

## State 3 ways in which your site is accessible.

One way I made my site accessible was by adding alternate texts. Alternate texts are when if an image is unable to load then an alternate text will be given in its place. This allows users who can't load images for whatever reason have a way to still know what the image was about. It also is handy for users with reading aids as it will read out the alt text when the reader arrives at an image so the user with the reading aid (usually with visual impairments) can still know what the image is about too. This makes the site more inclusive as even people with visual impairment or bad internet connection can still enjoy the site's content 
Another way my site is accessible is by using heading tags in correct order i.e. h2 following a h1. This is accessible as users using a screen reading device may wonder if they missed content if a h3 is followed after a h1, so to avoid any confusion my headings are in incremental order. This should avoid users feeling like they missed content and help give a better structure to the site as the headings are hierarchical. 
Another way my site is accessible is by having anchor tags with descriptive names. Having anchor tags with names describing where they lead too allows user's with screen readers know exactly where the link will lead too without clicking on it. This allows them to be 100% sure where links lead too without clicking so they only need to consider the anchor tags when they need too thus giving them a better experience in the process. If anchor tags have less descriptive names such as 'click here' screen reader users won't know where it leads and would be forced to click on it to find out. This extra step is unnecessary and lowers the users experience with the site making them less likely to come back. Avoiding this helps the user's satisfaction.

## State 3 ways in which you have considered usability in your site.

One way I've considered usability was the scrollable divs I've discussed before. Having quick and easy access to content without heavy navigation around the site gives users a better experience. Statistics show people have short attention spans and so if a site takes too long for a user to get what they want they made switch to a different site. The scrollable divs avoid this problem as it allows users quick access to content from the home page without the need for heavy navigation. 
Another usability consideration I added was a scrolling nav bar. Sites with huge content scrolling downwards may be good in some cases as it gives users a lot of content to use however having to always scroll all the way up to navigate would be a chore and so having the nav bar scroll with the user allows them to navigate easier even if the user had scrolled all the way to the bottom the nav bar would always be at the top. This stops the user having to scroll all the way up just to change the page. I've also made sure the nav no longer scrolls on smaller screens as with a smaller screen size, a scrolling nav bar could be cumbersome and take up too much space so having the nav bar no longer move will help the user see as much content on the screen as possible. I also made sure the nav bar collapsed into a button on really small screen as on tiny screens a single line nav bar would be hard to press so having a collapsible one that slides down lets the user use the nav when they need to and let the buttons be big enough to press. This also helps with the user experience as the user can feel comfortably knowing the site adapts to the screen size, so if the user wanted to switch to their mobiles or tablets they can be comfortable knowing the site will still work and be practical, thus improving their experience and increasing their chances of coming back. 
Another usability consideration I added was breadcrumbs. Breadcrumbs are a way for the site to let the user know where they are and how they got to that point. It shows the user all the pages they traversed to get to that point allowing them to get back to any particular page they had visited without having to go back to the beginning and remembering what pages they clicked to get back. This allows easy navigation around the site as well as a clear indicator of where the user is and where they could go. This increases usability as navigation is an unavoidable thing on websites so making it simple and clean to use helps the user feel much more comfortable.

## State 3 things you had to learn/find out by yourself when creating your site, and describe how you did that (i.e. what searches you did, any new tools/techniques you learned, any changes/adaptations you made to a particular resource to make it work with your site).

One thing I had to learn was jQuery and adding and subtracting classes. This was needed for many aspects, but the first instance was the sticky nav bar. I needed a way to have my class for the nav bar sticking to be added to the html file when the screen size was a certain length. I found my answer on stack overflow where someone was having a similar problem, using this code to help I modified it so that the class was only added when the screen size was a certain length and taken away otherwise. This was extremely valuable as it helped me on other aspects of the site too. Adding and subtracting classes allowed me to create a collapsible nav bar for mobile screens as I could add and take away different classes depending on if the button was clicked or not. So, I could show and hide the nav bar when the menu button was clicked. I was also able to create tabs for my contact page as I was able to show and hide different content depending on the id clicked by adding and removing classes. Using the html, I found on inspirational pixels as a basis I was able to add in my own CSS to design the tabs how I wanted it to look and have the tabs more in line with my site's aesthetic. Since I learned about adding and removing class, I was able to make my own JavaScript code to have the tabs show and hide themselves depending on which tab was clicked. This allowed me to completely make the html from inspirational pixels my own as I was able to change most of the code to fit more in line with my site. 
Another thing I learnt was CSS animation transitions. I found a piece of code on stack overflow which showed that my original idea of having display none and display block on the collapsible nav bar wouldn't work as there are no values for the browser to interpolate as an animation, instead I learned that having a height of zero with overflow hidden and having the height increase when the button is pressed gives the browser values it can manipulate to animate. Thus, it can slow down the animation of the height increasing and thus giving a slide down effect. I changed the animation style to ease in and ease out, this gives the animation slow starting and slow ending giving it a nice effect. Another CSS animation I learned was also from stack overflow. I needed a way for when my images were hovered over a description of the image would fade in. I found a piece of code on stack overflow that did just that, using this I edited the code so that it only happens on certain screen sizes, I also made changes to the effect making it ease in out as it gives a nice slow start, slow end fade. 
A third thing I learned was how to use bootstrap. Bootstrap is a way to modernise your site through pre-made CSS and help you create responsive, cool looking websites easily. I used their breadcrumbs code to create a bread crumb for my site while editing the CSS to have said breadcrumbs look more aesthetic with the site's style. Another aspect I used was responsive layout. Bootstrap has a way of making the site responsive by having a grid system. Each aspect will take up certain grind space depending on the screen size. This allowed me to have items take more space on larger screens and less space on smaller screens. This was extremely helpful as it allowed me to easily create responsive layout making the site look clean and crisp. Another help from bootstrap I got was a slide show. On larger screens I had a system where the user would click an image and the side image would change to what they clicked. This system wouldn't work on smaller screens as there's less space. Bootstrap has a slide show code in place where an automatic slide show will cycle through all the images. I found the code on bootstrapbay and edited it to include my own images and have it only happened on certain screen sizes.

## What aspect(s) of your work do you think worked well and why?

I believe that the responsiveness of my site works really well. Bootstrap allows me to have content shift as screen size get smaller, this allows me to have more content on a single row on bigger screens and less on a row on smaller screens. I also made it so certain code are hidden based on the size of the screen. This allows me to show and hide content that may not work on certain screen sizes. For example, on the home page I have a scrollable div, this works on larger screens as it allows more content on a page at once and lets the user sift through it as they please, however, on smaller screens having to keep scrolling would be clunky and annoying. I was able to hide the scrollable divs on smaller screens and have a single button that takes the user to the portfolio page. This system allows me to have content I want my site to have but still gives me the freedom to change things on smaller screen sizes should I want. This allows me to give more consideration to usability and in the long run create a better looking and feeling site for users. 
Another aspect I think works well is the site's aesthetic. The black, red and white colours work well with each other as well as being very practical. White on black is easy to read while the red contrast helps pop clickable links out making the user 100% sure the link is clickable. The slight borders around box content is subtle but pleasing at least more than sharp edges in my opinion. The changes between screen sizes work well and is necessary as some things that work on large screens won't work on smaller ones.

## What aspect(s) of your work could be improved, and how might you do things differently another time?

An aspect I would improve is animation on my site. Animation on this site is few and far between. It has a sliding nav bar, an automatic slide show and phasing in descriptions and that it. In future projects I will need to think of more animation techniques I could add to the site to really help it stand out from the others. Animation help give users visual feedback about things happening on the page (e.g. an item is being loaded, or the button the user clicked is doing something etc) This not only helps the user have a better experience as it gives the site a visual flair but it also helps the user out as feedback from the site to the user that there is interactivity happening. As I've stated before, users have a short attention spans, without any visual feedback within 3 seconds the user may feel like something is wrong and click off. By having animations, it lets the user know that something is happening and allows the user to feel more comfortable without worrying something is broken (e.g. a loading animation when an image is being loaded so the user isn't worried that the image link may be broken) 
I would also improve on my CSS. Looking back, I feel like my CSS may have some redundancies as well as some code overlapping. In future I would need to fully understand what each piece of code does and be 100% sure if the piece of code is needed or not. I will also need to have code that overlap be put together so I would use less lines making the code more optimised. I did try to bunch code that overlapped together such as when an anchor tag is hovered, the text turns red indicating to the user he can click on it. I would need to get better at this in future projects. Poorly optimised code can slow a website down and as I've stated before users have a 3 second attention span, if the site is slow due to poor code the user may click off and thus I should better optimise my code for future projects. 
I should also plan my design before I begin coding. I did so with my home page, making a wire frame for it on multiple sizes. This was extremely helpful as it allowed me to think of all the different ways I could make my site more usable depending on the screen size. However, I only did this for my homepage and for other pages I designed as I coded. This was considerably harder as I would constantly going back and forth changing code to fix for either usability ir accessibility on different screen sizes. In future projects I should wire frame the entire website as well as mock up the design in a photo editor to make my life easier as well as give me the ability to consider the user experience more thoroughly.

## What resources were used when creating your work? You should list here any sources of information, libraries, plug-ins or other code that you used to create your site. You should also reference any code you've used by inserting comments at the start of the scripts.
The main resources I used was W3 and the MOOCs. W3 was my go to site for looking up information on html, CSS and some JavaScript. There I learnt the syntax for most things such as “: hover”. I also used the MOOCs to help me out as there were many code examples I could use to help me on the site, such as bootstrap responsive grid code. I also used the w3 validators to see if my html, CSS and JavaScript code were valid and when not used their suggestions to fix my code until it was.

### Code References:

[1] A. Solovev and Y. Thakur, 'Make a nav bar stick to the top when scrolling with css' (), 2015. [Source code]. http://stackoverflow.com/questions/28452235/make-a-nav-bar-stick-to-the-top-when-scrolling-with-css.

[2] T. Khan and banzomaikaka, 'How to show text on image when hovering?' (), 2013. [Source code]. http://stackoverflow.com/questions/14263594/how-to-show-text-on-image-when-hovering.

[3] Duopixel, 'CSS3 Animation and Display None' (), 2012. [Source code]. http://stackoverflow.com/questions/13037637/css3-animation-and-display-none.

[4] S. Kay, 'Creating Tabs with HTML, CSS and jQuery' (), 2014. [Source code]. http://inspirationalpixels.com/tutorials/creating-tabs-with-html-css-and-jquery.

[5] C. Gimmer, 'Bootstrap 3 Carousel Tutorial' (), 2014. [Source code]. https://bootstrapbay.com/blog/bootstrap-3-carousel-tutorial/.

### Online Resources References:

[1] http://www.w3schools.com/, 'jQuery Selectors', unknown. [Online]. Available: http://www.w3schools.com/jquery/jquery_ref_selectors.asp. 

[2] http://www.w3schools.com/, 'jQuery Event Methods', unknown. [Online]. Available: http://www.w3schools.com/jquery/jquery_ref_events.asp

[3] http://www.w3schools.com/, 'jQuery HTML / CSS Methods', unknown. [Online]. Available: http://www.w3schools.com/jquery/jquery_ref_html.asp. 

[4] http://www.w3schools.com/, 'CSS Reference', unknown. [Online]. Available: http://www.w3schools.com/cssref/default.asp. 

[5] http://www.w3schools.com/, 'CSS Selector Reference', unknown. [Online]. Available: http://www.w3schools.com/cssref/css_selectors.asp

[6] http://www.w3schools.com/, 'HTML Element Reference', unknown. [Online]. Available: http://www.w3schools.com/tags/default.asp 

[7] http://www.w3schools.com/, 'HTML Attribute Reference', unknown. [Online]. Available: http://www.w3schools.com/tags/ref_attributes.asp. 

