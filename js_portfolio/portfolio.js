function scrollToId(id){
document.getElementById(id).scrollIntoView({behavior:'smooth'});
}

function copyEmail(){
const text=document.getElementById("emailText").innerText;
navigator.clipboard.writeText(text);
alert("Email copied");
}

const translations={
en:{
nav_info:"Information",
nav_exp:"Experience",
nav_skills:"Skills",
nav_contacts:"Contacts",
info_title:"Information:",
info_name:"I'm Darja Potak",
info_role:"I'm IT-Junior Specialist and Full-Stack Developer",
skills_title:"Skills:",
projects_title:"Projects:",
edu_title:"Education:",
exp_title:"Experience:",
contacts_title:"Contacts:",

name_Specialist_1: "Junior IT Systems - Level 4",
name_Specialist_2: "IT-Techician - Level 4",

p_text_info_1: "Junior IT Specialist with diverse experience.",
p_text_info_2: "I'm completed a seven-month internship at the Tallinn Tondiraba Hobby School.",
p_text_info_3: "I installed and configured network equipment (cables, UniFi routers, TP-Link and Zyxel switches), ",
p_text_info_4: "connected computers and IP phones.",
p_text_info_5: "I worked with Linux Ubuntu Server and managed user permissions.",
p_text_info_6: "I also used Windows 10/11 and Microsoft 365 (Word, Excel, Teams, OneDrive) and helped set up workstations.",
p_text_info_7: "and helped set up workstations.",
p_text_info_8: "I provided IT support to staff and students, maintained printers and projectors, and supported technical equipment during events.",
p_text_info_9: "I also have basic experience in Python programming.",
p_text_info_10: "I completed from Tallinn Industrial Education Center in 2024.",

Month_1: "August 2020 - Juny 2024",
Month_2: "January 2026 - May 2026",

progects_desc: "Project Description:",
Technologies_desc: "Technologies:",

operator_cleaning: "Operator cleaning - level 3",

html_css: "- HTML and CSS",
git_github: "- Git and GitHub",
html_css_javaScript: "- HTML , CSS and JavaScript",

text_portfolio_progects: "It's my portfolio. It's website write HTML , CSS and JavaScript.",

link_pages: "Link Pages",
github_pages: "GitHub Repositor",
link_pages_coming: "Link Pages (coming soon)",
link_video: "Link Video",

skills_name: "Skills:",

exp_1: "Installing new network equipment:",
exp_1_2: "Laying Ethernet cables",
exp_1_3: "Installing new switches (model: TP-LINK, Zyxel)",
exp_1_4: "Installing new WI-FI routers (model: UniFi).",
exp_1_5: "Connecting classrooms to wired Internet",
exp_1_6: "Installing new computers",
exp_1_7: "Reconnecting IP phones",

exp_2: "Operating systems Linux:",
exp_2_1: "- Worked operating systems Linux Ubuntu Server (Setting up user rights for one study group)",

exp_3: "Working with Windows:",
exp_3_1: "- Many worked operating systems Windows 10/11",
exp_3_2: "- Worked with Microsoft Office 365 (Microsoft Word, Microsoft Excel, Microsoft PowerPoint, Teams, OneDrive)",
exp_3_3: "- Setting up the Desktop panel and screen for the convenience of work for school staff and students.",
exp_3_4: "- Setting up the network (For example: checking the issuance of IP addresses to computers)",

exp_4: "IT support:",
exp_4_1: "- Experience with peripheral equipment (printers, interactive whiteboards, plotters (poster printers), speakers, scanners and projectors)",
exp_4_2: "- Experience in technical support at events/concerts (working with a DJ mixer), holding concerts/events",
exp_4_3: "- Worked registration users (For example: add users for print remotely or registration personal school Teams)",
exp_4_4: "- Maintenance of printers, monitors/computers and projectors (wiping off dust, replacing cartridges in printers)",
exp_4_5: "- IT technical support for school staff and students in working with peripheral devices and computers.",

exp_5: "Programming:",
exp_5_1: "- Programmed practical work in Python",


manga_chan_1: "• End-to-end development of a multilingual web platform (RU / EN / EE)",
manga_chan_1_2: "• UI/UX design and layout using HTML5 and modern CSS",
manga_chan_1_3: "• Frontend development with JavaScript and React:",
manga_chan_1_4: "– building multilingual pages",
manga_chan_1_5: "– optimizing performance",
manga_chan_1_6: "– implementing additional interactive features",

manga_chan_2: "• Backend development with Python (Flask):",
manga_chan_2_2: "– REST API design",
manga_chan_2_3: "– data interaction and routing logic",

manga_chan_7: "• Version control with Git:",
manga_chan_7_2: "– active branching and commits",
manga_chan_7_3: "– restoring and maintaining previous versions",

manga_chan_9: "• Infrastructure and deployment:",
manga_chan_9_2: "– Linux (Ubuntu, CentOS 7)",
manga_chan_9_3: "– Docker-based environment",
manga_chan_9_4: "– Ansible automation",
manga_chan_9_5: "– automated setup of Apache2 and MongoDB using Ansible + Docker",

manga_chan_10_1: "• Working MagicalVoxel:",
manga_chan_10_2: "- Creating a logo shape for a website",
manga_chan_10_3: "- Converting a MagicaVoxel file to .obj",


wordpress_1: "Project Goals",
wordpress_1_1: "Automate web server setup",
wordpress_1_2: "Infrastructure as code (IaC)",
wordpress_1_3: "Deploy a web application without manual intervention",

wordpress_2_1: "What's implemented",
wordpress_2_2: "Installation and configuration of LAMP stack components:",
wordpress_2_3: "- Apache2",

wordpress_3_1: "- MariaDB (MySQL compatible)",
wordpress_3_2: "- PHP and modules",
wordpress_3_3: "- Automate systemd services (enable + start)",
wordpress_3_4: "- Create a WordPress database and user",

wordpress_4: "- Automatic WordPress download and unpacking",
wordpress_4_1: "- Configure a web directory and access rights",
wordpress_4_2: "- Create an Apache virtual host",
wordpress_4_3: "- Enabling a site, disabling default-site",
wordpress_4_4: "- Upgrade PHP to version 8.3",

powershell_1: "- Automation",
powershell_1_2: "- Networking basics",
powershell_1_3: "- Domain configuration",

powershell_2: "Developed a multi-step PowerShell script to automate the setup of a server infrastructure on Windows Server. The script performs a full deployment of the base corporate environment and web service.",
powershell_2_1: "- Automated server renaming and rebooting",

powershell_2_7: "- DNS server + forward and reverse lookup zones",
powershell_2_3: "Configured the network stack:",
powershell_2_4: "- Static IP",
powershell_2_5: "- DHCP pool + options",
powershell_2_6: "- NAT and routing",

powershell_3_1: "Automated the installation and configuration of server roles:",
powershell_3_2: "- Active Directory Domain Services",
powershell_3_3: "- Deployed a PHP + MySQL stack",
powershell_3_4: "- Automated database and user creation in MySQL",
powershell_3_5: "- Uploaded and configured WordPress on IIS",
powershell_3_6: "- Organized the script's execution in stages (staged launch)",
powershell_3_7: "- Added user creation in Active Directory",
cont: "Contacts:",
},



ru:{
nav_info:"Информация",
nav_exp:"Опыт",
nav_skills:"Навыки",
nav_contacts:"Контакты",
info_title:"Информация:",
info_name:"Я Дарья Потак",
info_role:"Я Младший IT-специалист и Младший Full-Stack разработчик",
skills_title:"Навыки:",
projects_title:"Проекты:",
edu_title:"Образование:",
exp_title:"Опыт:",
contacts_title:"Контакты:",

name_Specialist_1: "Младший специалист по ИТ-системам - Уровень 4",
name_Specialist_2: "ИТ-техник - Уровень 4",

p_text_info_1: "Младший IT-специалист с разнообразным опытом».",
p_text_info_2: "Я завершил семимесячную стажировку в Таллиннской школе хобби Тондираба».",
p_text_info_3: "Я устанавливал и настраивал сетевое оборудование (кабели, маршрутизаторы UniFi, коммутаторы TP-Link и Zyxel)».",
p_text_info_4: "подключал компьютеры и IP-телефоны».",
p_text_info_5: "Я работал с Linux Ubuntu Server и управлял правами пользователей».",
p_text_info_6: "Я также использовал Windows 10/11 и Microsoft 365 (Word, Excel, Teams, OneDrive) и помогал настраивать рабочие станции».",
p_text_info_7: "и помогал настраивать рабочие станции».",
p_text_info_8: "Я оказывал IT-поддержку сотрудникам и студентам, обслуживал принтеры и проекторы, а также поддерживал техническое оборудование во время мероприятий.",
p_text_info_9: "У меня также есть базовый опыт программирования на Python.",
p_text_info_10: "Я закончил Таллиннский центр промышленного образования в 2024 году.",

operator_cleaning: "Оператор уборки - уровень 3",

html_css: "- HTML и CSS",
git_github: "- Git и GitHub",
html_css_javaScript: "- HTML , CSS и JavaScript",

text_portfolio_progects: "Это мое портфолио. Этот сайт написан на HTML , CSS и JavaScript.",

link_pages: "Страницы ссылок",
github_pages: "Репозиторий GitHub",
link_pages_coming: "Страницы ссылок (скоро будут доступны)",
link_video: "Видео ссылки",

skills_name: "Скиллы:",

progects_desc: "Описание проекта:",
Technologies_desc: "Технологии:",

Month_1: "Август 2020 г. - июнь 2024 г.",
Month_2: "Январь 2026 г. - май 2026 г.",

exp_1: "Установка нового сетевого оборудования",
exp_1_2: "Прокладка кабелей Ethernet",
exp_1_3: "Установка новых коммутаторов (модель: TP-LINK, Zyxel)",
exp_1_4: "Установка новых Wi-Fi роутеров (модель: UniFi)",
exp_1_5: "Подключение аудиторий к проводному интернету",
exp_1_6: "Установка новых компьютеров",
exp_1_7: "Повторное подключение IP-телефонов",

exp_2: "Операционные системы Linux",
exp_2_1: "Работа с операционными системами Linux, Ubuntu Server (настройка прав пользователей для одной учебной группы)",

exp_3: "Работа с Windows:",
exp_3_1: "- Много работал с операционными системами Windows 10/11",
exp_3_2: "- Работал с Microsoft Office 365 (Microsoft Word, Microsoft Excel, Microsoft PowerPoint, Teams, OneDrive)",
exp_3_3: "- Настройка панели рабочего стола и экрана для удобства работы школьного персонала и учащихся.",
exp_3_4: "- Настройка сети (например, проверка выдачи IP-адресов компьютерам)",

exp_4: "ИТ-поддержка:",
exp_4_1: "- Опыт работы с периферийным оборудованием (принтеры, интерактивные доски, плоттеры (принтеры для плакатов), колонки, сканеры и проекторы)",
exp_4_2: "- Опыт технической поддержки на мероприятиях/концертах (работа с диджейским микшером), проведение концертов/мероприятий",
exp_4_3: "- Работа с регистрацией пользователей (например, добавление пользователей для удаленной печати или личная регистрация в школьных командах Teams)",
exp_4_4: "- Техническое обслуживание принтеров, мониторов/компьютеров и проекторов (удаление пыли, замена картриджей в принтерах)",
exp_4_5: "- ИТ-техническая поддержка школьного персонала и учащихся при работе с периферийными устройствами и компьютерами.",
exp_5: "Программирование:",
exp_5_1: "- Практическая работа по программированию на Python",

manga_chan_1: "• Разработка многоязычной веб-платформы (RU / EN / EE)",
manga_chan_1_2: "• Дизайн и верстка UI/UX с использованием HTML5 и современного CSS",
manga_chan_1_3: "• Разработка фронтенда с использованием JavaScript и React:",
manga_chan_1_4: "- создание многоязычных страниц",
manga_chan_1_5: "- оптимизация производительности",
manga_chan_1_6: "- реализация дополнительных интерактивных функций",

manga_chan_2: "• Разработка бэкенда на Python (Flask):",
manga_chan_2_2: "- проектирование REST API",
manga_chan_2_3: "- взаимодействие с данными и логика маршрутизации",

manga_chan_7: "• Контроль версий с помощью Git:",
manga_chan_7_2: "- активное ветвление и коммиты",
manga_chan_7_3: "– восстановление и поддержка предыдущих версий",

manga_chan_9: "• Инфраструктура и развертывание:",
manga_chan_9_2: "– Linux (Ubuntu, CentOS 7)",
manga_chan_9_3: "– Среда на основе Docker",
manga_chan_9_4: "– Автоматизация Ansible",
manga_chan_9_5: "– автоматическая настройка Apache2 и MongoDB с использованием Ansible + Docker",

manga_chan_10_1: "• Работа с MagicalVoxel:",
manga_chan_10_2: "- Создание формы логотипа для веб-сайта",
manga_chan_10_3: "- Преобразование файла MagicaVoxel в .obj",

wordpress_1: "Цели проекта",
wordpress_1_1: "Автоматизация настройки веб-сервера",
wordpress_1_2: "Инфраструктура как код(IaC)",
wordpress_1_3: "Развертывание веб-приложения без ручного вмешательства",

wordpress_2_1: "Что реализовано",
wordpress_2_2: "Установка и настройка компонентов стека LAMP:",
wordpress_2_3: "- Apache2",

wordpress_3_1: "- MariaDB (совместимая с MySQL)",
wordpress_3_2: "- PHP и модули",
wordpress_3_3: "- Автоматизация служб systemd (включение + запуск)",
wordpress_3_4: "- Создание базы данных и пользователя WordPress",

wordpress_4: "- Автоматическая загрузка и распаковка WordPress",
wordpress_4_1: "- Настройка веб-каталога и прав доступа",
wordpress_4_2: "- Создание виртуального хоста Apache",
wordpress_4_3: "- Включение сайта, отключение default-site",
wordpress_4_4: "- Обновление PHP до версии 8.3",

powershell_1: "- Автоматизация",
powershell_1_2: "- Основы сетевых технологий",
powershell_1_3: "- Настройка доменной инфраструктуры",

powershell_2: "Разработал многоэтапный PowerShell-скрипт для автоматизации настройки серверной инфраструктуры на Windows Server. Скрипт выполняет полное развертывание базовой корпоративной среды и веб-сервиса.",
powershell_2_1: "- Автоматизировано переименование сервера и его перезагрузка",

powershell_2_7: "- DNS-сервер + зоны прямого и обратного просмотра",
powershell_2_3: "Настроен сетевой стек:",
powershell_2_4: "- Статический IP-адрес",
powershell_2_5: "- DHCP-пул и параметры DHCP",
powershell_2_6: "- NAT и маршрутизация",

powershell_3_1: "Автоматизирована установка и настройка серверных ролей:",
powershell_3_2: "- Active Directory Domain Services",
powershell_3_3: "- Развернут стек PHP + MySQL",
powershell_3_4: "- Автоматизировано создание базы данных и пользователя MySQL",
powershell_3_5: "- Выполнена загрузка и настройка WordPress на IIS",
powershell_3_6: "- Организовано поэтапное выполнение скрипта",
powershell_3_7: "- Добавлено создание пользователей в Active Directory",

cont: "Контакты:",

},




et:{
nav_info:"Info",
nav_exp:"Kogemus",
nav_skills:"Oskused",
nav_contacts:"Kontakt",
info_title:"Info:",
info_name:"Mina olen Darja Potak",
info_role:"Olen IT-juunior spetsialist ja Full-Stack arendaja",
skills_title:"Oskused:",
projects_title:"Projektid:",
edu_title:"Haridus:",
exp_title:"Töökogemus:",
contacts_title:"Kontakt:",

name_Specialist_1: "IT-süsteemide juunior - 4. tase",
name_Specialist_2: "IT-tehnik - 4. tase",

p_text_info_1: "Noorem IT-spetsialist mitmekülgse kogemusega.",
p_text_info_2: "Läbin seitsmekuulise praktika Tallinna Tondiraba Huvikoolis.",
p_text_info_3: "Paigaldasin ja konfigureerisin võrguseadmeid (kaablid, UniFi ruuterid, TP-Linki ja Zyxeli lülitid),",
p_text_info_4: "Ühendasin arvuteid ja IP-telefone.",
p_text_info_5: "Töötasin Linux Ubuntu Serveriga ja haldasin kasutajaõigusi.",
p_text_info_6: "Kasutasin ka Windows 10/11 ja Microsoft 365 (Word, Excel, Teams, OneDrive) ning aitasin tööjaamu seadistada.",
p_text_info_7: "ja aitasin tööjaamu seadistada.",
p_text_info_8: "Pakkusin töötajatele ja õpilastele IT-tuge, hooldasin printereid ja projektoreid ning toetasin tehnilisi seadmeid ürituste ajal.",
p_text_info_9: "Mul on ka Pythoni põhikogemus. programmeerimine.",
p_text_info_10: "Lõpetasin Tallinna Tööstushariduskeskuse 2024. aastal.",

Month_1: "August 2020 - juuni 2024",
Month_2: "Jaanuar 2026 - Mai 2026",

progects_desc: "Projekti kirjeldus:",
Technologies_desc: "Tehnoloogiad:",

operator_cleaning: "Puhastusteenindaja - tase 3",

html_css: "- HTML ja CSS",
git_github: "- Git ja GitHub",
html_css_javaScript: "- HTML , CSS ja JavaScript",

text_portfolio_progects: "See on minu portfoolio. See on veebilehe kirjutamise HTML, CSS ja JavaScript.",

link_pages: "Lingilehed",
github_pages: "GitHubi repositoorium",
link_pages_coming: "Lingilehed (varsti tulekul)",
link_video: "Lingivideo",

skills_name: "Oskused:",

exp_1: "Uute võrguseadmete paigaldamine:",
exp_1_2: "Etherneti kaablite paigaldamine",
exp_1_3: "Uute kommutaatorite paigaldamine (mudel: TP-LINK, Zyxel)",
exp_1_4: "Uute WiFi-ruuterite paigaldamine (mudel: UniFi)",
exp_1_5: "Klasside ühendamine juhtmega internetiga",
exp_1_6: "Uute arvutite paigaldamine",
exp_1_7: "IP-telefonide taasühendamine",

exp_2: "Operatsioonisüsteemid Linux:",
exp_2_1: "- Töötasin operatsioonisüsteemidega Linux Ubuntu Server (kasutajaõiguste seadistamine ühele õpperühmale)",

exp_3: "Töötasin Windowsiga:",
exp_3_1: "- Töötasin paljude operatsioonisüsteemidega Windows 10/11",
exp_3_2: "- Töötasin Microsoft Office 365-ga (Microsoft Word, Microsoft Excel, Microsoft PowerPoint, Teams, OneDrive)",
exp_3_3: "- Töölauapaneeli ja ekraani seadistamine mugavuse tagamiseks töö kooli töötajatele ja õpilastele.",
exp_3_4: "- Võrgu seadistamine (näiteks: arvutite IP-aadresside väljastamise kontrollimine)",

exp_4: "IT-tugi:",
exp_4_1: "- Kogemus välisseadmetega (printerid, interaktiivsed tahvlid, plotterid (plakatiprinterid), kõlarid, skannerid ja projektorid)",
exp_4_2: "- Kogemus tehnilise toe pakkumisel üritustel/kontsertidel (DJ-mikseriga töötamine), kontsertide/ürituste korraldamine",
exp_4_3: "- Kasutajate registreerimine (näiteks: kasutajate lisamine printimiseks kaugjuhtimise teel või kooli isiklike meeskondade registreerimine)",
exp_4_4: "- Printerite, monitoride/arvutite ja projektorite hooldus (tolmu pühkimine, printerikassettide vahetamine)",
exp_4_5: "- IT-tehniline tugi kooli töötajatele ja õpilastele välisseadmete ja arvutitega töötamisel.",

exp_5: "Programmeerimine:",
exp_5_1: "- Programmeeritud praktiline töö Pythonis",

manga_chan_1: "• Mitmekeelse veebiplatvormi (RU / EN / EE) terviklik arendus",
manga_chan_1_2: "• UI/UX disain ja paigutus HTML5 ja kaasaegse CSS-i abil",
manga_chan_1_3: "• Front-end arendus JavaScripti ja Reactiga:",
manga_chan_1_4: "– mitmekeelsete lehtede loomine",
manga_chan_1_5: "– jõudluse optimeerimine",
manga_chan_1_6: "– täiendavate interaktiivsete funktsioonide rakendamine",

manga_chan_2: "• Back-end arendus Pythoniga (Flask):",
manga_chan_2_2: "– REST API disain",
manga_chan_2_3: "– andmete interaktsioon ja marsruutimise loogika",

manga_chan_7: "• Versioonikontroll Gitiga:",
manga_chan_7_2: "– aktiivne hargnemine ja commit'id",
manga_chan_7_3: "– eelmiste versioonide taastamine ja hooldamine",

manga_chan_9: "• Infrastruktuur ja juurutamine:",
manga_chan_9_2: "– Linux (Ubuntu, CentOS 7)",
manga_chan_9_3: "– Dockeril põhinev keskkond",
manga_chan_9_4: "– Ansible'i automatiseerimine",
manga_chan_9_5: "– Apache2 ja MongoDB automatiseeritud seadistamine Ansible + Dockeri abil",

manga_chan_10_1: "• MagicalVoxeliga töötamine:",
manga_chan_10_2: "- Veebisaidi logo kuju loomine",
manga_chan_10_3: "- MagicaVoxeli faili teisendamine .obj-failiks",

wordpress_1: "Projekti eesmärgid",
wordpress_1_1: "Veebiserveri seadistamise automatiseerimine",
wordpress_1_2: "Infrastruktuur koodina (IaC)",
wordpress_1_3: "Veebirakenduse juurutamine ilma käsitsi sekkumiseta",

wordpress_2_1: "Mis on rakendatud",
wordpress_2_2: "LAMP-i pinu komponentide installimine ja seadistamine:",
wordpress_2_3: "- Apache2",

wordpress_3_1: "- MariaDB (MySQL-iga ühilduv)",
wordpress_3_2: "- PHP ja moodulid",
wordpress_3_3: "- Systemd teenuste automatiseerimine (lubamine + käivitamine)",
wordpress_3_4: "- WordPressi andmebaasi ja kasutaja loomine",

wordpress_4: "- WordPressi automaatne allalaadimine ja lahtipakkimine",
wordpress_4_1: "- Veebikataloogi ja juurdepääsuõiguste seadistamine",
wordpress_4_2: "- Apache virtuaalse hosti loomine",
wordpress_4_3: "- Saidi lubamine, vaikesaidi keelamine",
wordpress_4_4: "- PHP uuendamine versioonile 8.3",

powershell_1: "- Automatiseerimine",
powershell_1_2: "- Võrgutehnoloogiate alused",
powershell_1_3: "- Domeenitaristu seadistamine",

powershell_2: "Arendasin mitmeetapilise PowerShelli skripti Windows Serveri serveritaristu automatiseeritud seadistamiseks. Skript teostab ettevõtte põhikeskkonna ja veebiteenuse täieliku juurutamise.",
powershell_2_1: "- Serveri ümbernimetamise ja taaskäivitamise automatiseerimine",

powershell_2_7: "- DNS-server ning edasi- ja pöördotsingu tsoonid",
powershell_2_3: "Seadistatud võrguinfrastruktuur:",
powershell_2_4: "- Staatiline IP-aadress",
powershell_2_5: "- DHCP vahemik ja DHCP seaded",
powershell_2_6: "- NAT ja marsruutimine",

powershell_3_1: "Automatiseeritud serverirollide paigaldamine ja seadistamine:",
powershell_3_2: "- Active Directory Domain Services",
powershell_3_3: "- PHP + MySQL keskkonna juurutamine",
powershell_3_4: "- MySQL andmebaasi ja kasutaja loomise automatiseerimine",
powershell_3_5: "- WordPressi paigaldamine ja seadistamine IIS-is",
powershell_3_6: "- Skripti etapiviisilise käivitamise korraldamine",
powershell_3_7: "- Kasutajate loomise lisamine Active Directorysse",

cont: "Kontaktid:",

}
};

function setLang(lang){
document.querySelectorAll("[data-i18n]").forEach(el=>{
el.innerText=translations[lang][el.dataset.i18n];
});
}