# Repository metadata on GitHub Pages

Common repository information, such as the project name and description, is available to Jekyll sites hosted on GitHub Pages.

## Available repository metadata

The following sample information is exposed to Jekyll templates in the site.github namespace:
~~~ js
{
    "versions": {
        "jekyll": "1.5.1",
        "kramdown": "1.3.1",
        "liquid": "2.5.5",
        "maruku": "0.7.0",
        "rdiscount": "2.1.7",
        "redcarpet": "2.3.0",
        "RedCloth": "4.2.9",
        "jemoji": "0.1.0",
        "jekyll-mentions": "0.0.6",
        "jekyll-redirect-from": "0.3.1",
        "jekyll-sitemap": "0.2.0",
        "github-pages": "18",
        "ruby": "2.1.1"
    },
    "hostname": "github.com",
    "pages_hostname": "github.io",
    "api_url": "https://api.github.com",
    "environment": "dotcom",
    "public_repositories": [ Repository Objects ],
    "organization_members": [ User Objects ],
    "build_revision": "cbd866ebf142088896cbe71422b949de7f864bce",
    "project_title": "metadata-example",
    "project_tagline": "A GitHub Pages site to showcase repository metadata",
    "owner_name": "github",
    "owner_url": "https://github.com/github",
    "owner_gravatar_url": "https://github.com/github.png",
    "repository_url": "https://github.com/github/metadata-example",
    "repository_nwo": "github/metadata-example",
    "repository_name": "metadata-example",
    "zip_url": "https://github.com/github/metadata-example/zipball/gh-pages",
    "tar_url": "https://github.com/github/metadata-example/tarball/gh-pages",
    "clone_url": "https://github.com/github/metadata-example.git",
    "releases_url": "https://github.com/github/metadata-example/releases",
    "issues_url": "https://github.com/github/metadata-example/issues",
    "wiki_url": "https://github.com/github/metadata-example/wiki",
    "language": null,
    "is_user_page": false,
    "is_project_page": true,
    "show_downloads": true,
    "url": "http://username.github.io/metadata-example", // (or the CNAME)
    "contributors": [ User Objects ]
}
~~~

For more information on the contents of the repository and user objects, see the [List organization repositories](https://developer.github.com/v3/repos/#list-organization-repositories), [Members list](https://developer.github.com/v3/orgs/members/#members-list), and [List contributors](https://developer.github.com/v3/repos/#list-contributors) API endpoints.