# Удаленный рабочий стол на MacBook

Здесь собраны отличия для системы Apple MacOS от общей [инструкции][back].

## Этап 1. Программа подключения

### Устранение блокировки Kerio VPN

После установки программы **Kerio Control VPN Client** по [инструкции][download], она в строке "Состояние" пишет об ошибке и не производит подключение. Надо разблокировать (разрешить) ее в приложении "Системные настройки" - "Защита и безопасность":

![pic-unblock]

Подробнее об этом можно прочитать по ссылке <https://support.gfi.com/hc/en-us/articles/360017147474-Kerio-VPN-Client-Service-is-not-running-on-Mac>

Нормальное состояние, когда в строке "Состояние" написано "Отключен":

![pic-connect-mac]

Рекомендуется поставить для удобства подключения галочку "Показать состояние VPN в строке меню".

## Этап 2. Двухшаговая проверка

Нет отличий от общей [инструкции][back].

## Этап 3. Удаленный рабочий стол

В MacOS нет встроенной программы подключения к удаленному рабочему столу Windows. Рекомендуется установить бесплатную программу **Microsoft Remote Desktop**.

Ввести в поле "PC name" `Шлюз`

![pic-rdp-mac]

А затем:

* Username: `Имя пользователя 2`
* Password: `Пароль 2`

![pic-user2-mac]

На вопрос о доверии к сертификату удаленного компьютера отвечайте "Continue":

![pic-pc2-mac]

Теперь должен открыться Ваш удаленный рабочий стол в окне или в полный экран. Вы сделали это!

![pic-desktop-mac]

## Как завершить работу

Закрыть окно удаленного рабочего стола и кликнуть значок VPN в верхней служебной строке, выбрать в меню "Отключить":

![pic-disconnect-mac]

[Назад][back]

[download]: download.md "Скачать"
[back]: index.md "Основная инструкция"

[pic-unblock]: assets/images/KerioVPN_Mac.jpg "Как разблокировать"
[pic-connect-mac]: assets/images/connect-mac.png "Как подключиться"
[pic-rdp-mac]: assets/images/rdp-mac.png "Как добавить новый PC"
[pic-user2-mac]: assets/images/user2-mac.png "Как ввести учетные данные"
[pic-pc2-mac]: assets/images/pc2-mac.png "Как игнорировать предупреждение"
[pic-desktop-mac]: assets/images/desktop-mac.png "Удаленный рабочий стол Windows"
[pic-disconnect-mac]: assets/images/disconnect-mac.png "Меню отключения в VPN"