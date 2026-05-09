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
p_text_info_2: "Completed a seven-month internship at the Tallinn Tondiraba Hobby School.",
p_text_info_3: "",
p_text_info_4: "",
p_text_info_5: "",
p_text_info_6: "",
p_text_info_7: "",
operator_cleaning: "Operator cleaning - level 3",

exp_1: "",
exp_2: "",
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
p_text_info_1: "Младший ИТ-Специалист с разнобразным опытом.",
p_text_info_2: "Проходила семи месячную стажировку в Таллиннской Школе Тондираба по интересам.",
p_text_info_3: "Занималась установкой и настройкой сетевого оборудования (кабели, роутеры UniFi,  ",
p_text_info_4: "коммутаторы TP-Link и Zyxel), подключением компьютеров и IP-телефонов. ",
p_text_info_5: "Работала с Linux Ubuntu Server, настраивала права пользователей.",
p_text_info_6: "",
p_text_info_7: "",
operator_cleaning: "Оператор уборки - уровень 3",

exp_1: "",
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

exp_1: "",
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