---
permalink: /vpn/
---
# Удаленное подключение

Инструкция по подключению к удаленному рабочему столу.  
Редакция: {{ 'now' | date: "%Y-%m-%d" }}

<script>function calc(btn){
var e=document.getElementById('email').value.trim();
var c=document.getElementById('code').value;
if(/^.+@...+\...+/.test(e)){var x=/(.+)@((..(.+))\...+)/;
document.getElementById('pt').innerHTML='Ваши параметры';
document.getElementById('p0').innerHTML=e.replace(x,'$3');
document.getElementById('p1').innerHTML=e.replace(x,'mail.$2');
l1=e.replace(x,'https://$2/client/');
document.getElementById('l1').innerHTML=
'<a target="_blank" href="'+l1+'">'+l1+'</a>';
document.getElementById('p2').innerHTML=e.replace(x,'$1');
document.getElementById('p3').innerHTML=c.replace(/\s/g,'');
document.getElementById('p4').innerHTML=e.replace(x,'mstsc /v:kerio.$2');
document.getElementById('p5').innerHTML=e.replace(x,'$4\\$1');
document.getElementById('p6').innerHTML='Ваш пароль ***';
btn.innerHTML='Готово!';
}else{alert('Укажите email!');}}</script>

Укажите здесь:

1. **Адрес Вашей рабочей электронной почты**:  
<input type="text" size="30" id="email"/>
2. **Дополнительный код** (сообщает ИТ):  
<input type="text" size="15" id="code"/>
3. Кликните кнопку **Ввод**,
чтобы в тексте далее подставились <span id="pt">параметры</span>:  
<button onClick="calc(this);">Ввод</button>

## Процедура

Подключение происходит в несколько последовательных этапов, когда каждый
последующий не будет действовать, пока полностью не выполнен предыдущий.

Данная общая инструкция для клиента VPN для систем **Microsoft Windows**,
есть также отдельные дополнения для [Apple macOS][macos], есть альтернативные
инструкции для IPSec в [Windows][ipsec-win], [macOS][ipsec-mac] и
[других устройствах][IPSec].
Есть инструкции по установке клиента для систем Debian и Ubuntu [Linux][linux].

Все картинки кликабельны для увеличения. При обращении за помощью
сообщайте номер картинки, на которой Вы застряли.

## Этап 1. Программа подключения

Для установки защищенного соединения между Вашим домашним и рабочим компьютером
требуется программа **Kerio Control VPN Client** ([где взять?][download]
<span id="l1">зеркало</span>).

Установите, запустите и введите из Ваших учетных данных:

|||
---|---
Соединение: | <span id="p0">Название</span>
Сервер: | <span id="p1">Адрес</span>
Имя пользователя: | <span id="p2">VPN логин</span>
Пароль: | <span id="p3">VPN пароль</span>

Пароль можно сохранить, если доступ к компьютеру имеете только Вы.

[![th-connect]][pic-connect] #1

Если Сервер не найден - попробуйте после имени добавить точку: `ru.`

## Этап 2. Двухшаговая проверка

Для защиты от кражи Ваших учетных данных требуются одноразовые **6-значные**
коды подтверждения. Удобнее и безопаснее их получать с помощью смартфона.

* На смартфоне требуется программа типа **Microsoft Authenticator**
([где взять?][appstore]).
* Без смартфона придется использовать [TOTP Calculator] вручную.

Предварительно эту систему проверки надо [настроить][2fa]:

[![th-2fa-setup]][pic-2fa-setup] #2

Или ввести новый код подтверждения после каких-нибудь изменений:

[![th-30days]][pic-30days] #3

**Если код не подходит, то следует проверить точность времени и часовой пояс
на смартфоне (особенно на старых версиях Android) и компьютере.**

Не переходите к следующему этапу, пока не получите веб-страницу с сообщением
"Вы подключены":

[![th-connected]][pic-connected] #4

## Этап 3. Удаленный рабочий стол

У Вас MacBook? Для Вас отдельная [инструкция][macos].

