var page = require('webpage').create();

page.paperSize = {width: 700, height: 1060, margin: 5};

page.open('a4_page.html', function() {
    page.render('output_a4_page.pdf');
    phantom.exit();
});