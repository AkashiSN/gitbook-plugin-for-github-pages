# gitbook-plugin-github-link

Change the link of the binary file etc. to that of GitHub.

### Installation

Adds the plugin to your `book.json`, then run `gitbook install` if you are building your book locally.

```json
{
    "plugins": ["github-link"]
}
```

### Usage

By enclosing it with `[[` and `]]``, it recognizes the link.

```
[[hoge.exe]]
```

Generate the following html:

```html
<a href="https://github.com/{user_name}/{repo_name}/blob/master/{path_to_hoge.exe}" target="_blank">hoge.exe</a>
```
