new Vue({
  el: "#app",
  data: {
    isScrolled: false,
    mobileMenuOpen: false,
    services: [
      {
        title: "รับซื้อเหล็ก",
        description:
          "รับซื้อเหล็กทุกประเภท ไม่ว่าจะเป็นเหล็กรูปพรรณ เหล็กโครงสร้าง หรือเศษเหล็ก ให้ราคาสูง ตามราคาตลาดสากล",
        icon: "ph-duotone ph-hand-coins",
        items: [
          "รับประเมินราคาฟรี",
          "มีรถรับซื้อถึงหน้างาน",
          "ชั่งน้ำหนักมาตรฐาน",
        ],
      },
      {
        title: "จำหน่ายเหล็ก",
        description:
          "จำหน่ายเหล็กคุณภาพดี ได้มาตรฐาน มอก. หลากหลายชนิด ตอบโจทย์ทุกงานก่อสร้างและอุตสาหกรรม",
        icon: "ph-duotone ph-factory",
        items: [
          "เหล็กเส้น/เหล็กข้ออ้อย",
          "เหล็กกล่อง/ท่อกลม",
          "เหล็กแผ่น/เหล็กฉาก",
        ],
      },
      {
        title: "บริการขนส่ง",
        description:
          "บริการจัดส่งสินค้าตรงเวลา ด้วยทีมงานมืออาชีพและรถขนส่งที่ได้มาตรฐาน ครอบคลุมพื้นที่ให้บริการ",
        icon: "ph-duotone ph-truck",
        items: ["ส่งตรงเวลา", "ติดตามสถานะได้", "ดูแลสินค้าอย่างดี"],
      },
    ],
    teamMembers: [
      {
        name: "คุณสมชาย มั่นคง",
        role: "ประธานกรรมการบริหาร (CEO)",
        image:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        bio: "ประสบการณ์ในวงการค้าเหล็กกว่า 20 ปี มุ่งมั่นพัฒนาองค์กรสู่ความเป็นผู้นำระดับประเทศ",
      },
      {
        name: "คุณวิภาดา สุขใจ",
        role: "ผู้อำนวยการฝ่ายการตลาด",
        image:
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        bio: "ผู้เชี่ยวชาญด้านกลยุทธ์การตลาดและการดูแลลูกค้าสัมพันธ์",
      },
      {
        name: "คุณธนพล กล้าหาญ",
        role: "ผู้จัดการฝ่ายปฏิบัติการ",
        image:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        bio: "ควบคุมดูแลกระบวนการรับซื้อและจัดส่งให้มีประสิทธิภาพสูงสุด",
      },
    ],
    contact: {
      phone: "02-123-4567",
      email: "sales@steellead.com",
      address: "123 ถนนบางนา-ตราด แขวงบางนา เขตบางนา กรุงเทพฯ 10260",
    },
    form: {
      name: "",
      phone: "",
      subject: "ต้องการซื้อเหล็ก",
      message: "",
    },
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50;
    },
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    },
    scrollToSection(id) {
      this.mobileMenuOpen = false;
      const element = document.getElementById(id);
      if (element) {
        const offset = 80; // Navbar height
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    },
    submitForm() {
      // In a real app, this would send an API request
      const msg = `ขอบคุณ คุณ ${this.form.name}\nเราได้รับข้อมูล "${this.form.subject}" เรียบร้อยแล้ว\nเจ้าหน้าที่จะติดต่อกลับที่เบอร์ ${this.form.phone} โดยเร็วที่สุด`;
      alert(msg);

      // Reset form
      this.form = {
        name: "",
        phone: "",
        subject: "ต้องการซื้อเหล็ก",
        message: "",
      };
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
});
