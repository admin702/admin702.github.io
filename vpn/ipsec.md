---
---
# Настройка стандартных клиентов IPSec

Здесь собраны отличия от общей [инструкции][back].  
Редакция: {{ 'now' | date: "%Y-%m-%d" }}

<script>function calc(btn){
var e=document.getElementById('email').value.trim();
if(/^.+@...+\...+/.test(e)){var x=/(.+)@(..(.+)\...+)/;
document.getElementById('pt').innerHTML='Ваши параметры';
p0=e.replace(x,'$3');
document.getElementById('i0').innerHTML=p0;
document.getElementById('a0').innerHTML=p0;
p1=e.replace(x,'mail.$2');
document.getElementById('i1').innerHTML=p1;
document.getElementById('a1').innerHTML=p1;
p2=e.replace(x,'$1');
document.getElementById('i2').innerHTML=p2;
document.getElementById('a2').innerHTML=p2;
p3='VPN пароль ***';
document.getElementById('i3').innerHTML=p3;
document.getElementById('a3').innerHTML=p3;
pk='Общий ключ ***';
document.getElementById('ik').innerHTML=pk;
document.getElementById('ak').innerHTML=pk;
p4=e.replace(x,'kerio.$2');
l4='https://'+p4+':4081//nonauth/totpVerify.cs';
document.getElementById('l4').innerHTML=
'<a target="_blank" href="'+l4+'">'+l4+'</a>';
document.getElementById('p4').innerHTML=p4;
document.getElementById('p5').innerHTML=e.replace(x,'$3\\$1');
document.getElementById('p6').innerHTML='Ваш пароль ***';
btn.innerHTML='Готово!';
}else{alert('Укажите email!');}}</script>

<style>span{background-color:brown;color:yellow;font-family:monospace;padding:5px 15px;}
span a{color:yellow}</style>

Укажите здесь **адрес Вашей рабочей электронной почты** и кликните
кнопку **Ввод**, чтобы в тексте далее подставились  
<span id="pt">параметры</span>:

<input type="text" size="30" id="email" />
<button onClick="calc(this);">Ввод</button>

Также Вам надо узнать в ИТ-отделе назначенный Вам **VPN пароль** и **Общий ключ**.  
А **Ваш пароль** от рабочего компьютера Вы должны знать сами.

## Этап 1. Настройки подключения

### Apple iOS, iPadOS

Настройки – VPN – Добавить конфигурацию VPN...

|| Параметр |
---|---
Тип: | <span>L2TP</span>
Описание: | <span id="i0">Название</span>
Сервер: | <span id="i1">Адрес</span>
Учетная запись: | <span id="i2">VPN логин</span>
RSA SecurID: | <span>выкл</span>
Пароль: | <span id="i3">VPN пароль</span>
Общий ключ: | <span id="ik">Общий ключ</span>
Для всех данных: | <span>выкл</span>

### Google Android

Настройки – Беспроводные сети – VPN – Добавить сеть VPN

|| Параметр |
---|---
Имя: | <span id="a0">Название</span>
Тип: | <span>L2TP/IPSec PSK</span>
Сервер: | <span id="a1">Адрес</span>
Общий ключ IPSec: | <span id="ak">Общий ключ</span>

|| Параметр |
---|---
Имя пользователя: | <span id="a2">VPN логин</span>
Пароль: | <span id="a3">VPN пароль</span>

<span>x</span> Сохранить учетные данные

## Этап 2. Двухшаговая проверка

Нет отличий от общей [инструкции][back] за исключением того, что страница
настройки двухшаговой проверки не открывается автоматически после подключения
VPN. Необходимо запустить браузер и открыть данную страницу вручную
(можно здесь кликнуть, если эта инструкция на том же устройстве):

<span id="l4">https://Шлюз:4081//nonauth/totpVerify.cs</span>

Далее настроить двухшаговую проверку по [инструкции][2fa] и сохранить
на 30 дней.

## Этап 3. Удаленный рабочий стол

Установить **Microsoft Remote Desktop** -  
[Читать о нем для разных платформ на сайте Microsoft.][RD clients]

А затем ввести адрес шлюза подключения и учетные данные Вашего рабочего
компьютера (как на работе):

|| Параметр |
---|---
Имя компьютера: | <span id="p4">Шлюз</span>
Имя пользователя: | <span id="p5">Ваш логин</span>
Пароль: | <span id="p6">Ваш пароль</span>

---

[Назад][back]

[2fa]: /vpn/2fa "Настройка двухшаговой проверки"
[RD clients]: https://docs.microsoft.com/ru-ru/windows-server/remote/remote-desktop-services/clients/remote-desktop-clients "Клиенты RDP"
[back]: /vpn "Основная инструкция"
