---
---
# Настройка стандартных клиентов IPSec

Здесь собраны отличия от общей [инструкции][back].  
Редакция: {{ 'now' | date: "%Y-%m-%d" }}

Укажите здесь адрес Вашей рабочей электронной почты, чтобы в тексте далее
подставились  
<span id="pt" class="code">параметры</span>:

<script>function calc(btn){
btn.innerHTML='Готово!';
var x=/(.+)@(..(.+)\..+)/;
var e=document.getElementById("email").value;
document.getElementById("pt").innerHTML='Ваши параметры';
document.getElementById("p0i").innerHTML=e.replace(x,'$3');
document.getElementById("p0a").innerHTML=e.replace(x,'$3');
document.getElementById("p1i").innerHTML=e.replace(x,'mail.$2');
document.getElementById("p1a").innerHTML=e.replace(x,'mail.$2');
document.getElementById("p2").innerHTML=e.replace(x,'$1');
document.getElementById("p3").innerHTML='VPN пароль ***';
document.getElementById("p4w").innerHTML=e.replace(x,'https://kerio.$2:4081//nonauth/totpVerify.cs');
document.getElementById("p4").innerHTML=e.replace(x,'kerio.$2');
document.getElementById("p5").innerHTML=e.replace(x,'$3\\$1');
document.getElementById("p6").innerHTML='Ваш пароль ***';
}</script>
<style>.code {
background-color: brown; color: yellow; font-family: monospace; padding: 5px 15px;
}</style>
<input type="text" size="30" id="email" />
<button onClick="calc(this);">Ввод</button>

Также Вам надо узнать в ИТ-отделе назначенный Вам **VPN пароль** и **Общий ключ**.  
А **Ваш пароль** от рабочего компьютера должны знать Вы сами.

## Этап 1. Настройки подключения

### Apple iOS, iPadOS

Настройки – VPN – Добавить конфигурацию VPN...

|| Параметр |
---|---
Тип: | <span class="code">L2TP</span>
Описание: | <span id="p0i" class="code">Название</span>
Сервер: | <span id="p1i" class="code">Адрес</span>
Учетная запись: | <span id="p2i" class="code">VPN логин</span>
RSA SecurID: | <span class="code">выкл</span>
Пароль: | <span id="p3i" class="code">VPN пароль</span>
Общий ключ: | <span class="code">Общий ключ</span>
Для всех данных: | <span class="code">выкл</span>

### Google Android

Настройки – Беспроводные сети – VPN – Добавить сеть VPN

|| Параметр |
---|---
Имя: | <span id="p0a" class="code">Название</span>
Тип: | <span class="code">L2TP/IPSec PSK</span>
Сервер: | <span id="p1a" class="code">Адрес</span>
Общий ключ IPSec: | <span class="code">Общий ключ</span>

|| Параметр |
---|---
Имя пользователя: | <span id="p2a" class="code">VPN логин</span>
Пароль: | <span id="p3a" class="code">VPN пароль</span>

[`x`] Сохранить учетные данные

## Этап 2. Двухшаговая проверка

Нет отличий от общей [инструкции][back] за исключением того, что страница
настройки двухшаговой проверки не открывается автоматически после подключения
VPN. Необходимо запустить браузер и открыть данную страницу вручную:

<span id="p4w" class="code">https://Шлюз:4081//nonauth/totpVerify.cs</span>

Далее настроить двухшаговую проверку по [инструкции][2fa] и сохранить
на 30 дней.

## Этап 3. Удаленный рабочий стол

Установить **Microsoft Remote Desktop**.

[Читать о нем для разных платформ на сайте Microsoft.][RD clients]

А затем ввести адрес шлюза подключения и учетные данные Вашего рабочего
компьютера (как на работе):

|| Параметр |
---|---
Имя компьютера: | <span id="p4" class="code">Шлюз</span>
Имя пользователя: | <span id="p5" class="code">Ваш логин</span>
Пароль: | <span id="p6" class="code">Ваш пароль</span>

[Назад][back]

[2fa]: /vpn/2fa "Настройка двухшаговой проверки"
[RD clients]: https://docs.microsoft.com/ru-ru/windows-server/remote/remote-desktop-services/clients/remote-desktop-clients "Клиенты RDP"
[back]: /vpn "Основная инструкция"
