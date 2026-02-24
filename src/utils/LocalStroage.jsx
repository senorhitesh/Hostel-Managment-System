const hostelBoys = [
  {
    id: 1,
    name: "Hitesh Suthar",
    email: "h@gmail.com",
    password: "123",
    tasks: [
      {
        title: "Room Cleaning",
        date: "2026-02-18",
        description: "Clean hostel room properly and arrange all personal belongings.",
        tag: "maintenance",
        priority: "high",
        active: true,
        completed: false,
        failed: false,
        pending: true,
      },
      {
        title: "Mess Duty",
        date: "2026-02-20",
        description: "Help in mess management and ensure food serving discipline.",
        tag: "mess",
        priority: "medium",
        active: false,
        completed: true,
        failed: false,
        pending: false,
      },
    ],
  },
  {
    id: 2,
    name: "Pehlwan",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        id:1,
        title: "Sports Event Setup",
        date: "2026-02-19",
        description: "Arrange ground equipment and prepare field for sports event.",
        tag: "sports",
        priority: "high",
        active: true,
        completed: false,
        failed: false,
        pending: true,
      },
      
    ],
  },
  {
    id: 3,
    name: "Naresh",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "Attendance Register",
        date: "2026-02-18",
        description: "Maintain attendance records and update hostel entry register daily.",
        tag: "admin",
        priority: "medium",
        active: false,
        completed: true,
        failed: false,
        pending: false,
      },
      {
        title: "Attendance Register",
        date: "2026-02-18",
        description: "Maintain attendance records and update hostel entry register daily.",
        tag: "admin",
        priority: "medium",
        active: false,
        completed: true,
        failed: false,
        pending: false,
      },
    ],
  },
  {
    id: 4,
    name: "Uttam",
    email: "uttam@example.com",
    password: "123",
    tasks: [
      {
        title: "Electricity Check",
        date: "2026-02-21",
        description: "Inspect hostel electrical switches and report any damaged wiring.",
        tag: "maintenance",
        priority: "high",
        active: true,
        completed: false,
        failed: false,
        pending: true,
      },
    ],
  },
  {
    id: 5,
    name: "Pratham",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        title: "Notice Board Update",
        date: "2026-02-18",
        description: "Update notice board with latest announcements and hostel information.",
        tag: "communication",
        priority: "low",
        active: false,
        completed: false,
        failed: true,
        pending: false,
      },
    ],
  },
];

const commityMembers = [
  {
    id: 1,
    name: "Shatilal",
    email: "shatilal@admin.com",
    password: "123",
  },
  {
    id: 2,
    name: "Dalji",
    email: "dalji@admin.com",
    password: "123",
  },
  {
    id: 3,
    name: "Pehlwan",
    email: "pehlwan@admin.com",
    password: "123",
  },
];

export const setlocalStroge = ()=>{
  localStorage.setItem('boyss',JSON.stringify(hostelBoys))
  localStorage.setItem('members', JSON.stringify(commityMembers))
}

export const getlocalStroge = ()=>{
 const Boyss = JSON.parse(localStorage.getItem('boyss'))
 const members = JSON.parse(localStorage.getItem('members'))

 return  {Boyss,members}
}