# ⏱️ @shabaz/time-ago

A lightweight, zero-dependency JavaScript utility that converts timestamps into human-readable relative time — like `5 minutes ago`, `yesterday`, or `2 months ago`.

![npm](https://img.shields.io/npm/v/time-ago-shabaz?color=blue)
![license](https://img.shields.io/npm/l/time-ago-shabaz)
![bundle size](https://img.shields.io/bundlephobia/min/time-ago-shabaz)
![GitHub stars](https://img.shields.io/github/stars/meshabaz/time-ago-shabaz?style=social)

---

## ✨ Features

- Zero dependencies ✅
- Uses native `Intl.RelativeTimeFormat` API 🌐
- Works with Date objects or ISO strings 🕓
- Lightweight & blazing fast 🚀
- Ready for browser and Node.js apps

---

## 📦 Coming Soon

- ✅ Browser/UMD build support (`dist/time-ago.min.js`)
- ✅ TypeScript types
- ✅ Locale language switching (e.g. Hindi, French, Bengali)

---

## 📦 Installation

```bash
npm install time-ago-shabaz
```

---

## 🚀 Usage

### Basic Example

```js
import timeAgo from "time-ago-shabaz";

console.log(timeAgo("2023-12-01T10:00:00"));
// Output: "5 months ago"
```

### With Date Object

```js
const date = new Date(Date.now() - 3600 * 1000); // 1 hour ago
console.log(timeAgo(date));
// Output: "an hour ago"
```

---

## 🌍 Locale Support

By default, this uses English. You can customize it using `Intl.RelativeTimeFormat`:

```js
const rtf = new Intl.RelativeTimeFormat("fr");
```

*(Localization enhancement support planned in v2.0 🚧)*

---

## 📁 Project Structure

```scss
.
├── src
│   └── index.js      # timeAgo() source code
├── package.json
└── README.md
```

---

## 🔧 How It Works

Internally uses `Intl.RelativeTimeFormat`, supported in all modern environments.

---

## 🙋 Why Use This?

- You’re building a blog, chat, feed, or activity log.
- You want a simple formatter without adding heavy libraries like `moment.js`.
- You love clean code.

---

## 🧠 Author

**Md Shabaz Ansari**

🔗 [Portfolio](https://meshabaz.github.io/shabaz/)  
🔗 [LinkedIn](https://www.linkedin.com/in/md-shabaz-ansari-0399341bb/)

---

## 📄 License

MIT – use it freely in open or commercial projects.

---

## ⭐ Star This Project

If you find it helpful, give it a ⭐ on GitHub to support the project and spread the word!

