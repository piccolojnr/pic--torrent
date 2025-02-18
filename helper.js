const static_server = "https://torrindex.net";

function print_item(item) {
  return `
      <tr class="result-item">
      <td class="category">${print_category(item.category)}</td>
      <td class="name">${print_name(item.name, item.id)}</td>
      <td class="added">${print_date(item.added)}</td>
      <td class="size">${print_size(item.size)}</td>
      <td class="se">${item.seeders}</td>
      <td class="le">${item.leechers}</td>
      <td class="magnet">${print_magnet(item.info_hash, item.name)}</td>
      <td class="u">${print_username(item.username)}</td>
      </tr>
  `;
}

function print_name(name, id, lnk) {
  if (typeof lnk === "undefined") lnk = "details/";
  return '<a href="/' + lnk + id + '">' + name + "</a>";
}

function print_size(bytes, decimals = 2) {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
}
function print_date(date) {
  let d = new Date(date * 1000);
  return d.toLocaleDateString();
}
function print_username(user) {
  if (user == "Anonymous") return "Anonymous";
  let u;
  u = encodeURIComponent(user);
  return '<a href="/search?q=user:' + u + '">' + user + "</a>";
}
function print_magnet(ih, name) {
  return (
    '<a href="magnet:?xt=urn:btih:' +
    ih +
    "&dn=" +
    encodeURIComponent(name) +
    print_trackers() +
    '"><img src="' +
    static_server +
    '/images/icon-magnet.gif" /></a>'
  );
}
function print_magnet_button(ih, name) {
  return (
    '<a href="magnet:?xt=urn:btih:' +
    ih +
    "&dn=" +
    encodeURIComponent(name) +
    print_trackers() +
    '"><button class="btn btn-primary">' +
    '<img src="' +
    static_server +
    '/images/icon-magnet.gif" /> ' +
    '<span class="d-none d-md-inline">Magnet</span>' +
    "</button></a>"
  );
}
function print_trackers() {
  let tr = "&tr=" + encodeURIComponent("udp://tracker.opentrackr.org:1337");
  tr += "&tr=" + encodeURIComponent("udp://open.stealth.si:80/announce");
  tr +=
    "&tr=" + encodeURIComponent("udp://tracker.torrent.eu.org:451/announce");
  tr += "&tr=" + encodeURIComponent("udp://tracker.bittor.pw:1337/announce");
  tr +=
    "&tr=" +
    encodeURIComponent("udp://public.popcorn-tracker.org:6969/announce");
  tr += "&tr=" + encodeURIComponent("udp://tracker.dler.org:6969/announce");
  tr += "&tr=" + encodeURIComponent("udp://exodus.desync.com:6969");
  tr += "&tr=" + encodeURIComponent("udp://open.demonii.com:1337/announce");
  return tr;
}
function print_category(cat, lnk) {
  if (typeof lnk === "undefined") lnk = "category:";
  let main,
    cc = cat.toString();
  if (cat == 0) return "";
  if (cc[0] == 1) main = "Audio";
  if (cc[0] == 2) main = "Video";
  if (cc[0] == 3) main = "Applications";
  if (cc[0] == 4) main = "Games";
  if (cc[0] == 5) main = "Porn";
  if (cc[0] == 6) main = "Other";
  let maintxt =
    '<a href="/search?q=' +
    lnk +
    cc[0] +
    '00">' +
    main +
    '</a> > <a href="/search?q=' +
    lnk +
    cat +
    '">';
  if (cat == 101) return maintxt + "Music" + "</a>";
  if (cat == 102) return maintxt + "Audio Books" + "</a>";
  if (cat == 103) return maintxt + "Sound clips" + "</a>";
  if (cat == 104) return maintxt + "FLAC" + "</a>";
  if (cat == 199) return maintxt + "Other" + "</a>";
  if (cat == 201) return maintxt + "Movies" + "</a>";
  if (cat == 202) return maintxt + "Movies DVDR" + "</a>";
  if (cat == 203) return maintxt + "Music videos" + "</a>";
  if (cat == 204) return maintxt + "Movie Clips" + "</a>";
  if (cat == 205) return maintxt + "TV-Shows" + "</a>";
  if (cat == 206) return maintxt + "Handheld" + "</a>";
  if (cat == 207) return maintxt + "HD Movies" + "</a>";
  if (cat == 208) return maintxt + "HD TV-Shows" + "</a>";
  if (cat == 209) return maintxt + "3D" + "</a>";
  if (cat == 210) return maintxt + "CAM/TS" + "</a>";
  if (cat == 211) return maintxt + "UHD/4k Movies" + "</a>";
  if (cat == 212) return maintxt + "UHD/4k TV-Shows" + "</a>";
  if (cat == 299) return maintxt + "Other" + "</a>";
  if (cat == 301) return maintxt + "Windows" + "</a>";
  if (cat == 302) return maintxt + "Mac/Apple" + "</a>";
  if (cat == 303) return maintxt + "UNIX" + "</a>";
  if (cat == 304) return maintxt + "Handheld" + "</a>";
  if (cat == 305) return maintxt + "IOS(iPad/iPhone)" + "</a>";
  if (cat == 306) return maintxt + "Android" + "</a>";
  if (cat == 399) return maintxt + "Other OS" + "</a>";
  if (cat == 401) return maintxt + "PC" + "</a>";
  if (cat == 402) return maintxt + "Mac/Apple" + "</a>";
  if (cat == 403) return maintxt + "PSx" + "</a>";
  if (cat == 404) return maintxt + "XBOX360" + "</a>";
  if (cat == 405) return maintxt + "Wii" + "</a>";
  if (cat == 406) return maintxt + "Handheld" + "</a>";
  if (cat == 407) return maintxt + "IOS(iPad/iPhone)" + "</a>";
  if (cat == 408) return maintxt + "Android" + "</a>";
  if (cat == 499) return maintxt + "Other OS" + "</a>";
  if (cat == 501) return maintxt + "Movies" + "</a>";
  if (cat == 502) return maintxt + "Movies DVDR" + "</a>";
  if (cat == 503) return maintxt + "Pictures" + "</a>";
  if (cat == 504) return maintxt + "Games" + "</a>";
  if (cat == 505) return maintxt + "HD Movies" + "</a>";
  if (cat == 506) return maintxt + "Movie Clips" + "</a>";
  if (cat == 507) return maintxt + "UHD/4k Movies" + "</a>";
  if (cat == 599) return maintxt + "Other" + "</a>";
  if (cat == 601) return maintxt + "E-books" + "</a>";
  if (cat == 602) return maintxt + "Comics" + "</a>";
  if (cat == 603) return maintxt + "Pictures" + "</a>";
  if (cat == 604) return maintxt + "Covers" + "</a>";
  if (cat == 605) return maintxt + "Physibles" + "</a>";
  if (cat == 699) return maintxt + "Other" + "</a>";
  return main;
}

function make_search_url(q, page = 1, cat = "") {
  return "/search?q=" + encodeURIComponent(q) + "&page=" + page + "&cat=" + cat;
}

module.exports = {
  print_item,
  make_search_url,
  print_date,
  print_size,
  print_category,
  print_username,
  print_magnet_button,
};
