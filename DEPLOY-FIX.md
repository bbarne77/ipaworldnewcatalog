iPAWORLD — исправление иконки и профиля

GITHUB PAGES (каталог)
Загрузить в корень репозитория все файлы из этой папки, сохранив структуру: index.html, icon.png, manifest.webmanifest, sw.js, style.css, app.js, apps.json и остальные существующие файлы. Важно: index.html, icon.png, manifest.webmanifest и sw.js обновлены. Не загружайте папку целиком внутрь другой папки.

CLOUDFLARE PAGES (профиль установки)
В проекте https://ipaworld-profile.pages.dev/ загрузить в корень папки публикации: ipaworld.mobileconfig и _headers. Можно также обновить ipaworld (1).mobileconfig, если эта копия используется отдельной ссылкой. _headers должен задавать Content-Type: application/x-apple-aspen-config для *.mobileconfig.

ПОСЛЕ ПУБЛИКАЦИИ
1. Удалить старый профиль iPAWORLD в Настройки → Основные → VPN и управление устройством (если он установлен), затем заново открыть https://ipaworld-profile.pages.dev/ipaworld.mobileconfig и установить профиль.
2. Удалить старый ярлык сайта с экрана «Домой», открыть каталог именно в Safari и снова выбрать Поделиться → На экран «Домой».
3. Если GitHub Pages подключён к корню репозитория, загружать содержимое этой папки в корень, а не ZIP-файл.
