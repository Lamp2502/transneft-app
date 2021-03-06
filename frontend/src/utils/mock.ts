import { SPECIFICATION_PATH, OWNER_PATH } from './constants'

export const user = {
  name: 'Нижегородская Анастасия Ярославовна',
  position: 'Менеджер',
  workPlace: 'АО “ВЫКСУНСКИЙ МЕТАЛЛУРГИЧЕСКИЙ ЗАВОД”',
}

export const documents = [
  {
    id: 1,
    date: '20.04.2021',
    documentType: 'Спецификация',
    documentNumber: 'СПЕЦ-87-2021',
    documentContent: 'На поставку МТР',
    documentContract: '№ПАО-87-2021 от 20.04.2021',
    documentStatus: 'Ознакомление',
    documentCustomer: 'ПАО "Транснефть"',
    documentPerformer: 'АО “Выксунский металлургический завод”',
    documentOrder: '0000',
  },
  {
    id: 2,
    date: '20.04.2021',
    documentType: 'Прейскурант',
    documentNumber: 'ПР-87-2021',
    documentContent: 'Цены на поставку к договору',
    documentContract: '№ПАО-87-2021 от 20.04.2021',
    documentStatus: 'Ознакомление',
    documentCustomer: 'ПАО "Транснефть"',
    documentPerformer: 'АО “Выксунский металлургический завод”',
    documentOrder: '0000',
  },
  {
    id: 3,
    date: '21.04.2021',
    documentType: 'График выполнения работ',
    documentNumber: 'ГВР-87-2021',
    documentContent: 'Для обьекта №1',
    documentContract: '№ПАО-87-2021 от 20.04.2021',
    documentStatus: 'Ознакомление',
    documentCustomer: 'ПАО "Транснефть"',
    documentPerformer: 'АО “Выксунский металлургический завод”',
    documentOrder: '0000',
  },
  {
    id: 4,
    date: '21.04.2021',
    documentType: 'Дополнительное соглашение',
    documentNumber: 'ДС-ПАО-88',
    documentContent: 'К договору на поставку МТР',
    documentContract: '№ПАО-87-2021 от 20.04.2021',
    documentStatus: 'Ознакомление',
    documentCustomer: 'ПАО "Транснефть"',
    documentPerformer: 'АО “Выксунский металлургический завод”',
    documentOrder: '0000',
  },
  {
    id: 5,
    date: '22.04.2021',
    documentType: 'Сведения о цепочке собственников',
    documentNumber: 'СВЦС-ДС-ПАО-88',
    documentContent: 'К договору на поставку МТР',
    documentContract: '№ПАО-87-2021 от 20.04.2021',
    documentStatus: 'Ознакомление',
    documentCustomer: 'ПАО "Транснефть"',
    documentPerformer: 'АО “Выксунский металлургический завод”',
    documentOrder: '0000',
  },
  {
    id: 6,
    date: '05.05.2021',
    documentType: 'Спецификация',
    documentNumber: 'СПЕЦ-89-2021',
    documentContent: 'На поставку МТР',
    documentContract: '№ПАО-91-2021 от 04.05.2021',
    documentStatus: 'Ознакомление',
    documentCustomer: 'ПАО "Транснефть"',
    documentPerformer: 'АО “Выксунский металлургический завод”',
    documentOrder: '0000',
  },
  {
    id: 7,
    date: '05.05.2021',
    documentType: 'Дополнительное соглашение',
    documentNumber: 'ДС-ПАО-92',
    documentContent: 'К договору на поставку МТР',
    documentContract: '№ПАО-91-2021 от 04.05.2021',
    documentStatus: 'Ознакомление',
    documentCustomer: 'ПАО "Транснефть"',
    documentPerformer: 'АО “Выксунский металлургический завод”',
    documentOrder: '0000',
  },
  {
    id: 8,
    date: '05.05.2021',
    documentType: 'Прейскурант',
    documentNumber: 'ДС-ПАО-88',
    documentContent: 'Цены на поставку к договору',
    documentContract: '№ПАО-91-2021 от 04.05.2021',
    documentStatus: 'Ознакомление',
    documentCustomer: 'ПАО "Транснефть"',
    documentPerformer: 'АО “Выксунский металлургический завод”',
    documentOrder: '0000',
  },
  {
    id: 9,
    date: '10.05.2021',
    documentType: 'График выполнения работ',
    documentNumber: 'ГВР-91-2021',
    documentContent: 'Для обьекта №2',
    documentContract: '№ПАО-91-2021 от 04.05.2021',
    documentStatus: 'Ознакомление',
    documentCustomer: 'ПАО "Транснефть"',
    documentPerformer: 'АО “Выксунский металлургический завод”',
    documentOrder: '0000',
  },
  {
    id: 10,
    date: '11.05.2021',
    documentType: 'Рабочая документация по КМД',
    documentNumber: 'ДС-ПАО-88',
    documentContent: 'К Договору на поставку МТР',
    documentContract: '№ПАО-87-2021 от 20.04.2021',
    documentStatus: 'Ознакомление',
    documentCustomer: 'ПАО "Транснефть"',
    documentPerformer: 'АО “Выксунский металлургический завод”',
    documentOrder: '0000',
  },
]

