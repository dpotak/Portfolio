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
IT_Junior: "Junior IT Systems - Level 4",
IT_tech: "IT-Techician - Level 4",

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

operator_cleaning: "Operator cleaning - level 3",

exp_1: "Installing new network equipment:",
exp_1_2: "Laying Ethernet cables",
exp_1_3: "Installing new switches (model: TP-LINK, Zyxel)",
exp_1_4: "Installing new WI-FI routers (model: UniFi).",
exp_1_5: "Connecting classrooms to wired Internet",
exp_1_6: "Installing new computers",
exp_1_7: "Reconnecting IP phones",

exp_2: "",
exp_2: "",
exp_2: "",
exp_2: "",
exp_2: "",

exp_3: "",
exp_3: "",
exp_3: "",
exp_3: "",
exp_3: "",

exp_4: "",
exp_5: "",
exp_6: "",
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
p_text_info_1: "Mitmekesise kogemusega noorem IT-spetsialist.",
p_text_info_2: "Läbis seitsmekuulise praktika Tallinna Tondiraba huvikoolis.",
p_text_info_3: "",
p_text_info_4: "",
p_text_info_5: "",
p_text_info_6: "",
p_text_info_7: "",
operator_cleaning: "",

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