const bookmarksDB = [
  {
    id: uuid(),
    title: "localhost",
    address: "localhost",
    favicon: "logo192.png",
    action: false,
  },
  {
    id: uuid(),
    title: "facebook",
    address: "https://www.facebook.com",
    favicon: "logo192.png",
    action: false,
  },
  {
    id: uuid(),
    title: "twitter",
    address: "https://www.twitter.com",
    favicon: "logo192.png",
    action: false,
  },
  {
    id: uuid(),
    title: "instagram",
    address: "https://www.instagram.com",
    favicon: "logo192.png",
    action: false,
  },
  {
    id: uuid(),
    title: "youtube",
    address: "https://www.youtube.com",
    favicon: "logo192.png",
    action: false,
  },
  {
    id: uuid(),
    title: "gmail",
    address: "https://www.gmail.com",
    favicon: "logo192.png",
    action: false,
  },
];

function uuid() {
  const uid = [];
  const id = (Math.random() * Date.now()).toString().split("");
  const str = "randomsecuretoken".split("");
  for (let index = 0; index < id.length; index++) {
    uid.push(id[index]);
    uid.push(str[index]);
  }
  return uid.join("");
}

export { bookmarksDB, uuid };