export const contracts = [
  {
    id: 1,
    data: '11.04.2021',
    name: 'Договор на поставку МТР №Д-21/1 от 10.04.2021',
    company: 'ПАО “Транснефть”',
    supplier: 'АО “Выксунский металлургический завод”',
    completed: false,
  },
  {
    id: 2,
    data: '1.06.2021',
    name: 'Договор на поставку Р №Д-1/15 от 1.06.2021',
    company: 'ПАО “Транснефть”',
    supplier: 'АО “Засункский металлургический завод”',
    completed: true,
  },
  {
    id: 3,
    data: '03.05.2021',
    name: 'Договор на поставку ИТД №Д-241/1 от 03.05.2021',
    company: 'ПАО “Транснефть”',
    supplier: 'АО “Вологодский металлургический завод”',
    completed: false,
  },
  {
    id: 4,
    data: '11.04.2021',
    name: 'Договор на поставку МТР №Д-21/1 от 10.04.2021',
    company: 'ПАО “Транснефть”',
    supplier: 'АО “Челябинский металлургический завод”',
    completed: true,
  },
]

export const contractLinks = [
  [
    { id: 1, title: 'Тип связи', name: 'Комплект' },
    { id: 2, title: 'Дата документа', name: '11.04.2021' },
    { id: 3, title: 'Тип документа', name: 'Спецификация' },
    { id: 4, title: '№ документа', name: 'ПАО-87-2021' },
    { id: 5, title: 'Объект', name: 'Наименование объекта' },
    { id: 6, title: 'Статус', name: 'Ознакомление' },
    { id: 7, linkFolder: 'https://', linkDownload: 'https://' },
  ],
  [
    { id: 1, title: 'Тип связи', name: 'Приложение' },
    { id: 2, title: 'Дата документа', name: '11.04.2021' },
    { id: 3, title: 'Тип документа', name: 'График выпо...' },
    { id: 4, title: '№ документа', name: 'ГВР-87-2021' },
    { id: 5, title: 'Объект', name: 'Наименование объекта' },
    { id: 6, title: 'Статус', name: 'Ознакомление' },
    { id: 7, linkFolder: 'https://', linkDownload: 'https://' },
  ],
  [
    { id: 1, title: 'Тип связи', name: 'Приложение' },
    { id: 2, title: 'Дата документа', name: '11.04.2021' },
    { id: 3, title: 'Тип документа', name: 'Сведения о ...' },
    { id: 4, title: '№ документа', name: 'ГВР-87-2021' },
    { id: 5, title: 'Объект', name: 'Наименование объекта' },
    { id: 6, title: 'Статус', name: 'Ознакомление' },
    { id: 7, linkFolder: 'https://', linkDownload: 'https://' },
  ],
  [
    { id: 1, title: 'Тип связи', name: 'Комплект' },
    { id: 2, title: 'Дата документа', name: '11.04.2021' },
    { id: 3, title: 'Тип документа', name: 'Спецификация' },
    { id: 4, title: '№ документа', name: 'ПАО-88-2021' },
    { id: 5, title: 'Объект', name: 'Наименование объекта' },
    { id: 6, title: 'Статус', name: 'Ознакомление' },
    { id: 7, linkFolder: 'https://', linkDownload: 'https://' },
  ],
  [
    { id: 1, title: 'Тип связи', name: 'Комплект' },
    { id: 2, title: 'Дата документа', name: '11.04.2021' },
    { id: 3, title: 'Тип документа', name: 'График выпо...' },
    { id: 4, title: '№ документа', name: 'ГВР-87-2021' },
    { id: 5, title: 'Объект', name: 'Наименование объекта' },
    { id: 6, title: 'Статус', name: 'Ознакомление' },
    { id: 7, linkFolder: 'https://', linkDownload: 'https://' },
  ],
  [
    { id: 1, title: 'Тип связи', name: 'Приложение' },
    { id: 2, title: 'Дата документа', name: '11.04.2021' },
    { id: 3, title: 'Тип документа', name: 'Прейскурант' },
    { id: 4, title: '№ документа', name: 'ПР-87-2021' },
    { id: 5, title: 'Объект', name: 'Наименование объекта' },
    { id: 6, title: 'Статус', name: 'Ознакомление' },
    { id: 7, linkFolder: 'https://', linkDownload: 'https://' },
  ],
]
export const tasksDo = [
  {
    id: 1,
    dataOpen: '20.04.2021',
    dataClose: '21.04.2021',
    typeTask: 'Ознакомление',
    document: 'Договор на поставку МТР №ПАО-87-2021 от 20.10.2021',
    company: 'ПАО “Транснефть”',
    administrator: 'Константинопольский К. К.',
    action: 'Выполнить',
    completed: false,
  },
]
export const tasksComplete = [
  {
    id: 2,
    dataOpen: '20.05.2021',
    dataClose: '21.05.2021',
    typeTask: 'Подписание',
    document: 'Договор на прополку от 20.10.2021',
    company: 'ПАО “Транснефть”',
    administrator: 'Невыговоришь А. А.',
    action: 'Перейти',
    completed: true,
  },
]
export const files = [
  {
    id: 1,
    dataLoad: '20.04.2021',
    name: 'Договор на поставку МТР №ПАО-87-2021 от 20.10.2021.pdf',
    loader: 'Константинопольский Константин Константинович',
  },
]
export const comments = [
  {
    id: 1,
    name: 'Нижегородская А. Я.',
    text: 'Посмотрите такую версию.',
    file: 'Договор на поставку МТР №ПАО-87-2021 от 20.10.2021.pdf',
    date: '30.12.2021, 14:50',
  },
  {
    id: 2,
    name: 'Константинопольский К. К.',
    text: 'Приложите актальную копию договора.',
    date: '30.12.2021, 14:50',
  },
  {
    id: 3,
    name: 'Константинопольский К. К.',
    text: 'Для подписания необходим документ “Сведения о цепочке собственников”.',
    date: '29.12.2021, 12:52',
  },
]
export const personResponse = [
  {
    id: 1,
    company: 'Средне-волжское акционерное общество трубопроводного транспорта нефтепродуктов',
    rule: 'Куратор',
    name: 'Гончаров Геннадий Михайлович',
  },
  {
    id: 2,
    company: 'ТН-Логистика',
    rule: 'Представитель',
    name: 'Варфоломеева Татьяна Константиновна',
  },
  {
    id: 3,
    company: 'ТН-Надзор',
    rule: 'Представитель',
    name: 'Плющенко Елена Владимировна',
  },
  {
    id: 4,
    company: 'АО “Выксунский металлургический завод”',
    rule: 'Представитель',
    name: 'Нижегордская Анастасия Ярославовна',
  },
  {
    id: 5,
    company: 'ПАО “Транснефть”',
    rule: 'Администратор договора',
    name: 'Константинопольский Константин Константинович',
  },
]
export const taskLinks = [
  [
    { id: 1, title: 'Тип связи', name: 'Комплект' },
    { id: 2, title: 'Дата документа', name: '11.04.2021' },
    { id: 3, title: 'Тип документа', name: 'Спецификация', link: `${SPECIFICATION_PATH}` },
    { id: 4, title: '№ документа', name: 'ПАО-87-2021' },
    { id: 5, title: 'Объект', name: 'Наименование объекта' },
    { id: 6, title: 'Статус', name: 'Ознакомление' },
    { id: 7, linkFolder: 'https://', linkDownload: 'https://' },
  ],
  [
    { id: 1, title: 'Тип связи', name: 'Приложение' },
    { id: 2, title: 'Дата документа', name: '21.10.2021' },
    {
      id: 3,
      title: 'Тип документа',
      name: 'Сведения о цепочке собственников',
      link: `${OWNER_PATH}`,
    },
    { id: 4, title: '№ документа', name: 'СЦС-87-2021' },
    { id: 5, title: 'Объект', name: 'Наименование объекта' },
    { id: 6, title: 'Статус', name: 'Ознакомление' },
    { id: 7, linkFolder: 'https://', linkDownload: 'https://' },
  ],
]
export const planMTR = [
  {
    id: 1,
    pid: 'PID 987456123',
    name: 'Задвижка шиберная',
    count: '2',
    dateBegin: '24.10.2021',
    dateShipment: '30.10.2021',
    list: [
      {
        id: 11,
        idParent: 1,
        number: 123456789,
        data: [
          '24.10.2021',
          '25.10.2021',
          '26.10.2021',
          '27.10.2021',
          '28.10.2021',
          '29.10.2021',
          '30.10.2021',
        ],
      },
      {
        id: 12,
        idParent: 1,
        number: 123455667,
        data: [
          '24.10.2021',
          '25.10.2021',
          '26.10.2021',
          '27.10.2021',
          '28.10.2021',
          '29.10.2021',
          '30.10.2021',
        ],
      },
    ],
  },
  {
    id: 2,
    pid: 'PID 997456298',
    name: 'Задвижка шиберная',
    count: '12',
    dateBegin: '27.10.2021',
    dateShipment: '01.11.2021',
    list: [
      {
        id: 21,
        idParent: 2,
        number: 123456789,
        data: [
          '24.10.2021',
          '25.10.2021',
          '26.10.2021',
          '27.10.2021',
          '28.10.2021',
          '29.10.2021',
          '30.10.2021',
        ],
      },
      {
        id: 22,
        idParent: 2,
        number: 123455667,
        data: [
          '24.10.2021',
          '25.10.2021',
          '26.10.2021',
          '27.10.2021',
          '28.10.2021',
          '29.10.2021',
          '30.10.2021',
        ],
      },
      {
        id: 23,
        idParent: 2,
        number: 123455667,
        data: [
          '24.10.2021',
          '25.10.2021',
          '26.10.2021',
          '27.10.2021',
          '28.10.2021',
          '29.10.2021',
          '30.10.2021',
        ],
      },
      {
        id: 24,
        idParent: 2,
        number: 123455667,
        data: [
          '24.10.2021',
          '25.10.2021',
          '26.10.2021',
          '27.10.2021',
          '28.10.2021',
          '29.10.2021',
          '30.10.2021',
        ],
      },
      {
        id: 25,
        idParent: 2,
        number: 123455667,
        data: [
          '24.10.2021',
          '25.10.2021',
          '26.10.2021',
          '27.10.2021',
          '28.10.2021',
          '29.10.2021',
          '30.10.2021',
        ],
      },
      {
        id: 26,
        idParent: 2,
        number: 123455667,
        data: [
          '24.10.2021',
          '25.10.2021',
          '26.10.2021',
          '27.10.2021',
          '28.10.2021',
          '29.10.2021',
          '30.10.2021',
        ],
      },
      {
        id: 27,
        idParent: 2,
        number: 123455667,
        data: [
          '24.10.2021',
          '25.10.2021',
          '26.10.2021',
          '27.10.2021',
          '28.10.2021',
          '29.10.2021',
          '30.10.2021',
        ],
      },
      {
        id: 28,
        idParent: 2,
        number: 123455667,
        data: [
          '24.10.2021',
          '25.10.2021',
          '26.10.2021',
          '27.10.2021',
          '28.10.2021',
          '29.10.2021',
          '30.10.2021',
        ],
      },
      {
        id: 29,
        idParent: 2,
        number: 123455667,
        data: [
          '24.10.2021',
          '25.10.2021',
          '26.10.2021',
          '27.10.2021',
          '28.10.2021',
          '29.10.2021',
          '30.10.2021',
        ],
      },
      {
        id: 30,
        idParent: 2,
        number: 123455667,
        data: [
          '24.10.2021',
          '25.10.2021',
          '26.10.2021',
          '27.10.2021',
          '28.10.2021',
          '29.10.2021',
          '30.10.2021',
        ],
      },
      {
        id: 31,
        idParent: 2,
        number: 123455667,
        data: [
          '24.10.2021',
          '25.10.2021',
          '26.10.2021',
          '27.10.2021',
          '28.10.2021',
          '29.10.2021',
          '30.10.2021',
        ],
      },
      {
        id: 32,
        idParent: 2,
        number: 123455667,
        data: [
          '24.10.2021',
          '25.10.2021',
          '26.10.2021',
          '27.10.2021',
          '28.10.2021',
          '29.10.2021',
          '30.10.2021',
        ],
      },
    ],
  },
]
