const jsYaml= require('js-yaml');
const navPlugin=require('@11ty/eleventy-navigation');
module.exports=function(eleventyConfig){
    eleventyConfig.addLayoutAlias('base','pageLayout/base');
    eleventyConfig.addLayoutAlias('page','pageLayout/page');
    eleventyConfig.addLayoutAlias('page-hero','pageLayout/page-hero');
    eleventyConfig.addLayoutAlias('page-blogs','pageLayout/page-blogs');
    eleventyConfig.addPassthroughCopy('./templates/styles');
    eleventyConfig.addPassthroughCopy('./templates/images');
    eleventyConfig.addDataExtension('yaml',contents=>jsYaml.load(contents))
    eleventyConfig.addShortcode('clientFriendTag',function(name){
        return `<a class="badge badge-secondary mr-2" href="/clients/${name}">${name}</a>`
    });
    eleventyConfig.addPairedShortcode('FriendPairedPostTag',function(data,clientId,postId){
        return `<a class="btn btn-sm btn-outline" href="/clients/${clientId}/posts/${postId}"> ${data}</a>`
    });
    eleventyConfig.addFilter('simpleDate',function(data){
        return new Date(data).toDateString();
        //return dt.getFullYear()+'-'+(+(dt.getMonth()+1))+'-'+dt.getDate();
    });
    eleventyConfig.addFilter('limit',(collection,size)=>(size<=0?collection.slice(size):collection.slice(0,size)));
    eleventyConfig.addPlugin(navPlugin,{});
    return {
        markdownTemplateEngine: 'njk',
        dir: {
            input: "templates",
            output: "dist",
            layouts: "_layouts",
            includes: "_includes"
        }
    }
}