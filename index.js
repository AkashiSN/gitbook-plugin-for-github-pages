function renderLink(content,user_name,repo_name,file_path){
    if(~content.indexOf('[[') && ~content.indexOf(']]')){
        let result = "";
        while (~content.indexOf('[[')) {
            let idx1 = content.indexOf('[[');
            let idx2 = content.indexOf(']]');
            let file_name = content.slice(idx1 + 2, idx2);
            let file = file_path + "/" + file_name;
            let link = `<a href="https://github.com/${user_name}/${repo_name}/blob/master/${file}" target="_blank">${file_name}</a>`;
            result += content.slice(0, idx1) + link;
            content = content.substr(idx2 + 2);
            if (content.indexOf('[[')) {
                result += content;
                break;
            }
        }
        return result;
    }
    return content;
}

module.exports = {
  hooks: {
    "page:before": function(page) {
      let user_name = require('git-user-name')();
      let repo_name = require('git-repo-name').sync();
      let path = require('path');

      let file_path = path.dirname(page.path);
      page.content = renderLink(page.content,user_name,repo_name,file_path);

      return page;
    }
  }
};