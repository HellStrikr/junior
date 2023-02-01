require("fs").renameSync("docs/index.html", "docs/404.html");
require("fs").copyFileSync("scripts/CNAME", "docs/CNAME");
