# Jobs – тестовое задание (Vue.js)

Приложение представляет собой Поиск вакансий. В качестве бэкенда выступает Github API https://jobs.github.com/api

Для данного API не требуется аутентификация и авторизация клиента.

Пользователь открывает главную страницу приложения и видит поле поиска. В него он задает запрос, например, «Vue.js Developer» и после нажатия на кнопку «Найти» видит список вакансий.

По клику на любую из вакансий происходит переход на отдельный экран/страницу с подробным ее описанием. Также на странице присутствует кнопка «Назад», которая возвращает пользователя к результатам поиска.

По кнопке «Сброс» происходит очистка поля Поиска и результаты предыдущего запроса исчезают со страницы.

## Запуск бекенда
```
cd backend
npm i
npm run serve
```

## Запуск фронтенда
```
cd frontend
npm i
npm run serve
```
