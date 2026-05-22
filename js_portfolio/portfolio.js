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

operator_cleaning: "Operator cleaning - level 3",

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

manga_chan_10_1: "",
manga_chan_10_2: "",
manga_chan_10_3: "",


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

Month_1: "Август 2020 г. - июнь 2024 г.",
Month_2: "Январь 2026 г. - май 2026 г.",

exp_1: "Установка нового сетевого оборудования:",
exp_1_2: "Прокладка кабелей Ethernet",
exp_1_3: "Установка новых коммутаторов (модель: TP-LINK, Zyxel)",
exp_1_4: "Установка новых Wi-Fi роутеров (модель: UniFi)",
exp_1_5: "Подключение учебных классов к проводному интернету",
exp_1_6: "Установка новых компьютеров",
exp_1_7: "Повторное подключение IP-телефонов",

exp_2: "",
exp_3: "",
exp_4: "",
exp_5: "",
exp_6: "",

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

operator_cleaning: "Puhastusteenindaja - tase 3",

exp_1: "Uute võrguseadmete paigaldamine:",
exp_1_2: "Etherneti kaablite paigaldamine",
exp_1_3: "Uute kommutaatorite paigaldamine (mudel: TP-LINK, Zyxel)",
exp_1_4: "Uute WiFi-ruuterite paigaldamine (mudel: UniFi)",
exp_1_5: "Klassiruumide ühendamine juhtmega internetiga",
exp_1_6: "Uute arvutite paigaldamine",
exp_1_7: "IP-telefonide taasühendamine",

exp_2: "",
exp_3: "",
exp_4: "",
exp_5: "",
exp_6: "",

}
};

function setLang(lang){
document.querySelectorAll("[data-i18n]").forEach(el=>{
el.innerText=translations[lang][el.dataset.i18n];
});
}