## Правила роботи з репозиторієм.

Всі свої завдання заливайте в папку з вашим ім’ям та прізвищем в латинській транслітерації. В якості роздільного символу використовуйте нижнє підкреслення.

Добре:

```
/Mykhailo_Ivankiv
```

Погано:

```
/Mykhailo
/Ivankiv
/mykhailoivankiv
/Іванків_Михайло
```

## Правила структурування файлів, та директорій.

Назва кореневої папки повинна відповідати назві проекту. Усі назви фаалів, ти директорій писати маленькими літерами, в якості роздільного символу використовуйте нижнє підкреслення.

Добре:

```
/facebook
/gmail
/youtube
/black_estate_vineyard
```

Погано:

```
/Home work 1
/Task3
/Gmail
/Facebook_1+ css
/HW1
```

Структура кожного проекту повинна бути наступною:

```
 /facebook
    /images
    /styles
        /* назви css файлів повинні даватись згідго БЕМ методології */
        layout.css
        layout.scss

        article.css
        article.scss
        ...
    /data
        index.json
        profile.json
        ...
    index.html
    index.mustache

    profile.html
    profile.mustache
    ...
```

Усі фали повинні мати осмислені назви

Добре:

```
/facebook_logo.png
/Michael_Ivankiv_user_pic.jpg
/icons
    message.png
    globe.png
```

Погано:

```
/25-512.png
/1400.png
/wtf.gif
```

### Commit messages

[How to Write a Git Commit Message](https://chris.beams.io/posts/git-commit/)
