---
---
# Удаленный рабочий стол на MacBook

Здесь собраны отличия для системы Apple MacOS от общей [инструкции][back].  
Редакция: {{ 'now' | date: "%Y-%m-%d" }}

Укажите здесь адрес Вашей рабочей электронной почты, чтобы в тексте далее
подставились Ваши параметры:

<script>function calc(){
var x=/(.+)@(..(.+)\..+)/;
var e=document.getElementById("email").value;
document.getElementById("p0").innerHTML=e.replace(x,'$3');
document.getElementById("p1").innerHTML=e.replace(x,'mail.$2');
document.getElementById("p2").innerHTML=e.replace(x,'$1');
document.getElementById("p3").innerHTML='(VPN пароль)';
document.getElementById("p4").innerHTML=e.replace(x,'kerio.$2');
document.getElementById("p5").innerHTML=e.replace(x,'$3\\$1');
document.getElementById("p6").innerHTML='(Ваш пароль)';
}</script>
<style>.code {background-color:brown; color:yellow; padding:0 10px;}</style>
<input type="text" size="30" id="email" /><button onClick="calc();">Готово!</button>

## Этап 1. Программа подключения

### Устранение блокировки Kerio VPN

После установки программы **Kerio Control VPN Client** по [инструкции][download],
она в строке "Состояние" пишет об ошибке и не производит подключение.
Надо разблокировать (разрешить) ее в приложении "Системные настройки" -
"Защита и безопасность":

![pic-unblock]

Подробнее об этом можно прочитать по ссылке
<https://support.gfi.com/hc/en-us/articles/360017147474-Kerio-VPN-Client-Service-is-not-running-on-Mac>

Нормальное состояние, когда в строке "Состояние" написано "Отключен":

![pic-connect-mac]

* Соединение: <span id="p0" class="code">Соединение</span>
* Сервер: <span id="p1" class="code">Соединение</span>
* Имя пользователя: <span id="p2" class="code">VPN логин</span>
* Пароль: <span id="p3" class="code">VPN пароль</span> (можно сохранить,
если доступ к компьютеру имеете только Вы).

Рекомендуется поставить для удобства подключения галочку "Показать состояние
VPN в строке меню".

## Этап 2. Двухшаговая проверка

Нет отличий от общей [инструкции][back].

## Этап 3. Удаленный рабочий стол

В MacOS нет встроенной программы подключения к удаленному рабочему столу
Windows. Рекомендуется установить бесплатную программу **Microsoft Remote
Desktop**.

Ввести в поле "PC name" <span id="p4" class="code">kerio...</span>

![pic-rdp-mac]

А затем учетные данные Вашего рабочего компьютера (как на работе):

* Username: <span id="p5" class="code">Ваш логин</span>
* Password: <span id="p6" class="code">Ваш пароль</span>

![pic-user2-mac]

На вопрос о доверии к сертификату удаленного компьютера отвечайте "Continue":

![pic-pc2-mac]

Теперь должен открыться Ваш удаленный рабочий стол в окне или в полный экран.
Вы сделали это!

![pic-desktop-mac]

## Как завершить работу

Закрыть окно удаленного рабочего стола и кликнуть значок VPN в верхней
служебной строке, выбрать в меню "Отключить":

![pic-disconnect-mac]

[Назад][back]

[download]: /vpn/download "Скачать"
[back]: /vpn "Основная инструкция"

[pic-unblock]: /assets/img/KerioVPN_Mac.jpg "Как разблокировать"
[pic-connect-mac]: /assets/img/connect-mac.png "Как подключиться"
[pic-rdp-mac]: /assets/img/rdp-mac.png "Как добавить новый PC"
[pic-user2-mac]: /assets/img/user2-mac.png "Как ввести учетные данные"
[pic-pc2-mac]: /assets/img/pc2-mac.png "Как игнорировать предупреждение"
[pic-desktop-mac]: /assets/img/desktop-mac.png "Удаленный рабочий стол Windows"
[pic-disconnect-mac]: /assets/img/disconnect-mac.png "Меню отключения в VPN"
