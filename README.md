# alice-skill-starter

Шаблон для быстрого старта разработки [навыка для Алисы](https://yandex.ru/dev/dialogs/alice/doc/about-docpage/) на Node.js.  

## Запуск навыка локально
```
git clone https://github.com/vitalets/alice-skill-starter.git my-skill
cd my-skill
npm install
npm start
```
Сервер навыка запустится на 3000 порту:
```
HTTP server started on port: 3000
```
## Проверка в консоли разработчика
1. Установите [ngrok](https://github.com/bubenshchykov/ngrok) глобально `npm install ngrok -g`
2. Запустите навык `npm start`
3. В соседнем окне терминала запустите ngrok `ngrok http 3000`
4. Скопируйте урл сформированный ngrok `https://XXXXXXXX.ngrok.io` в поле Webhook URL в панели разработчика
5. Нажмите "Сохранить" и переходите на вкладку "Тестирование" 

## Запуск юнит тестов
```bash
npm run test
```

Результат:
```
  repeat
    ✓ should repeat user message

  welcome
    ✓ should show welcome message


  2 passing (30ms)
```

## Деплой на heroku
tbd

## Лицензия
MIT @ [Vitaliy Potapov](https://github.com/vitalets)
