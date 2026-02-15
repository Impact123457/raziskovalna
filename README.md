# Accessibility Checker
![Status](https://img.shields.io/badge/status-in--development-yellow.svg)
![Issues](https://img.shields.io/github/issues/zuranmateo/forvalorofficial.svg)
![PRs](https://img.shields.io/github/issues-pr/zuranmateo/forvalorofficial.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
---
**Accessibility Checker** je spletna aplikacija, ki uporabnikom omogoča preverjanje dostopnosti spletnih strani. Projekt je bil razvit z namenom, da pomaga razvijalcem in lastnikom spletnih strani prepoznati težave z dostopnostjo in izboljšati uporabniško izkušnjo za osebe s posebnimi potrebami.

## Funkcionalnosti

- Ustvarjanje in prilagajanje uporabniškega profila.
- Vnos URL povezave za preverjanje dostopnosti spletnih strani.
- Analiza spletne strani z uporabo API-ja Web Accessibility Scanner.
- Prikaz podrobnih rezultatov, vključno z napakami, opozorili in kontrastnimi problemi.
- Rezultati so dostopni v različnih formatih: JSON, CSV, Excel, HTML.

### Nameščanje

1. Kloniraj projekt:


2. Namesti odvisnosti:

        npm install

    ali:

        pnpm install



3. Zaženi development server:

        npm run dev
    
    ali:

        pnpm dev


---
### Kako in kaj?

#### Kako se prijaviti?

prijavite se lahko na strani ```/login```. Zgoraj desno v navigacijski vrstici se nahaja. Nato se lahko registrirate,gumb za registracijo je na dnu okna za prijavo.

#### Kako previriti dostopnost spletne strani?

na domači strani je gumb, *Začni analizirati*, z klikom na ta gumb pridete na stran z iskalno vrstico kamor vnesete link željene spletne strani in prejmete natančno poročilo o pomanjklivostijh.

#### Kako urejati profil?

da uredite profil imate na strani kjer se izpiše vaš profil gumb *Uredi profil*, ko stisnete na ta gumb se znajdete na novi strani z vpisnimi polji, kjer vpišete željene podatke in nato shranite spremembe.

---

## 🚀Nadaljnje izboljšave

- Prejem rezultatov na email
- Možnost nalaaganja rezultatov
- Ponujene izvirne rešitve, glede na analizirane pomanjklivosti

---

## Tehnologije

- **Frontend / Backend:** [Next.js](https://nextjs.org/) (JavaScript)
- **Upravljanje podatkov:** [Sanity](https://www.sanity.io/)
- **Gostovanje:** [Vercel](https://vercel.com/)
- **API za dostopnost:** [Web Accessibility Scanner](https://apify.com/accessibility_team/a11y-scanner-public/api)

## ✍️Avtorica

- **Ema Škruba** – Avtorica in razvijalka  
  - GitHub: https://github.com/Impact123457

---
## Dodatno

Za analizo spletnih strani, sem uporabila API Web Accessibility Scanner, ki ni popolnoma zastonj. Za začetek imam zastonj pribljižno 200 analiz, zato bi prosila, da ste pri uporabi pozorni na ta detail.
