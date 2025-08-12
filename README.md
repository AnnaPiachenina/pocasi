# pocasi

Webová aplikace pro zobrazení aktuálního počsí a předpovědí (hodinové a týdenní) pro zvoliné město.
SearchBar pomáhá vyhledávat města. Po zvolení konkrétního zobrazí teplotu, rychlost větru, vlhkost vzduhu a UV index.
Čas a data lokalizovaná podle jazyka prohlizeče. 
Hodinová předpověď má horizontální skrollování.

## spuštění 

- bash 
git clone < odkaz na tento repozitář  >
cd pocasi 
- instalace závislostí
npm install
- V kořenovém adresáři (./pocasi) najdete soubor '.env.test'. 
- Před spuštěním projektu přejmenujte soubor na '.env' (odstraňte příponu '.test').
- Přidejte token/klíč z OpenWeather do proměnné VITE_OPEN_WEATHER_API_KEY.
- spuštění 
npm run dev

## Podporované prohlizeče 
- aplikace byla testovaná v Google Chrome (verze 139.0.7258.67) a Safari (verze 18.0)

## Struktura projektu 
- Všechny komponenty jsou v adresáři './src/components'
- Ve stejném adresáří jsou styly ve složce './styles' a všechny používané SVG soubory se nacházejí v './Icons'