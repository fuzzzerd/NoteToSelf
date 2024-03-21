import { serverQueryContent } from '#content/server';

export default defineSitemapEventHandler(async (e) => {
  const routes = [];
  const posts = await serverQueryContent(e).find();

  routes.push({
    url: '/',
    changefreq: 'weekly',
    priority: 0.5
  });

  routes.push({
    url: '/blog',
    changefreq: 'weekly',
    priority: 0.75
  });

  posts.map((p) => {
    routes.push({
      loc: p._path,
      lastmod: p.lastMod ? p.lastMod : p.date
    });
  });

  return routes;
});
