$('#o_wblog_posts_loop_container').infiniteScroll({
  // options
  path: getPenPath,
  append: '#o_wblog_posts_loop',
  status: '.page-load-status',
  hideNav: '.pagination',
  history: false,
});

function getPenPath() {
    const nextPenSlugs = [
      '/blog/page/2',
    ];

    let slug = nextPenSlugs[ this.loadCount ];
    if ( slug ) return `${slug}`;
}

