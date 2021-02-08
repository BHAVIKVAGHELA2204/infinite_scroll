# -*- coding: utf-8 -*-

from odoo.addons.website_blog.controllers.main import WebsiteBlog


class infinite_scrolling(WebsiteBlog):
    _blog_post_per_page = 6
