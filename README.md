Testing Framework from scratch

** Testing frameworks requirements

Must be a node-based CLI framework
Must be able to ttest browser based JS apps
Must require very little set up
Must be able to test a whole application, not just one little widget
CLI must have 'watch mode' sp when we dont have to keep restarting it over and over
CLI must automatically find and run alll files in our projects that have a name of 'test.js'


** IMPLEMENTATION PLAN

1. File Collection
	- Find all files ending in '*.test.js' recursively trough a folder
	- Store a reference to each file we find
	-After getting a full list of test files, execute them one by one
2. Test invirorment set up
3. Test file execution
4. Report results
===========
RUNNING BROWSER BASED JS: jsdom
-we will only use the property JSDOM that will be used to create a new fake browser that will be load up. 
-will use fromFile()

===========
Timeline of JSDOM : 
>we tell JSDOM to load up index.html
>JSDOM will fetches the HTML file and parses it. 'fromFile promises solved
>our tests run
>form is submitted
