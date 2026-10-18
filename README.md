<div align="center">

<img src=".github/capa_happy.png" alt="Happy" width="100%">

# Happy

[![Learning project](https://img.shields.io/badge/📚_learning_project-Rocketseat_NLW_%233_·_2021-2563EB?style=for-the-badge)](https://rocketseat.com.br/)

**A web app that puts children's orphanages on a map so people can find them and schedule a visit.**

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![Leaflet](https://img.shields.io/badge/Leaflet-199900?style=flat-square&logo=leaflet&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white)
![TypeORM](https://img.shields.io/badge/TypeORM-FE0803?style=flat-square&logo=typeorm&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-003B57?style=flat-square&logo=sqlite&logoColor=white)

</div>

---

## 📌 About

Orphanages register their address, opening hours, visiting rules and photos. Visitors browse them on an interactive map and open each one to see the details and get directions.

Built during Rocketseat's **Next Level Week #3**, a one-week hands-on bootcamp.

<div align="center">
  <img src=".github/device.png" alt="Happy on desktop and mobile" width="85%">
</div>

## 🧠 What I practiced

- **A REST API in TypeScript** with Express, TypeORM migrations and SQLite, including image uploads with Multer and validation with Yup.
- **Maps in React** with Leaflet and Mapbox tiles: custom markers, popups and picking a location by clicking on the map.
- **A full-stack flow**: a multi-page React front end (map, details, create form) talking to my own API, with typed models on both sides.

## 🚀 Run locally

You need Node.js and Yarn (or npm).

```bash
git clone https://github.com/wanderson1873/happy.git
```

**Backend** (runs on `http://localhost:3333`):

```bash
cd happy/backend
yarn install
yarn typeorm migration:run
yarn dev
```

**Web** (runs on `http://localhost:3000`): create `web/.env` with a [Mapbox](https://www.mapbox.com/) token as `REACT_APP_MAP_TOKEN=your-token`, then:

```bash
cd happy/web
yarn install
yarn start
```

---

<div align="center">

**Wanderson Oliveira** · Websites & AI solutions that bring businesses more customers

[![derson.cloud](https://img.shields.io/badge/derson.cloud-2563EB?style=flat-square&logo=googlechrome&logoColor=white)](https://derson.cloud)
[![Email](https://img.shields.io/badge/Email-EA4335?style=flat-square&logo=gmail&logoColor=white)](mailto:wanderson1873@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/wanderson1873/)
[![WhatsApp](https://img.shields.io/badge/WhatsApp-25D366?style=flat-square&logo=whatsapp&logoColor=white)](https://wa.me/17816664150)

<sub>Released under the [MIT License](LICENSE).</sub>

</div>
