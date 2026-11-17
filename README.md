# Kroniki Wrzosu

Oryginalna gra akcji RPG 3D na Androida (fantasy, wybory moralne, otwarty świat).

**Pobierz APK:** [`release/KronikiWrzosu.apk`](release/KronikiWrzosu.apk)

## Co zawiera
- Otwarty świat 3D: wioska Brzezina, Stary Las, obóz bandytów, jezioro, ruiny Starej Strażnicy, dom na wzgórzu
- Cykl dnia i nocy (nocą wychodzą upiory)
- Walka: kombo mieczem, czar błyskawicy, unik, mikstury
- Moralność dobro/zło: aureola albo rogi, inne reakcje mieszkańców, inne zakończenie
- 4 zadania z wyborami, sklep, kupno domu z dochodem, skrzynie ze skarbami
- Rozwój postaci: Siła, Magia, Zręczność (zmieniają wygląd bohatera)
- Lisica Iskra — towarzyszka walcząca u twojego boku
- Automatyczny zapis gry

## Sterowanie
Lewy kciuk — ruch · przeciąganie po prawej stronie — kamera · ⚔ atak · ✦ czar · ⤾ unik · 🧪 mikstura · ☰ menu

## Budowanie
```
cd web && npm install && npm run build
cd ../android && ./gradlew assembleRelease
```
