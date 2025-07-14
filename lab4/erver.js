const fs = require('fs');
const http =require('http');
const url = require('url')
const nunjucks = require('nunjucks');
const data = fs.readFileSync(`${__dirname}/data.json`, 'utf-8');
const posts = JSON.parse(data); 
const tempalte = fs.readFileSync('temp.html','utf-8');
const tempalte_posts = fs.readFileSync('post.html','utf-8');
const cardTemplate = fs.readFileSync('card.html', 'utf-8');


const server = http.createServer((req, res) => {
  const { query, pathname } = url.parse(req.url, true);

  if (pathname === '/' || pathname === '/home') {
    const querystring = (query.search)
    res.writeHead(200, { 'Content-Type': 'text/html' });

    let postsx= posts.map(({ body, ...rest }) => rest);
    if (querystring){
        postsx = posts.filter(p => p.title.toLowerCase().includes(querystring.toLowerCase())||p.body.toLowerCase().includes(querystring.toLowerCase()) )
    }

    const cardsHtml = postsx.map(p => nunjucks.renderString(cardTemplate, p)).join('\n');
    const html = nunjucks.renderString(tempalte,{content:cardsHtml});
    res.end(html);

  } else if (pathname === '/post') {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    const id = parseInt(query.id);
    const post = posts.find(p => p.id === id);

    if (!post) {
      res.statusCode = 404;
      return res.end('<h1>Post Not Found</h1>');
    }

    const out = nunjucks.renderString(tempalte_posts, post);
    res.end(out);

  } else if (pathname === '/api') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(posts)); // works fine
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>Page Not Found — Error 404</h1>');
  }
});

server.listen(8000, '127.0.0.1', () => {
  console.log("Listening to requests on port 8000");
});
