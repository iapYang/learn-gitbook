const gh = require('gh-pages');

gh.publish('_book', () => {
    console.log('upload successfully');
});