---
---
# Удаленный рабочий стол на MacBook

Здесь собраны отличия для системы Apple MacOS от общей [инструкции][back].  
Редакция: {{ 'now' | date: "%Y-%m-%d" }}

<script>function calc(btn){
var e=document.getElementById('email').value.trim();
var c=document.getElementById('code').value;
if(/^.+@...+\...+/.test(e)){var x=/(.+)@((..(.+))\...+)/;
document.getElementById('pt').innerHTML='Ваши параметры';
document.getElementById('p0').innerHTML=e.replace(x,'$3');
document.getElementById('p1').innerHTML=e.replace(x,'mail.$2');
l1='https://$2/client/';
document.getElementById('l1').innerHTML=
'<a target="_blank" href="'+l1+'">'+l1+'</a>';
document.getElementById('p2').innerHTML=e.replace(x,'$1');
document.getElementById('p3').innerHTML=c.replace(/\s/g,'');
document.getElementById('p4').innerHTML=e.replace(x,'kerio.$2');
document.getElementById('p5').innerHTML=e.replace(x,'$4\\$1');
document.getElementById('p6').innerHTML='Ваш пароль ***';
btn.innerHTML='Готово!';
}else{alert('Укажите email!');}}</script>

Укажите здесь:

1. **Адрес Вашей рабочей электронной почты**:  
<input type="text" size="30" id="email"/>
2. **Дополнительный код**:  
<input type="text" size="15" id="code"/>
3. Кликните кнопку **Ввод**,
чтобы в тексте далее подставились <span id="pt">параметры</span>:  
<button onClick="calc(this);">Ввод</button>

## Этап 1. Программа подключения

Для установки защищенного соединения между Вашим домашним и рабочим компьютером
требуется программа **Kerio Control VPN Client** ([где взять?][download]
<span id="l1">зеркало</span>).

### Устранение блокировки Kerio VPN

После установки, программа в строке "Состояние" пишет об ошибке и не
производит подключение.
Надо разблокировать (разрешить) ее в приложении "Системные настройки" -
"Защита и безопасность":

![pic-unblock]

Подробнее об этом можно прочитать по ссылке -  
<https://support.gfi.com/hc/en-us/articles/360017147474-Kerio-VPN-Client-Service-is-not-running-on-Mac>

Нормальное состояние, когда в строке "Состояние" написано "Отключен":

![pic-connect-mac]

|||
---|---
Соединение: | <span id="p0">Название</span>
Сервер: | <span id="p1">Адрес</span>
Имя пользователя: | <span id="p2">VPN логин</span>
Пароль: | <span id="p3">VPN пароль</span>

Пароль можно сохранить, если доступ к компьютеру имеете только Вы.

Рекомендуется поставить для удобства подключения галочку "Показать состояние
VPN в строке меню".

## Этап 2. Двухшаговая проверка

Нет отличий от общей [инструкции][back].

## Этап 3. Удаленный рабочий стол

В MacOS нет встроенной программы подключения к удаленному рабочему столу
Windows. Рекомендуется установить бесплатную программу **Microsoft Remote
Desktop**.

Ввести в поле "PC name": <span id="p4">Шлюз</span>

![pic-rdp-mac]

А затем учетные данные Вашего рабочего компьютера (как на работе):

|||
---|---
Username: | <span id="p5">Ваш логин</span>
Password: | <span id="p6">Ваш пароль</span> (Его знаете только Вы!)

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

---

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
