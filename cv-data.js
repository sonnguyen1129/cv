// Nội dung CV — sửa file này để cập nhật trang, không cần đụng index.html.
// Mỗi chuỗi song ngữ có dạng { en: "...", vi: "..." }.
window.CV = {
  name: "Son Nguyen",
  nameVi: "Nguyễn Công Sơn",
  title: { en: "Senior Backend Engineer · Java & Cloud Infrastructure", vi: "Kỹ sư Backend cấp cao · Java & Hạ tầng Cloud" },
  location: { en: "Hanoi, Vietnam", vi: "Hà Nội, Việt Nam" },
  links: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/son-nguyen-0720b9232/", text: "linkedin.com/in/son-nguyen-0720b9232" },
    { label: "GitHub", url: "https://github.com/sonnguyen1129", text: "github.com/sonnguyen1129" }
    // Thêm email khi muốn công khai, ví dụ:
    // { label: "Email", url: "mailto:you@example.com", text: "you@example.com" }
  ],
  summary: {
    en: "Senior backend engineer specialising in Java, microservices and scalable system design. I build and tune backend services, run AWS and Kubernetes infrastructure, and work on keeping production reliable. I have contributed to the development and maintenance of 20+ backend services, with a focus on database performance, scalability and operational stability.",
    vi: "Kỹ sư backend cấp cao, chuyên về Java, microservices và thiết kế hệ thống có khả năng mở rộng. Tôi xây dựng và tối ưu các dịch vụ backend, vận hành hạ tầng AWS và Kubernetes, và chú trọng độ ổn định của môi trường production. Đã tham gia phát triển và duy trì hơn 20 dịch vụ backend, tập trung vào hiệu năng cơ sở dữ liệu, khả năng mở rộng và vận hành ổn định."
  },
  facts: [
    { value: "7+", label: { en: "years building backends", vi: "năm làm backend" } },
    { value: "20+", label: { en: "backend services delivered", vi: "dịch vụ backend đã tham gia" } },
    { value: "AWS", label: { en: "Certified Solutions Architect", vi: "Chứng chỉ Solutions Architect" } }
  ],
  experience: [
    {
      role: { en: "Senior Software Engineer", vi: "Kỹ sư phần mềm cấp cao" },
      company: "WILLERS Pte Ltd",
      period: { en: "May 2021 – Present", vi: "05/2021 – nay" },
      place: { en: "Cau Giay, Hanoi · Full-time", vi: "Cầu Giấy, Hà Nội · Toàn thời gian" },
      points: {
        en: [
          "Backend development with Java and Spring Boot on a Mobility-as-a-Service platform.",
          "Runs AWS and Kubernetes infrastructure and DevOps for the team's services.",
          "Team leadership; also contributes to front-end work."
        ],
        vi: [
          "Phát triển backend bằng Java, Spring Boot cho nền tảng Mobility-as-a-Service.",
          "Vận hành hạ tầng AWS, Kubernetes và DevOps cho các dịch vụ của nhóm.",
          "Dẫn dắt nhóm; tham gia cả phần front-end."
        ]
      },
      tags: ["Java", "Spring Boot", "PostgreSQL", "DynamoDB", "AWS", "Kubernetes", "DevOps"]
    },
    {
      role: { en: "Back End Developer", vi: "Lập trình viên Back End" },
      company: "VTI",
      period: { en: "Oct 2020 – Apr 2021", vi: "10/2020 – 04/2021" },
      place: { en: "Me Tri, Hanoi · Full-time", vi: "Mễ Trì, Hà Nội · Toàn thời gian" },
      points: { en: ["Java backend engineering and database work."], vi: ["Phát triển backend Java và làm việc với cơ sở dữ liệu."] },
      tags: ["Java", "Databases"]
    },
    {
      role: { en: "Software Engineer", vi: "Kỹ sư phần mềm" },
      company: "Viettel Solutions Corporation",
      period: { en: "Jun 2020 – Oct 2020", vi: "06/2020 – 10/2020" },
      place: { en: "Hanoi · Full-time", vi: "Hà Nội · Toàn thời gian" },
      points: { en: ["Java enterprise applications on Oracle and MySQL, deployed on GlassFish."], vi: ["Ứng dụng doanh nghiệp Java trên Oracle, MySQL, triển khai trên GlassFish."] },
      tags: ["Java", "Oracle", "MySQL", "GlassFish"]
    },
    {
      role: { en: "Software Engineer", vi: "Kỹ sư phần mềm" },
      company: "Newwave Solutions",
      period: { en: "Jun 2019 – Apr 2020", vi: "06/2019 – 04/2020" },
      place: { en: "Me Tri, Hanoi · Full-time", vi: "Mễ Trì, Hà Nội · Toàn thời gian" },
      points: { en: ["Web applications with a Java backend and Vue.js front-end."], vi: ["Ứng dụng web với backend Java và front-end Vue.js."] },
      tags: ["Java", "Vue.js"]
    }
  ],
  project: {
    name: { en: "Mobility-as-a-Service (MaaS) platform", vi: "Nền tảng Mobility-as-a-Service (MaaS)" },
    period: { en: "Oct 2020 – Present · WILLERS", vi: "10/2020 – nay · WILLERS" },
    about: {
      en: "One platform bringing on-demand shuttles, bus reservations and ride-sharing together. Riders plan trips, book, pay and track vehicles in real time; operators manage fleets and schedules from an admin portal.",
      vi: "Một nền tảng gom xe đưa đón theo yêu cầu, đặt vé xe buýt và đi chung xe. Người dùng lên lộ trình, đặt chỗ, thanh toán và theo dõi xe theo thời gian thực; nhà vận hành quản lý đội xe và lịch chạy qua trang quản trị."
    },
    points: {
      en: [
        "Built and maintained backend microservices for booking, payment, notifications and real-time vehicle tracking.",
        "Integrated route planning and third-party APIs."
      ],
      vi: [
        "Xây dựng và duy trì các microservice backend cho đặt chỗ, thanh toán, thông báo và theo dõi xe thời gian thực.",
        "Tích hợp lập lộ trình và các API bên thứ ba."
      ]
    },
    tags: ["Java", "Micronaut", "Spring Boot", "Spring Batch", "PostgreSQL", "Redis", "RabbitMQ", "React", "Docker", "Kubernetes", "AWS"]
  },
  skills: [
    { group: { en: "Backend", vi: "Backend" }, items: ["Java", "Spring Boot", "Micronaut", "Spring Batch", "Microservices", "RabbitMQ"] },
    { group: { en: "Data", vi: "Dữ liệu" }, items: ["PostgreSQL", "MySQL", "Oracle", "Redis", "DynamoDB"] },
    { group: { en: "Cloud & DevOps", vi: "Cloud & DevOps" }, items: ["AWS", "Kubernetes", "Docker", "CI/CD"] },
    { group: { en: "Front-end", vi: "Front-end" }, items: ["React", "Vue.js"] },
    { group: { en: "AI tooling", vi: "Công cụ AI" }, items: ["Claude Code", "Claude Skills", "Subagents"] }
  ],
  certifications: [
    { name: "AWS Certified Solutions Architect", issuer: "Amazon Web Services", date: { en: "2026", vi: "2026" } },
    { name: "Claude Academy: Claude 101", issuer: "Anthropic", date: { en: "Nov 2026", vi: "11/2026" } }
  ],
  education: [
    { school: { en: "VNU University of Engineering and Technology", vi: "Trường Đại học Công nghệ – ĐHQG Hà Nội" },
      degree: { en: "Bachelor of Science, Computer Software Engineering", vi: "Cử nhân Kỹ thuật phần mềm" },
      period: "2015 – 2019" }
  ],
  repos: [
    { name: "booking-web-app", desc: { en: "Booking web app — Vue + Spring", vi: "Ứng dụng đặt chỗ — Vue + Spring" }, lang: "Java" },
    { name: "blog-site", desc: { en: "Blog platform", vi: "Nền tảng blog" }, lang: "Java" },
    { name: "login-spring-vue", desc: { en: "Authentication with Spring + Vue", vi: "Xác thực với Spring + Vue" }, lang: "Java" },
    { name: "gradle-base-spring-security", desc: { en: "Spring Security starter on Gradle", vi: "Khung Spring Security dùng Gradle" }, lang: "Java" },
    { name: "speech_to_number", desc: { en: "Speech to numbers", vi: "Giọng nói thành con số" }, lang: "Python" }
  ]
};