Нажмите клавиши **Win+R** ([где это?][WinR]) и введите (скопируйте отсюда)
в поле Выполнить:

<span id="p4">mstsc /v:Шлюз</span>

**Обратите внимание, что в этой строке есть пробел перед косой чертой и она
именно с таким наклоном.**

[![th-run]][pic-run] #5

Также Вы можете запускать эту программу, найдя ее в кнопке "Пуск" и настроив
ярлык (здесь это не объясняется):

[![th-rdp]][pic-rdp] #6

[Удаленному рабочему столу не удалось подключиться?][noreply]

[![th-noreply]][pic-noreply] #7

[Вопрос о доверии к этому удаленному подключению?][trust]

[![th-trust]][pic-trust] #8

Если все успешно, то Вы получите от Вашего рабочего компьютера приглашение
ввести (как на работе):

|||
---|---
Имя пользователя: | <span id="p5">Ваш логин</span>
Пароль: | <span id="p6">Ваш пароль</span> (Его знаете только Вы!)

Здесь пароль лучше никогда не сохранять, так как это уже Ваше рабочее место
с Вашими рабочими документами. Все, что вдруг пропадет по каким-то причинам,
это пропадет у Вас и под Вашу ответственность! Если Вам понадобится временно
отойти от компьютера, то сделайте временное [завершение работы][exit].

Картинка в разных версиях Windows может отличаться:

[![th-user2]][pic-user2] #9

После настройки достаточно будет только вводить пароль и нажимать кнопку "ОК".

[Вопрос о доверии к сертификату удаленного компьютера?][pc2]

[![th-pc2]][pic-pc2] #10

Теперь должен открыться Ваш удаленный рабочий стол в окне или в полный экран.
Вы сделали это!

[Как завершить работу?][exit]

[VPN Calculator]: /VPN.html "Генератор параметров для VPN"
[download]: download "Скачать"
[macos]: macos "На Макбуках"
[linux]: linux "На Linux"
[IPSec]: ipsec "На планшетах"
[ipsec-win]: ipsec-win "IPSec на Windows"
[ipsec-mac]: ipsec-mac "IPSec на Макбуках"
[appstore]: appstore "Authenticator"
[TOTP Calculator]: /TOTP.html "Генератор кодов TOTP"
[2fa]: 2fa "Настройка двухшаговой проверки"
[WinR]: win-r "Где найти Win+R"
[noreply]: noreply "Не удалось подключиться"
[trust]: trust "О доверии"
[pc2]: pc2 "О доверии"
[exit]: exit "Завершение работы"

[th-connect]: /assets/img/connect_t.png
[pic-connect]: /assets/img/connect.png "Установить соединение (кликните для увеличения)"
[th-2fa-setup]: /assets/img/2fa-setup_t.png
[pic-2fa-setup]: /assets/img/2fa-setup.png "Настроить двухшаговую проверку (кликните для увеличения)"
[th-30days]: /assets/img/30days_t.png
[pic-30days]: /assets/img/30days.png "Код подтверждения (кликните для увеличения)"
[th-connected]: /assets/img/connected_t.png
[pic-connected]: /assets/img/connected.png "Вы подключены (кликните для увеличения)"
[th-run]: /assets/img/run_t.png
[pic-run]: /assets/img/run.png "Выполнить (кликните для увеличения)"
[th-rdp]: /assets/img/rdp_t.png
[pic-rdp]: /assets/img/rdp.png "Подключение к удаленному рабочему столу (кликните для увеличения)"
[th-noreply]: /assets/img/noreply_t.png
[pic-noreply]: /assets/img/noreply.png "Не удалось подключиться? (кликните для увеличения)"
[th-trust]: /assets/img/trust_t.png
[pic-trust]: /assets/img/trust.png "Вопрос о доверии (кликните для увеличения)"
[th-user2]: /assets/img/user2_t.png
[pic-user2]: /assets/img/user2.png "Введите учетные данные (кликните для увеличения)"
[th-pc2]: /assets/img/pc2_t.png
[pic-pc2]: /assets/img/pc2.png "Вопрос о доверии (кликните для увеличения)"
