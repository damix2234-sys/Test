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

## Modele 3D i animacje (v1.1)
- Bohater: realistyczny model z pełnym szkieletem (65 kości, palce), rozczochrane ciemnorude włosy z grzywką, bursztynowe oczy, blizny na całym ciele, skórzane spodnie, pas, buty.
- Miecz długi (ok. 1,22 m) z jelcem, rękojeścią na dwie dłonie i głowicą.
- Animacje walki według niemieckiej szkoły miecza długiego (Liechtenauer), chwyt oburącz liczony odwrotną kinematyką:
  - **Pflug** – garda (postawa spoczynkowa w walce),
  - **Zornhau** – cięcie z gniewu: z Vom Tag ukośnie w dół z krokiem przemiennym,
  - **Zwerchhau** – cięcie poprzeczne: poziomo na wysokości głowy, ręce wysoko, jelec chroni głowę,
  - **Scheitelhau** – cięcie ciemieniowe: pionowo z góry do Langort (długiego sztychu),
  - **Stich** – pchnięcie z wypadem, **Krone** – zasłona korony.
- NPC i wrogowie na tym samym szkielecie, więc używają tych samych technik walki.
- Pipeline: `tools/blender/*.py` (Blender jako moduł Pythona `bpy`), podglądy w `docs/`.

## Autorzy modeli
- Postacie bazowe, stroje, animacje ruchu: [Quaternius](https://quaternius.com) – CC0.
- Lis/wilki: glTF Sample „Fox” – tomkranis, AsoboStudio, scurest – CC BY 4.0.
- Bohater (włosy, blizny, tekstury), miecz i animacje walki: autorskie.

## Sterowanie
Lewy kciuk — ruch · przeciąganie po prawej stronie — kamera · ⚔ atak · ✦ czar · ⤾ unik · 🧪 mikstura · ☰ menu

## Budowanie
```
cd web && npm install && npm run build
cd ../android && ./gradlew assembleRelease
```
