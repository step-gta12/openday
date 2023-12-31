const data = [
    {   dt: '21.01.2023       11.00-15.00',
        title: '"День открытых дверей". Знакомство с факультетом "Современных технологий"',
        descr: "Посетители колледжа познакомятся с профессией автомеханик,столяр, паркетчик. Участники мастер-класса смогут познакомятся с устройством коробки передач, выполнить работы по разборке механической коробки переключения передач, выполнить ее диагностику и последующую сборку согласно технической документации завода изготовителя. Участники мастер класса по столярному делу ознакомятся с переносом разметки с чертежа на заготовки, разделив его на отдельные составляющие. Изготовление деталей, сборка готового изделия. Участники мастер класса по паркетным работам ознакомятся с основами укладки паркета «Ёлочкой», изготовление паркетного щита.",
        photo: "./img/dvdf.jpg",
        adres: 'город Москва, ул.Вербная, д. 4, стр.1',
        ph: '8(499)167-11-09, 8(977)739-93-30'
        
    },
    {   
        dt: '24.01.2023	14.00-17.00',
        title: "Знакомьтесь: Факультет Мегадизайн",
        descr: "Знакомство с факультетом Мегадизайн, экскурсия, индивидуальные консультации",
        adres: 'город Москва, Сиреневый бульвар, д. 4Г',
        ph: '8(499)164-38-26, 8(499)164-88-11'
    },
    {   dt: '18.02.2023	11.00-14.00',
        title: "Профсреда: Художник по костюму",
        descr: "Мастер-класс по наколке. Участники смогут познакомиться с профессией Художник по костюму, а также изучить технику наколки. Индивидуальные консультации",
        adres: 'город Москва, Сиреневый бульвар, д. 4Г',
        ph: '8(499)164-38-26, 8(499)164-88-11'
    },
    {
        dt: '21.02.2023	11.00',
        title: '"День открытых дверей". Знакомство с отделением Школы для обучающихся с ОВЗ по слуху (набор детей в 1 класс)',
        descr: "Экскурсия по школе. Фрагменты уроков внеурочной деятельности и дополнительного образования. Фрагмент индивидуальных занятий по восприятию и воспроизведению устной речи",
    
        adres: 'город Москва, Реутовская ул., д.22Б',
        ph: '8(495)370-03-03',
        wh: 'WhatsApp: 8(915)124-66-98',
        mail: 'mail: school-ovz@21tk.ru'
    },
    {
        dt: '28.03.2023	14.00-17.00',
        title: "Кто такой дизайнер интерьера",
        descr: 'На мастер-классе участники смогут создать свой авторский предмет декора интерьера. Знакомство со специальностью Дизайн (по отраслям). Индивидуальные консультации. Запись на подготовительные курсы по специальности "Дизайн (по отраслям)"',
    
        adres: 'город Москва, Сиреневый бульвар, д. 4Г',
        ph: '8(499)164-38-26, 8(499)164-88-11'
    },
    {
        dt: '24.03.2023	13:00-17:00',
        title: "День открытых дверей",
        descr: "На мероприятие приглашаются обучающиеся с ОВЗ (инвалиды) 9-х классов образовательных организаций г.Москвы, родители (законные представители) обучающихся. В программе экскурсия по творческим мастерским; консультация педагога-психолога; проведение мастер-классов; индивидуальные задания для обучающихся при знакомстве с мастерской",
        
        adres: 'город Москва, Сиреневый бульвар, д. 4Г Центр социальной адаптации и профессиональной подготовки',
        ph: '8(977)739-93-30, 8(499)160-12-01, 8(977)739-93-30'
    },
    {
        dt: '25.03.2023	11.00',
        title: "День открытых дверей. Факультет современных технологий",
        descr: "В ходе мероприятия каждый участник сможет значительно расширить свои представления о профессиональных ресурсах колледжа, получить информацию о производственных возможностях лабораторий и мастерских, поучаствовать в мастер-классах: «Устройство коробки передач»;«Знакомство с современным сварочным оборудованием, принцип работы сварочного полуавтомата»;«Что такое САПР, применение, базовые возможности САПР, Autodesk, Inventor. Редактирование трёхмерной модели»; «Наземный оператор средств управления беспилотным летательным аппаратом»; «Изготовитель художественных изделий из керамики». Консультация специалистов приёмной комиссии.",
    
        adres: 'город Москва, ул.Вербная, д. 4, стр.1',
        ph: '8(499)167-11-09, 8(977)739-93-30'
    },
    {
        dt: '15.04.2023	11.00-14.00',
        title: "Профсреда: Информационные системы и программирование",
        descr: 'Участники мастер-класса смогут познакомиться со структурой сайта, с программным обеспечением. Знакомство со специальностью Информационные системы и программирование. Индивидуальные консультации. Запись на подготовительные курсы по специальности "Дизайн (по отраслям)"',
    
        adres: 'город Москва, Сиреневый бульвар, д. 4Г',
        ph: '8(499)164-38-26, 8(499)164-88-11'
    },
    {
        dt: '22.04.2023	11:00',
        title: "Факультет современных технологий",
        descr: "В ходе мероприятия каждый участник сможет значительно расширить свои представления о профессиональных ресурсах колледжа, получить информацию о производственных возможностях лабораторий и мастерских, поучаствовать в мастер-классах: «Устройство коробки передач»;  «Знакомство с современным сварочным оборудованием, принцип работы сварочного полуавтомата» Мастер класс по столярному делу. Изготовление крючка. Мастер класс по Веб-дизайну. В рамках мастер класса будем разрабатывать макет лендинга в Figma под различные устройства",
    
        adres: 'город Москва, ул.Вербная, д. 4, стр.1',
        ph: '8(499)167-11-09, 8(977)739-93-30'
    },






    {
        dt: '20.05.2023	11:00',
        title: "День открытых дверейЗнакомьтесь: Факультет современных технологий",
        descr: 'Посетители колледжа познакомятся с профессией автомеханик, сварщик, столяр, паркетчик. Участники мастер-класса смогут познакомятся с устройством коробки передач, выполнить работы по разборке механической коробки переключения передач, выполнить ее диагностику и последующую сборку согласно технической документации завода изготовителя. Участники мастер класса по столярному делу изготовят "Подставку под телефон" Участники мастер класса по паркетным работам ознакомятся с основами укладки паркета «Ёлочкой», изготовление паркетного щита. Знакомство с современным сварочным оборудованием, принцип работы таврового соединения в нижнем положении.',
    
        adres: 'город Москва, ул.Вербная, д. 4, стр.1',
        ph: '8(499)167-11-09, 8(977)739-93-30'
    },
]
