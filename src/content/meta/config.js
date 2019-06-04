const base = {
  name: 'دانش رشد گیاهان',
  url: 'https://github.com/greglobinski/gatsby-starter-kit'
};

const config = {
  /* meta tags */
  siteTitle: `${base.name} - مقالاتی درباره گیاهان`,
  siteTitlePostfix: ` - ${base.name}`,
  siteDescription: `${
    base.name
  } is a series starters: Minimal, Equipped, Themed, Website, Blog.`,
  siteImage: 'preview.jpg',
  siteLanguage: 'en',

  /* site header */
  headerTitle: `${base.name}`,
  headerSubTitle: 'مقالاتی درباره گیاهان',

  /* url */
  siteUrl: base.url
  // pathPrefix: '',
};

module.exports = config;
