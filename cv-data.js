// Nội dung CV — sửa file này để cập nhật trang, không cần đụng index.html.
// Mỗi chuỗi song ngữ có dạng { en: "...", vi: "..." }.
window.CV = {
  name: "Son Nguyen",
  nameVi: "Nguyễn Đình Công Sơn",
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
    { value: "AWS", label: { en: "Certified Solutions Architect – Associate", vi: "Chứng chỉ Solutions Architect – Associate" } }
  ],

  // Thế mạnh cốt lõi — 4 thẻ đầu trang chính.
  strengths: [
    { title: { en: "Backend & microservices", vi: "Backend & microservices" },
      text: { en: "Designing, building and running Java services with Spring Boot and Micronaut.", vi: "Thiết kế, xây dựng và vận hành dịch vụ Java với Spring Boot và Micronaut." },
      keys: ["Java", "Spring Boot", "Micronaut"] },
    { title: { en: "Cloud & Kubernetes", vi: "Cloud & Kubernetes" },
      text: { en: "AWS Certified Solutions Architect – Associate; runs production workloads on Kubernetes with CI/CD.", vi: "Chứng chỉ AWS Solutions Architect – Associate; vận hành production trên Kubernetes với CI/CD." },
      keys: ["AWS", "Kubernetes", "Docker"] },
    { title: { en: "Data performance", vi: "Hiệu năng dữ liệu" },
      text: { en: "Database performance, scalability and stability across relational and NoSQL stores.", vi: "Hiệu năng, khả năng mở rộng và độ ổn định trên cả CSDL quan hệ và NoSQL." },
      keys: ["PostgreSQL", "DynamoDB", "Redis"] },
    { title: { en: "Technical leadership", vi: "Dẫn dắt kỹ thuật" },
      text: { en: "Leads the team's engineering work and steps into front-end when the product needs it.", vi: "Dẫn dắt công việc kỹ thuật của nhóm, tham gia front-end khi sản phẩm cần." },
      keys: ["Team lead", "React"] }
  ],

  // Dự án tiêu biểu — hiển thị thành phần case study ngay dưới phần giới thiệu.
  project: {
    name: { en: "Mobility-as-a-Service (MaaS) platform", vi: "Nền tảng Mobility-as-a-Service (MaaS)" },
    about: {
      en: "One platform bringing on-demand shuttles, bus reservations and ride-sharing together. Riders plan trips, book, pay and track vehicles in real time; operators manage fleets and schedules from an admin portal. I have worked on it since 2020 — across backend services, data, infrastructure and the team itself.",
      vi: "Một nền tảng gom xe đưa đón theo yêu cầu, đặt vé xe buýt và đi chung xe. Người dùng lên lộ trình, đặt chỗ, thanh toán và theo dõi xe theo thời gian thực; nhà vận hành quản lý đội xe và lịch chạy qua trang quản trị. Tôi làm trên nền tảng này từ 2020 — từ dịch vụ backend, dữ liệu, hạ tầng đến dẫn dắt nhóm."
    },
    spec: [
      { k: { en: "Company", vi: "Công ty" }, v: { en: "WILLERS", vi: "WILLERS" } },
      { k: { en: "Period", vi: "Thời gian" }, v: { en: "Oct 2020 – Present", vi: "10/2020 – nay" } },
      { k: { en: "My role", vi: "Vai trò" }, v: { en: "Senior backend engineer · team lead", vi: "Kỹ sư backend cấp cao · trưởng nhóm" } },
      { k: { en: "Domain", vi: "Lĩnh vực" }, v: { en: "On-demand shuttle, bus reservation, ride-sharing", vi: "Xe đưa đón theo yêu cầu, đặt vé xe buýt, đi chung xe" } },
      { k: { en: "Users", vi: "Người dùng" }, v: { en: "Riders (app) · Operators (admin portal)", vi: "Hành khách (app) · Nhà vận hành (trang quản trị)" } },
      { k: { en: "Architecture", vi: "Kiến trúc" }, v: { en: "Java microservices on Kubernetes, AWS", vi: "Microservice Java trên Kubernetes, AWS" } }
    ],
    // Các mảng đóng góp chính.
    areas: [
      {
        title: { en: "Backend services", vi: "Dịch vụ backend" },
        points: {
          en: [
            "Built and maintained microservices for booking, payment, notifications and real-time vehicle tracking, in Java with Spring Boot and Micronaut.",
            "Integrated route planning and third-party APIs into the trip flow.",
            "Wrote scheduled and bulk jobs with Spring Batch."
          ],
          vi: [
            "Xây dựng và duy trì các microservice đặt chỗ, thanh toán, thông báo và theo dõi xe thời gian thực bằng Java, Spring Boot và Micronaut.",
            "Tích hợp lập lộ trình và các API bên thứ ba vào luồng chuyến đi.",
            "Viết các job định kỳ và xử lý hàng loạt bằng Spring Batch."
          ]
        }
      },
      {
        title: { en: "Data & messaging", vi: "Dữ liệu & messaging" },
        points: {
          en: [
            "Database performance and scalability work with PostgreSQL and DynamoDB.",
            "Caching and asynchronous messaging between services with Redis and RabbitMQ."
          ],
          vi: [
            "Tối ưu hiệu năng và khả năng mở rộng cơ sở dữ liệu với PostgreSQL và DynamoDB.",
            "Cache và messaging bất đồng bộ giữa các dịch vụ với Redis và RabbitMQ."
          ]
        }
      },
      {
        title: { en: "Infrastructure & DevOps", vi: "Hạ tầng & DevOps" },
        points: {
          en: [
            "Runs the team's services on Kubernetes in AWS, packaged with Docker.",
            "Owns CI/CD and day-to-day production operations, with a focus on scalability and stability."
          ],
          vi: [
            "Vận hành các dịch vụ của nhóm trên Kubernetes tại AWS, đóng gói bằng Docker.",
            "Phụ trách CI/CD và vận hành production hằng ngày, chú trọng khả năng mở rộng và độ ổn định."
          ]
        }
      },
      {
        title: { en: "Leadership & product", vi: "Dẫn dắt & sản phẩm" },
        points: {
          en: [
            "Leads the team's engineering work.",
            "Contributes front-end work in React when the product needs it."
          ],
          vi: [
            "Dẫn dắt công việc kỹ thuật của nhóm.",
            "Tham gia phần front-end bằng React khi sản phẩm cần."
          ]
        }
      }
    ],
    stack: [
      { group: { en: "Services", vi: "Dịch vụ" }, items: ["Java", "Spring Boot", "Micronaut", "Spring Batch"] },
      { group: { en: "Data", vi: "Dữ liệu" }, items: ["PostgreSQL", "DynamoDB", "Redis", "RabbitMQ"] },
      { group: { en: "Platform", vi: "Nền tảng" }, items: ["AWS", "Kubernetes", "Docker", "CI/CD"] },
      { group: { en: "Front-end", vi: "Front-end" }, items: ["React"] }
    ]
  },

  experience: [
    {
      role: { en: "Senior Software Engineer", vi: "Kỹ sư phần mềm cấp cao" },
      company: "WILLERS Pte Ltd",
      period: { en: "May 2021 – Present", vi: "05/2021 – nay" },
      place: { en: "Cau Giay, Hanoi · Full-time", vi: "Cầu Giấy, Hà Nội · Toàn thời gian" },
      points: {
        en: [
          "Backend development with Java and Spring Boot on the Mobility-as-a-Service platform (see above).",
          "Runs AWS and Kubernetes infrastructure and DevOps for the team's services.",
          "Team leadership; also contributes to front-end work."
        ],
        vi: [
          "Phát triển backend bằng Java, Spring Boot cho nền tảng Mobility-as-a-Service (xem phía trên).",
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
  skills: [
    { group: { en: "Backend", vi: "Backend" }, items: ["Java", "Spring Boot", "Micronaut", "Spring Batch", "Microservices", "RabbitMQ"] },
    { group: { en: "Data", vi: "Dữ liệu" }, items: ["PostgreSQL", "MySQL", "Oracle", "Redis", "DynamoDB"] },
    { group: { en: "Cloud & DevOps", vi: "Cloud & DevOps" }, items: ["AWS", "Kubernetes", "Docker", "CI/CD"] },
    { group: { en: "Front-end", vi: "Front-end" }, items: ["React", "Vue.js"] },
    { group: { en: "AI tooling", vi: "Công cụ AI" }, items: ["Claude Code", "Claude Skills", "Subagents"] }
  ],
  certifications: [
    { name: "AWS Certified Solutions Architect – Associate", issuer: "Amazon Web Services", date: { en: "2023", vi: "2023" } },
    { name: "Claude Academy: Claude 101", issuer: "Anthropic", date: { en: "Nov 2026", vi: "11/2026" } }
  ],
  education: [
    { school: { en: "VNU University of Engineering and Technology", vi: "Trường Đại học Công nghệ – ĐHQG Hà Nội" },
      degree: { en: "Bachelor of Science, Computer Science", vi: "Cử nhân Khoa học máy tính" },
      period: "2015 – 2019" }
  ]
};
