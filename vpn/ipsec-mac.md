---
---
# Настройка стандартного клиента IPSec на Макбуке

Здесь собраны отличия от общей [инструкции][back].  
Редакция: {{ 'now' | date: "%Y-%m-%d" }}

По этой инструкции можно не устанавливать дополнительного клиента VPN,
но придется запускать web-страницу для подтверждения входа вручную.

Также здесь надо дополнительно знать **Общий ключ**.

<script>function calc(btn){
var e=document.getElementById('email').value.trim();
var c=document.getElementById('code').value;
var k=document.getElementById('key').value;
if(/^.+@...+\...+/.test(e)){var x=/(.+)@((..(.+))\...+)/;
document.getElementById('pt').innerHTML='Ваши параметры';
p0=e.replace(x,'$3');
document.getElementById('m0').innerHTML=p0;
p1=e.replace(x,'mail.$2');
document.getElementById('m1').innerHTML=p1;
p2=e.replace(x,'$1');
document.getElementById('m2').innerHTML=p2;
p3=c.replace(/\s/g,'');
document.getElementById('m3').innerHTML=p3;
pk=k.replace(/\s/g,'');
document.getElementById('mk').innerHTML=pk;
p4=e.replace(x,'kerio.$2');
l4='https://'+p4+':4081//nonauth/totpVerify.cs';
document.getElementById('l4').innerHTML=
'<a target="_blank" href="'+l4+'">'+l4+'</a>';
document.getElementById('t4').innerHTML=
'<a target="_blank" href="'+l4+'">здесь</a>';
document.getElementById('p4').innerHTML=p4;
document.getElementById('p5').innerHTML=e.replace(x,'$4\\$1');
document.getElementById('p6').innerHTML='Ваш пароль ***';
btn.innerHTML='Готово!';
}else{alert('Укажите email!');}}</script>

Укажите здесь:

1. **Адрес Вашей рабочей электронной почты**:  
<input type="text" size="30" id="email"/>
2. **Дополнительный код**:  
<input type="text" size="15" id="code"/>
3. **Общий ключ**:  
<input type="text" size="15" id="key"/>
4. Кликните кнопку **Ввод**,
чтобы в тексте далее подставились <span id="pt">параметры</span>:  
<button onClick="calc(this);">Ввод</button>

## Этап 1. Настройки подключения

### Apple macOS (Макбуки)

Это вариант иной настройки, если не получилось по той [инструкции][macos].

Системные настройки – Сеть - <span>+</span> (слева внизу) - VPN

Выберите интерфейс и введите имя для новой службы.

|||
---|---
Интерфейс: | <span>VPN</span>
Тип VPN: | <span>L2TP через IPSec</span>
Имя службы: | <span id="m0">Название</span>

Для новой службы Сети:

|||
---|---
Конфигурация: | <span>По умолчанию</span>
Адрес сервера: | <span id="m1">Адрес</span>
Имя учетной записи: | <span id="m2">VPN логин</span>

Кнопка <span>Настройки аутентификации...</span>

Аутентификация пользователя:

|||
---|---
Пароль: | <span id="m3">VPN пароль</span>

Аутентификация компьютера:

|||
---|---
Общий ключ (Shared Secret): | <span id="mk">Общий ключ</span>

Затем кнопки <span>Применить</span>, <span>Подключить</span>.
Рекомендуется поставить галочку у "Показывать статус VPN в строке меню"
для удобства подключения и отключения.

## Этап 2. Двухшаговая проверка

Нет отличий от общей [инструкции][back] за исключением того, что страница
настройки двухшаговой проверки не открывается автоматически после подключения
VPN. Необходимо запустить браузер и открыть данную страницу вручную
(можно кликнуть <span id="t4">здесь</span>, если страница с этой инструкцией
открыта прямо на устройстве, которое Вы хотите подключить):

<span id="l4">https://Шлюз:4081//nonauth/totpVerify.cs</span>

Далее настроить двухшаговую проверку по [инструкции][2fa] и сохранить
на 30 дней. Сохраните эту страницу в закладках или ярлык на Рабочем столе,
так как ее надо будет открывать вручную при каждом подключении таким
способом со стандартным IPSec.

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

[2fa]: /vpn/2fa "Настройка двухшаговой проверки"
[macos]: /vpn/macos "На Макбуках"
[RD clients]: https://docs.microsoft.com/ru-ru/windows-server/remote/remote-desktop-services/clients/remote-desktop-clients "Клиенты RDP"
[back]: /vpn "Основная инструкция"

[pic-rdp-mac]: /assets/img/rdp-mac.png "Как добавить новый PC"
[pic-user2-mac]: /assets/img/user2-mac.png "Как ввести учетные данные"
[pic-pc2-mac]: /assets/img/pc2-mac.png "Как игнорировать предупреждение"
[pic-desktop-mac]: /assets/img/desktop-mac.png "Удаленный рабочий стол Windows"
[pic-disconnect-mac]: /assets/img/disconnect-mac.png "Меню отключения в VPN"
