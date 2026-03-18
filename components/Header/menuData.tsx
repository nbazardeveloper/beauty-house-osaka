export interface MenuItem {
  id: number;
  title: string;
  path: string;
  newTab: boolean;
  submenu?: MenuItem[];
}

const menuData: MenuItem[] = [
  {
    id: 1,
    title: "Home",
    path: "/#home",
    newTab: false,
  },
  {
    id: 2,
    title: "Services",
    path: "/#services",   // секция Features имеет id="services"
    newTab: false,
    submenu: [
      {
        id: 21,
        title: "Signature Gel Manicure (Russian)",
        path: "/#services",
        newTab: false,
      },
      {
        id: 22,
        title: "Nail Extensions / Full Set",
        path: "/#services",
        newTab: false,
      },
      {
        id: 23,
        title: "Pedicure",
        path: "/#services",
        newTab: false,
      },
      {
        id: 24,
        title: "SPA Procedures",
        path: "/#services",
        newTab: false,
      },
    ],
  },
  {
    id: 3,
    title: "Gallery",
    path: "/gallery/",
    newTab: false,
  },
  {
    id: 4,
    title: "Location",
    path: "/#location",
    newTab: false,
  },
  {
    id: 5,
    title: "Gift Cards",
    path: "https://squareup.com/gift/MLDWM740F73HE/order",
    newTab: true,   // внешняя ссылка — открываем в новой вкладке
  },
  {
    id: 6,
    title: "Courses",
    path: "/courses",   // отдельная страница app/courses
    newTab: false,
  },
  {
    id: 7,
    title: "Reviews",
    path: "/#testimonials",   // секция Testimonials должна иметь id="testimonials"
    newTab: false,
  },
  {
    id: 8,
    title: "About us",
    path: "/about",   // отдельная страница app/about
    newTab: false,
  },
];

export default menuData;
