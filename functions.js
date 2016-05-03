/** 
	FEATURED POSTS 1
**/
function featuredposts1(e) {
    eval(document.write.START);
    j = showRandomImg ? Math.floor((imgr.length + 1) * Math.random()) : 0, img = new Array, document.write('<div class="featured-recent featured-recent-1">'), maxpost = numposts2 <= e.feed.entry.length ? numposts2 : e.feed.entry.length;
    for (var t = 0; maxpost > t; t++) {
        var r, n, i = e.feed.entry[t],
            l = i.title.$t;
        if (t == e.feed.entry.length) break;
        for (var f = 0; f < i.link.length; f++)
            if ("alternate" == i.link[f].rel) {
                n = i.link[f].href;
                break
            }
        for (var f = 0; f < i.link.length; f++)
            if ("replies" == i.link[f].rel && "text/html" == i.link[f].type) {
                r = i.link[f].title.split("")[0];
                break
            }
        if ("content" in i) var m = i.content.$t;
        else if ("summary" in i) var m = i.summary.$t;
        else var m = "";
        postdate = i.published.$t, j > imgr.length - 1 && (j = 0), img[t] = imgr[j], s = m, a = s.indexOf("<img"), b = s.indexOf('src="', a), c = s.indexOf('"', b + 5), d = s.substr(b + 5, c - b - 5), -1 != a && -1 != b && -1 != c && "" != d && (img[t] = d);
        for (var o = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], g = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], p = (postdate.split("-")[2].substring(0, 2), postdate.split("-")[1]), h = (postdate.split("-")[0], 0); h < o.length; h++)
            if (parseInt(p) == o[h]) {
                p = g[h];
                break
            }
        r += " comments";
        var u = '<div class="featured-recent-img fau-img"><a href="' + n + '"><img alt="' + l + '" src="' + img[t].replace(/\/s[0-9]+(\-c)?\//, "/w360-h270-c/") + '"/></a></div><h3 class="featured-recent-title"><a href="' + n + '">' + l + "</a></h3>";
        document.write(u), j++
    }
    document.write(" </div>")
    eval(document.write.END);
}
