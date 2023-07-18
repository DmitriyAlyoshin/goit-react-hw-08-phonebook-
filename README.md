# Реєстрація та логін користувача | goit-react-hw-08-phonebook

## Критерії прийому
Використовуй цей [шаблон React-проекту](https://github.com/goitacademy/react-homework-template#readme) як стартову точку своєї програми.

- Створено репозиторій `goit-react-hw-08-phonebook`
- При здачі домашньої роботи є посилання на вихідні файли та робочі сторінки кожного проекту на `GitHub Pages`
- При запуску коду завдання, в консолі немає помилок та попереджень
- Для кожного компонента є окрема папка з файлом компонента React та файлом стилів
- Для компонентів описано `propTypes`

### Книга контактів
Додай у програму «Книга контактів» можливість реєстрації, логіна та оновлення користувача, а також роботу з приватною колекцією контактів.

#### Бекенд
Для цього завдання є готовий бекенд. Ознайомся з [документацією](https://connections-api.herokuapp.com/docs/). Він підтримує всі необхідні операції з колекцією контактів, а також реєстрацію, логін та оновлення користувача за допомогою JWT. Використовуй його замість твого бекенда створеного через сервіс `mockapi.io`.

#### Маршрутизація
Додай маршрутизацію з бібліотекою React Router. У програмі має бути кілька сторінок:

- `/register` - публічний маршрут реєстрації нового користувача з формою
- `/login` - публічний маршрут логіна існуючого користувача з формою
- `/contacts` - приватний маршрут для роботи зі списком контактів користувача
Додай компонент навігації `Navigation` з посиланнями для переходу по маршрутах.

#### Меню користувача
Створи компонент `UserMenu`, що відображає пошту користувача і кнопку виходу з облікового запису. Ось як може виглядати його розмітка.
```js
<div>
  <p>mango@mail.com</p>
  <button>Logout</button>
</div>
```
#### Стилізація
Це фінальна версія програми, тому попрацюй над оформленням інтерфейсу. Можна використовувати бібліотеку стилізації або компонентів, наприклад [Chakra UI](https://chakra-ui.com/) або [Material UI](https://mui.com/).